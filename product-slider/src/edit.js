import { __ } from "@wordpress/i18n";
import metadata from "./block.json";
import ServerSideRender from "@wordpress/server-side-render";
import {
	PanelBody,
	PanelRow,
	Button,
	Flex,
	FlexBlock,
	FlexItem,
	ToggleControl,
	RadioControl,
} from "@wordpress/components";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from "@wordpress/block-editor";

import "./editor.css";

export default function Edit(props) {
	const {
		attributes: { items, thumbnailsPosition, hasBorder },
		setAttributes,
	} = props;
	const ALLOWED_MEDIA_TYPES = ["image"];

	const updateItems = (index, media) => {
		setAttributes({
			items: items.map((item, i) =>
				i === index ? { ...item, image: media.url, alt: media.alt } : item
			),
		});
	};

	const radioOptions = [
		{ label: 'Left', value: 'left' },
		{ label: 'Bottom', value: 'bottom' },
	];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__("Settings")}>
					<RadioControl
						label={__('Thumbnails Position')}
						selected={thumbnailsPosition}
						options={radioOptions}
						onChange={(thumbnailsPosition) => setAttributes({ thumbnailsPosition })}
					/>
					<ToggleControl
						label={__("Show Border")}
						checked={hasBorder}
						onChange={(hasBorder) => setAttributes({ hasBorder })}
					/>
					{items.map((item, index) => (
						<PanelRow key={index}>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => updateItems(index, media)}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									value={item.image}
									render={({ open }) =>
										!!item.image ? (
											<Flex justify="flex-start" align="center">
												<FlexBlock>
													{!!item.image && <img src={item.image} />}
												</FlexBlock>
												<FlexItem>
													<Button
														variant="secondary"
														icon="edit"
														onClick={open}
													/>
												</FlexItem>
												<FlexItem>
													<Button
														variant="secondary"
														icon="trash"
														onClick={() =>
															setAttributes({
																items: items.filter((_, i) => i !== index),
															})
														}
													/>
												</FlexItem>
											</Flex>
										) : (
											<Button variant="primary" onClick={open}>
												{__("Upload Image")}
											</Button>
										)
									}
								/>
							</MediaUploadCheck>
						</PanelRow>
					))}
					<PanelRow>
						<Button
							variant="secondary"
							onClick={() =>
								setAttributes({ items: [...items, { image: 0, alt: "" }] })
							}
						>
							{__("Add Image")}
						</Button>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				attributes={props.attributes}
				httpMethod="POST"
				urlQueryArgs={{
					edit: 1,
				}}
			/>
		</div>
	);
}

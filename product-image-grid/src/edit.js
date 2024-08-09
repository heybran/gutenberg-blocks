import { __ } from '@wordpress/i18n';
import metadata from './block.json';
import ServerSideRender from '@wordpress/server-side-render';
import { PanelBody, PanelRow, Button, Flex, FlexBlock, FlexItem, __experimentalDivider as Divider } from '@wordpress/components';
import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';

import './editor.css';

export default function Edit(props) {
	const { attributes: { items }, setAttributes } = props;
	const ALLOWED_MEDIA_TYPES = ['image'];
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('Settings')}>
					{items.map((item, index) => (
						<PanelRow key={index}>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => {
										setAttributes({ items: items.map((item, i) => (i === index ? { image: media.url } : item)) })
									}}
									allowedTypes={ALLOWED_MEDIA_TYPES}
									value={item.image}
									render={({ open }) => (
										!!item.image ? (
											<Flex justify="flex-start" align='center'>
												<FlexBlock>
													{!!item.image && <img src={item.image} />}
												</FlexBlock>
												<FlexItem>
													<Button variant="secondary" icon="edit" onClick={open} />
												</FlexItem>
												<FlexItem>
													<Button variant="secondary" icon="trash" onClick={() => setAttributes({ items: items.filter((_, i) => i !== index) })} />
												</FlexItem>
											</Flex>
										) : (
											<Button variant='primary' onClick={open}>{__('Upload Image')}</Button>
										)
									)}
								/>
							</MediaUploadCheck>
						</PanelRow>
					))}
					{!!items.length && <Divider />}
					<PanelRow>
						<Button variant="secondary" onClick={() => setAttributes({ items: [...items, { mediaId: 0 }] })}>
							{__('Add Image')}
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

const { registerBlockVariation } = wp.blocks;
const { __ } = wp.i18n;

/**
 * While registering the variation isn't the best place to log existing attributes,
 * you can access them within the WordPress editor using the following steps:
 * - 1. Open the Browser Developer Console: 
 * In your browser, right-click anywhere on the editor page and select "Inspect" or "Inspect Element".
 * This will open the developer tools. Locate the "Console" tab.
 * - 2. Access the Block Editor Data Store: 
 * Use the following code snippet in the console:
 * console.log(wp.data.select('core/block-editor').getBlocks());
 * This will print out all the blocks in the editor,
 * and you can cherry-pick individual block to check its attributes.
 */

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/core-blocks/#group
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/group/variations.js
 */
registerBlockVariation('core/group', {
	name: 'product-hero-grid',
	title: __('Product Hero Grid'),
	attributes: {
		// tagName: 'div', // Default to `div`
		layout: {
			type: 'grid',
			columnCount: 2,
		},
		// Use this custom class to override the default layout.
		className: 'product-hero-grid',
	},
	// TODO: how to remove transform option at the toolbar level and sidebar level?
	// TODO: how to remove the align option, as we're using custom css class?
	// TODO: how to hide the Layout option at the sidebar?
});
<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$_items = $attributes['items'] ?? [];
if ( empty( $_items ) || ! is_array( $_items ) ) {
	return;
}
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="product-slider">
		<div class="product-slider__main-image-wrap">
			<img class="product-slider__main-image" src="<?php echo esc_attr( $_items[0]['image'] ); ?>" alt="<?php echo esc_attr( $_items[0]['alt'] ); ?>" />
		</div>
		<div class="product-slider__thumbnails">
			<?php $_image_index = 1; ?>
			<?php foreach ( $_items as $item ) : ?>
				<img
					class="product-slider__thumbnail <?php echo $_image_index === 1 ? 'product-slider__thumbnail--active' : ''; ?>"
					src="<?php echo esc_attr( $item['image'] ); ?>"
					alt="<?php echo esc_attr( $item['alt'] ); ?>" 
				/>
				<?php $_image_index++; ?>
			<?php endforeach; ?>
		</div>
	</div>
</div>

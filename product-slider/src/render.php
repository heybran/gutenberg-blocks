<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$_items = $attributes['items'] ?? [];
$_thumbnails_position = $attributes['thumbnailsPosition'] ?? 'left';
$_show_border = $attributes['hasBorder'] ?? true;
$_placement_modifier_class = $_thumbnails_position === 'bottom' ? 'product-slider--thumbnails-at-bottom' : '';
$_border_modifier_class = $_show_border ? '' : 'product-slider--no-border';
$_modifier_class = $_placement_modifier_class . ' ' . $_border_modifier_class;
if ( empty( $_items ) || ! is_array( $_items ) ) {
	return;
}
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="product-slider <?php echo esc_attr( $_modifier_class ); ?>">
		<div class="product-slider__main-image-wrap">
			<img class="product-slider__main-image" src="<?php echo esc_attr( $_items[0]['image'] ); ?>" alt="<?php echo esc_attr( $_items[0]['alt'] ); ?>" />
		</div>
		<div class="product-slider__thumbnails">
			<?php $_image_index = 1; ?>
			<?php foreach ( $_items as $item ) : ?>
				<button
					type="button"
					class="product-slider__thumbnail <?php echo $_image_index === 1 ? 'product-slider__thumbnail--active' : ''; ?>"
					aria-label="Image 1 of <?php echo count( $_items ); ?> of <?php echo esc_attr( $item['alt'] ); ?>"
				>
					<img
						src="<?php echo esc_attr( $item['image'] ); ?>"
						alt="<?php echo esc_attr( $item['alt'] ); ?>" 
					/>
				</button>
				<?php $_image_index++; ?>
			<?php endforeach; ?>
		</div>
	</div>
</div>

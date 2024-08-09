<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<div class="product-image-grid">
		<?php foreach ( $attributes['items'] as $item ) : ?>
			<img class="product-image-grid__item" src="<?php echo esc_attr( $item['image'] ); ?>" alt="" />
		<?php endforeach; ?>
	</div>
</div>

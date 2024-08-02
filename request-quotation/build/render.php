<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
  <div class="request-quotation">
    <div class="request-quotation__content">
     	<h2 class="request-quotation__heading">
     	  <?php echo esc_html__('Request for a quotation.', 'heybran'); ?>
     	</h2>
      <p class="request-quotation__paragraph">
        <?php echo esc_html__('Contact us for a free quotation or request additional information.', 'heybran'); ?>
      </p>
    </div>
    <a href="/contact" class="request-quotation__link">
      <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
      <?php echo esc_html__('Get a quote', 'heybran');?>
    </a>
  </div>
</div>

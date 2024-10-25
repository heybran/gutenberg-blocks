/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

class ProductSlider {
	constructor({ mainImageSelector, thumbnailSelector, thumbnailActiveClass, containerSelector }) {
		this.mainImageSelector = mainImageSelector;
		this.thumbnailSelector = thumbnailSelector;
		this.thumbnailActiveClass = thumbnailActiveClass;
		this.containerSelector = containerSelector;
	}

	static create({ mainImageSelector, thumbnailSelector, thumbnailActiveClass, containerSelector }) {
		return new ProductSlider({
			mainImageSelector,
			thumbnailSelector,
			thumbnailActiveClass,
			containerSelector,
		});
	}

	run() {
		const mainImage = document.querySelector(this.mainImageSelector);
		const thumbnails = document.querySelectorAll(this.thumbnailSelector);
		const container = document.querySelector(this.containerSelector);
		if (!thumbnails.length) return;

		thumbnails.forEach((thumbnail) => {
			thumbnail.addEventListener("click", (event) => {
				mainImage.src = thumbnail.querySelector("img").src;
				container
					.querySelector(`.${this.thumbnailActiveClass}`)
					.classList.remove(this.thumbnailActiveClass);
				thumbnail.classList.add(this.thumbnailActiveClass);
			});
		});
	}
}

ProductSlider.create({
	mainImageSelector: ".product-slider__main-image",
	thumbnailSelector: ".product-slider__thumbnail",
	thumbnailActiveClass: "product-slider__thumbnail--active",
	containerSelector: ".product-slider", 
}).run();
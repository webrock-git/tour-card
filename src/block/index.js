/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType(metadata.name, {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	icon: {
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.52 491.52">
			<path d="M471.04 40.96H20.48C9.169 40.96 0 50.129 0 61.44v368.64c0 11.311 9.169 20.48 20.48 20.48h450.56c11.311 0 20.48-9.169 20.48-20.48V61.44c0-11.311-9.169-20.48-20.48-20.48zM450.56 409.6H40.96V81.92h409.6V409.6z" />
			<path d="M102.4 184.32h61.44c27.307 0 27.307-40.96 0-40.96H102.4c-27.307 0-27.307 40.96 0 40.96zM266.24 122.88H409.6v81.92H266.24zM327.68 286.72h81.92v81.92h-81.92zM204.8 286.72h81.92v81.92H204.8zM81.92 286.72h81.92v81.92H81.92z" />
		</svg>
	},

	/**
	 * @see ./save.js
	 */
	save,
});

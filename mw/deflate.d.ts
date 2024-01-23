declare global {
	namespace mw {
		/**
		 * Compress the content and add the 'rawdeflate,' prefix.
		 *
		 * Example:
		 *
		 *     mw.loader.using( 'mediawiki.deflate' ).then( function () {
		 *         var deflated = mw.deflate( myContent );
		 *     } );
		 *
		 * @param {string} data Undeflated data
		 * @return {string} Deflated data
		 * @see https://github.com/wikimedia/mediawiki/blob/master/resources/src/mediawiki.deflate/mw.deflate.js#L14
		 * @see https://doc.wikimedia.org/mediawiki-core/master/php/classDeflate.html
		 */
		function deflate(data: string): string;
	}
}

export {};

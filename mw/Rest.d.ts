export interface RestOptions {
	ajax: JQuery.AjaxSettings;
}

export type RestResponse = Record<string, any>; // Unknown JSON object

declare global {
	namespace mw {
		/**
		 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest
		 */
		class Rest {
			/**
			 * Constructor to create an object to interact with the REST API of a particular
			 * MediaWiki server. mw.Rest objects represent the REST API of a particular
			 * MediaWiki server.
			 *
			 * ```js
			 * var api = new mw.Rest();
			 * api.get( '/v1/page/Main_Page/html' )
			 * .done( function ( data ) {
			 *     console.log( data );
			 * } );
			 *
			 * api.post( '/v1/page/Main_Page', {
			 *      token: 'anon_token',
			 *      source: 'Lörem Ipsüm',
			 *      comment: 'tästing',
			 *      title: 'My_Page'
			 * }, {
			 *     'authorization': 'token'
			 * } )
			 * .done( function ( data ) {
			 *     console.log( data );
			 * } );
			 * ```
			 *
			 * @param {Partial<RestOptions>} [options]
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-constructor
			 */
			constructor(options?: Partial<RestOptions>);

			/**
			 * Abort all unfinished requests issued by this Api object.
			 *
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-abort
			 */
			abort(): void;

			/**
			 * Perform the API call.
			 *
			 * @param {string} path
			 * @param {JQuery.AjaxSettings} [ajaxOptions]
			 * @returns {JQuery.Promise<RestResponse>} Done: API response data and the jqXHR object.
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Api-method-ajax
			 */
			ajax(path: string, ajaxOptions?: JQuery.AjaxSettings): JQuery.Promise<RestResponse>;

			/**
			 * Perform REST API DELETE request.
			 *
			 * Note: only sending application/json is currently supported.
			 *
			 * @param {string} path
			 * @param {Object.<string, any>} body
			 * @param {Object} [headers]
			 * @returns {JQuery.Promise<RestResponse>}
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-delete
			 */
			delete(
				path: string,
				body: Record<string, any>,
				headers?: JQuery.AjaxSettings['headers']
			): JQuery.Promise<RestResponse>;

			/**
			 * Perform REST API get request.
			 *
			 * @param {string} path
			 * @param {Object.<string, any>} query
			 * @param {Object} [headers]
			 * @returns {JQuery.Promise<RestResponse>}
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-get
			 */
			get(
				path: string,
				query: Record<string, any>,
				headers?: JQuery.AjaxSettings['headers']
			): JQuery.Promise<RestResponse>;

			/**
			 * Perform REST API post request.
			 *
			 * Note: only sending application/json is currently supported.
			 *
			 * @param {string} path
			 * @param {Object.<string, any>} body
			 * @param {Object} [headers]
			 * @returns {JQuery.Promise<RestResponse>}
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-post
			 */
			post(
				path: string,
				body: Record<string, any>,
				headers?: JQuery.AjaxSettings['headers']
			): JQuery.Promise<RestResponse>;

			/**
			 * Perform REST API PUT request.
			 *
			 * Note: only sending application/json is currently supported.
			 *
			 * @param {string} path
			 * @param {Object.<string, any>} body
			 * @param {Object} [headers]
			 * @returns {JQuery.Promise<RestResponse>}
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-put
			 */
			put(
				path: string,
				body: Record<string, any>,
				headers?: JQuery.AjaxSettings['headers']
			): JQuery.Promise<RestResponse>;

			/**
			 * Lower cases the key names in the provided object.
			 *
			 * @private
			 * @param {Object} headers
			 * @returns {Object}
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Rest-method-objectKeysToLowerCase
			 */
			private objectKeysToLowerCase<T extends JQuery.AjaxSettings['headers']>(headers: T): T;

			/**
			 * @private
			 */
			private defaults: RestOptions;

			/**
			 * @private
			 */
			private requests: JQuery.jqXHR[];
		}
	}
}

export {};

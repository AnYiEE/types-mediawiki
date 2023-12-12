/**
 * Registry and firing of events.
 *
 * MediaWiki has various interface components that are extended, enhanced
 * or manipulated in some other way by extensions, gadgets and even
 * in core itself.
 *
 * This framework helps streamlining the timing of when these other
 * code paths fire their plugins (instead of using document-ready,
 * which can and should be limited to firing only once).
 *
 * Features like navigating to other wiki pages, previewing an edit
 * and editing itself – without a refresh – can then retrigger these
 * hooks accordingly to ensure everything still works as expected.
 *
 * Example usage:
 *
 *     mw.hook( 'wikipage.content' ).add( fn ).remove( fn );
 *     mw.hook( 'wikipage.content' ).fire( $content );
 *
 * Handlers can be added and fired for arbitrary event names at any time. The same
 * event can be fired multiple times. The last run of an event is memorized
 * (similar to `$(document).ready` and `$.Deferred().done`).
 * This means if an event is fired, and a handler added afterwards, the added
 * function will be fired right away with the last given event data.
 *
 * Like Deferreds and Promises, the mw.hook object is both detachable and chainable.
 * Thus allowing flexible use and optimal maintainability and authority control.
 * You can pass around the `add` and/or `fire` method to another piece of code
 * without it having to know the event name (or `mw.hook` for that matter).
 *
 *     var h = mw.hook( 'bar.ready' );
 *     new mw.Foo( .. ).fetch( { callback: h.fire } );
 *
 * Note: Events are documented with an underscore instead of a dot in the event
 * name due to jsduck not supporting dots in that position.
 *
 * @class mw.hook
 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.hook
 */
interface Hook<T extends any[] = any[]> {
	/**
	 * Register a hook handler
	 *
	 * @param {((...data: T) => any)[]} handler Function to bind.
	 * @return {this}
	 * @chainable
	 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.hook-method-add
	 */
	add(...handler: Array<(...data: T) => any>): this;

	/**
	 * Call hook handlers with data.
	 *
	 * @param {T} data
	 * @return {this}
	 * @chainable
	 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.hook-method-fire
	 */
	fire(...data: T): this;

	/**
	 * Unregister a hook handler
	 *
	 * @param {((...data: T) => any)[]} handler Function to unbind.
	 * @return {this}
	 * @chainable
	 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.hook-method-remove
	 */
	remove(...handler: Array<(...data: T) => any>): this;
}

declare global {
	namespace mw {
		/**
		 * Create an instance of mw.hook.
		 *
		 * @method hook
		 * @member mw
		 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.hook
		 */
		function hook<T extends any[] = any[]>(event: string): Hook<T>;
	}
}

export {};

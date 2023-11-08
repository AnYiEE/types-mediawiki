declare global {
    namespace mw {
        /**
         * Collection of methods to help log messages to the console.
         *
         * @class mw.log
         * @singleton
         * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.log
         */
        const log: {
            /**
             * Write a verbose message to the browser's console in debug mode.
             *
             * This method is mainly intended for verbose logging. It is a no-op in production mode.
             * In ResourceLoader debug mode, it will use the browser's console.
             *
             * @member mw
             * @param {...string} msg Messages to output to console.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-log
             */
            (...msg: string[]): void;

            /**
             * Create a property on a host object that, when accessed, will log
             * a deprecation warning to the console.
             *
             * Usage:
             *
             *    mw.log.deprecate( window, 'myGlobalFn', myGlobalFn );
             *
             *    mw.log.deprecate( Thing, 'old', old, 'Use Other.thing instead', 'Thing.old'  );
             *
             *
             * @param {Object} obj Host object of deprecated property
             * @param {string} key Name of property to create in `obj`
             * @param {Object} val The value this property should return when accessed
             * @param {string} [msg] Optional extra text to add to the deprecation warning
             * @param {string} [logName] Name of the feature for deprecation tracker.
             *  Tracking is disabled by default, except for global variables on `window`.
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-deprecate
             */
            deprecate(
                obj: Record<string, any>,
                key: string,
                val: Record<string, any>,
                msg?: string,
                logName?: string,
            ): void;

            /**
             * Write a message to the browser console's error channel.
             *
             * Most browsers also print a stacktrace when calling this method if the
             * argument is an Error object.
             *
             * @since 1.26
             * @param {...any} msg Messages to output to console
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-error
             */
            error(...msg: any[]): void;

            /**
             * Create a function that logs a deprecation warning when called.
             *
             * Usage:
             *
             *     var deprecatedNoB = mw.log.makeDeprecated( 'hello_without_b', 'Use of hello without b is deprecated.' );
             *
             *     function hello( a, b ) {
             *       if ( b === undefined ) {
             *         deprecatedNoB();
             *         b = 0;
             *       }
             *       return a + b;
             *     }
             *
             *     hello( 1 );
             *
             *
             * @since 1.38
             * @param {string|null} key Name of the feature for deprecation tracker,
             *  or null for a console-only deprecation.
             * @param {string} msg Deprecation warning.
             * @return {Function}
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw-method-makeDeprecated
             */
            makeDeprecated(key: string | null, msg: string): () => void;

            /**
             * Write a message to the browser console's warning channel.
             *
             * @param {...string} msg Messages to output to console
             * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.log-method-warn
             */
            warn(...msg: string[]): void;
        };
    }
}

export {};

type LogEntryType = 'deprecated' | 'log' | 'warn';

interface Data {
	debugLog: string[];
	gitBranch: string | false;
	gitRevision: string | false;
	gitViewUrl: string | false;
	includes: File[];
	log: LogEntry[];
	memory: string;
	memoryPeak: string;
	mwVersion: string;
	phpVersion: string;
	queries: Query[];
	time: number;
}

interface File {
	name: string;
	size: string;
}

interface LogEntry {
	caller: string;
	msg: string;
	type: LogEntryType;
	typeText?: string;
}

interface Query {
	function: string;
	sql: string;
	time: number;
}

declare global {
	namespace mw {
		/**
		 * Debug toolbar.
		 *
		 * Enabled server-side through `$wgDebugToolbar`.
		 *
		 * @since 1.19
		 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug
		 */
		namespace Debug {
			/**
			 * Toolbar container element.
			 *
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-property-S-container
			 */
			const $container: JQuery;

			/**
			 * Object containing data for the debug toolbar.
			 *
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-property-data
			 */
			const data: Data;

			/**
			 * Build the console panel.
			 *
			 * @return {JQuery} Console panel
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildConsoleTable
			 */
			function buildConsoleTable(): JQuery;

			/**
			 * Build legacy debug log pane.
			 *
			 * @return {JQuery} Console panel
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildDebugLogTable
			 */
			function buildDebugLogTable(): JQuery;

			/**
			 * Construct the HTML for the debugging toolbar.
			 *
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildHtml
			 */
			function buildHtml(): void;

			/**
			 * Build included files pane.
			 *
			 * @return {JQuery}
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildIncludesPane
			 */
			function buildIncludesPane(): JQuery;

			/**
			 * Build query list pane.
			 *
			 * @return {JQuery}
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildQueryTable
			 */
			function buildQueryTable(): JQuery;

			/**
			 * Build request information pane.
			 *
			 * @return {JQuery}
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-buildRequestPane
			 */
			function buildRequestPane(): JQuery;

			/**
			 * Initialize the debugging pane.
			 *
			 * Shouldn't be called before the document is ready
			 * (since it binds to elements on the page).
			 *
			 * @param {Data} [data] Defaults to 'debugInfo' from {@link mw.config}
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-init
			 */
			function init(data?: Data): void;

			/**
			 * Switch between panes.
			 *
			 * Should be called with an HTMLElement as its thisArg,
			 * because it's meant to be an event handler.
			 *
			 * @param {JQuery.Event} e
			 * @see https://doc.wikimedia.org/mediawiki-core/master/js/#!/api/mw.Debug-method-switchPane
			 */
			function switchPane(e: JQuery.Event): void;
		}
	}
}

export {};

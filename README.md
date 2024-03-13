[![NPM version](https://img.shields.io/npm/v/types-mediawiki-renovate.svg)](https://www.npmjs.com/package/types-mediawiki-renovate)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# types-mediawiki-renovate

TypeScript definitions for MediaWiki JS interface.

This package covers the functions and classes in the `mw` global object, as well some jQuery plugins used in MediaWiki core. All commonly used parts of the interface are covered.

[![Download stats](https://nodei.co/npm/types-mediawiki-renovate.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/types-mediawiki-renovate)

## Usage

To use types from this package, run

```bash
pnpm add -D @types/jquery @types/oojs-ui types-mediawiki-renovate
```

Edit your project's `tsconfig.json` file so that it includes

```
"include": [
  "node_modules/types-mediawiki-renovate"
]
```

You should be all set! `mw` will be available in the global scope. There is no need to put any import statements in the TypeScript source files.

**If you find any errors or have suggestions for more specific typings, please open a PR or file an issue.**

### mw.config

Types for mw.config are included:

```ts
let NS = mw.config.get('wgNamespaceNumber'); // NS gets type number
let pageName = mw.config.get('wgPageName'); // pageName gets type string
```

mw.config entries added by MediaWiki extensions can also be used but their type is not known, so they need to be declare:

```ts
interface MediaWikiConfigMap {
	pageTriageNamespaces: number[];
}
let namespaces = mw.config.get('pageTriageNamespaces');
```

or explicitly cast:

```ts
let namespaces = mw.config.get('pageTriageNamespaces') as number[];
```

(`mw.config.get("pageTriageNamespaces")` gets the type `unknown` without using the interface merging or a cast.)

The optional values ​​of the return value of `mw.config.get("wgAction")` can also be extended through `MediaWikiConfigMapWgAction` like `MediaWikiConfigMap`.

### MediaWiki API parameters

This package also provides typings for API request parameters for the [MediaWiki Action API](https://www.mediawiki.org/wiki/API:Main_page). API endpoints defined in MediaWiki core and by a number of common extensions (the ones enabled on English Wikipedia) are covered. These aren't exported to the global scope, however. For usage, you need to import them. For example:

```ts
import type {ApiEditPageParams, ApiParseParams} from 'types-mediawiki/api_params';
```

Since it is just a type import, it doesn't generate any JavaScript. Hence, such imports can also be used in non-modular applications.

## TODO

-   Add doc comments for `mw.ForeignStructuredUpload`, `mw.GallerySlideshow`, `mw.special.ApiSandbox` and `mw.jqueryMsg` private methods.

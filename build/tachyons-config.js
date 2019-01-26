"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* babel-plugin-inline-import './static/_normalize.css.txt' */
var normalizeCss = "/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n";

/* babel-plugin-inline-import './static/_box-sizing.css.txt' */
var boxSizingCss = "/*\n \n  BOX SIZING\n\n*/\n\nhtml,\nbody,\ndiv,\narticle,\naside,\nsection,\nmain,\nnav,\nfooter,\nheader,\nform,\nfieldset,\nlegend,\npre,\ncode,\na,\nh1,h2,h3,h4,h5,h6,\np,\nul,\nol,\nli,\ndl,\ndt,\ndd,\nblockquote,\nfigcaption,\nfigure,\ntextarea,\ntable, \ntd,\nth,\ntr,\ninput[type=\"email\"],\ninput[type=\"number\"],\ninput[type=\"password\"],\ninput[type=\"tel\"],\ninput[type=\"text\"],\ninput[type=\"url\"],\n.border-box {\n  box-sizing: border-box;\n}\n\n";

/* babel-plugin-inline-import './static/_images.css.txt' */
var imagesCss = "/*\n\n   IMAGES\n   Docs: http://tachyons.io/docs/elements/images/\n\n*/\n\n/* Responsive images! */\n\nimg { max-width: 100%; }\n\n";

/* babel-plugin-inline-import './static/_forms.css.txt' */
var formsCss = "/*\n\n   FORMS\n   \n*/\n\n.input-reset {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n}\n\n.button-reset::-moz-focus-inner,\n.input-reset::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n";

/* babel-plugin-inline-import './static/_links.css.txt' */
var linksCss = "/*\n\n   LINKS\n   Docs: http://tachyons.io/docs/elements/links/\n\n*/\n\n.link {\n  text-decoration: none;\n  transition: color .15s ease-in;\n}\n\n.link:link,\n.link:visited {\n  transition: color .15s ease-in;\n}\n.link:hover   {\n  transition: color .15s ease-in;\n}\n.link:active  {\n  transition: color .15s ease-in;\n}\n.link:focus   {\n  transition: color .15s ease-in;\n  outline: 1px dotted currentColor;\n}\n\n";

/* babel-plugin-inline-import './static/_tables.css.txt' */
var tablesCss = "/*\n\n  TABLES\n  Docs: http://tachyons.io/docs/elements/tables/\n\n*/\n\n.collapse {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n.striped--light-silver:nth-child(odd) {\n  background-color: #aaa;\n}\n\n.striped--moon-gray:nth-child(odd) {\n  background-color: #ccc;\n}\n\n.striped--light-gray:nth-child(odd) {\n  background-color: #eee;\n}\n\n.striped--near-white:nth-child(odd) {\n  background-color: #f4f4f4;\n}\n\n.stripe-light:nth-child(odd) {\n  background-color: rgba(255,255,255,.1);\n}\n\n.stripe-dark:nth-child(odd) {\n  background-color: rgba(0,0,0,.1);\n}\n";

/* babel-plugin-inline-import './static/_hovers.css.txt' */
var hoversCss = "/*\n\n  HOVER EFFECTS\n  Docs: http://tachyons.io/docs/themes/hovers/\n\n    - Dim\n    - Glow\n    - Hide Child\n    - Underline text\n    - Grow\n    - Pointer\n    - Shadow\n\n*/\n\n/*\n\n  Dim element on hover by adding the dim class.\n\n*/\n.dim {\n  opacity: 1;\n  transition: opacity .15s ease-in;\n}\n.dim:hover,\n.dim:focus {\n  opacity: .5;\n  transition: opacity .15s ease-in;\n}\n.dim:active {\n  opacity: .8; transition: opacity .15s ease-out;\n}\n\n/*\n\n  Animate opacity to 100% on hover by adding the glow class.\n\n*/\n.glow {\n  transition: opacity .15s ease-in;\n}\n.glow:hover,\n.glow:focus {\n  opacity: 1;\n  transition: opacity .15s ease-in;\n}\n\n/*\n\n  Hide child & reveal on hover:\n\n  Put the hide-child class on a parent element and any nested element with the\n  child class will be hidden and displayed on hover or focus.\n\n  <div class=\"hide-child\">\n    <div class=\"child\"> Hidden until hover or focus </div>\n    <div class=\"child\"> Hidden until hover or focus </div>\n    <div class=\"child\"> Hidden until hover or focus </div>\n    <div class=\"child\"> Hidden until hover or focus </div>\n  </div>\n*/\n\n.hide-child .child {\n  opacity: 0;\n  transition: opacity .15s ease-in;\n}\n.hide-child:hover  .child,\n.hide-child:focus  .child,\n.hide-child:active .child {\n  opacity: 1;\n  transition: opacity .15s ease-in;\n}\n\n.underline-hover:hover,\n.underline-hover:focus {\n  text-decoration: underline;\n}\n\n/* Can combine this with overflow-hidden to make background images grow on hover\n * even if you are using background-size: cover */\n\n.grow {\n  -moz-osx-font-smoothing: grayscale;\n  backface-visibility: hidden;\n  transform: translateZ(0);\n  transition: transform 0.25s ease-out;\n}\n\n.grow:hover,\n.grow:focus {\n  transform: scale(1.05);\n}\n\n.grow:active {\n  transform: scale(.90);\n}\n\n.grow-large {\n  -moz-osx-font-smoothing: grayscale;\n  backface-visibility: hidden;\n  transform: translateZ(0);\n  transition: transform .25s ease-in-out;\n}\n\n.grow-large:hover,\n.grow-large:focus {\n  transform: scale(1.2);\n}\n\n.grow-large:active {\n  transform: scale(.95);\n}\n\n/* Add pointer on hover */\n\n.pointer:hover {\n  cursor: pointer;\n}\n\n/* \n   Add shadow on hover.\n\n   Performant box-shadow animation pattern from \n   http://tobiasahlin.com/blog/how-to-animate-box-shadow/ \n*/\n\n.shadow-hover {\n  cursor: pointer;\n  position: relative;\n  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n.shadow-hover::after {\n  content: '';\n  box-shadow: 0px 0px 16px 2px rgba( 0, 0, 0, .2 );\n  border-radius: inherit;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  transition: opacity 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n.shadow-hover:hover::after,\n.shadow-hover:focus::after {\n  opacity: 1;\n}\n\n/* Combine with classes in skins and skins-pseudo for \n * many different transition possibilities. */\n\n.bg-animate,\n.bg-animate:hover,\n.bg-animate:focus {\n  transition: background-color .15s ease-in-out; \n}\n\n";

/* babel-plugin-inline-import './static/_nested.css.txt' */
var nestedCss = "/*\n\n    NESTED\n    Tachyons module for styling nested elements\n    that are generated by a cms.\n\n*/\n\n.nested-copy-line-height p,\n.nested-copy-line-height ul,\n.nested-copy-line-height ol {\n  line-height: 1.5;\n}\n\n.nested-headline-line-height h1,\n.nested-headline-line-height h2,\n.nested-headline-line-height h3,\n.nested-headline-line-height h4,\n.nested-headline-line-height h5,\n.nested-headline-line-height h6 {\n  line-height: 1.25;\n}\n\n.nested-list-reset ul,\n.nested-list-reset ol {\n  padding-left: 0;\n  margin-left: 0;\n  list-style-type: none;\n}\n\n.nested-copy-indent p+p {\n  text-indent: 1em;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.nested-copy-separator p+p {\n  margin-top: 1.5em;\n}\n\n.nested-img img {\n  width: 100%;\n  max-width: 100%;\n  display: block;\n}\n\n.nested-links a {\n  color: #357edd;\n  transition: color .15s ease-in;\n}\n\n.nested-links a:hover,\n.nested-links a:focus {\n  color: #96ccff;\n  transition: color .15s ease-in;\n}\n\n";

/* babel-plugin-inline-import './static/_debug-children.css.txt' */
var debugChildrenCss = "/*\n\n  DEBUG CHILDREN\n  Docs: http://tachyons.io/docs/debug/\n\n  Just add the debug class to any element to see outlines on its\n  children.\n\n*/\n\n.debug * { outline: 1px solid gold; }\n.debug-white * { outline: 1px solid white; }\n.debug-black * { outline: 1px solid black; }\n\n";

/* babel-plugin-inline-import './static/_debug-grid.css.txt' */
var debugGridCss = "/*\n\n   DEBUG GRID\n   http://tachyons.io/docs/debug-grid/\n\n   Can be useful for debugging layout issues\n   or helping to make sure things line up perfectly.\n   Just tack one of these classes onto a parent element.\n\n*/\n\n.debug-grid {\n  background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVR4AWPAC97/9x0eCsAEPgwAVLshdpENIxcAAAAASUVORK5CYII=) repeat top left;\n}\n\n.debug-grid-16 {\n  background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMklEQVR4AWOgCLz/b0epAa6UGuBOqQHOQHLUgFEDnAbcBZ4UGwDOkiCnkIhdgNgNxAYAiYlD+8sEuo8AAAAASUVORK5CYII=) repeat top left;\n}\n\n.debug-grid-8-solid {\n  background:white url(data:image/gif;base64,R0lGODdhCAAIAPEAAADw/wDx/////wAAACwAAAAACAAIAAACDZQvgaeb/lxbAIKA8y0AOw==) repeat top left;\n}\n\n.debug-grid-16-solid {\n  background:white url(data:image/gif;base64,R0lGODdhEAAQAPEAAADw/wDx/xXy/////ywAAAAAEAAQAAACIZyPKckYDQFsb6ZqD85jZ2+BkwiRFKehhqQCQgDHcgwEBQA7) repeat top left;\n}\n";

/* babel-plugin-inline-import './static/_code.css.txt' */
var codeCss = "/*\n\n   CODE\n\n*/\n\n.pre {\n  overflow-x: auto;\n  overflow-y: hidden;\n  overflow:   scroll;\n}\n";

/* babel-plugin-inline-import './static/_lists.css.txt' */
var listsCss = "/*\n\n   LISTS\n   http://tachyons.io/docs/elements/lists/\n\n*/\n\n.list {         list-style-type: none; }\n";
var directions = ['top', // equivalent to   ['top', 'top'],
'right', //                 ['right', 'right'],
'bottom', //                 ['bottom', 'bottom'],
'left'];
var mediaQueries = [['-ns', ['30em', null]], ['-m', ['30em', '60em']], ['-l', ['60em', null]]];
var spacingSizes = [['0', '0'], ['1', '.25rem'], ['2', '.5rem'], ['3', '1rem'], ['4', '2rem'], ['5', '4rem'], ['6', '8rem'], ['7', '16rem']];
var spacingDirections = [['a', '$mapValue: $spacingSizesValue'], ['l', '$mapValue-left: $spacingSizesValue'], ['r', '$mapValue-right: $spacingSizesValue'], ['b', '$mapValue-bottom: $spacingSizesValue'], ['t', '$mapValue-top: $spacingSizesValue'], ['v', '$mapValue-top: $spacingSizesValue; $mapValue-bottom: $spacingSizesValue'], ['h', '$mapValue-left: $spacingSizesValue; $mapValue-right: $spacingSizesValue']];
var spacingNegativeSizes = [['1', '-.25rem'], ['2', '-.5rem'], ['3', '-1rem'], ['4', '-2rem'], ['5', '-4rem'], ['6', '-8rem'], ['7', '-16rem']];
var spacingNegativeDirections = [['a', '$mapValue: $spacingNegativeSizesValue'], ['l', '$mapValue-left: $spacingNegativeSizesValue'], ['r', '$mapValue-right: $spacingNegativeSizesValue'], ['b', '$mapValue-bottom: $spacingNegativeSizesValue'], ['t', '$mapValue-top: $spacingNegativeSizesValue']];
var overflows = ['visible', 'hidden', 'scroll', 'auto'];
var colors = [['black', '#000'], ['near-black', '#111'], ['dark-gray', '#333'], ['mid-gray', '#555'], ['gray', '#777'], ['silver', '#999'], ['light-silver', '#aaa'], ['moon-gray', '#ccc'], ['light-gray', '#eee'], ['near-white', '#f4f4f4'], ['white', '#fff'], ['black-90', 'rgba(0,0,0,.9)'], ['black-80', 'rgba(0,0,0,.8)'], ['black-70', 'rgba(0,0,0,.7)'], ['black-60', 'rgba(0,0,0,.6)'], ['black-50', 'rgba(0,0,0,.5)'], ['black-40', 'rgba(0,0,0,.4)'], ['black-30', 'rgba(0,0,0,.3)'], ['black-20', 'rgba(0,0,0,.2)'], ['black-10', 'rgba(0,0,0,.1)'], ['black-05', 'rgba(0,0,0,.05)'], ['black-025', 'rgba(0,0,0,.025)'], ['black-0125', 'rgba(0,0,0,.0125)'], ['white-90', 'rgba(255,255,255,.9)'], ['white-80', 'rgba(255,255,255,.8)'], ['white-70', 'rgba(255,255,255,.7)'], ['white-60', 'rgba(255,255,255,.6)'], ['white-50', 'rgba(255,255,255,.5)'], ['white-40', 'rgba(255,255,255,.4)'], ['white-30', 'rgba(255,255,255,.3)'], ['white-20', 'rgba(255,255,255,.2)'], ['white-10', 'rgba(255,255,255,.1)'], ['white-05', 'rgba(255,255,255,.05)'], ['white-025', 'rgba(255,255,255,.025)'], ['white-0125', 'rgba(255,255,255,.0125)'], ['dark-red', '#e7040f'], ['red', '#ff4136'], ['light-red', '#ff725c'], ['orange', '#ff6300'], ['gold', '#ffb700'], ['yellow', '#ffd700'], ['light-yellow', '#fbf1a9'], ['purple', '#5e2ca5'], ['light-purple', '#a463f2'], ['dark-pink', '#d5008f'], ['hot-pink', '#ff41b4'], ['pink', '#ff80cc'], ['light-pink', '#ffa3d7'], ['dark-green', '#137752'], ['green', '#19a974'], ['light-green', '#9eebcf'], ['navy', '#001b44'], ['dark-blue', '#00449e'], ['blue', '#357edd'], ['light-blue', '#96ccff'], ['lightest-blue', '#cdecff'], ['washed-blue', '#f6fffe'], ['washed-green', '#e8fdf5'], ['washed-yellow', '#fffceb'], ['washed-red', '#ffdfdf'], 'transparent', 'inherit'];
var lists = [['colors', colors], ['directions', directions], ['spacingSizes', spacingSizes], ['spacingDirections', spacingDirections], ['spacingNegativeSizes', spacingNegativeSizes], ['spacingNegativeDirections', spacingNegativeDirections], ['overflows', overflows]];
var defaultSelectorTemplate = '.$prefix$mapKey$suffix$mediaQuery';
var defaultRuleTemplate = '$mapValue';
var rules = [['normalize', {
  staticRules: normalizeCss
}], ['box-sizing', {
  staticRules: boxSizingCss
}], ['aspect-ratios', {
  prefix: 'aspect-ratio',
  repeatForMediaQueries: true,
  // map uses the rule's selectorTemplate and ruleTemplate if specified, and falls back
  // to defaultSelectorTemplate and defaultRuleTemplate respectively when unspecified
  map: [['--16x9', '56.25'], ['--9x16', '177.77'], ['--4x3', '75'], ['--3x4', '133.33'], ['--6x4', '66.6'], ['--4x6', '150'], ['--8x5', '62.5'], ['--5x8', '160'], ['--7x5', '71.42'], ['--5x7', '140'], ['--1x1', '100']],
  ruleTemplate: 'padding-bottom: $mapValue%;',
  // mapWithDefaultTemplates uses the defaultSelectorTemplate and defaultRuleTemplate
  mapWithDefaultTemplates: [['', 'height: 0; position: relative;'], ['--object', 'position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100;']]
}], ['images', {
  staticRules: imagesCss
}], ['background-size', {
  prefix: '',
  repeatForMediaQueries: true,
  map: [['cover', 'cover'], ['contain', 'contain']],
  ruleTemplate: 'background-size: $mapValue!important;'
}], ['background-position', {
  prefix: 'bg-',
  repeatForMediaQueries: true,
  map: [['center', 'center center'], ['top', 'top center'], ['right', 'center right'], ['bottom', 'bottom center'], ['left', 'center left']],
  ruleTemplate: 'background-repeat: no-repeat; background-position: $mapValue;'
}], ['outlines', {
  prefix: 'outline',
  repeatForMediaQueries: true,
  map: [['', '1px solid'], ['-transparent', '1px solid transparent'], ['-0', '0']],
  ruleTemplate: 'outline: $mapValue;'
}], ['borders', {
  prefix: 'b',
  repeatForMediaQueries: true,
  // for this particular rule, mapWithDefaultTemplates is equivalent because there is no ruleTemplate
  // nor selectorTemplate defined for the rule
  map: [['a', 'border-style: solid; border-width: 1px;'], ['t', 'border-top-style: solid; border-top-width: 1px;'], ['r', 'border-right-style: solid; border-right-width: 1px;'], ['b', 'border-bottom-style: solid; border-bottom-width: 1px;'], ['l', 'border-left-style: solid; border-left-width: 1px;'], ['n', 'border-style: none; border-width: 0;']]
}], ['border-colors', {
  prefix: 'b--',
  repeatFor: ['colors'],
  selectorTemplate: '.$prefix$colorsKey',
  ruleTemplate: 'border-color: $colorsValue;'
}], ['border-radius', {
  prefix: 'br',
  repeatForMediaQueries: true,
  map: [['0', '0'], ['1', '.125rem'], ['2', '.25rem'], ['3', '.5rem'], ['4', '1rem'], ['-100', '100%'], ['-pill', '9999px']],
  ruleTemplate: 'border-radius: $mapValue;',
  mapWithDefaultTemplates: [['--bottom', 'border-top-left-radius: 0; border-top-right-radius: 0;'], ['--top', 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;'], ['--right', 'border-top-left-radius: 0; border-bottom-left-radius: 0;'], ['--left', 'border-top-right-radius: 0; border-bottom-right-radius: 0;']]
}], ['border-style', {
  prefix: 'b--',
  repeatForMediaQueries: true,
  map: ['dotted', 'dashed', 'solid', 'none'],
  ruleTemplate: 'border-style: $mapValue;'
}], ['border-widths', {
  prefix: 'b',
  repeatForMediaQueries: true,
  map: [['w0', '0'], ['w1', '.125rem'], ['w2', '.25rem'], ['w3', '.5rem'], ['w4', '1rem'], ['w5', '2rem']],
  ruleTemplate: 'border-width: $mapValue;',
  mapWithDefaultTemplates: [['t-0', 'border-top-width: 0;'], ['r-0', 'border-right-width: 0;'], ['b-0', 'border-bottom-width: 0;'], ['l-0', 'border-left-width: 0;']]
}], ['box-shadow', {
  prefix: 'shadow-',
  repeatForMediaQueries: true,
  map: [['1', '0px 0px 4px 2px'], ['2', '0px 0px 8px 2px'], ['3', '2px 2px 4px 2px'], ['4', '2px 2px 8px 0px'], ['5', '4px 4px 8px 0px']],
  ruleTemplate: 'box-shadow: $mapValue rgba( 0, 0, 0, 0.2 );'
}], ['code', {
  staticRules: codeCss
}], ['coordinates', {
  repeatFor: ['directions'],
  repeatForMediaQueries: true,
  map: [['-0', '0'], ['-1', '1rem'], ['-2', '2rem'], ['--1', '-1rem'], ['--2', '-2rem']],
  selectorTemplate: '.$directionsKey$mapKey$mediaQuery',
  ruleTemplate: '$directionsKey: $mapValue;',
  mapWithDefaultTemplates: [['absolute--fill', 'top: 0; right: 0; bottom: 0; left: 0;']]
}], ['clears', {
  staticRules: "\n.cf:before,\n.cf:after { content: \" \"; display: table; }\n.cf:after { clear: both; }\n.cf { *zoom: 1; }\n",
  prefix: 'c',
  repeatForMediaQueries: true,
  map: [['l', 'left'], ['r', 'right'], ['b', 'both'], ['n', 'none']],
  ruleTemplate: 'clear: $mapValue;'
}], ['display', {
  prefix: 'd',
  repeatForMediaQueries: true,
  map: [['n', 'none'], ['i', 'inline'], ['b', 'block'], ['ib', 'inline-block'], ['it', 'inline-table'], ['t', 'table'], ['tc', 'table-cell'], ['t-row', 'table-row'], ['t-row-group', 'table-row-group'], ['t-column', 'table-column'], ['t-column-group', 'table-column-group']],
  ruleTemplate: 'display: $mapValue;',
  mapWithDefaultTemplates: [['t--fixed', 'table-layout: fixed; width: 100%;']]
}], ['flexbox-base', {
  repeatForMediaQueries: true,
  mapWithDefaultTemplates: [['flex', 'display: flex;'], ['inline-flex', 'display: inline-flex;'], ['flex-auto', 'flex: 1 1 auto; min-width: 0; min-height: 0;'], ['flex-none', 'flex: none;'], ['flex-column', 'flex-direction: column;'], ['flex-row', 'flex-direction: row;'], ['flex-wrap', 'flex-wrap: wrap;'], ['flex-nowrap', 'flex-wrap: nowrap;'], ['flex-wrap-reverse', 'flex-wrap: wrap-reverse;'], ['flex-column-reverse', 'flex-direction: column-reverse;'], ['flex-row-reverse', 'flex-direction: row-reverse;']]
}], ['flexbox-align-items', {
  prefix: 'items-',
  repeatForMediaQueries: true,
  map: [['start', 'flex-start'], ['end', 'flex-end'], ['center', 'center'], ['baseline', 'baseline'], ['stretch', 'stretch']],
  ruleTemplate: 'align-items: $mapValue;'
}], ['flexbox-align-self', {
  prefix: 'self-',
  repeatForMediaQueries: true,
  map: [['start', 'flex-start'], ['end', 'flex-end'], ['center', 'center'], ['baseline', 'baseline'], ['stretch', 'stretch']],
  ruleTemplate: 'align-self: $mapValue;'
}], ['flexbox-justify-content', {
  prefix: 'justify-',
  repeatForMediaQueries: true,
  map: [['start', 'flex-start'], ['end', 'flex-end'], ['center', 'center'], ['between', 'space-between'], ['around', 'space-around']],
  ruleTemplate: 'justify-content: $mapValue;'
}], ['flexbox-align-content', {
  prefix: 'content-',
  repeatForMediaQueries: true,
  map: [['start', 'flex-start'], ['end', 'flex-end'], ['center', 'center'], ['between', 'space-between'], ['around', 'space-around'], ['stretch', 'stretch']],
  ruleTemplate: 'align-content: $mapValue;'
}], ['flexbox-order', {
  prefix: 'order-',
  repeatForMediaQueries: true,
  map: [['0', '0'], ['1', '1'], ['2', '2'], ['3', '3'], ['4', '4'], ['5', '5'], ['6', '6'], ['7', '7'], ['8', '8'], ['last', '99999']],
  ruleTemplate: 'order: $mapValue;'
}], ['flexbox-grow', {
  prefix: 'flex-grow-',
  repeatForMediaQueries: true,
  map: ['0', '1'],
  ruleTemplate: 'flex-grow: $mapValue;'
}], ['flexbox-shrink', {
  prefix: 'flex-shrink-',
  repeatForMediaQueries: true,
  map: ['0', '1'],
  ruleTemplate: 'flex-shrink: $mapValue;'
}], ['floats', {
  prefix: 'f',
  repeatForMediaQueries: true,
  mapWithDefaultTemplates: [['l', 'float: left; _display: inline;'], ['r', 'float: right; _display: inline;'], ['n', 'float: none']]
}], ['font-family', {
  staticRules: 'code, .code { font-family: Consolas, monaco, monospace; }',
  map: [['sans-serif', "-apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif"], ['serif', 'georgia, times, serif'], ['system-sans-serif', 'sans-serif'], ['system-serif', 'serif'], ['courier', "'Courier Next', courier, monospace"], ['helvetica', "'helvetica neue', helvetica, sans-serif"], ['avenir', "'avenir next', avenir, sans-serif"], ['athelas', 'athelas, georgia, serif'], ['georgia', 'georgia, serif'], ['times', 'times, serif'], ['bodoni', '"Bodoni MT", serif'], ['calisto', '"Calisto MT", serif'], ['garamond', 'garamond, serif'], ['baskerville', 'baskerville, serif']],
  ruleTemplate: 'font-family: $mapValue;'
}], ['font-style', {
  repeatForMediaQueries: true,
  map: [['i', 'italic'], ['fs-normal', 'normal']],
  ruleTemplate: 'font-style: $mapValue;'
}], ['font-weight-constants', {
  repeatForMediaQueries: true,
  map: ['normal', ['b', 'bold']],
  ruleTemplate: 'font-weight: $mapValue;'
}], ['font-weight', {
  prefix: 'fw',
  repeatForMediaQueries: true,
  map: [['1', '100'], ['2', '200'], ['3', '300'], ['4', '400'], ['5', '500'], ['6', '600'], ['7', '700'], ['8', '800'], ['9', '900']],
  ruleTemplate: 'font-weight: $mapValue;'
}], ['forms', {
  staticRules: formsCss
}], ['heights', {
  prefix: 'h',
  repeatForMediaQueries: true,
  map: [['1', '1rem'], ['2', '2rem'], ['3', '4rem'], ['4', '8rem'], ['5', '16rem'], ['-25', '25%'], ['-50', '50%'], ['-75', '75%'], ['-100', '100%']],
  ruleTemplate: 'height: $mapValue;'
}], ['min-heights', {
  prefix: 'min-h',
  repeatForMediaQueries: true,
  map: [['-100', '100%']],
  ruleTemplate: 'min-height: $mapValue;'
}], ['view-heights', {
  prefix: 'vh',
  repeatForMediaQueries: true,
  map: [['-25', '25vh'], ['-50', '50vh'], ['-75', '75vh'], ['-100', '100vh']],
  ruleTemplate: 'height: $mapValue;'
}], ['min-view-heights', {
  prefix: 'min-vh',
  repeatForMediaQueries: true,
  map: [['-100', '100vh']],
  ruleTemplate: 'min-height: $mapValue;'
}], ['heights-continued', {
  prefix: 'h',
  repeatForMediaQueries: true,
  map: [['-auto', 'auto'], ['-inherit', 'inherit']],
  ruleTemplate: 'height: $mapValue;'
}], ['letter-spacing', {
  prefix: 'tracked',
  repeatForMediaQueries: true,
  map: [['', '.1em'], ['-tight', '-.05em'], ['-mega', '.25em']],
  ruleTemplate: 'letter-spacing: $mapValue;'
}], ['line-height', {
  prefix: 'lh-',
  repeatForMediaQueries: true,
  map: [['solid', '1'], ['title', '1.25'], ['copy', '1.5']],
  ruleTemplate: 'line-height: $mapValue;'
}], ['links', {
  staticRules: linksCss
}], ['lists', {
  staticRules: listsCss
}], ['max-widths', {
  prefix: 'mw',
  repeatForMediaQueries: true,
  map: [['-100', '100%'], ['1', '1rem'], ['2', '2rem'], ['3', '4rem'], ['4', '8rem'], ['5', '16rem'], ['6', '32rem'], ['7', '48rem'], ['8', '64rem'], ['9', '96rem'], ['-none', 'none']],
  ruleTemplate: 'max-width: $mapValue;'
}], ['widths', {
  prefix: 'w',
  repeatForMediaQueries: true,
  map: [['1', '1rem'], ['2', '2rem'], ['3', '4rem'], ['4', '8rem'], ['5', '16rem'], ['-10', '10%'], // 1/10
  ['-20', '20%'], // 2/10 1/5
  ['-25', '25%'], //      1/4
  ['-30', '30%'], // 3/10
  ['-33', '33%'], ['-third', 'calc(100% / 3)'], // 1/3
  ['-34', '34%'], ['-40', '40%'], // 4/10 2/5
  ['-50', '50%'], // 5/10 1/2
  ['-60', '60%'], // 6/10 3/5
  ['-two-thirds', 'calc(100% / 1.5)'], // 2/3
  ['-70', '70%'], // 7/10
  ['-75', '75%'], //      3/4
  ['-80', '80%'], // 8/10 4/5
  ['-90', '90%'], // 9/10
  ['-100', '100%'], // full
  ['-auto', 'auto']],
  ruleTemplate: 'width: $mapValue;'
}], ['overflow', {
  prefix: 'overflow',
  repeatFor: ['overflows'],
  repeatForMediaQueries: true,
  map: ['', '-x', '-y'],
  selectorTemplate: '.$prefix$mapKey-$overflowsKey$mediaQuery',
  ruleTemplate: 'overflow$mapKey: $overflowsKey;'
}], ['position', {
  repeatForMediaQueries: true,
  map: ['static', 'relative', 'absolute', 'fixed'],
  ruleTemplate: 'position: $mapValue;'
}], ['opacity', {
  prefix: 'o-',
  map: [['100', '1'], ['90', '.9'], ['80', '.8'], ['70', '.7'], ['60', '.6'], ['50', '.5'], ['40', '.4'], ['30', '.3'], ['20', '.2'], ['10', '.1'], ['05', '.05'], ['025', '.025'], ['0', '0']],
  ruleTemplate: 'opacity: $mapValue;'
}], ['rotations', {
  prefix: 'rotate-',
  repeatForMediaQueries: true,
  map: ['45', '90', '135', '180', '225', '270', '315'],
  ruleTemplate: 'transform: rotate($mapValuedeg);'
}], ['skins', {
  repeatFor: ['colors'],
  selectorTemplate: '.$colorsKey',
  ruleTemplate: 'color: $colorsValue;'
}], ['skins-bg', {
  repeatFor: ['colors'],
  selectorTemplate: '.bg-$colorsKey',
  ruleTemplate: 'background-color: $colorsValue;'
}], ['skins-pseudo-hover-color', {
  repeatFor: ['colors'],
  selectorTemplate: '.hover-$colorsKey:hover,.hover-$colorsKey:focus',
  ruleTemplate: 'color: $colorsValue;'
}], ['skins-pseudo-hover-bg-color', {
  repeatFor: ['colors'],
  selectorTemplate: '.hover-bg-$colorsKey:hover, .hover-bg-$colorsKey:focus',
  ruleTemplate: 'background-color: $colorsValue;'
}], ['spacing', {
  repeatForMediaQueries: true,
  repeatFor: ['spacingDirections', 'spacingSizes'],
  map: [['p', 'padding'], ['m', 'margin']],
  selectorTemplate: '.$mapKey$spacingDirectionsKey$spacingSizesKey$mediaQuery',
  ruleTemplate: '$spacingDirectionsValue;'
}], ['negative-spacing', {
  repeatForMediaQueries: true,
  repeatFor: ['spacingNegativeDirections', 'spacingNegativeSizes'],
  map: [['n', 'margin']],
  selectorTemplate: '.$mapKey$spacingNegativeDirectionsKey$spacingNegativeSizesKey$mediaQuery',
  ruleTemplate: '$spacingNegativeDirectionsValue;'
}], ['tables', {
  staticRules: tablesCss
}], ['text-decoration', {
  repeatForMediaQueries: true,
  map: [['strike', 'line-through'], ['underline', 'underline'], ['no-underline', 'none']],
  ruleTemplate: 'text-decoration: $mapValue;'
}], ['text-align', {
  prefix: 't',
  repeatForMediaQueries: true,
  map: [['l', 'left'], ['r', 'right'], ['c', 'center'], ['j', 'justify']],
  ruleTemplate: 'text-align: $mapValue;'
}], ['text-transform', {
  prefix: 'tt',
  repeatForMediaQueries: true,
  map: [['c', 'capitalize'], ['l', 'lowercase'], ['u', 'uppercase'], ['n', 'none']],
  ruleTemplate: 'text-transform: $mapValue;'
}], ['type-scale', {
  repeatForMediaQueries: true,
  prefix: 'f',
  map: [[['-6', '-headline'], '6'], // equivalent to ['-6', '6'], ['-headline', '6'],
  [['-5', '-subheadline'], '5'], // equivalent to ['-5', '5'], ['-subheadline', '5'],
  ['1', '3'], ['2', '2.25'], ['3', '1.5'], ['4', '1.25'], ['5', '1'], ['6', '.875'], ['7', '.75']],
  ruleTemplate: 'font-size: $mapValuerem;'
}], ['typography', {
  repeatForMediaQueries: true,
  mapWithDefaultTemplates: [['measure', 'max-width: 30em;'], ['measure-wide', 'max-width: 34em;'], ['measure-narrow', 'max-width: 20em;'], ['indent', 'text-indent: 1em; margin-top: 0; margin-bottom: 0;'], ['small-caps', 'font-variant: small-caps;'], ['truncate', 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;']]
}], ['static-utilities', {
  staticRules: '.overflow-container { overflow-y: scroll; }'
}], ['custom-utilities', {
  repeatForMediaQueries: true,
  mapWithDefaultTemplates: [['center', 'margin-right: auto; margin-left: auto;'], ['mr-auto', 'margin-right: auto;'], ['ml-auto', 'margin-left: auto;']]
}], ['visibility', {
  repeatForMediaQueries: true,
  mapWithDefaultTemplates: [['clip', 'position: fixed !important; _position: absolute !important; clip: rect(1px 1px 1px 1px); /* IE6, IE7 */ clip: rect(1px, 1px, 1px, 1px);']]
}], ['white-space', {
  repeatForMediaQueries: true,
  map: [['ws-normal', 'normal'], ['nowrap', 'nowrap'], ['pre', 'pre']],
  ruleTemplate: 'white-space: $mapValue;'
}], ['vertical-align', {
  prefix: 'v-',
  repeatForMediaQueries: true,
  map: [['base', 'baseline'], ['mid', 'middle'], ['top', 'top'], ['btm', 'bottom']],
  ruleTemplate: 'vertical-align: $mapValue;'
}], ['hovers', {
  staticRules: hoversCss
}], ['z-index', {
  prefix: 'z-',
  map: ['0', '1', '2', '3', '4', '5', '999', '9999', ['max', '2147483647'], 'inherit', 'initial', 'unset'],
  ruleTemplate: 'z-index: $mapValue;'
}], ['nested', {
  staticRules: nestedCss
}], ['debug-children', {
  staticRules: debugChildrenCss
}], ['debug-grid', {
  staticRules: debugGridCss
}]];
var tachyonsConfig = {
  lists: lists,
  defaultSelectorTemplate: defaultSelectorTemplate,
  defaultRuleTemplate: defaultRuleTemplate,
  mediaQueries: mediaQueries,
  rules: rules
};
var _default = tachyonsConfig;
exports.default = _default;

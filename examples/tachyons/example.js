import util from 'util';

import ParticleEmitter from '../../src/ParticleEmitter';

import normalizeCss from './static/_normalize.css.txt';
import boxSizingCss from './static/_box-sizing.css.txt';
import imagesCss from './static/_images.css.txt';
import fontFamilyCss from './static/_font-family.css.txt';
import formsCss from './static/_forms.css.txt';
import linksCss from './static/_links.css.txt';
import tablesCss from './static/_tables.css.txt';
import hoversCss from './static/_hovers.css.txt';
import zIndexCss from './static/_z-index.css.txt';
import nestedCss from './static/_nested.css.txt';
import debugChildrenCss from './static/_debug-children.css.txt';
import debugGridCss from './static/_debug-grid.css.txt';
import codeCss from './static/_code.css.txt';
import listsCss from './static/_lists.css.txt';

const directions = [
  'top',    // equivalent to   ['top', 'top'],
  'right',  //                 ['right', 'right'],
  'bottom', //                 ['bottom', 'bottom'],
  'left',   //                 ['left', 'left'],
];

const mediaQueries = [
  ['-ns', ['30em', null]],
  ['-m', ['30em', '60em']],
  ['-l', ['60em', null]],
];

const spacingSizes = [
  ['0', '0'],
  ['1', '.25rem'],
  ['2', '.5rem'],
  ['3', '1rem'],
  ['4', '2rem'],
  ['5', '4rem'],
  ['6', '8rem'],
  ['7', '16rem'],
];

const spacingDirections = [
  ['a', '$mapValue: $spacingSizesValue'],
  ['l', '$mapValue-left: $spacingSizesValue'],
  ['r', '$mapValue-right: $spacingSizesValue'],
  ['b', '$mapValue-bottom: $spacingSizesValue'],
  ['t', '$mapValue-top: $spacingSizesValue'],
  ['v', '$mapValue-top: $spacingSizesValue; $mapValue-bottom: $spacingSizesValue'],
  ['h', '$mapValue-left: $spacingSizesValue; $mapValue-right: $spacingSizesValue'],
];

const spacingNegativeSizes = [
  ['1', '-.25rem'],
  ['2', '-.5rem'],
  ['3', '-1rem'],
  ['4', '-2rem'],
  ['5', '-4rem'],
  ['6', '-8rem'],
  ['7', '-16rem'],
];

const spacingNegativeDirections = [
  ['a', '$mapValue: $spacingNegativeSizesValue'],
  ['l', '$mapValue-left: $spacingNegativeSizesValue'],
  ['r', '$mapValue-right: $spacingNegativeSizesValue'],
  ['b', '$mapValue-bottom: $spacingNegativeSizesValue'],
  ['t', '$mapValue-top: $spacingNegativeSizesValue'],
];

const overflows = [
  'visible',
  'hidden',
  'scroll',
  'auto',
];

const colors = [
  ['black', '#000'],
  ['near-black', '#111'],
  ['dark-gray', '#333'],
  ['mid-gray', '#555'],
  ['gray', '#777'],
  ['silver', '#999'],
  ['light-silver', '#aaa'],
  ['moon-gray', '#ccc'],
  ['light-gray', '#eee'],
  ['near-white', '#f4f4f4'],
  ['white', '#fff'],

  ['black-90', 'rgba(0,0,0,.9)'],
  ['black-80', 'rgba(0,0,0,.8)'],
  ['black-70', 'rgba(0,0,0,.7)'],
  ['black-60', 'rgba(0,0,0,.6)'],
  ['black-50', 'rgba(0,0,0,.5)'],
  ['black-40', 'rgba(0,0,0,.4)'],
  ['black-30', 'rgba(0,0,0,.3)'],
  ['black-20', 'rgba(0,0,0,.2)'],
  ['black-10', 'rgba(0,0,0,.1)'],
  ['black-05', 'rgba(0,0,0,.05)'],
  ['black-025', 'rgba(0,0,0,.025)'],
  ['black-0125', 'rgba(0,0,0,.0125)'],

  ['white-90', 'rgba(255,255,255,.9)'],
  ['white-80', 'rgba(255,255,255,.8)'],
  ['white-70', 'rgba(255,255,255,.7)'],
  ['white-60', 'rgba(255,255,255,.6)'],
  ['white-50', 'rgba(255,255,255,.5)'],
  ['white-40', 'rgba(255,255,255,.4)'],
  ['white-30', 'rgba(255,255,255,.3)'],
  ['white-20', 'rgba(255,255,255,.2)'],
  ['white-10', 'rgba(255,255,255,.1)'],
  ['white-05', 'rgba(255,255,255,.05)'],
  ['white-025', 'rgba(255,255,255,.025)'],
  ['white-0125', 'rgba(255,255,255,.0125)'],

  ['dark-red', '#e7040f'],
  ['red', '#ff4136'],
  ['light-red', '#ff725c'],
  ['orange', '#ff6300'],
  ['gold', '#ffb700'],
  ['yellow', '#ffd700'],
  ['light-yellow', '#fbf1a9'],
  ['purple', '#5e2ca5'],
  ['light-purple', '#a463f2'],
  ['dark-pink', '#d5008f'],
  ['hot-pink', '#ff41b4'],
  ['pink', '#ff80cc'],
  ['light-pink', '#ffa3d7'],
  ['dark-green', '#137752'],
  ['green', '#19a974'],
  ['light-green', '#9eebcf'],
  ['navy', '#001b44'],
  ['dark-blue', '#00449e'],
  ['blue', '#357edd'],
  ['light-blue', '#96ccff'],
  ['lightest-blue', '#cdecff'],
  ['washed-blue', '#f6fffe'],
  ['washed-green', '#e8fdf5'],
  ['washed-yellow', '#fffceb'],
  ['washed-red', '#ffdfdf'],

  'transparent',
  'inherit',
];

const lists = [
  ['colors', colors],
  ['directions', directions],
  ['spacingSizes', spacingSizes],
  ['spacingDirections', spacingDirections],
  ['spacingNegativeSizes', spacingNegativeSizes],
  ['spacingNegativeDirections', spacingNegativeDirections],
  ['overflows', overflows],
];

const defaultClassTemplate = '.$prefix$mapKey$suffix$mediaQuery';
const defaultRuleTemplate = '$mapValue';

const rules = [
  [
    'normalize',
    {
      staticRules: normalizeCss,
    },
  ],
  [
    'box-sizing',
    {
      staticRules: boxSizingCss,
    }
  ],
  [
    'aspect-ratios',
    {
      prefix: 'aspect-ratio',
      repeatForMediaQueries: true,

      // map uses the rule's classTemplate and ruleTemplate if specified, and falls back
      // to defaultClassTemplate and defaultRuleTemplate respectively when unspecified
      map: [
        ['--16x9', '56.25'],
        ['--9x16', '177.77'],
        ['--4x3', '75'],
        ['--3x4', '133.33'],
        ['--6x4', '66.6'],
        ['--4x6', '150'],
        ['--8x5', '62.5'],
        ['--5x8', '160'],
        ['--7x5', '71.42'],
        ['--5x7', '140'],
        ['--1x1', '100'],
      ],
      ruleTemplate: 'padding-bottom: $mapValue%;',

      // mapWithDefaultTemplates uses the defaultClassTemplate and defaultRuleTemplate
      mapWithDefaultTemplates: [
        ['', 'height: 0; position: relative;'],
        ['--object', 'position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%; z-index: 100;'],
      ],
    },
  ],
  [
    'images',
    {
      staticRules: imagesCss,
    },
  ],
  [
    'background-size',
    {
      prefix: '',
      repeatForMediaQueries: true,
      map: [
        ['cover', 'cover'],
        ['contain', 'contain'],
      ],
      ruleTemplate: 'background-size: $mapValue!important;',
    },
  ],
  [
    'background-position',
    {
      prefix: 'bg-',
      repeatForMediaQueries: true,
      map: [
        ['center', 'center center'],
        ['top', 'top center'],
        ['right', 'center right'],
        ['bottom', 'bottom center'],
        ['left', 'center left'],
      ],
      ruleTemplate: 'background-repeat: no-repeat; background-position: $mapValue;',
    },
  ],
  [
    'outlines',
    {
      prefix: 'outline',
      repeatForMediaQueries: true,
      map: [
        ['', '1px solid'],
        ['-transparent', '1px solid transparent'],
        ['-0', '0'],
      ],
      ruleTemplate: 'outline: $mapValue;',
    },
  ],
  [
    'borders',
    {
      prefix: 'b',
      repeatForMediaQueries: true,
      // for this particular rule, mapWithDefaultTemplates is equivalent because there is no ruleTemplate
      // nor classTemplate defined for the rule
      map: [
        ['a', 'border-style: solid; border-width: 1px;'],
        ['t', 'border-top-style: solid; border-top-width: 1px;'],
        ['r', 'border-right-style: solid; border-right-width: 1px;'],
        ['b', 'border-bottom-style: solid; border-bottom-width: 1px;'],
        ['l', 'border-left-style: solid; border-left-width: 1px;'],
        ['n', 'border-style: none; border-width: 0;'],
      ],
    },
  ],
  [
    'border-colors',
    {
      prefix: 'b--',
      repeatFor: ['colors'],
      classTemplate: '.$prefix$colorsKey',
      ruleTemplate: 'border-color: $colorsValue;',
    },
  ],
  [
    'border-radius',
    {
      prefix: 'br',
      repeatForMediaQueries: true,
      map: [
        ['0', '0'],
        ['1', '.125rem'],
        ['2', '.25rem'],
        ['3', '.5rem'],
        ['4', '1rem'],
        ['-100', '100%'],
        ['-pill', '9999px'],
      ],
      ruleTemplate: 'border-radius: $mapValue;',
      mapWithDefaultTemplates: [
        ['--bottom', 'border-top-left-radius: 0; border-top-right-radius: 0;'],
        ['--top', 'border-bottom-left-radius: 0; border-bottom-right-radius: 0;'],
        ['--right', 'border-top-left-radius: 0; border-bottom-left-radius: 0;'],
        ['--left', 'border-top-right-radius: 0; border-bottom-right-radius: 0;'],
      ],
    },
  ],
  [
    'border-style',
    {
      prefix: 'b--',
      repeatForMediaQueries: true,
      map: [
        'dotted',
        'dashed',
        'solid',
        'none',
      ],
      ruleTemplate: 'border-style: $mapValue;',
    },
  ],
  [
    'border-widths',
    {
      prefix: 'b',
      repeatForMediaQueries: true,
      map: [
        ['w0', '0'],
        ['w1', '.125rem'],
        ['w2', '.25rem'],
        ['w3', '.5rem'],
        ['w4', '1rem'],
        ['w5', '2rem'],
      ],
      ruleTemplate: 'border-width: $mapValue;',
      mapWithDefaultTemplates: [
        ['t-0', 'border-top-width: 0;'],
        ['r-0', 'border-right-width: 0;'],
        ['b-0', 'border-bottom-width: 0;'],
        ['l-0', 'border-left-width: 0;'],
      ],
    },
  ],
  [
    'box-shadow',
    {
      prefix: 'shadow-',
      repeatForMediaQueries: true,
      map: [
        ['1', '0px 0px 4px 2px'],
        ['2', '0px 0px 8px 2px'],
        ['3', '2px 2px 4px 2px'],
        ['4', '2px 2px 8px 0px'],
        ['5', '4px 4px 8px 0px'],
      ],
      ruleTemplate: 'box-shadow: $mapValue rgba( 0, 0, 0, 0.2 );',
    },
  ],
  [
    'code',
    {
      staticRules: codeCss,
    },
  ],
  [
    'coordinates',
    {
      repeatFor: ['directions'],
      repeatForMediaQueries: true,
      map: [
        ['-0', '0'],
        ['-1', '1rem'],
        ['-2', '2rem'],
        ['--1', '-1rem'],
        ['--2', '-2rem'],
      ],
      classTemplate: '.$directionsKey$mapKey$mediaQuery',
      ruleTemplate: '$directionsKey: $mapValue;',
      mapWithDefaultTemplates: [
        ['absolute--fill', 'top: 0; right: 0; bottom: 0; left: 0;'],
      ],
    },
  ],
  [
    'clears',
    {
      staticRules:
        `
.cf:before,
.cf:after { content: " "; display: table; }
.cf:after { clear: both; }
.cf { *zoom: 1; }
`,
      prefix: 'c',
      repeatForMediaQueries: true,
      map: [
        ['l', 'left'],
        ['r', 'right'],
        ['b', 'both'],
        ['n', 'none'],
      ],
      ruleTemplate: 'clear: $mapValue;',
    },
  ],
  [
    'display',
    {
      prefix: 'd',
      repeatForMediaQueries: true,
      map: [
        ['n', 'none'],
        ['i', 'inline'],
        ['b', 'block'],
        ['ib', 'inline-block'],
        ['it', 'inline-table'],
        ['t', 'table'],
        ['tc', 'table-cell'],
        ['t-row', 'table-row'],
        ['t-row-group', 'table-row-group'],
        ['t-column', 'table-column'],
        ['t-column-group', 'table-column-group'],
      ],
      ruleTemplate: 'display: $mapValue;',
      mapWithDefaultTemplates: [
        ['t--fixed', 'table-layout: fixed; width: 100%;'],
      ],
    },
  ],
  [
    'flexbox-base',
    {
      repeatForMediaQueries: true,
      mapWithDefaultTemplates: [
        ['flex', 'display: flex;'],
        ['inline-flex', 'display: inline-flex;'],
        ['flex-auto', 'flex: 1 1 auto; min-width: 0; min-height: 0;'],
        ['flex-none', 'flex: none;'],
        ['flex-column', 'flex-direction: column;'],
        ['flex-row', 'flex-direction: row;'],
        ['flex-wrap', 'flex-wrap: wrap;'],
        ['flex-nowrap', 'flex-wrap: nowrap;'],
        ['flex-wrap-reverse', 'flex-wrap: wrap-reverse;'],
        ['flex-column-reverse', 'flex-direction: column-reverse;'],
        ['flex-row-reverse', 'flex-direction: row-reverse;'],
      ],
    },
  ],
  [
    'flexbox-align-items',
    {
      prefix: 'items-',
      repeatForMediaQueries: true,
      map: [
        ['start', 'flex-start'],
        ['end', 'flex-end'],
        ['center', 'center'],
        ['baseline', 'baseline'],
        ['stretch', 'stretch'],
      ],
      ruleTemplate: 'align-items: $mapValue;',
    },
  ],
  [
    'flexbox-align-self',
    {
      prefix: 'self-',
      repeatForMediaQueries: true,
      map: [
        ['start', 'flex-start'],
        ['end', 'flex-end'],
        ['center', 'center'],
        ['baseline', 'baseline'],
        ['stretch', 'stretch'],
      ],
      ruleTemplate: 'align-self: $mapValue;',
    },
  ],
  [
    'flexbox-justify-content',
    {
      prefix: 'justify-',
      repeatForMediaQueries: true,
      map: [
        ['start', 'flex-start'],
        ['end', 'flex-end'],
        ['center', 'center'],
        ['between', 'space-between'],
        ['around', 'space-around'],
      ],
      ruleTemplate: 'justify-content: $mapValue;',
    },
  ],
  [
    'flexbox-align-content',
    {
      prefix: 'content-',
      repeatForMediaQueries: true,
      map: [
        ['start', 'flex-start'],
        ['end', 'flex-end'],
        ['center', 'center'],
        ['between', 'space-between'],
        ['around', 'space-around'],
        ['stretch', 'stretch'],
      ],
      ruleTemplate: 'align-content: $mapValue;',
    },
  ],
  [
    'flexbox-order',
    {
      prefix: 'order-',
      repeatForMediaQueries: true,
      map: [
        ['0', '0'],
        ['1', '1'],
        ['2', '2'],
        ['3', '3'],
        ['4', '4'],
        ['5', '5'],
        ['6', '6'],
        ['7', '7'],
        ['8', '8'],
        ['last', '99999'],
      ],
      ruleTemplate: 'order: $mapValue;',
    },
  ],
  [
    'flexbox-grow',
    {
      prefix: 'flex-grow-',
      repeatForMediaQueries: true,
      map: [
        '0',
        '1',
      ],
      ruleTemplate: 'flex-grow: $mapValue;',
    },
  ],
  [
    'flexbox-shrink',
    {
      prefix: 'flex-shrink-',
      repeatForMediaQueries: true,
      map: [
        '0',
        '1',
      ],
      ruleTemplate: 'flex-shrink: $mapValue;',
    },
  ],
  [
    'floats',
    {
      prefix: 'f',
      repeatForMediaQueries: true,
      mapWithDefaultTemplates: [
        ['l', 'float: left; _display: inline;'],
        ['r', 'float: right; _display: inline;'],
        ['n', 'float: none'],
      ],
    },
  ],
  [
    'font-family',
    {
      staticRules: fontFamilyCss,
    },
  ],
  [
    'font-style',
    {
      repeatForMediaQueries: true,
      map: [
        ['i', 'italic'],
        ['fs-normal', 'normal'],
      ],
      ruleTemplate: 'font-style: $mapValue;',
    },
  ],
  [
    'font-weight-constants',
    {
      repeatForMediaQueries: true,
      map: [
        'normal',
        ['b', 'bold'],
      ],
      ruleTemplate: 'font-weight: $mapValue;',
    },
  ],
  [
    'font-weight',
    {
      prefix: 'fw',
      repeatForMediaQueries: true,
      map: [
        ['1', '100'],
        ['2', '200'],
        ['3', '300'],
        ['4', '400'],
        ['5', '500'],
        ['6', '600'],
        ['7', '700'],
        ['8', '800'],
        ['9', '900'],
      ],
      ruleTemplate: 'font-weight: $mapValue;',
    },
  ],
  [
    'forms',
    {
      staticRules: formsCss,
    },
  ],
  [
    'heights',
    {
      prefix: 'h',
      repeatForMediaQueries: true,
      map: [
        ['1', '1rem'],
        ['2', '2rem'],
        ['3', '4rem'],
        ['4', '8rem'],
        ['5', '16rem'],

        ['-25', '25%'],
        ['-50', '50%'],
        ['-75', '75%'],
        ['-100', '100%'],
      ],
      ruleTemplate: 'height: $mapValue;',
    },
  ],
  [
    'min-heights',
    {
      prefix: 'min-h',
      repeatForMediaQueries: true,
      map: [
        ['-100', '100%'],
      ],
      ruleTemplate: 'min-height: $mapValue;',
    },
  ],
  [
    'view-heights',
    {
      prefix: 'vh',
      repeatForMediaQueries: true,
      map: [
        ['-25', '25vh'],
        ['-50', '50vh'],
        ['-75', '75vh'],
        ['-100', '100vh'],
      ],
      ruleTemplate: 'height: $mapValue;',
    },
  ],
  [
    'min-view-heights',
    {
      prefix: 'min-vh',
      repeatForMediaQueries: true,
      map: [
        ['-100', '100vh'],
      ],
      ruleTemplate: 'min-height: $mapValue;',
    },
  ],
  [
    'heights-continued',
    {
      prefix: 'h',
      repeatForMediaQueries: true,
      map: [
        ['-auto', 'auto'],
        ['-inherit', 'inherit'],
      ],
      ruleTemplate: 'height: $mapValue;',
    },
  ],
  [
    'letter-spacing',
    {
      prefix: 'tracked',
      repeatForMediaQueries: true,
      map: [
        ['', '.1em'],
        ['-tight', '-.05em'],
        ['-mega', '.25em'],
      ],
      ruleTemplate: 'letter-spacing: $mapValue;',
    },
  ],
  [
    'line-height',
    {
      prefix: 'lh-',
      repeatForMediaQueries: true,
      map: [
        ['solid', '1'],
        ['title', '1.25'],
        ['copy', '1.5'],
      ],
      ruleTemplate: 'line-height: $mapValue;',
    },
  ],
  [
    'links',
    {
      staticRules: linksCss,
    },
  ],
  [
    'lists',
    {
      staticRules: listsCss,
    },
  ],
  [
    'max-widths',
    {
      prefix: 'mw',
      repeatForMediaQueries: true,
      map: [
        ['-100', '100%'],

        ['1', '1rem'],
        ['2', '2rem'],
        ['3', '4rem'],
        ['4', '8rem'],
        ['5', '16rem'],
        ['6', '32rem'],
        ['7', '48rem'],
        ['8', '64rem'],
        ['9', '96rem'],

        ['-none', 'none'],
      ],
      ruleTemplate: 'max-width: $mapValue;',
    },
  ],
  [
    'widths',
    {
      prefix: 'w',
      repeatForMediaQueries: true,
      map: [
        ['1', '1rem'],
        ['2', '2rem'],
        ['3', '4rem'],
        ['4', '8rem'],
        ['5', '16rem'],

        ['-10',  '10%'],
        ['-20',  '20%'],
        ['-25',  '25%'],
        ['-30',  '30%'],
        ['-33',  '33%'],
        ['-34',  '34%'],
        ['-40',  '40%'],
        ['-50',  '50%'],
        ['-60',  '60%'],
        ['-70',  '70%'],
        ['-75',  '75%'],
        ['-80',  '80%'],
        ['-90',  '90%'],
        ['-100', '100%'],

        ['-third', 'calc(100% / 3)'],
        ['-two-third', 'calc(100% / 1.5)'],
        ['-auto', 'auto'],
      ],
      ruleTemplate: 'width: $mapValue;',
    },
  ],
  [
    'overflow',
    {
      prefix: 'overflow',
      repeatFor: ['overflows'],
      repeatForMediaQueries: true,
      map: ['', '-x', '-y'],
      classTemplate: '.$prefix$mapKey-$overflowsKey$mediaQuery',
      ruleTemplate: 'overflow$mapKey: $overflowsKey;',
    },
  ],
  [
    'position',
    {
      repeatForMediaQueries: true,
      map: [ 'static', 'relative', 'absolute', 'fixed' ],
      ruleTemplate: 'position: $mapValue;',
    },
  ],
  [
    'opacity',
    {
      prefix: 'o-',
      map: [
        ['100', '1'],
        ['90', '.9'],
        ['80', '.8'],
        ['70', '.7'],
        ['60', '.6'],
        ['50', '.5'],
        ['40', '.4'],
        ['30', '.3'],
        ['20', '.2'],
        ['10', '.1'],
        ['05', '.05'],
        ['025', '.025'],
        ['0', '0'],
      ],
      ruleTemplate: 'opacity: $mapValue;',
    },
  ],
  [
    'rotations',
    {
      prefix: 'rotate-',
      repeatForMediaQueries: true,
      map: [
        '45',
        '90',
        '135',
        '180',
        '225',
        '270',
        '315',
      ],
      ruleTemplate: 'transform: rotate($mapValuedeg);',
    },
  ],
  [
    'skins',
    {
      repeatFor: ['colors'],
      classTemplate: '.$colorsKey',
      ruleTemplate: 'color: $colorsValue;',
    },
  ],
  [
    'skins-bg',
    {
      repeatFor: ['colors'],
      classTemplate: '.bg-$colorsKey',
      ruleTemplate: 'background-color: $colorsValue;',
    },
  ],
  [
    'skins-pseudo-hover-color',
    {
      repeatFor: ['colors'],
      classTemplate: '.hover-$colorsKey:hover,.hover-$colorsKey:focus',
      ruleTemplate: 'color: $colorsValue;',
    },
  ],
  [
    'skins-pseudo-hover-bg-color',
    {
      repeatFor: ['colors'],
      classTemplate: '.hover-bg-$colorsKey:hover, .hover-bg-$colorsKey:focus',
      ruleTemplate: 'background-color: $colorsValue;',
    },
  ],
  [
    'spacing',
    {
      repeatForMediaQueries: true,
      repeatFor: ['spacingDirections', 'spacingSizes'],
      map: [
        ['p', 'padding'],
        ['m', 'margin'],
      ],
      classTemplate: '.$mapKey$spacingDirectionsKey$spacingSizesKey$mediaQuery',
      ruleTemplate: '$spacingDirectionsValue;',
    },
  ],
  [
    'negative-spacing',
    {
      repeatForMediaQueries: true,
      repeatFor: ['spacingNegativeDirections', 'spacingNegativeSizes'],
      map: [
        ['n', 'margin'],
      ],
      classTemplate: '.$mapKey$spacingNegativeDirectionsKey$spacingNegativeSizesKey$mediaQuery',
      ruleTemplate: '$spacingNegativeDirectionsValue;',
    },
  ],
  [
    'tables',
    {
      staticRules: tablesCss,
    },
  ],
  [
    'text-decoration',
    {
      repeatForMediaQueries: true,
      map: [
        ['strike', 'line-through'],
        ['underline', 'underline'],
        ['no-underline', 'none'],
      ],
      ruleTemplate: 'text-decoration: $mapValue;',
    },
  ],
  [
    'text-align',
    {
      prefix: 't',
      repeatForMediaQueries: true,
      map: [
        ['l', 'left'],
        ['r', 'right'],
        ['c', 'center'],
        ['j', 'justify'],
      ],
      ruleTemplate: 'text-align: $mapValue;',
    },
  ],
  [
    'text-transform',
    {
      prefix: 'tt',
      repeatForMediaQueries: true,
      map: [
        ['c', 'capitalize'],
        ['l', 'lowercase'],
        ['u', 'uppercase'],
        ['n', 'none'],
      ],
      ruleTemplate: 'text-transform: $mapValue;',
    },
  ],
  [
    'type-scale',
    {
      repeatForMediaQueries: true,
      prefix: 'f',
      map: [
        [['-6','-headline'], '6'],     // equivalent to ['-6', '6'], ['-headline', '6'],
        [['-5', '-subheadline'], '5'], // equivalent to ['-5', '5'], ['-subheadline', '5'],
        ['1', '3'],
        ['2', '2.25'],
        ['3', '1.5'],
        ['4', '1.25'],
        ['5', '1'],
        ['6', '.875'],
        ['7', '.75'],
      ],
      ruleTemplate: 'font-size: $mapValuerem;',
    },
  ],
  [
    'typography',
    {
      repeatForMediaQueries: true,
      mapWithDefaultTemplates: [
        ['measure', 'max-width: 30em;'],
        ['measure-wide', 'max-width: 34em;'],
        ['measure-narrow', 'max-width: 20em;'],
        ['indent', 'text-indent: 1em; margin-top: 0; margin-bottom: 0;'],
        ['small-caps', 'font-variant: small-caps;'],
        ['truncate', 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'],
      ],
    },
  ],
  [
    'static-utilities',
    {
      staticRules: '.overflow-container { overflow-y: scroll; }',
    },
  ],
  [
    'custom-utilities',
    {
      repeatForMediaQueries: true,
      mapWithDefaultTemplates: [
        ['center', 'margin-right: auto; margin-left: auto;'],
        ['mr-auto', 'margin-right: auto;'],
        ['ml-auto', 'margin-left: auto;'],
      ],
    },
  ],
  [
    'visibility',
    {
      repeatForMediaQueries: true,
      mapWithDefaultTemplates: [
        ['clip', 'position: fixed !important; _position: absolute !important; clip: rect(1px 1px 1px 1px); /* IE6, IE7 */ clip: rect(1px, 1px, 1px, 1px);'],
      ],
    },
  ],
  [
    'white-space',
    {
      repeatForMediaQueries: true,
      map: [
        ['ws-normal', 'normal'],
        ['nowrap', 'nowrap'],
        ['pre', 'pre'],
      ],
      ruleTemplate: 'white-space: $mapValue;',
    },
  ],
  [
    'vertical-align',
    {
      prefix: 'v-',
      repeatForMediaQueries: true,
      map: [
        ['base', 'baseline'],
        ['mid', 'middle'],
        ['top', 'top'],
        ['btm', 'bottom'],
      ],
      ruleTemplate: 'vertical-align: $mapValue;',
    },
  ],
  [
    'hovers',
    {
      staticRules: hoversCss,
    },
  ],
  [
    'z-index',
    {
      staticRules: zIndexCss,
    },
  ],
  [
    'nested',
    {
      staticRules: nestedCss,
    },
  ],
  [
    'debug-children',
    {
      staticRules: debugChildrenCss,
    },
  ],
  [
    'debug-grid',
    {
      staticRules: debugGridCss,
    },
  ],
];

const tachyonsConfig = {
  lists,
  defaultClassTemplate,
  defaultRuleTemplate,
  mediaQueries,
  rules,
};

console.log('config', util.inspect(tachyonsConfig, {showHidden: false, depth: null}));

console.log(
  'tachyons css',
  (new ParticleEmitter(tachyonsConfig)).getCss()
);

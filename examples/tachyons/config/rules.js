import normalize from './rules/normalize';
import boxSizing from './rules/boxSizing';
import aspectRatio from './rules/aspectRatio';
import image from './rules/image';
import backgroundSize from './rules/backgroundSize';
import backgroundPosition from './rules/backgroundPosition';
import outline from './rules/outline';
import borders from './rules/border';
import borderColor from './rules/borderColor';
import borderRadius from './rules/borderRadius';
import borderStyle from './rules/borderStyle';
import borderWidth from './rules/borderWidth';
import boxShadow from './rules/boxShadow';
import code from './rules/code';
import coordinate from './rules/coordinate';
import clear from './rules/clear';
import display from './rules/display';
import flexboxBase from './rules/flexboxBase';
import flexboxAlignItems from './rules/flexboxAlignItems';
import flexboxAlignSelf from './rules/flexboxAlignSelf';
import flexboxJustifyContent from './rules/flexboxJustifyContent';
import flexboxAlignContent from './rules/flexboxAlignContent';
import flexboxOrder from './rules/flexboxOrder';
import flexboxGrow from './rules/flexbox-grow';
import flexboxShrink from './rules/flexboxShrink';
import float from './rules/float';
import fontFamily from './rules/fontFamily'; // "Hi, we're the Fonts!"
import fontStyle from './rules/fontStyle';
import fontWeightConstants from './rules/fontWeightConstants';
import fontWeight from './rules/fontWeight';
import form from './rules/form';
import height from './rules/height';
import minHeight from './rules/minHeight';
import viewHeight from './rules/viewHeight';
import minViewHeight from './rules/minViewHeight';
import heightContinued from './rules/heightContinued';
import letterSpacing from './rules/letterSpacing';
import lineHeight from './rules/lineHeight';
import links from './rules/links';
import lists from './rules/lists';
import maxWidth from './rules/maxWidth';
import width from './rules/width';
import overflow from './rules/overflow';
import position from './rules/position';
import opacity from './rules/opacity';
import rotate from './rules/rotate';
import color from './rules/color';
import backgroundColor from './rules/backgroundColor';
import hoverColor from './rules/hoverColor';
import hoverBackgroundColor from './rules/hoverBackgroundColor';
import spacing from './rules/spacing';
import negativeSpacing from './rules/negativeSpacing';
import tables from './rules/tables';
import textDecoration from './rules/textDecoration'
import textAlign from './rules/textAlign'
import textTransform from './rules/textTransform'
import typeScale from './rules/typeScale'
import typography from './rules/typography';
import utility from './rules/utility';
import visibility from './rules/visibility';
import whiteSpace from './rules/whiteSpace';
import verticalAlign from './rules/verticalAlign';
import hover from './rules/hover';
import zIndex from './rules/zIndex';
import nested from './rules/nested';
import debugChildren from './rules/debugChildren';
import debugGrid from './rules/debugGrid';

export default [
  ['Normalize.css', normalize],
  ['Border box box-sizing', boxSizing],
  ['Aspect ratios', aspectRatio],
  ['Keep images inside parent', image],
  ['Background sizes', backgroundSize],
  ['Background positions', backgroundPosition],
  ['Outlines', outline],
  ['Borders', borders],
  ['Border colors', borderColor],
  ['Border radii', borderRadius],
  ['Border styles', borderStyle],
  ['Border widths', borderWidth],
  ['Box shadow', boxShadow],
  ['Code', code],
  ['Coordinates', coordinate],
  ['Clears', clear],
  ['Display', display],
  ['Flexbox: base', flexboxBase],
  ['Flexbox: align-items', flexboxAlignItems],
  ['Flexbox: align-self', flexboxAlignSelf],
  ['Flexbox: justify-content', flexboxJustifyContent],
  ['Flexbox: align-content', flexboxAlignContent],
  ['Flexbox: order', flexboxOrder],
  ['Flexbox: grow', flexboxGrow],
  ['Flexbox: shrink', flexboxShrink],
  ['Floats', float],
  ['Font families', fontFamily],
  ['Font styles', fontStyle],
  ['Base font weights', fontWeightConstants],
  ['Font weights', fontWeight],
  ['Forms', form],
  ['Heights', height],
  ['Min heights', minHeight],
  ['Heights in vh', viewHeight],
  ['Min heights in vh', minViewHeight],
  ['Heights continued', heightContinued],
  ['Letter spacing', letterSpacing],
  ['Line heights', lineHeight],
  ['Links', links],
  ['Lists', lists],
  ['Max widths', maxWidth],
  ['Widths', width],
  ['Overflow', overflow],
  ['Position', position],
  ['Opacity', opacity],
  ['Rotation', rotate],
  ['Skins / text color', color],
  ['Background colors', backgroundColor],
  ['Hover+focus skins / text colors', hoverColor],
  ['Hover+focus background colors', hoverBackgroundColor],
  ['Spacing (padding and margin)', spacing],
  ['Negative spacing (padding and margin)', negativeSpacing],
  ['Tables', tables],
  ['Text decoration', textDecoration],
  ['Text alignment', textAlign],
  ['Text transformation', textTransform],
  ['Type scale', typeScale],
  ['Typography', typography],
  ['Utilities', utility],
  ['Visibility', visibility],
  ['White space', whiteSpace],
  ['Vertical alignment', verticalAlign],
  ['Hovers', hover],
  ['Z-indices', zIndex],
  ['Nested', nested],
  ['Debug children', debugChildren],
  ['Debug grid', debugGrid],
];

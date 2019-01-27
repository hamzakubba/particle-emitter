import mediaQueries from './config/media-queries';
import lists from './config/lists';
import rules from './config/rules';

export default {
  defaultSelectorTemplate: '.$prefix$mapKey$suffix$mediaQuery',
  defaultRuleTemplate: '$mapValue',
  mediaQueries,
  lists,
  rules,
};

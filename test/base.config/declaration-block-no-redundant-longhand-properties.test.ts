import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.DeclarationBlockNoRedundantLonghandProperties,
  reject: [
    {
      name: 'should disallow longhand properties that can be combined into one shorthand property',
      code: `.test {
        padding-top: 1px;
        padding-bottom: 2px;
        padding-left: 3px;
        padding-right: 4px;
      }`,
      expect: {
        errored: true,
        messages: ['Expected shorthand property "padding"'],
        severities: ['error'],
      },
    },
  ],
});

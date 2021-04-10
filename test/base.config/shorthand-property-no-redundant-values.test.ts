import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.ShorthandPropertyNoRedundantValues,
  reject: [
    {
      name: 'should disallow redundant values in shorthand properties',
      code: `.test {
        margin: 1px 1px;
        margin: 1px 1px 1px 1px;
        padding: 1px 2px 1px;
        border-radius: 1px 2px 1px 2px;
        -webkit-border-radius: 1px 1px 1px 1px;
      }`,
      expect: {
        errored: true,
        messages: [
          "Unexpected longhand value '1px 1px' instead of '1px'",
          "Unexpected longhand value '1px 1px 1px 1px' instead of '1px'",
          "Unexpected longhand value '1px 2px 1px' instead of '1px 2px'",
          "Unexpected longhand value '1px 2px 1px 2px' instead of '1px 2px'",
          "Unexpected longhand value '1px 1px 1px 1px' instead of '1px'",
        ],
        severities: new Array(5).fill('error'),
      },
    },
  ],
});

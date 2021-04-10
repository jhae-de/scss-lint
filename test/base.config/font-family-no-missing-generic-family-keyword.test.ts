import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.FontFamilyNoMissingGenericFamilyKeyword,
  reject: [
    {
      name: 'should disallow missing generic font family',
      code: `.test {
        font: 1em Arial;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected missing generic font family'],
        severities: ['error'],
      },
    },
  ],
});

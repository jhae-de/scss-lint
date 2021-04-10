import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.ValueNoVendorPrefix,
  reject: [
    {
      name: 'should disallow vendor prefixes for values',
      code: `.test {
        display: -webkit-flex;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected vendor-prefix "-webkit-flex"'],
        severities: ['error'],
      },
    },
  ],
});

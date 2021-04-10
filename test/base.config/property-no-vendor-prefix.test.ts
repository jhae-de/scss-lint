import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.PropertyNoVendorPrefix,
  reject: [
    {
      name: 'should disallow vendor prefixes for properties',
      code: `.test {
        -webkit-transform: scale(1);
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected vendor-prefix "-webkit-transform"'],
        severities: ['error'],
      },
    },
  ],
});

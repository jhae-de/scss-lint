import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.AtRuleNoVendorPrefix,
  reject: [
    {
      name: 'should disallow vendor prefixes for at-rules',
      code: `@-webkit-keyframes {
        0% { top: 0; }
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected vendor-prefixed at-rule "@-webkit-keyframes"'],
        severities: ['error'],
      },
    },
  ],
});

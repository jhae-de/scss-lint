import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.SelectorNoVendorPrefix,
  reject: [
    {
      name: 'should disallow vendor prefixes for selectors',
      code: `
        input::-moz-placeholder {}
        :-webkit-full-screen .test {}
      `,
      expect: {
        errored: true,
        messages: ['::-moz-placeholder', ':-webkit-full-screen'].map(
          (selector) => `Unexpected vendor-prefix "${selector}"`
        ),
        severities: new Array(2).fill('error'),
      },
    },
  ],
});

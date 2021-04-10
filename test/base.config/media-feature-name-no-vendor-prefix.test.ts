import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.MediaFeatureNameNoVendorPrefix,
  reject: [
    {
      name: 'should disallow vendor prefixes for media feature names',
      code: `
        @media (-webkit-min-device-pixel-ratio: 1) {}
        @media (min--mox-device-pixel-ratio: 1) {}
        @media (-o-max-device-pixel-ratio: 1/1) {}
      `,
      expect: {
        errored: true,
        messages: new Array(3).fill('Unexpected vendor-prefix'),
        severities: new Array(3).fill('error'),
      },
    },
  ],
});

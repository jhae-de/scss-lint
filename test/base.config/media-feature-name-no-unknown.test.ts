import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.MediaFeatureNameNoUnknown,
  reject: [
    {
      name: 'should disallow unknown media feature names',
      code: '@media (unknown) {}',
      expect: {
        errored: true,
        messages: ['Unexpected unknown media feature name "unknown"'],
        severities: ['error'],
      },
    },
  ],
});

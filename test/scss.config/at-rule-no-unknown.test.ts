import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtRuleNoUnknown,
  reject: [
    {
      name: 'should disallow unknown at-rules',
      code: '@unknown {}',
      expect: {
        errored: true,
        messages: ['Unexpected unknown at-rule "@unknown"'],
        severities: ['error'],
      },
    },
  ],
});

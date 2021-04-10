import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.AtRuleDisallowedList,
  reject: [
    {
      name: 'should disallow "@import"',
      code: '@import "test.css";',
      expect: {
        errored: true,
        messages: ['Unexpected at-rule "import"'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow "@debug"',
      code: '@debug "Debug";',
      expect: {
        errored: true,
        messages: ['Unexpected at-rule "debug"'],
        severities: ['error'],
      },
    },
  ],
});

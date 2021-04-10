import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.SelectorPseudoClassNoUnknown,
  reject: [
    {
      name: 'should disallow unknown pseudo-class selectors',
      code: 'a:unknown {}',
      expect: {
        errored: true,
        messages: ['Unexpected unknown pseudo-class selector ":unknown"'],
        severities: ['error'],
      },
    },
  ],
});

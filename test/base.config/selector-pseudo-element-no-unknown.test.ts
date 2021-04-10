import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.SelectorPseudoElementNoUnknown,
  reject: [
    {
      name: 'should disallow unknown pseudo-element selectors',
      code: 'a::pseudo {}',
      expect: {
        errored: true,
        messages: ['Unexpected unknown pseudo-element selector "::pseudo"'],
        severities: ['error'],
      },
    },
  ],
});

import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.SelectorPseudoElementColonNotation,
  reject: [
    {
      name: 'should disallow single colon notation',
      code: `
        a:before {}
        a:after {}
      `,
      expect: {
        errored: true,
        messages: new Array(2).fill('Expected double colon pseudo-element notation'),
        severities: new Array(2).fill('error'),
      },
    },
  ],
});

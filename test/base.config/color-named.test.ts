import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.ColorNamed,
  reject: [
    {
      name: 'should disallow named colors',
      code: `.test {
        color: black;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected named color "black"'],
        severities: ['error'],
      },
    },
  ],
});

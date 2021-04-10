import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.FunctionLinearGradientNoNonstandardDirection,
  reject: [
    {
      name: 'should disallow nonstandard directions',
      code: `.test {
        background: linear-gradient(bottom, #FFFFFF, #000000);
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected nonstandard direction'],
        severities: ['error'],
      },
    },
  ],
});

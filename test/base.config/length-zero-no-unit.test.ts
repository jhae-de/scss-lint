import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.LengthZeroNoUnit,
  reject: [
    {
      name: 'should disallow units for zero lenghts',
      code: `.test {
        top: 0px;
        bottom: 0.000em
      }`,
      expect: {
        errored: true,
        messages: new Array(2).fill('Unexpected unit'),
        severities: new Array(2).fill('error'),
      },
    },
  ],
});

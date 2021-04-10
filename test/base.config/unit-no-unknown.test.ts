import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.UnitNoUnknown,
  reject: [
    {
      name: 'should disallow unknown units',
      code: `.test {
        width: 10pixels;
        height: calc(10px + 10pixels);
      }`,
      expect: {
        errored: true,
        messages: new Array(2).fill('Unexpected unknown unit "pixels"'),
        severities: new Array(2).fill('error'),
      },
    },
  ],
});

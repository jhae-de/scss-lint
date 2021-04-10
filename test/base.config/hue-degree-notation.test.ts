import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.HueDegreeNotation,
  reject: [
    {
      name: 'should disallow numbers (hsl)',
      code: `.test {
        color: hsl(198 28% 50%);
      }`,
      expect: {
        errored: true,
        messages: ['Expected "198" to be "198deg"'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow numbers (lch)',
      code: `.test {
        color: lch(56.29% 19.86 10 / 15%);
      }`,
      expect: {
        errored: true,
        messages: ['Expected "10" to be "10deg"'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow angles (hsl)',
      code: `.test {
        color: hsl(198deg 28% 50%)
      }`,
    },
    {
      name: 'should allow angles (lch)',
      code: `.test {
        color: lch(56.29% 19.86 10deg / 15%)
      }`,
    },
  ],
});

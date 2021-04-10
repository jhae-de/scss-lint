import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.PropertyNoUnknown,
  reject: [
    {
      name: 'should disallow unknown properties',
      code: `.test {
        test-property: 1;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected unknown property "test-property"'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow unknown properties within "@supports"',
      code: `@supports (display: grid) {
        .test {
          test-property: 1;
        }
      }`,
    },
    {
      name: 'should allow unknown properties within "@counter-style"',
      code: `@counter-style test {
        test-property: 1;
      }`,
    },
  ],
});

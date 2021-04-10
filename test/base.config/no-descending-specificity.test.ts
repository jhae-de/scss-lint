import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.NoDescendingSpecificity,
  reject: [
    {
      name: 'should disallow lower specificity after higher specificity',
      code: `
        .test-1-1 .test-1-2 {}
        .test-1-2 {}
      `,
      expect: {
        errored: true,
        messages: ['Expected selector ".test-1-2" to come before selector ".test-1-1 .test-1-2"'],
        severities: ['error'],
      },
    },
  ],
});

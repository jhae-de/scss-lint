import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.NoDuplicateSelectors,
  reject: [
    {
      name: 'should disallow duplicated selectors',
      code: `
        .test-1 {}
        .test-2 {}
        .test-1 {}
      `,
      expect: {
        errored: true,
        messages: ['Unexpected duplicate selector ".test-1", first used at line 2'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow duplicated selectors in lists',
      code: `
        .test-1, .test-2 {}
        .test-1 {}
      `,
    },
  ],
});

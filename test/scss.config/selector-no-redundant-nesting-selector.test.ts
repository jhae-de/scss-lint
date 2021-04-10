import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.SelectorNoRedundantNestingSelector,
  reject: [
    {
      name: 'should disallow redundant nesting selectors',
      code: `
        .test-1-1 {
          & .test-1-2 {}
        }
        
        .test-2-1 {
          & > .test-2-2 {}
        }
        
        .test-3-1 {
          & .test-3-2 {}
        }
        
        .test-4-1 {
          & + .test-4-2 {}
        }
      `,
      expect: {
        errored: true,
        messages: new Array(4).fill('Unnecessary nesting selector (&)'),
        severities: new Array(4).fill('error'),
      },
    },
  ],
});

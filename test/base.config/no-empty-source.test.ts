import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.NoEmptySource,
  reject: [
    {
      name: 'should disallow empty sources',
      code: `
      
      `,
      expect: {
        errored: true,
        messages: ['Unexpected empty source'],
        severities: ['error'],
      },
    },
  ],
});

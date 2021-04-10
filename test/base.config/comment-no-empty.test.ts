import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.CommentNoEmpty,
  reject: [
    {
      name: 'should disallow empty comments',
      code: `
        /**/
        /* */
        /*

        */
      `,
      expect: {
        errored: true,
        messages: new Array(3).fill('Unexpected empty comment'),
        severities: new Array(3).fill('error'),
      },
    },
  ],
});

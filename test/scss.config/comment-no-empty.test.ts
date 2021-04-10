import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.CommentNoEmpty,
  reject: [
    {
      name: 'should disallow empty comments',
      code: `
        /**/
        /* */
        /*
        
         */
        //
      `,
      expect: {
        errored: true,
        messages: new Array(4).fill('Unexpected empty comment'),
        severities: new Array(4).fill('error'),
      },
    },
  ],
});

import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.StringNoNewline,
  reject: [
    {
      name: 'should disallow (unescaped) newlines in strings',
      code: `
        .test {
          content: 'first
            second';
          font-family: 'Times
            New
            Roman';
        }
        
        [title='something
        is probably wrong'] {}
      `,
      expect: {
        errored: true,
        messages: new Array(3).fill('Unexpected newline in string'),
        severities: new Array(3).fill('error'),
      },
    },
  ],
});

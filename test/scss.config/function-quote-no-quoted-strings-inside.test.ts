import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.FunctionQuoteNoQuotedStringsInside,
  reject: [
    {
      name: 'should disallow quoted strings inside the quote function',
      code: `
        $test: 'Helvetica';
        .test {
          font-family: quote($test);
        }
      `,
      expect: {
        errored: true,
        messages: ['Quote function used with an already-quoted string'],
        severities: ['error'],
      },
    },
  ],
});

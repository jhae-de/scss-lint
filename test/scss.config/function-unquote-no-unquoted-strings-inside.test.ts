import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.FunctionUnquoteNoUnquotedStringsInside,
  reject: [
    {
      name: 'should disallow unquoted strings inside the unquote function',
      code: `
        $test: Helvetica;
        .test {
          font-family: unquote($test);
        }
      `,
      expect: {
        errored: true,
        messages: ['Unquote function used with an already-unquoted string'],
        severities: ['error'],
      },
    },
  ],
});

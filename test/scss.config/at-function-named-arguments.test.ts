import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtFunctionNamedArguments,
  reject: [
    {
      name: 'should require named arguments in function calls',
      code: `
        .test {
          animation: animation(250ms, 100ms, infinite);
          border: reset($value: 20, 'bar', $color: #FFFFFF);
        }
      `,
      expect: {
        errored: true,
        messages: new Array(4).fill('Expected a named parameter to be used in function call'),
        severities: new Array(4).fill('error'),
      },
    },
  ],
  accept: [
    {
      name: 'should allow unnamed single argument in function calls',
      code: `
        .test {
          animation: animation(250ms);
          animation: animation($duration: 250ms);
          animation: animation($duration: 250ms, $delay: 100ms, $direction: infinite);
        }
      `,
    },
  ],
});

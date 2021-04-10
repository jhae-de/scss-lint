import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.NoGlobalFunctionNames,
  reject: [
    {
      name: 'should disallow the use of global function names',
      code: `
        .test {
          background: adjust-color(#6B717F, $red: 15);
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected color.adjust instead of adjust-color'],
        severities: ['error'],
      },
    },
  ],
});

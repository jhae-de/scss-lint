import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.MapKeysQuotes,
  reject: [
    {
      name: 'should disallow unquoted keys in maps',
      code: '$test: (Helvetica: 14px, Arial: 25px);',
      expect: {
        errored: true,
        messages: new Array(2).fill('Expected keys in map to be quoted.'),
        severities: new Array(2).fill('error'),
      },
    },
  ],
});

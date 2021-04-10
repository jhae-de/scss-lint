import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.DeclarationBlockNoDuplicateProperties,
  reject: [
    {
      name: 'should disallow duplicated properties within declaration blocks',
      code: `.test {
        color: #000000;
        color: #FFFFFF;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected duplicate "color"'],
        severities: ['error'],
      },
    },
  ],
});

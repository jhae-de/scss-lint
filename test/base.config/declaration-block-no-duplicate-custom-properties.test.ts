import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.DeclarationBlockNoDuplicateCustomProperties,
  reject: [
    {
      name: 'should disallow duplicated custom properties within declaration blocks',
      code: `.test {
        --custom-property: #000000;
        --custom-property: #FFFFFF;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected duplicate "--custom-property"'],
        severities: ['error'],
      },
    },
  ],
});

import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.DeclarationBlockNoShorthandPropertyOverrides,
  reject: [
    {
      name: 'should disallow shorthand properties that override related longhand properties',
      code: `.test {
        padding-left: 10px;
        padding: 20px;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected shorthand "padding" after "padding-left"'],
        severities: ['error'],
      },
    },
  ],
});

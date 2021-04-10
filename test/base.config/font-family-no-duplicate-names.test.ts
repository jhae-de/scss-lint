import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.FontFamilyNoDuplicateNames,
  reject: [
    {
      name: 'should disallow duplicated font family names',
      code: `.test {
        font: 1em 'Arial', Arial, sans-serif;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected duplicate name Arial'],
        severities: ['error'],
      },
    },
  ],
});

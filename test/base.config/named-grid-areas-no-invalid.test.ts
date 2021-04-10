import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.NamedGridAreasNoInvalid,
  reject: [
    {
      name: 'should disallow invalid named grid areas (no cell tokens)',
      code: `.test {
        grid-template-areas: '';
      }`,
      expect: {
        errored: true,
        messages: ['Expected cell token within string'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow invalid named grid areas (same number of cell tokens)',
      code: `.test {
        grid-template-areas:
          'a a a'
          'b b b b';
      }`,
      expect: {
        errored: true,
        messages: ['Expected same number of cell tokens in each string'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow invalid named grid areas (no single filled-in rectangle)',
      code: `.test {
        grid-template-areas:
          'a a a'
          'b b a';
      }`,
      expect: {
        errored: true,
        messages: ['Expected single filled-in rectangle for "a"'],
        severities: ['error'],
      },
    },
  ],
});

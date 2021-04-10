import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtExtendNoMissingPlaceholder,
  reject: [
    {
      name: 'should disallow "@extend" with missing placeholder',
      code: `
        .test {
          @extend .class;
          @extend #identifer;
          @extend .test-#{$dynamically_generated_name};
        }
      `,
      expect: {
        errored: true,
        messages: new Array(3).fill('Expected a placeholder selector (e.g. %placeholder) to be used in @extend'),
        severities: new Array(3).fill('error'),
      },
    },
  ],
});

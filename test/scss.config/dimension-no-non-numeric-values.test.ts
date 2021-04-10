import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.DimensionNoNonNumericValues,
  reject: [
    {
      name: 'should disallow non-numeric values when interpolating a value with a unit',
      code: `
        .test {
          padding: #{test}px;
        }
      `,
      expect: {
        errored: true,
        messages: [
          'Expected "$value * 1px" instead of "#{$value}px". Consider writing "value" in terms of px originally.',
        ],
        severities: ['error'],
      },
    },
  ],
});

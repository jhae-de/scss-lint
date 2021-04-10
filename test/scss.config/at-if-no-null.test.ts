import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtIfNoNull,
  reject: [
    {
      name: 'should disallow null checks in "@if" statements',
      code: `
        .test {
          @if $x == null {}
          @if $x != null {}
        }
      `,
      expect: {
        errored: true,
        messages: [
          'Expected @if not statement rather than @if statement == null',
          'Expected @if statement rather than @if statement != null',
        ],
        severities: new Array(2).fill('error'),
      },
    },
  ],
});

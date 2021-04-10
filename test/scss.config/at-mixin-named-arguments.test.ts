import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtMixinNamedArguments,
  reject: [
    {
      name: 'should require named arguments in mixin calls',
      code: `
        .test {
          @include animation(250ms, 100ms, infinite);
          @include reset($value: 20, 'bar', $color: #FFFFFF);
        }
      `,
      expect: {
        errored: true,
        messages: new Array(4).fill('Expected a named parameter to be used in at-include call'),
        severities: new Array(4).fill('error'),
      },
    },
  ],
  accept: [
    {
      name: 'should allow unnamed single argument in function calls',
      code: `
        .test {
          @include animation(250ms);
          @include animation($duration: 250ms);
          @include animation($duration: 250ms, $delay: 100ms, $direction: infinite);
        }
      `,
    },
  ],
});

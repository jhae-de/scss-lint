import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.DollarVariableNoMissingInterpolation,
  reject: [
    {
      name: 'should disallow variables that are used without interpolation in "@keyframes"',
      code: `
        $test: my-anim;
        @keyframes $test {}
      `,
      expect: {
        errored: true,
        messages: ['Expected variable $test to be interpolated when using it with @keyframes'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow variables that are used without interpolation in "@counter-style"',
      code: `
        $test: 'circled-digits';
        @counter-style $test {}
      `,
      expect: {
        errored: true,
        messages: ['Expected variable $test to be interpolated when using it with @counter-style'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow variables that are used without interpolation in "@counter-reset"',
      code: `
        $test: 'my-counter';
        .test {
          counter-reset: $test;
        }
      `,
      expect: {
        errored: true,
        messages: ['Expected variable $test to be interpolated when using it with counter-reset'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow variables that are used without interpolation in "@supports"',
      code: `
        $test: 'my-anim';
        @supports (animation-name: $test) {}
      `,
      expect: {
        errored: true,
        messages: ['Expected variable $test to be interpolated when using it with @supports'],
        severities: ['error'],
      },
    },
  ],
});

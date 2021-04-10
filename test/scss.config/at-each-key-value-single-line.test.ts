import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtEachKeyValueSingleLine,
  reject: [
    {
      name: 'should disallow "@each $key in map-keys($var)" with "map-get($var, $key)"',
      code: `
        @each $key in map-keys($var) {
          $value: map-get($var, $key);
        }
      `,
      expect: {
        errored: true,
        messages: ['Use @each $key, $value in $map syntax instead of $value: map-get($map, $key)'],
        severities: ['error'],
      },
    },
    // Todo: Activate after https://github.com/stylelint-scss/stylelint-scss/pull/580 was released
    // {
    //   name: 'should disallow "@each $key in map.keys($var)" with "map.get($var, $key)"',
    //   code: `
    //     @each $key in map.keys($var) {
    //       $value: map.get($var, $key);
    //     }
    //   `,
    //   expect: {
    //     errored: true,
    //     messages: ['Use @each $key, $value in $map syntax instead of $value: map-get($map, $key)'],
    //     severities: ['error'],
    //   },
    // },
  ],
  accept: [
    {
      name: 'should allow "@each $key, $value in $var"',
      code: '@each $key, $value in $var {}',
    },
    {
      name: 'should allow "@each $key, $value in map-keys($var)" with "map-get($anotherVar)"',
      code: `
        @each $key, $value in map-keys($var) {
          $value: map-get($anotherVar, $key);
        }
      `,
    },
    {
      name: 'should allow "@each $key, $value in map.keys($var)" with "map.get($anotherVar)"',
      code: `
        @each $key, $value in map.keys($var) {
          $value: map.get($anotherVar, $key);
        }
      `,
    },
    {
      name: 'should allow "@each $key, $value in map-keys($var)"',
      code: '@each $key, $value in map-keys($var) {}',
    },
    {
      name: 'should allow "@each $key, $value in map.keys($var)"',
      code: `@each $key, $value in map.keys($var) {}`,
    },
  ],
});

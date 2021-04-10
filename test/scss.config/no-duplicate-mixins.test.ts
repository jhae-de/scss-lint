import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.NoDuplicateMixins,
  reject: [
    {
      name: 'should disallow duplicated mixins',
      code: `
        @mixin test {}
        .test {
          @mixin test($property, $value) {}
          @mixin test($var) {}
        }
      `,
      expect: {
        errored: true,
        messages: new Array(2).fill('Unexpected duplicate mixin test'),
        severities: new Array(2).fill('error'),
      },
    },
  ],
});

import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtMixinPattern,
  reject: [
    {
      name: 'should disallow uppercase at start',
      code: '@mixin Test() {}',
      expect: {
        errored: true,
        messages: ['Mixin name should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase within',
      code: '@mixin tEst() {}',
      expect: {
        errored: true,
        messages: ['Mixin name should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow underscores',
      code: '@mixin te_st() {}',
      expect: {
        errored: true,
        messages: ['Mixin name should be written in lower kebab case'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow lower kebab case',
      code: '@mixin te-st() {}',
    },
  ],
});

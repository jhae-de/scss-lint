import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtFunctionPattern,
  reject: [
    {
      name: 'should disallow uppercase at start',
      code: '@function Test() {}',
      expect: {
        errored: true,
        messages: ['Function name should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase within',
      code: '@function tEst() {}',
      expect: {
        errored: true,
        messages: ['Function name should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow underscores',
      code: '@function te_st() {}',
      expect: {
        errored: true,
        messages: ['Function name should be written in lower kebab case'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow lower kebab case',
      code: '@function te-st() {}',
    },
  ],
});

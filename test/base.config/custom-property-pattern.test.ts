import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.CustomPropertyPattern,
  reject: [
    {
      name: 'should disallow uppercase at start',
      code: `.test {
        --Test: 0;
      }`,
      expect: {
        errored: true,
        messages: ['Custom property should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase within',
      code: `.test {
        --tEst: 0;
      }`,
      expect: {
        errored: true,
        messages: ['Custom property should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow number at start',
      code: `.test {
        --1test: 0;
      }`,
      expect: {
        errored: true,
        messages: ['Custom property should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow underscores',
      code: `.test {
        --te_st: 0;
      }`,
      expect: {
        errored: true,
        messages: ['Custom property should be written in lower kebab case'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow lower kebab case',
      code: `.test {
        --te-st: 0;
      }`,
    },
  ],
});

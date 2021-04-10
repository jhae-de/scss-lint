import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.SelectorClassPattern,
  reject: [
    {
      name: 'should disallow uppercase at start',
      code: '.Test {}',
      expect: {
        errored: true,
        messages: ['Selector should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase at start (nested)',
      code: `.t {
        &Est {}
      }`,
      expect: {
        errored: true,
        messages: ['Selector should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase within',
      code: '.tEst {}',
      expect: {
        errored: true,
        messages: ['Selector should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase within (nested)',
      code: `.t {
        &eSt {}
      }`,
      expect: {
        errored: true,
        messages: ['Selector should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow underscores',
      code: '.te_st {}',
      expect: {
        errored: true,
        messages: ['Selector should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow underscores (nested)',
      code: `.te {
        &_st {}
      }`,
      expect: {
        errored: true,
        messages: ['Selector should be written in lower kebab case'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow lower kebab case',
      code: `.te-st {}`,
    },
    {
      name: 'should allow lower kebab case (nested)',
      code: `.te {
        &-st {}
      }`,
    },
  ],
});

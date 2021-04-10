import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.PercentPlaceholderPattern,
  reject: [
    {
      name: 'should disallow uppercase at start',
      code: '%Test {};',
      expect: {
        errored: true,
        messages: ['Placeholder should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase within',
      code: '%tEst {};',
      expect: {
        errored: true,
        messages: ['Placeholder should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow number at start',
      code: '%1test {};',
      expect: {
        errored: true,
        messages: ['Placeholder should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow underscores',
      code: '%te_st {};',
      expect: {
        errored: true,
        messages: ['Placeholder should be written in lower kebab case'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow lower kebab case',
      code: '%te-st {};',
    },
  ],
});

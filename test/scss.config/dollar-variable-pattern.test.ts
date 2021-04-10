import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.DollarVariablePattern,
  reject: [
    {
      name: 'should disallow uppercase at start',
      code: '$Test: 0;',
      expect: {
        errored: true,
        messages: ['Variable should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase within',
      code: '$tEst: 0;',
      expect: {
        errored: true,
        messages: ['Variable should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow underscores',
      code: '$te_st: 0;',
      expect: {
        errored: true,
        messages: ['Variable should be written in lower kebab case'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow lower kebab case',
      code: '$te-st: 0;',
    },
  ],
});

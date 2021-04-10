import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.KeyframesNamePattern,
  reject: [
    {
      name: 'should disallow uppercase at start',
      code: '@keyframes Test {};',
      expect: {
        errored: true,
        messages: ['Keyframe name should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase within',
      code: '@keyframes tEst {};',
      expect: {
        errored: true,
        messages: ['Keyframe name should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow underscores',
      code: '@keyframes te_st {};',
      expect: {
        errored: true,
        messages: ['Keyframe name should be written in lower kebab case'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow lower kebab case',
      code: '@keyframes te-st {};',
    },
  ],
});

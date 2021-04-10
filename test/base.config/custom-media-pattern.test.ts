import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.CustomMediaPattern,
  reject: [
    {
      name: 'should disallow uppercase at start',
      code: '@custom-media --Test ();',
      expect: {
        errored: true,
        messages: ['Custom media should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow uppercase within',
      code: '@custom-media --tEst ();',
      expect: {
        errored: true,
        messages: ['Custom media should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow number at start',
      code: '@custom-media --1test ();',
      expect: {
        errored: true,
        messages: ['Custom media should be written in lower kebab case'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow underscores',
      code: '@custom-media --te_st ();',
      expect: {
        errored: true,
        messages: ['Custom media should be written in lower kebab case'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow lower kebab case',
      code: '@custom-media --te-st ();',
    },
  ],
});

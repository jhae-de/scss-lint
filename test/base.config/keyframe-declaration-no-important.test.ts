import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.KeyframeDeclarationNoImportant,
  reject: [
    {
      name: 'should disallow !important within keyframe declarations',
      code: `@keyframes test {
        from { opacity: 0; }
        to { opacity: 1 !important; }
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected !important'],
        severities: ['error'],
      },
    },
  ],
});

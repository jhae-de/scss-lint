import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.NoDuplicateAtImportRules,
  reject: [
    {
      name: 'should disallow duplicated "@import" rules',
      code: `
        @import 'test-1.css';
        @import 'test-1.css';
        
        @import 'test-2.css';
        @import url('test-2.css');
      `,
      expect: {
        errored: true,
        messages: ['test-1.css', 'test-2.css'].map((file) => `Unexpected duplicate @import rule ${file}`),
        severities: new Array(2).fill('error'),
      },
    },
  ],
  accept: [
    {
      name: 'should allow duplicated "@import" rules for different media queries',
      code: `
        @import url('test.css') projection;
        @import url('test.css') tv;
      `,
    },
  ],
});

import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtImportNoPartialLeadingUnderscore,
  reject: [
    {
      name: 'should disallow leading underscore in partial names in "@import"',
      code: `
        @import '_test';
        @import 'path/_test';
        @import 'path\\\\_test';
        @import 'path/test', '_test.scss';
      `,
      expect: {
        errored: true,
        messages: new Array(4).fill('Unexpected leading underscore in imported partial name'),
        severities: new Array(4).fill('error'),
      },
    },
  ],
});

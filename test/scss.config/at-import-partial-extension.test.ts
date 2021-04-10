import { ScssRuleName } from '../../src/enum/scss-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: ScssRuleName.AtImportPartialExtension,
  reject: [
    {
      name: 'should disallow extension in "@import" commands',
      code: `
        @import 'test.scss';
        @import 'path/test.less';
        @import 'path\\\\test.ruthless';
        @import 'path/test', 'test.SCSS';
      `,
      expect: {
        errored: true,
        messages: ['.scss', '.less', '.ruthless', '.SCSS'].map(
          (extension) => `Unexpected extension "${extension}" in @import`
        ),
        severities: new Array(4).fill('error'),
      },
    },
  ],
});

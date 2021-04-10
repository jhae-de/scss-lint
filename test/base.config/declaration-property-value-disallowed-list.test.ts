import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.DeclarationPropertyValueDisallowedList,
  accept: [
    {
      name: 'should warn using "none" for "border" properties',
      code: `.test {
        border: none;
        border-top: none;
        border-bottom: none;
        border-left: none;
        border-right: none;
      }`,
      expect: {
        errored: false,
        messages: ['border', 'border-top', 'border-bottom', 'border-left', 'border-right'].map(
          (property) => `Unexpected value "none" for property "${property}"`
        ),
        severities: new Array(5).fill('warning'),
      },
    },
  ],
});

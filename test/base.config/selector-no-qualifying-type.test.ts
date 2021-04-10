import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.SelectorNoQualifyingType,
  reject: [
    {
      name: 'should disallow qualifying a class selector by type',
      code: 'a.test {}',
      expect: {
        errored: true,
        messages: ['Unexpected qualifying type selector'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow qualifying an id selector by type',
      code: 'a#test {}',
      expect: {
        errored: true,
        messages: ['Unexpected qualifying type selector'],
        severities: ['error'],
      },
    },
  ],
  accept: [
    {
      name: 'should allow attribute selectors qualified by type',
      code: 'input[type="button"] {}',
    },
  ],
});

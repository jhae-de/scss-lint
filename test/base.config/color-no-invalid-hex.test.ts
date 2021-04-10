import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.ColorNoInvalidHex,
  reject: [
    {
      name: 'should disallow "#00"',
      code: `.test {
        color: #00;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected invalid hex color "#00"'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow "#fff1az"',
      code: `.test {
        color: #fff1az;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected invalid hex color "#fff1az"'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow "#12345aa"',
      code: `.test {
        color: #12345aa;
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected invalid hex color "#12345aa"'],
        severities: ['error'],
      },
    },
  ],
});

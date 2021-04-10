import { CssRuleName } from '../../src/enum/css-rule-name.enum';
import { RuleTester } from '../rule-tester.class';

RuleTester.run({
  ruleName: CssRuleName.BlockNoEmpty,
  reject: [
    {
      name: 'should disallow empty block',
      code: '.test {}',
      expect: {
        errored: true,
        messages: ['Unexpected empty block'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow empty block with line comment',
      code: `.test {
        // Comment
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected empty block'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow empty block with block comment',
      code: `.test {
        /* Comment */
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected empty block'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow empty block within media at-rule',
      code: `@media print {
        test {}
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected empty block'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow empty block within media at-rule with line comment',
      code: `@media print {
        test {
          // Comment
        }
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected empty block'],
        severities: ['error'],
      },
    },
    {
      name: 'should disallow empty block within media at-rule with block comment',
      code: `@media print {
        test {
          /* Comment */
        }
      }`,
      expect: {
        errored: true,
        messages: ['Unexpected empty block'],
        severities: ['error'],
      },
    },
  ],
});

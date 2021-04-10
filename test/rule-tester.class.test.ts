import stylelint, { LinterResult } from 'stylelint';
import { mocked as createMock } from 'ts-jest/utils';
import { CssRuleName } from '../src/enum/css-rule-name.enum';
import { DeepPartial } from '../src/type/deep-partial.type';
import { RuleTester } from './rule-tester.class';
import ResolvedValue = jest.ResolvedValue;

jest.mock('stylelint');

const mockStylelint = createMock(stylelint, true);

describe('RuleTester', () => {
  beforeEach(() => {
    mockStylelint.lint.mockResolvedValue({
      results: [
        {
          warnings: [
            {
              rule: CssRuleName.AtRuleDisallowedList,
              text: `Unexpected at-rule "import" (${CssRuleName.AtRuleDisallowedList})`,
              severity: 'error',
            },
          ],
        },
      ],
    } as DeepPartial<LinterResult> as ResolvedValue<unknown>);
  });

  RuleTester.run({
    ruleName: CssRuleName.AtRuleDisallowedList,
    reject: [
      {
        name: 'should reject "@import" rule',
        code: `@import 'test.css';`,
        expect: {
          errored: true,
          messages: ['Unexpected at-rule "import"'],
          severities: ['error'],
        },
      },
    ],
  });
});

describe('RuleTester', () => {
  beforeEach(() => {
    mockStylelint.lint.mockResolvedValue({
      results: [
        {
          warnings: [
            {
              rule: CssRuleName.AtRuleDisallowedList,
              text: `Unexpected at-rule "import" (${CssRuleName.AtRuleDisallowedList})`,
              severity: 'warning',
            },
          ],
        },
      ],
    } as DeepPartial<LinterResult> as ResolvedValue<unknown>);
  });

  RuleTester.run({
    ruleName: CssRuleName.AtRuleDisallowedList,
    reject: [
      {
        name: 'should accept "@import" rule with severity "warning"',
        code: `@import 'test.css';`,
        expect: {
          errored: false,
          messages: ['Unexpected at-rule "import"'],
          severities: ['warning'],
        },
      },
    ],
  });
});

describe('RuleTester', () => {
  beforeEach(() => {
    mockStylelint.lint.mockResolvedValue({
      results: [],
    } as DeepPartial<LinterResult> as ResolvedValue<unknown>);
  });

  RuleTester.run({
    ruleName: CssRuleName.AtRuleDisallowedList,
    accept: [
      {
        name: 'should accept "@other" rules',
        code: `@other 'test.scss';`,
      },
    ],
  });
});

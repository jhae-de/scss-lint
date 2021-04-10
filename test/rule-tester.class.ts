import stylelint, { LinterResult, Severity, Warning } from 'stylelint';
import { AppConfig } from '../src/config/app.config';
import { RuleName } from '../src/type/rule-name.type';
import { RuleTestExpectation } from '../src/type/rule-test-expectation.type';
import { RuleTestItem } from '../src/type/rule-test-item.type';
import { RuleTest } from '../src/type/rule-test.type';

export class RuleTester {
  protected static readonly defaultExpectation: RuleTestExpectation = {
    errored: false,
    messages: [],
    severities: [],
  };

  public static run(ruleTest: RuleTest): void {
    const { ruleName, accept = [], reject = [] } = ruleTest;

    describe(`Rule '${ruleName}'`, () => {
      test.each([...accept, ...reject])('$name', (ruleTestItem) => this.runSingle(ruleTestItem, ruleName));
    });
  }

  public static runSingle(ruleTestItem: RuleTestItem, ruleName: RuleName): Promise<void> {
    const { expect: expectation = this.defaultExpectation } = ruleTestItem;

    return this.getLinterResult(ruleTestItem).then((linterResult) => {
      const errored = this.getErrored(linterResult, ruleName);
      const messages = this.getMessages(linterResult, ruleName);
      const severities = this.getSeverities(linterResult, ruleName);

      expect(errored).toBe(expectation.errored);
      expect(messages).toStrictEqual(expectation.messages.map((message) => `${message} (${ruleName})`));
      expect(severities).toStrictEqual(expectation.severities);
    });
  }

  protected static getLinterResult({ code }: RuleTestItem): Promise<LinterResult> {
    return stylelint.lint({
      configFile: AppConfig.StylelintConfigFile,
      code,
    });
  }

  protected static getWarnings(linterResult: LinterResult, ruleName: RuleName): Warning[] {
    return linterResult.results
      .map(({ warnings }) => warnings)
      .reduce((previous, current) => previous.concat(current), [])
      .filter((warning) => warning.rule === ruleName);
  }

  protected static getErrored(linterResult: LinterResult, ruleName: RuleName): boolean {
    return this.getSeverities(linterResult, ruleName).some((severity) => severity === 'error');
  }

  protected static getMessages(linterResult: LinterResult, ruleName: RuleName): string[] {
    return this.getWarnings(linterResult, ruleName).map(({ text }) => text);
  }

  protected static getSeverities(linterResult: LinterResult, ruleName: RuleName): Severity[] {
    return this.getWarnings(linterResult, ruleName).map(({ severity }) => severity);
  }
}

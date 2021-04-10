import { RuleName } from './rule-name.type';
import { RuleTestItem } from './rule-test-item.type';

export type RuleTest = {
  ruleName: RuleName;
  accept?: RuleTestItem[];
  reject?: RuleTestItem[];
};

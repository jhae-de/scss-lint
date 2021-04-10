import { RuleTestExpectation } from './rule-test-expectation.type';

export type RuleTestItem = {
  name: string;
  code: string;
  expect?: RuleTestExpectation;
};

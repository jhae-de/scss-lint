import { Severity } from 'stylelint';

export type RuleTestExpectation = {
  errored: boolean;
  messages: string[];
  severities: Severity[];
};

import { AppConfig } from './config/app.config';
import stylelintConfig from './stylelint.config';

jest.mock('./enum/config-name.enum', () => ({
  ConfigName: {
    configA: 'config-a',
    configB: 'config-b',
    configC: 'config-c',
  },
}));

describe('Stylelint config', () => {
  it('should correctly extend the stylelint configuration', () => {
    expect(stylelintConfig).toStrictEqual({
      extends: [
        `${AppConfig.StylelintConfigDir}/config-a.config.yaml`,
        `${AppConfig.StylelintConfigDir}/config-b.config.yaml`,
        `${AppConfig.StylelintConfigDir}/config-c.config.yaml`,
      ],
    });
  });
});

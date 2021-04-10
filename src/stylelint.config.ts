import { AppConfig } from './config/app.config';
import { ConfigName } from './enum/config-name.enum';

export = {
  extends: Object.values(ConfigName).map((configName) => `${AppConfig.StylelintConfigDir}/${configName}.config.yaml`),
};

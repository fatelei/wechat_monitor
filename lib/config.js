const yaml = require('js-yaml');
const fs = require('fs');


class Config {
  constructor() {
    this.configFile = '/etc/wechat_monitor.yml'
    this.config = null;
    this.parse()
  }

  parse() {
    try {
      this.config = yaml.safeLoad(fs.readFileSync(self.configFile, 'utf8'));
    } catch (e) {
      throw new Error(e);
    }
  }
}

const config = new Config();
module.exports = config;

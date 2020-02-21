const { Wechaty } = require("wechaty");
const { PuppetPadplus } = require("wechaty-puppet-padplus");
const QrcodeTerminal = require("qrcode-terminal");
const config = require("./config");
const { WechatDAO } = require("./dao");

const main = () => {
  const puppet = new PuppetPadplus({ token: config.config.token });
  const bot = new Wechaty({ puppet, name: config.config.bot });
  bot.on("scan", (qrcode, status) => {
    QrcodeTerminal.generate(qrcode, {
      small: true
    });
  }).on("message", msg => {
    try {
      const contact = msg.from();
      const text = msg.text();
      const room = msg.room();
      if (config.groups.includes(room.payload.topic)) {
        WechatDAO.insert(
          contact.payload.id,
          contact.payload.name,
          room.id,
          room.payload.topic,
          text,
          msg.type()
        );
      }
      console.info(`msg : ${msg}`);
    } catch (err) {
      console.error(err);
    }
  }).start();
};

main();

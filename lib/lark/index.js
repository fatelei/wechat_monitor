const https = require("https");
const config = require("../config");

class LarkWebhook {

  static sendMessage(title, text, callback) {
    const body = JSON.stringify({ title, text });
    const req = https.request({
      method: 'POST',
      host: 'open.feishu.cn',
      path: config.feishPath,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    }, (res) => {
      res.setEncoding('utf8');
      const data = [];
      res.on('data', (chunk) => {
        data.push(chunk);
      });
      res.on('end', () => {
        callback(Buffer.concat(data).toString())
      });
    });
    req.write(body);
    req.end();
  }
}

module.exports = LarkWebhook;

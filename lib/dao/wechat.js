const db = require('../connection');

class Wechat {
  static insert (wechatId, wechatName, roomId, roomName, content, msgType) {
    const data = {
      wechat_id: wechatId,
      wechat_name: wechatName,
      room_id: roomId,
      room_name: roomName,
      content,
      msg_type: msgType
    };
    db.query("insert into wechat_monitor_messages set ?", data, (err, results, fields) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`insert into success ${results.insertId}`)
      }
    })
  }
}

module.exports = Wechat;

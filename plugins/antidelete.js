let DELCHAT = process.env.DELCHAT || 'pm';
let bgmm = false;
smd({
  'pattern': "antidelete",
  'alias': ["delete"],
  'desc': "turn On/Off auto download deletes",
  'fromMe': true,
  'category': "general",
  'use': "<on/off>",
  'filename': __filename
}, async (_0x3055e6, _0xc6c8ae) => {
  try {
    bgmm = (await bot_.findOne({
      'id': "bot_" + _0x3055e6.user
    })) || (await bot_["new"]({
      'id': "bot_" + _0x3055e6.user
    }));
    let _0x257ea1 = _0xc6c8ae.toLowerCase().split(" ")[0x0].trim();
    if (_0x257ea1 === 'on' || _0x257ea1 === "enable" || _0x257ea1 === "act") {
      if (bgmm.antidelete === "true") {
        return await _0x3055e6.reply("*Anti_Delete already enabled!*");
      }
      await bot_.updateOne({
        'id': "bot_" + _0x3055e6.user
      }, {
        'antidelete': "true"
      });
      return await _0x3055e6.reply("*Anti_Delete Succesfully enabled*");
    } else {
      if (_0x257ea1 === "off" || _0x257ea1 === "disable" || _0x257ea1 === "deact") {
        if (bgmm.antidelete === "false") {
          return await _0x3055e6.reply("*Anti_Delete already disabled*");
        }
        await bot_.updateOne({
          'id': "bot_" + _0x3055e6.user
        }, {
          'antidelete': "false"
        });
        return await _0x3055e6.reply("*Anti_Delete Succesfully deactivated*");
      } else {
        return await _0x3055e6.send("*_Use on/off to enable/disable Anti_Delete!_*");
      }
    }
  } catch (_0x507800) {
    await _0x3055e6.error(_0x507800 + "\n\nCommand: antidelete ", _0x507800);
  }
});
let ms = [];
smd({
  'on': "delete"
}, async (_0x5981c4, _0x567779, {
  store: _0x3a22a6
}) => {
  try {
    let _0x277c2d = await bot_.findOne({
      'id': 'bot_' + _0x5981c4.user
    });
    if (_0x277c2d && _0x277c2d.antidelete && _0x277c2d.antidelete === "true") {
      let _0x2c94e7 = _0x5981c4.msg.key.participant ? _0x5981c4.msg.key.participant : _0x5981c4.msg.key.fromMe ? _0x5981c4.user : _0x5981c4.msg.key.remoteJid;
      let _0x53af16 = await stor();
      if (!_0x53af16.messages[_0x5981c4.from]) {
        _0x53af16.messages[_0x5981c4.from] = {};
      }
      ms = [..._0x53af16.messages[_0x5981c4.from], ..._0x3a22a6.messages[_0x5981c4.from].array];
      for (let _0x52ea50 = 0x0; _0x52ea50 < ms.length; _0x52ea50++) {
        if (ms[_0x52ea50].key.id === _0x5981c4.msg.key.id) {
          let _0xca8aed = await _0x5981c4.bot.fakeMessage("text", {
            'id': _0x5981c4.msg.key.id
          }, "*HEY, ANTIDELETE DETECTED*");
          let _0x35fa6d = await _0x5981c4.bot.forwardOrBroadCast(/pm/gi.test(DELCHAT) ? _0x5981c4.user : _0x5981c4.from, ms[_0x52ea50].message, {
            'quoted': ms[_0x52ea50].message && ms[_0x52ea50].message.conversation ? undefined : _0xca8aed
          });
          if (_0x35fa6d) {
            await _0x5981c4.bot.sendMessage(/pm/gi.test(DELCHAT) ? _0x5981c4.user : _0x5981c4.from, {
              'text': "*[DELETED MESSAGE]*\n\n*TIME:* " + _0x5981c4.time + "\n*CHAT:* " + (await _0x5981c4.bot.getName(_0x5981c4.chat)).split("\n").join("  ") + "\n*DELETED BY:* @" + _0x5981c4.senderNum + "\n*MESSGE FROM:* @" + _0x2c94e7.split('@')[0x0],
              'mentions': [_0x2c94e7, _0x5981c4.sender]
            }, {
              'quoted': _0x35fa6d
            });
          }
          break;
        }
      }
    }
  } catch (_0x4eb813) {
    console.log(_0x4eb813);
  }
});

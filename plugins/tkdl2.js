const axios = require('axios');
const fetch = require("node-fetch");
byte({
  'pattern': "tiktok2",
  'alias': ["tt2", "ttdl2"],
  'desc': "Downloads Tiktok Videos Via Url.",
  'category': "downloader",
  'filename': __filename,
  'use': "<add tiktok url.>"
}, async (_0xeb7849, _0x519177, _0x3b6d77) => {
  try {
    let _0x1397c8 = _0x3b6d77.split(" ")[0x0];
    if (!/tiktok/.test(_0x1397c8)) {
      return await _0x519177.send("*Please Give Me Valid Tiktok Video Link*");
    }
    let _0x59be53 = await axios.get("https://api.maher-zubair.techdownload/tiktok2?url=" + _0x1397c8);
    const _0x2ad8e5 = _0x59be53.data;
    const _0x2ec923 = _0x2ad8e5.result.url.nowm;
    const _0x5f32d = await fetch(_0x2ec923);
    const _0x2cadc2 = await _0x5f32d.buffer();
    await _0xeb7849.send(_0x519177.chat, _0x2cadc2);
  } catch (_0x4dcee0) {
    _0x519177.send("\n*_Error Occured While Downloading Your Media_*\n_" + _0x4dcee0 + '_');
    console.log(_0x4dcee0);
  }
});

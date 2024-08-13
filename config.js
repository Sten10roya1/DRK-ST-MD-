
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || " ";
global.owner = process.env.OWNER_NUMBER || "50931461936";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBUR3BmOGZtdG9GUkl0SUxnNkFhU2wrUGJRWWozeDI1blVaL2NMU2lrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1pSRGpFYkZQUTMxcVdYL3o0d0NQb1ZGOWdDZU4wdzdQd2FwcUlIclUzcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRT08veWw4bU9JNERzRXlCeGc5NEw4UnhBcFdHL1ZZUkNlY1pwMUNIYWw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIaVo4ZnNsVHhxNzdsTjRpb3ZsV1RsajJnN1NVOUJMZCt1ME9uNDc2NDFZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFOcmJIQ1NXekdCZ0NFTThWM3VoemV5d1d6d3RvUDdnMEZBSGRMVmJZMVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdLYUFNSGgwMytDUUdXK25QRjd2b1p5ekFjS3R0eG95OXE4WVdaL3BCbGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0I5cC95dloxZXU4dTYzRGRMdXFoTFhlMWpsUlc2c3AzRHUzU1ZtVDhFRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGhHemJzRFdwN1FrMGtKb2JHbHlPOFM0ell6MDdmYUxxa2haME94T3pTdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind1RkRXckFGNmtmUFl6NXYydjFuaEV5OEFhOHNiUnYxYUd4S2RnemNJUnFrdkovRVdROUdKQWxFZEduZWxWdWpUN201VlNrQS9zcG9KOVQxek90NEJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM3LCJhZHZTZWNyZXRLZXkiOiJoNnpDcTFzVWRueTNkVzZaUGkrMjNsbnYrUzlQdE5oOE9GSXhraGFhYVRVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxNDYxOTM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkM0QkFGREY5MDFEMTY1OUNBQTAyRTE5RDQ5RUIxMUM0In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM1MTYyNjN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTMxNDYxOTM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZENzQ5QTUwRTBDQTgwNkVEN0ZCQ0NBNDIyMkFBNDRCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjM1MTYyNjR9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InRDN3lFVUc5VHpxYlpNSWtrZEZ5T1EiLCJwaG9uZUlkIjoiZTFjYmQwOTMtMTkzMy00ZGVhLWE2YzctZTRiNWQzY2U1YWVhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko3VzBuWXhsVFg2dEc3Ykl3ZnRGcjBGMlZHOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpUm5QaDBNYmxkL0k3SHF6WEp4Q1NTaG1LQkk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQThZSDI0WUYiLCJtZSI6eyJpZCI6IjUwOTMxNDYxOTM2OjY0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfjLnig5/ig6Lwn5GRIMSQw4bwnZqq8J2QiuC8kvCdmY4t8J2Zj/CdnqLwnZ6c8J+MueKDn+KDovCfkZEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BDRC9MOEVFTmVLNjdVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijl6bktUdXIzT0tmT1ljVXk3WGR1eHJac3FwRm83OVRYdGg0dkl0Zy9HVHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZ3bm9sR1BjTWJqSnJEZ1NLMkRkb25lOWJKbGJZanIwdG5jS3FiNjcrZDg2LzRaZzlxT1NSbGo1K3dwaVV0TEhuQ2t1YWNHWktkS3dXSlN3ZWJGVEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTUndORWVXRjROMStrVW1xRmQ1Qlc4dm5INWRNR200cGw3UHdEU1J2QnVCblhsR2E0UUZQSmtxSWMxVFY2V3RCOTFmb1E5S3hPVWt1Y0huVXBhOHdEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTMxNDYxOTM2OjY0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZjNXlrN3E5emluem1IRk11MTNic2EyYktxUmFPL1UxN1llTHlMWVB4azgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM1MTYyNTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS2ZrIn0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "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",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

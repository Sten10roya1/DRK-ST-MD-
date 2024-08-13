
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sten10royal@gmail.com";
global.location = "Port-au-Prince,Haïti.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "50931461936@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/Hxduja6rDRh30gSNeUNyfm";
global.website = process.env.GURL || "https://chat.whatsapp.com/Hxduja6rDRh30gSNeUNyfm";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e1d82ab139d29975cad4.jpg";
global.devs = "50931461936";
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


 "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUhYNTVUU3lYaWJxSlMwUEFVRGxOM1ZLd2poazk3N0VvS1pyNVVvVUhtTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiak9OVG9zMTRBSldZZjhVMnFxcWdsaXU0dXdHRU5jazlDNzB3SEgzVnRRZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSFdOYlRoV1pvVnltYm8zZ25PcXpFaVpJeVlJNFZZVVFnakpjWml1TUVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxZDJ4aHJrWkloMnlzZFk1MDFXdUdVdnJ2SFczbnlNZXJBY0xsZDVLdWljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVDN3hjaW9XTTFsclIvRFdmalEvQVpxZGtxQW5WYlBCVzdMQldVRzV4Mzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFhV056S0xNUlpHR05IeE9wdUk0UU92cEkxRXdGaTdobzIvc0FsalJ4QW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01XcTFtendMWEhQM1NvaFBCclFuTkx0SzdjTnJlZjFvYzU4VVJqSTFWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUwydjhwV1grRFhGOU9IV2Zud1dpN3BWRWhsREl3YlFUREhzS0x2aitsUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBUaXBtdDYyTHZIWURObksxeW9JNG90dk1Mci8yYUxFMkZnRlh2Yk51UWxyZTdFMEw2OFdNRU13NVBZbUp5ZDhyVENKWC84QkxQWXlBZmxYZ01RaENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6ImJ5c0ZHYm0xdVNVQjNRVnVGcFg5TWpiNk1vN2dUQm1KOUcvOHkvdmNXL2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IllMODItT0J4U20tYjVtZ2ZRaV94VVEiLCJwaG9uZUlkIjoiZDZkNWQxYjktODZlYS00MGIwLWJiZmEtMzM3NzlhM2EwMDBlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhGU3U1TEVodGZFc1F6azYvRlZKaHZoMGprWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYSzVBZFZlRFBmZTVYeGNXVmp2QzlNd3lMaG89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVkJUMTVNNkgiLCJtZSI6eyJpZCI6IjUwOTM4MjY0MTk5OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWFubWkgSnVsaWEg8J+kpPCfpbDinaTigI3wn5SlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQQ0QvTDhFRU1mZzdiVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSUXVxYnpaa1NDc0J4VWF5RVlnYmFPcXYzd0Z1LzFXL2Q1aGhOSGNuR1dFPSIsImFjY291bnRTaWduYXR1cmUiOiJ4SHdBa3VJcFRWU0xWZjFpaXdlNWpFaFc5dVVGUXlETUFId3h0ODVWTzc3WFhZNnVzOFFkOWc1Z2pXeDByMFNsMWZhOXRkNGFhRWY0ektlNHR3WUFCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTlB0QUZ3S1QveGU2eXdNMTJIVWtKbE5NUFAwdGNBclVXRFBscEpHaEwyMXZMaEQxVFl5MUNzcUluNzROR1VvQzlsRVN6L1E5RytlL2MrVXc1M0VYQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzODI2NDE5OTo2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVVTHFtODJaRWdyQWNWR3NoR0lHMmpxcjk4QmJ2OVZ2M2VZWVRSM0p4bGgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM1NjAwMjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSkN0In0=" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By 𝙎-𝙏𝞢𝞜*",
  author: process.env.PACK_AUTHER || "DRK-ST-MD ",
  packname: process.env.PACK_NAME || "𝙎-𝙏𝞢𝞜",
  botname: process.env.BOT_NAME || "DRK-ST-MD",
  ownername: process.env.OWNER_NAME || "𝙎-𝙏𝞢𝞜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
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

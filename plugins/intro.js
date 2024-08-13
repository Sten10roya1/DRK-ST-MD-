

const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/HyHamza/BYTE-MD' // Source URL
const number = '923072380380'
var name = ' 𝕎𝔸𝕊𝕀 𝕋𝔼ℂℍ'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/2c30fa9e6f61ef8ba03a2.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝐖𝐀𝐒𝐈 𝐓𝐄𝐂𝐇 𝐈𝐍𝐓𝐑𝐎  」
│ Name      : 𝐖𝐀𝐒𝐈 
│ Place       : EARTH
│ Gender    :  MALE
│ Age          : 20
│ education : ICS 
│ good vibes : SECRET
│ Phone     : wa.me/923072380380
│ Youtube   : youtube.com/@talkdrove
│ GitHub    : https://github.com/HyHamza 

╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`





 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             alias: ["talkdrove","Hamza"],
             desc: "Show intro of user",
             category: "fun",
             react:"🤩",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })

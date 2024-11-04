const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_30_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2MCxcbiAgICAgICAgODgsXG4gICAgICAgIDExLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMzLFxuICAgICAgICA1OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA4MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDczLFxuICAgICAgICA2MSxcbiAgICAgICAgNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDg0LFxuICAgICAgICA3NixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgODgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDc1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDk5LFxuICAgICAgICA4MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDekVVQTNGOHhUenBISXREOHNTNlpzN1h0amhMdFlCbHNkTm9WaTcvWmZZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxd3cydGh2LVNlcXFSTE5KZ3BUNU9BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjkyYTQ0MDkxLTgxYzctNDRhMS04Yzk0LWQ4ZTQ2ZTRhOTU3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAxNTYsXG4gICAgICA5OCxcbiAgICAgIDE5OCxcbiAgICAgIDIzOCxcbiAgICAgIDIyOSxcbiAgICAgIDI0MixcbiAgICAgIDE4LFxuICAgICAgNzUsXG4gICAgICAxNjIsXG4gICAgICAyNTEsXG4gICAgICAxOSxcbiAgICAgIDI1NSxcbiAgICAgIDUyLFxuICAgICAgODYsXG4gICAgICA3MixcbiAgICAgIDc2LFxuICAgICAgMTQyLFxuICAgICAgMTcwLFxuICAgICAgMTYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDEyNSxcbiAgICAgIDEyMCxcbiAgICAgIDE3NixcbiAgICAgIDYzLFxuICAgICAgMzcsXG4gICAgICAxNjMsXG4gICAgICAyMDIsXG4gICAgICAxMCxcbiAgICAgIDEwNCxcbiAgICAgIDE3OCxcbiAgICAgIDE5OSxcbiAgICAgIDE4NyxcbiAgICAgIDIxNixcbiAgICAgIDE1NCxcbiAgICAgIDEwOSxcbiAgICAgIDE1MCxcbiAgICAgIDE4MixcbiAgICAgIDIxOSxcbiAgICAgIDE4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNVktGS1BHSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzEyMTE3MTg1Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5MTg4Njk0OTc4MTczNTo3OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ2l6SkVGRVB2VG9ia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlp5V3NYakM1TkZWR3JKQXFnTEQxRjZwYzl2WHd1WmI4YjlWWkt6bCtvbXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibEJRTFJLSzlqNmNmM3BZVDlLMVBoVERrVGd2cEtIVEloSmJsb251SzdtYjc5bFRKb0dqZUtFNVltRlF2c0dvbWtpMlc2cnEvRkJQbDZDYzVaZkhWRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaTNURUpDdFEwRzQzMExqajR0TE5xMjBsRTI4dENMdCtVWlJ6b0xwQmJnVGlkVmVqMEt4UlhNUUNqMm9pUE16QXZkVkdrcGJETjRELzBQdlJKRm5oQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzEyMTE3MTg1Ojc5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNzAxODIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ00vXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDTS8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

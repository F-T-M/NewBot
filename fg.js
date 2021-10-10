/*============ FG98 ============

    🇩 🇾 🇱 🇺 🇽  𝗩4
 
============ FG98 ============*/

 //--  Conectar a WhatsApp 
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime
} = require("@adiwajshing/baileys");

//-- Módulos 
const yo = require("tod-api");
const dh = require("dhn-api");
const simple = require('./libreria/simple.js')
const hx = require('hxz-api')
const translate = require("@vitalets/google-translate-api");
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require("fluent-ffmpeg");
const imgbb = require('imgbb-uploader');
const googlefg = require('google-it')
const CryptoJS = require("crypto-js");
const crypto = require('crypto');
const {removeBackgroundFromImageFile} = require('remove.bg');
const {convertSticker} = require("./libreria/swm.js")
const { webp2mp4Url, webp2gifFile, reverseVideoFile } = require('./libreria/ezgif')
const { validmove, setGame } = require("./libreria/tictactoe");
const { recognize } = require('./libreria/ocr')
const { wikiSearch } = require('./libreria/wiki.js')
const {  getBuffer, h2k,  generateMessageID, getGroupAdmins,  getRandom, banner,  start,  info, success, close,} = require("./libreria/functions");
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const imageToBase64 = require('image-to-base64');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { color, bgcolor } = require('./libreria/color')
const { fetchJson, getBase64, kyun, createExif } = require('./libreria/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require("./libreria/ytdl");
const { webp2mp4File } = require("./libreria/webp2mp4");
const { cmdadd } = require("./libreria/totalcmd.js");
const { jadibot, stopjadibot, listjadibot } = require("./libreria/jadibot");
const _prem = require("./libreria/premium");
const game = require("./libreria/game");
const Exif = require('./libreria/exif');
const exif = new Exif();
const { pinterest } = require('./libreria/pinterest')

//-- Reportes
const _informe = JSON.parse(fs.readFileSync('./result/reportes/informe.json'));
const _solicitud = JSON.parse(fs.readFileSync('./result/reportes/solicitud.json'));

//---Data Base
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const ban = JSON.parse(fs.readFileSync('./database/banned.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const limit = JSON.parse(fs.readFileSync('./database/diaman.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const confi = JSON.parse(fs.readFileSync('./settings.json'))
const _scommand = JSON.parse(fs.readFileSync('./database/stickcmd.json'))
const _welcom = JSON.parse(fs.readFileSync('./database/welcom.json'))
const _left = JSON.parse(fs.readFileSync('./database/left.json'))	 
const _user = JSON.parse(fs.readFileSync('./database/verify.json'))

//---new
const _antilinkte = JSON.parse(fs.readFileSync('./database/antilinkte.json'));
const _antilinkdi = JSON.parse(fs.readFileSync('./database/antilinkdi.json'));
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/nivel.json'))
const awgp = JSON.parse(fs.readFileSync('./database/awgp.json'))
const antivo = JSON.parse(fs.readFileSync("./database/antiviewonce.json"));
let _daily = JSON.parse(fs.readFileSync('./database/daily.json'))
//--economía
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit} = require("./libreria/economy");

//-- Resultados
const _verdad = JSON.parse(fs.readFileSync('./result/verdad.json'));
const _reto = JSON.parse(fs.readFileSync('./result/reto.json'));

//---Ajustes  Del prefijo
let multi = true
let nopref = false
let single = false
let prefa = '/' 
//--
banChats = false;
offline = false;

//-- Help
const { help } = require('./help/menu')
const { wait, stick, errorfg, group, banf, ownerB, modsB, premi, userB, admin, Badmin, leveloff, lvlnul, fdiama, fgnsfw, gCoinF, dailyOn, dailyR} = require('./help/respon');

//--------𝗔𝗣𝗜𝗞𝗘𝗬----------
const Vkey = confi.Zekskey
const lolkey = confi.LolHumanKey
const hunterkey = confi.fgkey  
const valkey = 'rivalgans'
const Xinz = 'XinzBot'
const Pkode = 'pais' 

  //---- 𝗦𝗧𝗔𝗙𝗙 -----
const owner = confi.ownerN
const Cowner = confi.CoOwnerN
const mods = confi.mods
const ownerName = confi.nombreCreador

//---------𝗥𝗘𝗗𝗘𝗦 𝗦𝗢𝗖𝗜𝗔𝗟𝗘𝗦---------
const soportefg = 'G5sXrkhJ0pb0Tu8nhWLaFK' 


//-----fakethumb-----
fakefg = fs.readFileSync('./image/fake.jpg')
fakelogo = fs.readFileSync('./image/logo.jpg')
fglogo = fs.readFileSync('./image/fg.jpg')

//--anti delete 
antidel = false
ngetik = false
vn = true

//----Juegos
let mtk = [];
 let {GameTime, limitCount } = require('./settings')
//---

//--Contacto del dueño
const vcard1 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + `FN:${ownerName}\n`
 + 'ORG:Dueño de DyLuxBot;\n' 
 + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`
 + 'END:VCARD'
      
const vcard2 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + `FN:Co Owner\n`
 + 'ORG:Co Dueño de DyLux;\n' 
 + `TEL;type=CELL;type=VOICE;waid=${Cowner}:+${Cowner}\n`
 + 'END:VCARD'
 
/********** 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗡𝗜𝗩𝗘𝗟𝗔𝗖𝗜𝗢𝗡 **********/
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = { id: sender, xp: 1, level: 1 }
	_level.push(obj)
	fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
}

     //  𝙎𝙀𝙍𝙄𝘼𝙇 𝙂𝙀𝙉𝙀𝙍𝘼𝘿𝙊𝙍 
const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        
        //========= 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗚𝗜𝗦𝗧𝗥𝗢 =========\\

const getuserRandomId = () => {
  return _user[Math.floor(Math.random() * _user.length)].id
}

const adduserUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  _user.push(obj)
  fs.writeFileSync('./database/verify.json', JSON.stringify(_user))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
} 

const checkuserUser = (sender) => {
  let status = false
  Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
  status = true
}
  })
  return status
}

//-- Fecha
function fecha(){
myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
			myDays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

//-------𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦-----
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/stickcmd.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};

//------------

module.exports = Fg = async (Fg,mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
global.prefix
m = simple.smsg(Fg, mek)
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType    
const time = moment.tz('America/La_Paz').format('DD/MM HH:mm:ss')
const hora = moment.tz('America/La_Paz').format('HH:mm')
const hora2 = moment.tz('America/La_Paz').format('HH:mm:ss')

const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    //---Multi Prefix
if(multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~,¿;+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'
} else {
if (nopref){
prefix = ' '
} else {
if(single){
prefix = prefa }}}

//---body
        let body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) 
       ? mek.message.conversation 
       : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) 
       ? mek.message[type].caption 
       : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) 
      ? mek.message[type].caption 
       : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) 
        ? mek.message[type].text 
        : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId 
       ? mek.message[type].singleSelectReply.selectedRowId 
     : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId 
       ? mek.message[type].selectedButtonId
      : (type == 'stickerMessage') && 
     (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && 
    getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) 
      ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""

        //---
        
    const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const autofg = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefix)
const botNumber = Fg.user.jid;
    const botNumero = botNumber.replace('@s.whatsapp.net', '') //sólo número del bot   
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe 
      ? Fg.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? Fg.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
      
    const senderNumber = sender.split("@")[0]
    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Fg.user.phone
    
      const isYo = mek.key.fromMe ? true : false
      const isOwner = senderNumber == owner || senderNumber == botNumero || senderNumber == Cowner
      const isMods = mods.includes(senderNumber)

    const isVerify = _user.includes(sender)
    const isAntilink = isGroup ? _antilink.includes(from) : false
    const isPremium = _prem.checkPremiumUser(sender,premium) || false || isOwner
    const isWelcom = isGroup ? _welcom.includes(from) : false
    const isLeft = isGroup ? _left.includes(from) : false
    const isBanchat = isGroup ? bancht.includes(from) : false
    
const totalchat = await Fg.chats.all()
const groupMetadata = isGroup ? await Fg.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : "";
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = mek.key.fromMe ? Fg.user.jid : Fg.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Fg.user.name : conts.notify || conts.vname || conts.name || '-'

const isAntiviewonce = isGroup ? antivo.includes(from) : false;
   //----nuevo fg 
const isBanned = ban.includes(sender)
const isAntiTele = isGroup ? _antilinkte.includes(from) : false
const isAntiDis = isGroup ? _antilinkdi.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : false 
const isLevelingOn = isGroup ? _leveling.includes(from) : false
const isAw = isGroup ? awgp.includes(from) : false
const isDailyOn = _daily.includes(sender) 

const totalhit = JSON.parse(fs.readFileSync("./libreria/totalcmd.json"))[0]
      .totalcmd;
const gcounti = confi.gcount
const gcount = isPremium ? gcounti.prem : gcounti.user
   
   chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const arg = chats.slice(command.length + 2, chats.length)
    const argss = body.split(/ +/g)
    
//---
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedPesan = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedMessage = type === 'extendedTextMessage'
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isViewOnce = (type === 'viewOnceMessage')

//----𝗥𝗨𝗡𝗧𝗜𝗠𝗘
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundo") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

  //// --- Función de respuesta
			mess = {
				ferr: '❎ Error! \n🔍 Intentalo de nuevo mas tarde',
				
				error: {
					link: '❎ Link invalido, corríjalo e intente de nuevo'
				}
			}

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

 //---- 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔----
    const reply = (teks) => {
      Fg.sendMessage(from, teks, text, { quoted: mek });
    };
 //---respuesta con thumbnail
const replyfg = (teks) => {
Fg.sendMessage(from, teks, text, {quoted:mek,thumbnail : fakefg})
};
    const sendMess = (hehe, teks) => {
      Fg.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? Fg.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : Fg.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
    
    //---- 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗙𝗔𝗟𝗦𝗔 ----  
   //--fake estado
    const estadofake = (teks) => {
      Fg.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: `${pushname}`,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./image/fake.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
 
    //-- juego random números 
function numeroRandom(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}

  //---------𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗥𝗔𝗡𝗚𝗢𝗦--------
			const levelRole = getLevelingLevel(sender, _level)
   	                var role = 'Novato'
   	                if (levelRole <= 4) {
   	                        role = 'Bronce III'
   	                } else if (levelRole <= 6) {
				role = 'Bronce II'
			} else if (levelRole <= 8) {
				role = 'Bronce I'
			} else if (levelRole <= 10) {
				role = 'Plata II'
			} else if (levelRole <= 12) {
				role = 'Plata I'
			} else if (levelRole <= 14) {
				role = 'Oro II'
			} else if (levelRole <= 16) {
				role = 'Oro I'
			} else if (levelRole <= 18) {
				role = 'Platino II'
			} else if (levelRole <= 20) {
				role = 'Platino I'
			} else if (levelRole <= 22) {
				role = 'Diamante II'
			} else if (levelRole <= 24) {
				role = 'Diamante I'
			} else if (levelRole <= 26) {
				role = 'Maestro II'
				} else if (levelRole <= 28) {
				role = 'Maestro I'
			} else if (levelRole <= 30) {
				role = '♕︎ Gran Maestro'
			}
			
			
  //---------𝗡𝗜𝗩𝗘𝗟𝗔𝗖𝗜𝗢𝗡-----------
			if (isGroup && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 2000) + 3
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						     giveLimit(sender, 2, limit)
						await replyfg(`
≡  _*Subiste de Nivel*_
┌──────────────
▢ *Nombre* : ${pushname}
▢ *Xp* : ${getLevelingXp(sender)}
▢ *Nivel* : ${getLevel} ➪ ${getLevelingLevel(sender)}
▢ *Rango* : *${role}*
▢ *Diamantes* : *+2💎*
└──────────────`)
					}
				} catch (err) {
					console.error(err)
				}
			}
			
			
			 //----------𝗘𝗠𝗢𝗝𝗜 𝗔 𝗦𝗧𝗜𝗖𝗞𝗘𝗥------------
    const sendStickerFromUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./libreria/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Fg.sendMessage(to, media, sticker,{quoted:mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('💎 Enviando sticker...'))
					fs.unlinkSync(asw)
					fs.unlinkSync(filess)
					});
					});
				});
			}
    
//--------𝗬𝗧 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦--------
    const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('✅ Enviando');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Fg.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }
  
  //-------  Ttp2 ttp3 y demás de Stickers
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./libreria/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
Fg.sendMessage(from, media, sticker, {quoted: mek})
console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))  
});
});
});
}
//---- 𝗔𝗡𝗧𝗜 𝗩𝗶𝗲𝘄𝗢𝗻𝗰𝗲
if (isGroup && isAntiviewonce && m.mtype == 'viewOnceMessage'){
var msg = {...mek}
msg.message = mek.message.viewOnceMessage.message
msg.message[Object.keys(msg.message)[0]].viewOnce = false
reply('✳️ ViewOnce *Detectado*')
Fg.copyNForward(from, msg)
}

   //-----------

_prem.expiredCheck(premium)

/*====================================================================*/
//-----𝗚𝗔𝗠𝗘𝗦---
game.cekWaktuMtk(Fg, mtk)

if (game.isMtk(from, mtk)){
if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = numeroRandom(1000)
addBalance(sender, htgm3, balance)
await reply(`*✅ Felicidades tu respuesta es correcta*\n*‣ Respuesta :* ${game.getJawabanMtk(from, mtk)}\n*‣ Ganaste :* ${htgm3}💰\n\nQuieres jugar de nuevo? 📌 Escribe\n*${prefix}mates*`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}
//----------𝗧𝗜𝗖𝗧𝗔𝗖𝗧𝗢𝗘--------
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./libreria/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "S"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`✳️ El juego ha comenzado antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./libreria/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2)
);
const chatAccept = ` TICTACTOE - GAME 

INFO :
  Jugador ❎ : @${boardnow.X}
  Jugador2 ⭕ : @${boardnow.O}
               
     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Tu turno @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

Escriba *rendirse* para dejar de jugar!
`;
Fg.sendMessage(from, chatAccept, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
} else {
Fg.sendMessage(from,`❎ Esta opción es solo para @${boardnow.O} !`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "N"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`✳️ El juego ha comenzado antes!`);
fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
Fg.sendMessage(from,`📌 Desafortunadamente el desafío @${boardnow.X} a sido rechazado 😕`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
} else {
Fg.sendMessage(from,`❎ Esta opción es solo para @${boardnow.O} !`,MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`✳️ Parece que tu oponente no ha recibido / rechazar el desafío.`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮 TICTACTOE - GAME 🎳*
          
El juego termina en empate 😐
`;
reply(chatEqual);
fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
return;
}
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 20) + 10;
const limLoose = Math.floor(Math.random() * 10) + 5;
const chatWon = `*🎮 TICTACTOE - GAME 🎳*
          
🎉 El ganador es @${winnerJID} 👑
`;
            //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
            //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
Fg.sendMessage(from, chatWon, MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
} else {
const chatMove = `  TICTACTOE - GAME 

INFO
  Jugador ❎ : @${moving.X}
  Jugador2 ⭕ : @${moving.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Tu turno : @${moving.turn == "X" ? moving.X : moving.O}

Escribe *rendirse* para dejar de jugar
`;
Fg.sendMessage(from, chatMove, MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
}

if ((senderNumber) && ["Rendirse", "rendirse"].includes(budy) && !isCmd) {
orangnye = sender
teks = `@${orangnye.split("@")[0]} Se Rendio\n_jajaja xd_`
if (fs.existsSync("./libreria/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./libreria/tictactoe/db/" + from + ".json");
mentions(teks,[sender],true)
  } else {
reply(`✳️ No hay sesión en curso`);
  }
}
      

   //--------𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗕𝗔𝗟𝗔𝗡𝗖𝗘--------
            /*    if (isVerify && isGroup ) {
                        const checkATM = getBalance(sender, balance)
  try {
if (checkATM === undefined) addBalance(sender)
const uangsaku = Math.floor(Math.random() * 50) + 200
addBalance(sender, uangsaku, balance)
  } catch (err) {
console.error(err)
  }
}*/

//---- BOTONES 

    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
     // tes = Fg.prepareMessage(from,  {degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: fs.readFileSync(`./image/fake.jpg`)}, location)
      const buttonMessage = {
       // locationMessage: tes.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Fg.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    
    const sendButLok = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await Fg.prepareMessage(from,  {degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: gam1}, location)
      const buttonMessages = {
        locationMessage: mhan.message.locationMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 6,
      };
      Fg.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        {quoted: mek}
      );
    };
    ///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Fg.prepareMessage(from, kma, location)

const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Fg.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//----
    
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await Fg.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Fg.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        {quoted: mek}
      );
    };
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await Fg.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      Fg.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    
    //----
    
    //-------𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣------
		if (isGroup && isAntilink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins && isOwner) return
if (!isBotGroupAdmins) return reply('🤨 Por suerte no soy  admin, asi que no te expulsare')
linkgp = await Fg.groupInviteCode (from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgp}`)) return //reply('✳️ Menos mal que este enlace es de este grupo v:')
    if (budy.includes(`https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA`)) return reply('✳️ Menos mal que este enlace es del grupo *📲💻ANDROID WORLD🎬🎮* v:')
    if (budy.includes(`https://chat.whatsapp.com/${soportefg}`)) return
console.log(color('[KICK]', 'red'), color('Anti link WhatsApp!', 'yellow'))
reply(`❎ No permitimos enlaces de otros grupos!\nLo siento *${pushname}* seras expulsado`)
setTimeout(() => {
Fg.groupRemove(from, [sender])
}, 2000);
}
}
	
	//-------𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠--------
   const linkte = 't.me/'
		if (budy.includes(`${linkte}`)){
		if (!isGroup) return
		if (!isAntiTele) return
    if (!isBotGroupAdmins) return reply('🤨 Por suerte no soy admin, asi que no te expulsare')
    if (budy.includes(`/AndroidWorldfg`)) return reply('✳️ Menos mal que este enlace es del grupo *📲💻ANDROID WORLD??🎮* v:')
		if (isGroupAdmins) return 
		Fg.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('Adios')
		}, 1100)
		setTimeout( () => {
		Fg.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`❎ No permitimos enlaces de Telegram!\nLo siento *${pushname}* seras expulsado`)
		}, 0)
	}
	// ---- 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 𝗗𝗜𝗦𝗖𝗢𝗥𝗗------
   const linkdi = 'discord.gg/'
		if (budy.includes(`${linkdi}`)){
		if (!isGroup) return
		if (!isAntiDis) return
    if (!isBotGroupAdmins) return reply('🤨 Por suerte no soy admin, asi que no te expulsare') 
		if (isGroupAdmins) return 
		Fg.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('Adios')
		}, 1100)
		setTimeout( () => {
		Fg.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`❎ No permitimos enlaces de Discord!\nLo siento *${pushname}* seras expulsado`)
		}, 0)
	}


 if (!isGroup && isCmd) console.log(color('[FG98]','aqua'), "Pv", color(command, "blue"), "de", (sender.split('@')[0]),  args.length)
if (isGroup && isCmd) console.log(color('[FG98]','aqua'), "Gp", color(command, "green"), "de", (sender.split('@')[0]), "en", (groupName), args.length)

//----------- 𝗩𝗘𝗥 𝗖𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗜́S𝗧𝗜𝗖𝗔𝗦---------
let prem_ = '❎'
			if (isPremium) {
			prem_ = '✅'
			} 
			if (isOwner) {
			prem_ = 'VIP'
			}
let public_ = 'Publico'
           if (banChats){
           public_ = 'Privado'
          }
let antidel_ = 'Inactivo'
           if (antidel){
           antidel_ = 'Activo'
          }
let Welcome_ = 'Inactivo'
			if (isWelcom) {
			Welcome_ = 'Activo'
			}
let Adios_ = 'Inactivo'
			if (isLeft) {
			Adios_ = 'Activo'
			}
let AntiLink_ = 'Inactivo'
			if (isAntilink) {
			AntiLink_ = 'Activo'
			}
let AntiLinktele_ = 'Inactivo'
			if (isAntiTele) {
			AntiLinktele_ = 'Activo'
			}
let AntiLinkdis_ = 'Inactivo'
			if (isAntiDis) {
			AntiLinkdis_ = 'Activo'
			}
let Nsfw_ = 'Inactivo'
			if (isNsfw) {
			Nsfw_ = 'Activo'
			}
let Leveling_ = 'Inactivo'
			if (isLevelingOn) {
			Leveling_ = 'Activo'
			}
let ViOnce_ = 'Inactivo'
			if (isAntiviewonce) {
			ViOnce_ = 'Activo'
			} 


    //---- Usuario no Verificado
const isUser = () => { 
  sendButMessage(from, `≡ Hola ${pushname} \n\nNo estas Verificado como usuario del bot, para usar los comandos primero verificate`, `Presiona el botón para verificarte o escribe ${prefix}verify`, [
          {
            buttonId: `${prefix}verify`,
            buttonText: {
              displayText: `✅ Verify`,
            },
            type: 1,
          },
        ]);
}

//------------ 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 2 FG98---------
const sendSticker = (from, filename, mek) => {
        Fg.sendMessage(from, filename, MessageType.sticker, {contextInfo: {externalAdReply:{
title:`${pushname}`,body:"",previewType:"PHOTO",thumbnail:fakelogo,sourceUrl:`https://chat.whatsapp.com/${soportefg}` }},quoted: mek})
}


//------------ 𝗕𝗔𝗡𝗖𝗛𝗔𝗧 ----------
if (isBanchat){
if (!isOwner)return //reply(`Grupo Silenciado`) 
}

//---- 𝗕𝗢𝗧 𝗠𝗢𝗗𝗢 𝗣𝗥𝗜𝗩𝗔𝗗𝗢--
if (!isOwner && !isMods && banChats && isCmd === true) return //reply('✳️ Bot en modo privado, todas las funciones bloqueadas')
   
   //----𝗔𝗨𝗧𝗢 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 2
        
        switch(autofg) {
        	
        case 'bot':
buf = fs.readFileSync(`./src/mp3/1.mp3`)
Fg.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
break
        	
 case 'prefix':
 case 'prefijo': 
pre = `⭐ El prefijo que se utiliza es : *${single ? `${prefa}` : multi ? 'Multiprefijo' : 'SinPrefijo'}*`
reply(pre)
break

}

//-- 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦
switch(command) {
case "menu":
      case "help":  
        if(!isVerify) return isUser()
      mnu1 = ["fg","fg2"]
        mnu2 = mnu1[Math.floor(Math.random() * mnu1.length)]
        imgth = fs.readFileSync(`./image/${mnu2}.jpg`)
        
        lvlh = getLevelingLevel(sender)
       infost = await Fg.getStatus(`${sender.split('@')[0]}@c.us`)
	  infost = infost.status == 401 ? '' : infost.status
			
     helpfg = `
┌───⊷ *INFO USER* ⊶
❐ *Nombre* : @${sender.split("@")[0]}
❐ *Nivel* : ${lvlh}
❐ *Rango* : ${role} 🏅
❐ *Info* : ${infost}
└──────────────
≡ INFO BOT
▷ *Hora* : ${hora2}
▷ *Prefijo* : Multiprefijo
▷ *Total Hits* : ${totalhit}
▷ *Usuarios* : ${_user.length}
┌──────────────
❐ *${prefix}changelog*
❐ *${prefix}reglas*
❐ *${prefix}creador*
❐ *${prefix}info*
❐ *${prefix}bot* _(simsimi)_
❐ *${prefix}report*
❐ *${prefix}ping*
❐ *${prefix}runtime*
❐ *${prefix}estado*
❐ *${prefix}groupDylux*
❐ *${prefix}Join*
└──────────────`
        sendButLocation(from, `${helpfg}`, ` *NOTA:* Si tiene problemas con los botones use el comando ${prefix}allmenu`, {jpegThumbnail:imgth},

 [
{buttonId:`${prefix}allmenu`,buttonText:{displayText:'⦙☰ MENU'},type:1},
{buttonId:`${prefix}info`,buttonText:{displayText:'📇 INFO'},type:1}],

{contextInfo: { mentionedJid: [sender]}} )
break;

case 'allmenu':
        case 'menuall':
        case 'comandos':
        case 'commands':
        if(!isVerify) return isUser()
        mnu1 = ["fg","fg2"]
        mnu2 = mnu1[Math.floor(Math.random() * mnu1.length)]
        imgth = fs.readFileSync(`./image/${mnu2}.jpg`)
        autorfg = `${sender.split("@")[0]}`
sendButLocation(from, `${help(prefix, pushname, autorfg)}`, `*${fecha()}*\n▢ *DyLux  ┃ ᴮᴼᵀ  v4*\n▢ *Total Hits* : ${totalhit}\n▢ *Usuarios* : ${_user.length}`, {jpegThumbnail:imgth},

 [
{buttonId:`${prefix}creador`,buttonText:{displayText:'♦️ CREADOR'},type:1},
{buttonId:`${prefix}reglas`,buttonText:{displayText:'📜 REGLAS'},type:1}], 

{contextInfo: { mentionedJid: [sender]}} )
break

//--info bot 
case 'info':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
const fgnum = `59172945992@s.whatsapp.net`
const crisnum = "529631769130@s.whatsapp.net"
runtime2 = process.uptime()
const timestamp2 = speed();
const latensi2 = speed() - timestamp2

infobot =`⊷ *BOT*
▢ Nombre : *${Fg.user.name}*
▢ Version Bot : *4.0.0*
▢ Prefijo : *${single ? `${prefa}` : multi ? 'Multiprefijo' : 'SinPrefijo'}*
▢ Total Hits : *${totalhit}*
▢ Usuarios registrados : ${_user.length}
▢ Navegador : *${Fg.browserDescription[1]}*
▢ Versión Navegador: *${Fg.browserDescription[2]}*
▢ Velocidad : *${latensi2.toFixed(4)}*
▢ Tiempo Ejecucion : *${kyun(runtime2)}*
▢ Version Wha : ${Fg.user.phone.wa_version}
▢ Grupo del Bot : 
*https://chat.whatsapp.com/${soportefg}*

⊷ *AGRADECIMIENTOS* ⊶
▢ *FG98* :
@${fgnum.split("@")[0]}
_*Diseñador del bot*_
_*Fb*_ : facebook.com/fg98A
_*Fb*_ : facebook.com/fg98ff
▢ *CRISS* :
@${crisnum.split("@")[0]}
_*Ayudante de alguno de los camandos*_
_*Ig*_ : instagram.com/sayurizuniga3
▢ *Mi Gato* :
_*:)*_

▢ Instagram :
https://www.instagram.com/fg98._
▢ BASE :
https://github.com/FG98F/fgbotv4
▢ DUEÑO :
https://github.com/FG98F`
sendButLocation(from, `${infobot}`, `*Developer _© FG98_* `, {jpegThumbnail:fglogo},

 [
{buttonId:`${prefix}script`,buttonText:{displayText:'𓅓 SCRIPT'},type:1},
{buttonId:`${prefix}reglas`,buttonText:{displayText:'📜 REGLAS'},type:1}],

{contextInfo: { mentionedJid: [fgnum, crisnum]}} )
break

             //---activar Android World
case 'rulesgp':
				if (!isOwner) return
			
					if (args.length < 1) return reply(`✳️ on  - off`)
					if ((args[0]) === 'on') {
						if (isAw) return reply('✳️ ya está activo')
						awgp.push(from)
						fs.writeFileSync('./database/awgp.json', JSON.stringify(awgp))
						reply(`✅ Activado`)
					} else if ((args[0]) === 'off') {
						if (!isAw) return reply('✳️ Ya está desactivado')
						awgp.splice(from, 1)
						fs.writeFileSync('./database/awgp.json', JSON.stringify(awgp))
						reply(`✅ Desactivado`)
					} else {
						reply(`on - off`)
					}
					break
             //---Reglas del grupo Android World
             
             case 'reglasgp':
             case 'reglasgrupo':
              if (!isAw) return
            if (!isGroup) return reply(group())
            bbaw = ` *📲💻ANDROID WORLD🎬🎮*

                 🔷Te ofrece🔶

➢ Todo para tu celular android! 📱
➢Juegos de todo tipo🎮👾
➢🛠 Herramientas para personalizar tu celular 🔧🔩
➢ Aplicaciones⚙🕋🎮
➢ Juegos PPSSPP
➢ Libros🗃📚
➢ Todo tipo de archivos apk
➢ Ayuda y aplicaciones para usuarios root 📱
➢ Fondos📱🖼
➢ Programas para pc
➢ Videos🎞🎥 (leer reglas) 
➢ Películas📽🍿
➢ Música 🎵🎶🎧
➢ Y mucho más ✅

💠Envía y descarga juegos, aplicaciones, herramientas y todo lo relacionado para tu android 
💠 si tienes problemas en tu android, cuéntanos y entre todos nos ayudaremos 

❢◥ ▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬ ◤❢

                 ❌ *REGLAS* ❌


🚫 ➭ *ADMINISTRADORES NO ANULAR EL LINK DEL GRUPO* (importante!). 
🚫 ➭No  enviar links de otros grupos, no importa el contenido del grupo. (pueden enviar links de otras redes sociales menos de WhatsApp y Telegram) 
🚫 ➭ No xxx, gore, filias o material explícito. 
🚫 ➭ No  incitar, crear o seguir peleas entre usuarios.
🚫 ➭ No pedir rango de administrador.
🚫 ➭ No hacer  spam.
🚫 ➭ No spamear con stickers
🚫 ➭ No pedir cosas sin pedir el favor.
🚫 ➭ No enviar cadenas molestas.
🚫 ➭ *No pedir sin aportar antes, muy importante.* 
🚫 ➭ No ser irrespetuoso con los miembros del grupo.
🚫 ➭ *Intercambiar, está totalmente prohibido.* 
🚫 ➭ No enviar aplicaciones maliciosas (virus, o con un fin no bueno para quien lo instala).

ツ📦Sólo se tomará como aporte los archivos que pesen 10 MB o más 
🚷 La gente inactiva se elimina cada vez que se llena el grupo o esta inactivo, siempre asegúrate tener más de 30 mensajes✍.
💠si envías música deberás mencionar su género, nombre y artista. 

    *Link del grupo -  Android World*
https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA

*Grupo Telegram*
 http://t.me/AndroidWorldfg

🚷 si  eres eliminado puedes apelar tu eliminación aquí:
https://chat.whatsapp.com/Hcvn72lEw9Y0nYqyR6TcBC

Para pedir desban deberás mostrar una captura del momento de tu eliminación y de la razón que fuiste eliminado 🚷 Si no fuiste eliminado del grupo y entras al de pedir desban, serás eliminado de ambos grupos. ❌

👨🏻‍💻 Siempre y cuando necesites ayuda pide en el grupo, los administradores y usuarios te ayudarán en lo que necesites. 

¡Gracias por ser parte de nuestra comunidad!. 

*Creado el 1 de Marzo de 2018.* `
reply(bbaw) 
             break 
             

//----  Reglas bot
case 'rules':
case 'reglas':
case 'reglasbot':
if(!isVerify) return isUser()
	reglasbot = `  ≡ *REGLAS*


*REGLAS PARA USUARIOS DE BOT* 

• Por favor, use un comando cada 10s

• Llamada al Bot Bloqueo automatico

• No llame al  Bot si no esta activo. 

• El bot no esta activo las 24 horas, por lo que depende de si el propietario esta alli cuando el bot tambien esta encendido. 


*Consecuencias al romper las reglas* 
El bot te bloqueara o dejara el grupo que administras. Estas reglas son para la conveniencia de todos los que las usan. este bot`
reply(reglasbot)
break

case 'groupdylux':
case 'grupodylux':
case 'gpdylux':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
thumb = fs.readFileSync(`./image/fg.jpg`)
respon = `Grupo WhatsApp Official`
sendButLok(from, respon, `Grupo Bot WhatsApp FG98, Click para obtener el link`, thumb, [
          {
            buttonId: `${prefix}soporte`,
            buttonText: {
              displayText: `DyLux ᴮᴼᵀ`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}grupo2`,
            buttonText: {
              displayText: `Android World`,
            },
            type: 1,
          },
        ], {quoted: mek});
        break;


case 'grupo2':
 if(!isVerify) return isUser()
  reply('*📌 Android World*\nhttps://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA')
  break
case 'soporte':
case 'support':
 if(!isVerify) return isUser()
     dylux = `📌 *Grupo soporte del Bot*\n\nhttps://chat.whatsapp.com/${soportefg}`
      reply(dylux) 
   break
  
 //----
 case 'changelog':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  cbios = `
  *REGISTRO DE CAMBIOS*
         ────────────
  ≡ Nuevos! 
 ▢  *${prefix}ppt*  Piedra papel o tijera juega para ganar 💰Coins
 ▢  *${prefix}slot*  Lucky juega para ganar XP y subir más rápido de nivel

≡ Correcciones
▢  *${prefix}drad*  Se corrigió el Traductor
▢ *Botones en Multiprefijo* : se corrigió los botones que solo respondían a un solo prefijo!
`

  reply(cbios)
break
   
//--- verificación  api funciona
case 'verify':
case 'reg':
case 'verificar':
case 'register':
case 'daftar':
			if (isVerify) return replyfg('*✳️ Tu cuenta ya esta registrada*')
					const seriTod = bikinSerial(10)
					
				try {
				ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'
				}
				fgfoto = 'https://i.ibb.co/RQj701v/c51bc5f9fe1b.jpg' //cambia como quieras, puedes subirlo a imgbb.com
				veri = sender
				_user.push(sender)
				fs.writeFileSync('./database/verify.json', JSON.stringify(_user))
				adduserUser(sender, seriTod)

			capt = `
┌────「 *VERIFICADO* 」─
▢ *Nombre:* @${sender.split("@")[0]}
▢ *Hora:* _${hora2}_
▢ *Usuarios Verificados:* _${_user.length}_
└────「 *${Fg.user.name}* 」`

let reuser = await getBuffer(ppimg)//--sólo foto

  let regis = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_user.length}&seri=${seriTod}&pp=${ppimg}&bg=${fgfoto}`)

  py =  await Fg.prepareMessage(from, regis, image)
gbutsan = [
{buttonId: `${prefix}allmenu`, buttonText: {displayText: '⦙☰ MENU'}, type: 1},
{buttonId: `💙`, buttonText: {displayText: '💙'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: capt,
footerText: `*Click para ver el Menu*`,
buttons: gbutsan,
headerType: 4
}
await Fg.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo: {  mentionedJid: [sender]}, quoted:mek})
break

//-- Simsimi
case 'simi':
case 'bot':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
		 if (args.length < 1) return reply(`Hola _*${pushname}*_ quieres charlar un rato?\n\nResponde con *${prefix + command}* _tu mensaje_`)
		texto = args.join(' ')
                     anu = await fetchJson(`https://api.simsimi.net/v2/?text=${texto}&lc=es`)
                     simfg = (`${anu.success}`)      
                     replyfg(simfg)
                     break
                    
                    case 'sc': 
case 'script':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  scfg = `📌 Repositorio de este Bot : 
 https://github.com/FG98F/fgv4
       ──────────
⭐ Quieres un Bot editable? prueba este Bot
https://github.com/FG98F/fgbotv4`
reply(scfg)
break

//-- Dueño del bot
case 'owner':
case 'creator':
case 'creador': 
case 'developer':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
Fg.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
//Fg.sendMessage(from, {displayname: "jeff", vcard: vcard2}, MessageType.contact, { quoted: mek})
                    .then((res) => Fg.sendMessage(from, `✅ Aqui mi dueño, solo chatea si es necesario`, text, {quoted: res}))
 break
 case 'codueño':
 case 'coowner':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
Fg.sendMessage(from, {displayname: "jeff", vcard: vcard2}, MessageType.contact, { quoted: mek})
                    .then((res) => Fg.sendMessage(from, `✅ Aqui mi segundo dueño :v, solo chatea si es necesario`, text, {quoted: res}))
 break

case 'status':
case 'estado':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
 
stat = `*「 ESTADO DEL BOT 」*
*🛡️ Modo* : ${public_}
*🚫 Antidelete* : ${antidel_}`
reply(stat)
break
			




//--- Pedidos solicitud
case 'pedido':
case 'solicitud':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  yoi = q
  if (args.length < 1) return reply('✳️ Ingrese las funciones que desee en el Bot *DyLux*')
  if (yoi.length > 200 ) return reply('El texto supera el límite, su solicitud es rechazada !')
  _solicitud.push(yoi)
  fs.writeFileSync('./result/reportes/solicitud.json', JSON.stringify(_solicitud))
  reply(`✅ Gracias *${pushname}*, Su solicitud ha sido almacenada en la base de datos.`)
  
	break

//--- informes - bugs 

case 'informe':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  yoi = q
  if (args.length < 1) return reply('✳️ Ingrese el nombre de la función de error que ocurre cuando la prueba')
  if (yoi.length > 200) return reply('El texto supera el límite, su solicitud es rechazada!')
  _informe.push(yoi)
  fs.writeFileSync('./result/reportes/informe.json', JSON.stringify(_informe))
  reply(`✅ Gracias *${pushname}*, Su informe se ha almacenado en la base de datos`)
	break

//-- lista de informes 
case 'verinformes':
case 'informes':
			if (!isOwner) return reply(ownerB())
				teks = ` ≡ *INFORMES*\nLa siguiente es una lista de informes recibidos en la fecha *${fecha()}* con la cantidad de informes *${_informe.length}*\n\n┌───⊷ *LISTA* ⊶\n`
				for (let lap of _informe) {
					teks += `▢ ${lap}\n`
				}
				teks  += `└──────────────`
				reply(teks.trim())
				break

//-- lista de solicitudes
case 'versolicitudes':
case 'solicitudes':
			if (!isOwner) return reply(ownerB())
				teks = ` ≡ *SOLICITUDES*\nLa siguiente es una lista de solicitudes recibidas en la fecha *${fecha()}* con la cantidad de solicitudes *${_solicitud.length}*\n\n┌───⊷ *LISTA* ⊶\n`
				for (let req of _solicitud) {
					teks += `▢ ${req}\n`
				}
				teks  += `└──────────────`
				reply(teks.trim())
				break
				
				//-- Reportes
case 'report':
case 'reporte':
case 'reportes':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
report = `  ≡ *INFORMACION*
Solicite e informe las funciones de error en el bot, asegúrese de proporcionar un informe correcto y claro !

┌───⊷ *REPORTES* ⊶
▢ *${prefix}Solicitud (Texto)*
▢ *${prefix}Informe (Texto)*
└──────────────

*Total*
Solicitudes : ${_solicitud.length}
Informes : ${_informe.length}

✆ o puede ponerse en contacto con el propietario para obtener más información.`
reply(report)
break

//-- Clona un perfil para el bot
case 'clone':
case 'clonar':
        if (!isOwner) return reply(ownerB())
		if (!isGroup) return reply(group())
		if (args.length < 1) return reply('✳️ Menciona a quien quieres que clone su perfil 😁')
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona a quiere quieres que clone su perfil 😁')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Fg.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Fg.updateProfilePicture(botNumber, buffer)
						mentions(`✅ Foto de perfil actualizada correctamente usando la foto de perfil de : @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('❎ Lo siento ocurrio un error')
					}
		break
case 'actualizar':
case 'update':
if (!isOwner) return reply(ownerB())
reply(`✳️ Espere un momento el bot se está actualizando`)
exec(`bash update.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(`✅ *El bot se ah actualizado de forma satisfactoria*\n Informe de la actualización:\n\n${stdout}\n\n Los cambios serán reflejados la próxima vez que inicie el bot.`)
})
break


case 'nulis':
	case 'tulis':
		case 'escribe':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
				if (args.length < 1) return reply(`📝 Que escribo? Ejemplo : *${prefix + command}* Hola puercos`)
				reply('✅ Espere, Lo estoy escribiendo✍️')
				buff = `https://api.zeks.me/api/magernulis?apikey=WRhywqyYC0doYNeqTZymcB2SjrT&nama=FG98&kelas=6-08&text=${q}&tinta=6`
					voss = await fetch(buff)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					Fg.sendMessage(from, await getBuffer(buff), image, {quoted: mek, caption: '✅ Es mejor de lo que escribes tú ✍🏻'})
					} else {
					  reply('Ocurrió un error')
					}
					break

//---Verdad o reto
case "vor":
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
      sendButMessage(from, `Verdad o Reto`, `Elija uno`, [
          {
            buttonId: `${prefix}verdad`,
            buttonText: {
              displayText: `Verdad`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}reto`,
            buttonText: {
              displayText: `Reto`,
            },
            type: 1,
          },
        ]);
        break;

//-- verdad
case 'verdad':
  if(!isVerify) return isUser()
  if (!isGroup) return reply(group())
  if (isBanned) return reply(banf())
    if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
  const verdad = _verdad[Math.floor(Math.random() * _verdad.length)]
  respon = `‣ *Verdad*\n\n${verdad}`
       sendButMessage(from, respon, `⏩ Presione siguiente para continuar`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⏩ SIGUIENTE`,
            },
            type: 1,
          }
        ],);
break
//-- Reto
 case 'reto':
if (!isGroup) return reply(group())
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
  const reto = _reto[Math.floor(Math.random() * _reto.length)]
  respon = `‣ *Reto*\n\n${reto}`
         sendButMessage(from, respon, `⏩ Presione siguiente para continuar`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⏩ SIGUIENTE`,
            },
            type: 1,
          }
        ]);
break



//-- link whatsapp
case 'wame':
case 'wa.me':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					reply(`*Link WhatsApp:* wa.me/${sender.split('@')[0]}\n*O*\napi.whatsapp.com/send?phone=${sender.split('@')[0]}`)
			break

//-- say
case 'say':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
sendMess(from, q)
break

//-- Escanea el texto de una imagen----- Reconocimiento de texto
case 'ocr':
case 'rt':
     if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const media = await Fg.downloadAndSaveMediaMessage(encmedia)
			
			reply(wait())
						await recognize(media, {lang: 'eng+es', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							  limitAdd(sender, limit)
							.catch(err => {
								reply(err(prefix))
								fs.unlinkSync(media)
							})
					} else {
						reply(`📇 RECONOCIMIENTO DE TEXTO\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envia una imagen con *${prefix + command}* o etiqueta una imagen que se haya enviado\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*Alias del comando*\n${prefix}ocr\n${prefix}rt`)
					}
					
		break
		
		 //chat leer más 
  case 'leermas':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
Fg.updatePresence(from, Presence.composing)
if (args.length < 1) return reply(`*TEXTO LEER MÁS\n\nEjem : ${prefix + command} hola | que hacen`)
tels = q
var teks1 = tels.split("|")[0];
var teks2 = tels.split("|")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
Fg.sendMessage(from, hasil, text, { quoted: mek})
break 

//--- texto a voz
case 'tts':
case 'voz': 
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
 
				if (args.length < 1) return Fg.sendMessage(from, `❎ Ingrese el código de idioma y el texto\n\n*Ejemplo* : ${prefix}tts es Hola puercos`, text, {quoted: mek})
				const gtts = require('./libreria/gtts')(args[0])
				if (args.length < 2) return Fg.sendMessage(from, `❎ Ingrese el texto\n\n*Ejemplo* : ${prefix}tts es Hola puercos`, text, {quoted: mek})
				dtt = body.slice(8)
				
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 300
				? reply('❎ El texto es demasiado largo, tampoco de voy a leer la Biblia')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buff = fs.readFileSync(rano)
				if (err) return reply('❎ Lo siento ocurrió un error')
				Fg.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
				fs.unlinkSync(rano)
				})
				})
break

//******************** 》 MAKER 《 ********************\\

			

case 'blackpink':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
reply(wait())
bp = args.join(" ")
bp = await getBuffer(`https://api.zeks.xyz/api/logobp?apikey=${Vkey}&text=${bp}`)
Fg.sendMessage(from,bp,image,{quoted:mek})
limitAdd(sender, limit)
break

case '3d':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				if (args.length < 1) return reply(`✳️ Ingrese el texto\n📌 Ejemplo : ${prefix + command} DyLux`)
			    defg = q
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${defg}`)
                
                	reply(wait())
                Fg.sendMessage(from, data, image, {quoted: mek, caption: `✅ Listo : *${defg}*`})
                limitAdd(sender, limit)
                break
                case 'fakedonald':
        if(!isVerify) return isUser()
  if (isBanned) return reply(banf()) 
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				
                    if (args.length < 1) return reply(`✳️ Ejemplo : ${prefix + command} DyLux`)
                    reply(wait())
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${lolkey}&text=${ini_txt}`)
                    Fg.sendMessage(from, ini_buffer, image, { quoted: mek })
                      limitAdd(sender, limit)
                    break
                   
                  
                  case 'halloween':
	 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
	reply(wait())
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${q}&apikey=${hunterkey}`)
  limitAdd(sender, limit)
 break
   
   case 'vampire':
   case 'vampiro':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
  reply(wait())
 sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${q}&apikey=${hunterkey}`)
 limitAdd(sender, limit)
  break
   case 'carbon': 
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
 reply(wait())
  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${q}&apikey=${hunterkey}`)
  limitAdd(sender, limit)
 break
case 'matrix':
				 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
				reply(wait())
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${q}&apikey=${hunterkey}`)
				limitAdd(sender, limit)
break
				case 'googletxt':
				 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
				reply(wait())
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${q}&apikey=${hunterkey}`)
				limitAdd(sender, limit)
break
				case 'spider':
				 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
				reply(wait())
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${q}&apikey=${hunterkey}`)
				limitAdd(sender, limit)
break
				case 'express':
				 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
				reply(wait())
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${q}&apikey=${hunterkey}`)
				limitAdd(sender, limit)
break
				case 'dance':
				 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
				reply(wait())
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${q}&apikey=${hunterkey}`)
				limitAdd(sender, limit)
break
				case 'blackbird':
				 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
				reply(wait())
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${q}&apikey=${hunterkey}`)
				limitAdd(sender, limit)
break
				case '3dtext':
				 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* FG98`)
				reply(wait())
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${q}&apikey=${hunterkey}`)
				limitAdd(sender, limit)
break
                   
                          
                   
 ///++++---------=============================+++++++
                 

                    
                    case 'sinfondo':
   if(!isVerify) return isUser()
 if (isBanned) return reply(banf())
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if ((isMedia || isQuotedImage)) {
const encmedianb = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const median = await Fg.downloadAndSaveMediaMessage(encmedianb)
reply(wait())
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
ranp = getRandom('.png')
await removeBackgroundFromImageFile({path: median, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(median)
let buffer = Buffer.from(res.base64img, 'base64')
Fg.sendMessage(from, buffer, image, {quoted: mek, caption: '✅ Listo'})
fs.unlinkSync(buffer)
})
}
limitAdd(sender, limit)
break
//--------𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗢𝗠𝗔𝗡𝗗O--------
              case 'addcmd': 
case 'setcmd':
case 'stickcmd':
if (!isOwner && !isMods) return reply(modsB())
if (isQuotedSticker) {
if (!q) return reply(`✳️ Responde a un sticker con *${prefix + command}* _${prefix}comando_\n\n📌 Ejemplo *${prefix + command}* ${prefix}menu`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("✅ Comando guardado")
} else {
reply(`✅ Responde a un sticker con *${prefix + command}* _${prefix}comando_\n\n📌 Ejemplo *${prefix + command}* ${prefix}menu`)
}
break



case 'delcmd':
case 'delstickcmd':
if (!isOwner && !isMods) return reply(modsB())
if (!isQuotedSticker) return reply(`✳️ Responde al sticker comando para eliminar\n\n📌 Uso del comamdo : ${prefix + command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/stickcmd.json', JSON.stringify(_scommand))
reply("✅ Comando eliminado")
break
case 'listcmd':
case 'liststickcmd':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
let teksnyee = `「 *LISTA DE STICKER CMD* 」`
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `

❉─────────────────────❉ 
*🔮 ID :* ${i.id}
*🛡️ Comando :* ${i.chats}
❉─────────────────────❉`
}
reply(teksnyee)
break

case 'getstik':
case 'getstick': 
case 'getstikcmd': 
case 'getcmd':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if(!q)return reply(`📌Ejemplo : ${prefix + command} menu`)
try {
ga = fs.readFileSync(`./database/stickcmd/${q}.webp`)
Fg.sendMessage(from, ga, sticker,{quoted:mek})
} catch {
reply(`✳️El Sticker comando no esta registrado o  el Sticker comando usa un prefijo!\n\n📌 Para ver la lista de stickcmd escriba *${prefix}liststickcmd*`)
}
break

//--borrar chats del bot
case 'clearchat':
case 'clearall':
{
if (!isOwner)return reply(ownerB()) 
let chiit = await Fg.chats.all()
for (let i of chiit){
Fg.modifyChat(i.jid, 'delete', {
includeStarred: false
  })
}
reply(`😔 borre todos mis chats`)
  }
break

case 'setprefix':
if (!isOwner && !isMods) return reply(modsB())
if (args.length < 1) return reply(`*✳️Formato del comando!*\n\n*📌 Ejemplo :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} # (Personalizado!)`)
if((args[0]) == 'multi'){
if(multi)return reply('_✳️ El Prefijo actual es multi prefijo!_')
multi = true
nopref = false
single = false
reply(`✅ Se cambio el prefijo a *multiprefijo*`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_✳️ ya está sin prefijo!_')
multi = false
single = false
nopref = true
reply(`✅ Se cambió de prefijo a *noprefix*\n\n📌Ya no necesitas un prefijo para usar los comandos`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`✅ Prefijo cambiado a : *${q}*`)
}
break

// Lista de Grupos 
case 'listgroup': 
case 'grouplist': 
case 'listgp':
case 'listagp':
case 'listagrupos':
if (!isOwner && !isMods) return reply(modsB())
const txs = Fg.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`
❉─────────────────────❉
• *🔖Nombre* : ${Fg.getName(v.jid)}*
• *🛡️ID de Grupo : ${v.jid}*
• *🏮Estado* : ${v.read_only ? 'noUnido' : 'Unido'}
❉─────────────────────❉`).join`\n\n`
reply('≡ *LISTA de Grupos*\n\n' + txs)
break

case 'antidelete':
if (!isOwner && !isMods) return reply(modsB())
if (args.length < 1) return reply(`✳️ Anti mensajes eliminados\n\n📌 Para activar Escriba *${prefix +command} on* \nPara desactivar *${prefix +command} off*`)
if (args[0] === "on") {
if(antidel)return reply('✳️ Ha sido activado antes!')
antidel = true
reply(`✅ Se actico Anti - Delete`)
} else if (args[0] === "off") {
if(!antidel)return reply('✳️ Ya ha sido desactivado antes!')
antidel = false
reply(`✅ Se desactivo Anti - Delete`)
} else {
reply(`✳️ Anti mensajes eliminados\n\n📌 Para activar Escriba *${prefix +command} on* \nPara desactivar *${prefix +command} off*`)
}
break
                
case 'bc':
case 'tx':
if (!isOwner && !isMods)return reply(modsB()) 
if (args.length < 1) return reply('✳️ Que quieres transmitir?')
bcc = await Fg.chats.all()
if (isMedia && !mek.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Fg.downloadMediaMessage(encmedia)
for (let i of bcc){
Fg.sendMessage(i.jid, media, image, {caption: `*TRANSMISIÓN ┃ STAFF*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n${q}`})
}
reply(`*✅ Transmision realizada*`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Fg.downloadMediaMessage(encmedia)
for (let _ of bcc) {
Fg.sendMessage(_.jid, bc, video, {caption: `*TRANSMISIÓN ┃ STAFF*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n${q}`})
}
reply('*✅ Transmision realizada* ')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `*TRANSMISIÓN ┃ STAFF*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n${q}`)
	}
reply(`✅ Transmision realizada *Total chats ${totalchat.length}*`)
		}
break

case 'ban':
				if (!isOwner && !isMods) return reply(modsB())
				if (args.length < 1) return reply(`✳️ A quien quieres que banee?`)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					ban.push(bnnd)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
						mentions(`✅ @${mentioned[0].split('@')[0]} ha sido baneado!\n\nEste usuario no podrá volver a usar mis comandos`, mentioned, true)
					}
					
					break
				
		        case 'unban':
				if (!isOwner && !isMods) return reply(modsB())
				if (args.length < 1) return reply(`✳️ Menciona al usuario para desbanear!`)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = q
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				
				if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
						mentions(`✅ @${mentioned[0].split('@')[0]} ha sido Desbaneado`, mentioned, true)
					}
					break 

//-- Lista de baneados por el bot
case 'banlist':
  if(!isVerify) return isUser()
      teks = ` ≡ *BANEADOS*\nLos siguientes números son una lista de números baneados por infringir las reglas o enviar spam al Bot\n\n*Total* : ${ban.length}\n┌───⊷ *LISTA* ⊶\n`
	    for (let baned of ban) {
	    teks += `▢ @${baned.split('@')[0]}\n`
					}
	    teks += `└──────────────`
	    Fg.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
					
					
//---
      case 'listonline':
case 'online':
case 'enlinea':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (!isGroup) return reply(group())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    
			    let online = [...Object.keys(Fg.chats.get(ido).presences), Fg.user.jid]
			    Fg.sendMessage(from, 'En linea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*©POWERED BY Dylux ┃ ᴮᴼᵀ*`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
    
			    })

				break

      case 'sider':
case 'read':
case 'leido':
case 'leído':
case 'leidos':
case 'leídos':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroupAdmins && !isOwner)return reply(admin())
if (!isGroup) return reply(group())
if (!isQuotedMsg)return reply('✳️Responde a un mensaje mío')
infom = await Fg.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `▢ *Mensaje Leído por* :\n\n`
for(let i of infom.reads){
teks += '❏'+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `⬡ ⌚ *Hora* : ` + moment(`${i.t}` * 1000).tz('America/La_Paz').format('HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
       
       case 'getsider':
case 'noleidos':
try {
	if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group()) 
if (!isQuotedMsg) return reply('✳️ Responde a un mensaje mío')      
infom = await Fg.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 	
// ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
// gabungkan ke dalam variable time
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
}
//buat index bulan
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var myDays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
// fecha
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = `▢ *Mensaje Leído por*\n\n`
for (let i of hemm) {
teksx += `📌 Nombre : @${i.jid.split('@')[0]}\n ⌚ *Hora* : ${toTime(i.t, true)}\n *📆 Fecha* : ${toBulan(i.t, true)}\n\n`
}
teksx1 = `▢ *Mensaje no Leído*\n\n`
for (let i of hemms){
teksx1 += ` 📌 Nombre : @${i.jid.split('@')[0]}\n`
teksx1 += ` ⌚ *Hora* : ${toTime(i.t, true)}\n *📆 Fecha* : ${toBulan(i.t, true)}\n\n`
}
Fg.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: mek, thumbnail: fakefg, contextInfo: { forwardingScore:999, isForwarded:false, mentionedJid: readdin }})
Fg.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: mek, thumbnail: fakefg, contextInfo: { forwardingScore:999, isForwarded:false, mentionedJid: readon }})
} catch(e) {
reply('✳️ Responde a un mensaje mío')
reply(e)
console.log(e)
}
break

                  case 'hoy':
                   case 'hora' :
                   case 'fecha':
                   if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   const timx = moment.tz('America/Mexico_City').format('HH:mm:ss')
                   const argt = moment.tz('America/Argentina/Salta').format('HH:mm:ss')
                   tpf = `*${fecha()}*
Hora : *${hora2}*
   ─────────────
México : *${timx}*
Argentina : *${argt}*
    ─────────────`     
  reply(tpf)
                   break          
                  
                  //-----𝗘𝗗𝗨𝗖𝗔𝗖𝗜𝗢́𝗡 
case 'translate':
		case 'tl':
		case 'trad':
		case 'traducir':
		   if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				   if (args.length < 1) return reply(`✳️ Ingrese el texto para traducir\n\n📌 Ejemplo : ${prefix + command} es Hi bro`)
				
idioma = args[0]
args.shift()
texto = args.join(" ")
translate(`${texto}`,{to:`${idioma}`}).then( res => {
   tradfg = `
         *TRADUCIDO*
                    
▢ *De :* ${res.from.language.iso}

        *TRADUCCIÓN*
${res.text}`
reply(tradfg)
})
limitAdd(sender, limit)
break    

case 'calc':
case 'calculadora':
case 'cal':
case 'calcu':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Ingrese la ecuación\n\nsímbolos compatibles -, +, *, /, ×, ÷, π, e, (, )`)
global.math = global.math ? global.math : {}
let ed = from
if (ed in global.math) {
clearTimeout(global.math[ed][3])
delete global.math[ed]
reply(`✳️ Ingrese la ecuación\n\nsímbolos compatibles -, +, *, /, ×, ÷, π, e, (, )`)
}
let val = q
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`

┌──────────────
├─ *CALCULADORA* ─
├ ├────────────┤ 
├    *${format} =*
├ ├────────────┤
├       _${result}_
├ ├────────────┤ 
└──────────────`)

} catch (e) {
if (e == undefined) throw '?'
throw 'Formato incorrecto, solo 0-9 y símbolo -, +, *, /, ×, ÷, π, e, (, ) son compatibles'
}

break

case 'playstore':
					if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if(!q) return reply(`✳️ Ingrese nombre de la aplicación\n\n📌Ejemplo *${prefix + command}* WhatsApp`)
            let play = await hx.playstore(q)
            reply(wait()) 
            let store = '\n「 *PLAY STORE* 」\n❉─────────────────────❉\n'
            for (let i of play){
            store += `
*📌Nombre* : ${i.name}
*🔗 Link* : ${i.link}\n
*👨🏻‍💻 Dev* : ${i.developer}
*🔗 Link Dev* : ${i.link_dev}
❉─────────────────────❉`
            }
            reply(store)
            limitAdd(sender, limit)
            break
      
      case 'google':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Que quieres buscar en Google?`)
teks = args.join(' ')
reply(wait())
resgofg = await googlefg({'query' : `${teks}`})
kant = `\n                   「 *GOOGLE* 」\n`
for (let i of resgofg) {
kant += `
❉─────────────────────❉
*📌 Título* : ${i.title}
*🔗 Link* : ${i.link}
*🧾 Info* : ${i.snippet}
❉─────────────────────❉`
}
var akhir = kant.trim()
reply(akhir)
limitAdd(sender, limit)
break

case 'wiki':
case 'wikipedia':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo *${prefix + command}* Lil Peep`)
teks = args.join(' ')
reswiki = await wikiSearch(teks).catch(e => {
return reply('_❎ No encontré ningún resultado_') 
}) 
result = `\n    「 *WIKIPEDIA* 」\n
❉─────────────────────❉
*📌 Título :* ${reswiki[0].judul}
*📰 Wiki :* ${reswiki[0].wiki}
❉─────────────────────❉`

Fg.sendMessage(reswiki[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
limitAdd(sender, limit)
break
//----

//---Acortar enlaces
				case 'tinyurl':
				 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				if (args.length < 1) return reply(`✳️ Ingrese el link para acortar`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
limitAdd(sender, limit)
break

case 'ssweb': 
case 'screenshot': 
case 'captura': 
case 'screen':
               if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                   if (args.length < 1) return reply(`✳️ Ejemplo :\n*${prefix + command} https://github.com/FG98F*`)                  
                   reply(wait())
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${q}`)
                   Fg.sendMessage(from, anu, image, {caption: `✅ Screenshot de la página`, quoted: mek})
                   limitAdd(sender, limit)
                   break

case 'tagme':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
mentions(`@${sender.split("@")[0]} Hola :)`, [sender], true)
break

case 'mention':
case 'mención':
case 'mencion':
case 'faketag':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if(!q)return reply('✳️ Ingrese un número')
mentions(`@${q.split("@")[0]}`, [`${q}@s.whatsapp.net`], false)
break
//-----
                   
      case 'kick':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if(!q)return reply(`✳️ Menciona a alguien\n\n📌Ejemplo : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(Badmin())
y = q.split('@')[1] + '@s.whatsapp.net'
Fg.groupRemove(from, [y])
reply(`✅ Ordenes recibidas, emitidas`)
break

case 'okick':
			 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✳️ Responde a un mensaje!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    Fg.groupRemove(from, [kick])
						reply('✅ Ordenes recibidas, emitidas')
                    break

      case "add":
        if (!isOwner) return 
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
        if (
          mek.message.extendedTextMessage === null ||
          mek.message.extendedTextMessage === undefined
        )
          return;
        if (
          mek.message.extendedTextMessage.contextInfo.participant === undefined
        ) {
          entah = mek.message.extendedTextMessage.contextInfo.mentionedJid;
          if (entah.length > 1) {
            var mems_ids = [];
            for (let ids of entah) {
              mems_ids.push(ids);
            }
            add(from, mems_ids);
          } else {
            add(from, [entah[0]]);
          }
        } else {
          entah = mek.message.extendedTextMessage.contextInfo.participant;
          add(from, [entah]);
        }
        break;
        
      //--- abrir y cerrar grupo
case 'gp':
case 'grupo':
					case 'group':
					 if(!isVerify) return isUser()
                    if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
//if (args.length < 1) return reply(`✳️ Para abrir grupo : *${prefix + command}* open\npara cerrar grupo : *${prefix + command}* close`)
if (args[0] === 'open') {
 reply('✅ Grupo abierto ahora *todos los participantes* pueden escribir')
Fg.groupSettingChange(from, GroupSettingChange.messageSend, false)
	} else if (args[0] === 'close') {
reply('✅ Grupo cerrado ahora *solo los admin* pueden escribir')
Fg.groupSettingChange(from, GroupSettingChange.messageSend, true)
	} else if (!q) {
		sendButMessage(from, `🛡️ Configuración de grupo\nAbrir y cerrar el grupo`, `A continuación elija uno`, [
          {
            buttonId: `${prefix + command} open`,
            buttonText: {
              displayText: `ABRIR`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix + command} close`,
            buttonText: {
              displayText: `CERRAR`,
            },
            type: 1,
          },
        ]); 
} 
break

//--- Cambiar descripción del grupo
case 'setdesc': 
case'setdescgp':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isOwner && !isGroupAdmins) return reply(admin())
if(!q)return reply(`❇️ Ingrese la nueva descripción del grupo`)
if (!isBotGroupAdmins) return reply(Badmin())
if (!isGroup) return reply(group())
Fg.groupUpdateDescription(from, `${q}`)
Fg.sendMessage(from, '✅ Se cambió la descripción del grupo', text, {quoted:mek})
break

//--- Cambiar nombre del grupo
case 'setname': 
case 'setnamegp':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isOwner && !isGroupAdmins) return reply(admin())
if(!q)return reply('❇️ Cuál será el nuevo nombre del grupo?')
if (!isBotGroupAdmins) return reply(Badmin())
if (!isGroup) return reply(group())
Fg.groupUpdateSubject(from, `${q}`)
Fg.sendMessage(from, '✅ Nombre de grupo cambiado', text, {quoted:mek})
break

case 'resetlink': 
case 'revokelink': 
case 'anularlink':
if (isAw) return reply('⚠️ Está prohibido anular el link de este grupo❗')
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply (Badmin())
Fg.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgp = await Fg.groupInviteCode(from)
fgxd = `✅ Enlace del grupo anulado

📌 Nuevo enlace : 
https://chat.whatsapp.com/${linkgp}`
Fg.sendMessage(from, fgxd, text, {quoted: mek})
break

//-- Bot sale del grupo
case 'leave':
case 'salir':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if(!isGroup)return reply(group())
if(!isGroupAdmins && !isOwner)return reply(admin())
sendMess(from,`😔 Adios  grupo *${groupName}*`)
setTimeout(() => {
Fg.groupLeave(from)
}, 2000);
break
//--- Lista de administradores del grupo
case 'adminlist':
case 'listadmin':
case 'staff':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					teks = `▢ *STAFF DEL GRUPO* _${groupMetadata.subject}_\nTotal : ${groupAdmins.length}\n\n┌─────────⊷\n`
			
					for (let admin of groupAdmins) {
						teks += `▢ @${admin.split('@')[0]}\n`
					}
					teks += `└────✪ Dylux ┃ ᴮᴼᵀ ✪────`
					mentions(teks, groupAdmins, true)
					break

//------
      case 'serbot':
case 'jadibot':
   if (isYo) return reply(`❎ No puedes ser bot en un bot 😕`)
   if(!isPremium)return reply(premi())
if(!isVerify) return isUser()
                    if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
    jadibot(reply,Fg,from)
    limitAdd(sender, limit)
    break
    
    case 'stopbot':
    case 'stopjadibot':
  if (!isYo) return reply(`✳️Disponible solo para los bots Temporales`) 
    stopjadibot(reply)
    break
    case 'listbot':
    case 'listabot':
    case 'listabots':
    case 'listbots':
   if(!isVerify) return isUser()
   if (isBanned) return reply(banf())
    let tekss = '⦙☰ Lista de Bots\n'
    for(let i of listjadibot) {
    	
    tekss += `*#️⃣ Numero* : ${i.jid.split('@')[0]}
*🔮 Nombre* : ${i.name}
*📱 Dispositivo* : ${i.phone.device_manufacturer}
*📇 Modelo* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break


      
       
       //--- preguntas

case 'pregunta':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Ejemplo: *${prefix + command}* soy feo?`)
apa = q
naon = ["Si","No","En efecto"," Tal vez","No lo se","Quizas","2 dias","Jamas", "Un domingo", "no lo hace", "muy falso"]
random = naon[Math.floor(Math.random() * (naon.length))]
preg = `Pregunta : *${apa}*
Respuesta : ${random}`
replyfg(preg)
break

//--- pareja al azar 
case 'shipping':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf()) 
    if (!isGroup) return reply(group())
    if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
					jds = []
					jdii = groupMembers
					koss = groupMembers
					akuu = jdii[Math.floor(Math.random() * jdii.length)]
				 diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `*La pareja del dia* 
					
●❯────────────────❮●
@${akuu.jid.split('@')[0]}
❤️
@${diaa.jid.split('@')[0]}
●❯────────────────❮●`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					gameAdd(sender, glimit)
					break	
					
					case 'random':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
					jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `✅ El usuario elegido al azar es @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
case 'exif':
if (!isOwner)return reply(ownerB())
if (args.length < 1) return reply(`✳️ Uso del comamdo \n\n📌 ${prefix + command} nombre|autor`)
if (!arg.split('|')) return reply(`✳️ Uso del comamdo \n\n📌 ${prefix + command} nombre|autor`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply(`✅ Nombre y autor guardado`)
break
	        
case 'stickfg2':
case 'fgstick2':
if (!isOwner)return reply(ownerB())
if (!isQuotedSticker) return reply(`✳️Responde a un sticker *${prefix + command}*`)
const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const meidia = await Fg.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break

//-----

   case  'trigger': 
       case 'triggered':
					case 'ger':
					case 'motivado':
					case 'motivada':
					 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					limitAdd(sender, limit)
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
		case  'sgay':
		case  'gay2':
		if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
gay = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgig = await Fg.downloadMediaMessage(gay)
await fs.writeFileSync(`./stickgay.jpeg`, owgig)
var imgbb2 = require('imgbb-uploader')
anug = await imgbb2("20a14861e4f7591f3dc52649cb07ae02", './stickgay.jpeg')
txtg = `${anug.display_url}`
sgay = await getBuffer(`https://pecundang.herokuapp.com/api/gay?url=${txtg}`)
const bas642 = `data:image/jpeg;base64,${sgay.toString('base64')}`
var mantap2 = await convertSticker(bas642, `💎 @fg98._`, `🔮 DyLux ┃ ᴮᴼᵀ`)
var imageBuffer2 = new Buffer.from(mantap2, 'base64');
Fg.sendMessage(from, imageBuffer2, sticker, {quoted: mek})
fs.unlinkSync('./stickgay.jpeg')
limitAdd(sender, limit)
} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
					
					case 'srip':
					case 'sf':
					if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
rip = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgir = await Fg.downloadMediaMessage(rip)
await fs.writeFileSync(`./stickrip.jpeg`, owgir)
var imgbb2r = require('imgbb-uploader')
anur = await imgbb2r("20a14861e4f7591f3dc52649cb07ae02", './stickrip.jpeg')
txtr = `${anur.display_url}`
srip = await getBuffer(`https://pecundang.herokuapp.com/api/rip?url=${txtr}`)
const bas642r = `data:image/jpeg;base64,${srip.toString('base64')}`
var mantap2r = await convertSticker(bas642r, `💎 @fg98._`, `🔮 DyLux ┃ ᴮᴼᵀ`)
var imageBuffer2r = new Buffer.from(mantap2r, 'base64');
Fg.sendMessage(from, imageBuffer2r, sticker, {quoted: mek})
fs.unlinkSync('./stickrip.jpeg')
limitAdd(sender, limit)
} else {
reply('✳️ *Envia una imagen con el comando o etiqueta una imagen que se haya enviado*')
}
break
		
		case  'passed':
		case  'aprobado':
		if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					limitAdd(sender, limit)
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
					
		case  'jail':
		case  'scelda':
		case  'celda':
		case  'carcel':
		case 'scarcel':
		if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
rej = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgir = await Fg.downloadMediaMessage(rej)
await fs.writeFileSync(`./stickc.jpeg`, owgir)
var imgbb2c = require('imgbb-uploader')
anuc = await imgbb2c("20a14861e4f7591f3dc52649cb07ae02", './stickc.jpeg')
txtc = `${anuc.display_url}`
sc = await getBuffer(`https://pecundang.herokuapp.com/api/jail?url=${txtc}`)
const bas642c = `data:image/jpeg;base64,${sc.toString('base64')}`
var mantap2c = await convertSticker(bas642c, `💎 @fg98._`, `🔮 DyLux ┃ ᴮᴼᵀ`)
var imageBuffer2c = new Buffer.from(mantap2c, 'base64');
Fg.sendMessage(from, imageBuffer2c, sticker, {quoted: mek})
fs.unlinkSync('./stickc.jpeg')
limitAdd(sender, limit)
} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
		
		case  'wasted':
		case  'desperdiciado':
		case  'desperdiciada':
		if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					limitAdd(sender, limit)
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break 
		case 'stickmeme':
case 'smeme':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedSticker) return reply(`✳️Responde a un sticker con el comando\n📌Ejemplo ${prefix + command} text|text2`)
smeme = q
var tex1 = smeme.split('|')[0]
var tex2 = smeme.split('|')[1]
if (!tex2) return reply(`✳️Responde a un sticker con el comando\n📌Ejemplo ${prefix + command} text|text2`)
if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(wait())
owgi = await Fg.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break
case 'stickmeme2':		
case 'smeme2':	
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())						
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if(!q) return reply(`✳️Responde a un sticker con el comando\n📌Ejemplo ${prefix + command} jsjs`)
if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(wait())
owgi = await Fg.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break
        



//-- mencionar a todos los miembros
case 'mentionall': 
case 'tagall':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
		  if (!isGroup) return reply(group())
			if (!isGroupAdmins && !isOwner) return reply(admin())
					members_id = []
		teks = `▢ Grupo : *${groupName}*\n▢ Miembros : *${groupMembers.length}*\n▢ Mensaje : ${q}\n┌───⊷ *MENCIONES* ⊶\n`
			for (let mem of groupMembers) {
				teks += `▢ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
		teks += `└─────✪ Dylux ┃ ᴮᴼᵀ ✪───────`
			mentions(teks, members_id, true)
			break
			
			case 'hidetag': 
case 'here':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner)return reply(admin())

var group = await Fg.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Fg.sendMessage(from, options, text)
break

//-- Notification al grupo
case 'notificar':
case 'notify':
if (!isGroup) return reply(group())
    if (!isGroupAdmins && !isOwner) return reply(admin())
   if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (args.length < 1) return reply(`✳️ Cual es el mensaje?`)
teks = `Recibes un mensaje de notificación del admin @${sender.split("@")[0]}\n\n*Mensaje* : ${q}`
group = await Fg.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Fg.sendMessage(from, options, text)
break
;

//-------(𝗗𝗘𝗦𝗖𝗔𝗥𝗚A𝗦 -  𝗦𝗧𝗔𝗟𝗞𝗦) 𝗜𝗡𝗦𝗧𝗔 - 𝗧𝗜𝗞𝗧𝗢𝗞------
      case 'tiktok':
      if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (args.length < 1) return reply(`✳️ Ingrese el link de un video`)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.link)
 		
 		reply(wait())
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `✅ Aquí tienes`
		Fg.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
		
     		.catch(e => console.log(e))
     limitAdd(sender, limit)
     		break
     case 'tiktokaudio':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.link)
 		if (args.length < 1) return reply(`✳️ Ingrese el link de un video`)
 		reply(wait())
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    	
    		const { audiotk} = result
            sendMediaURL(from,audiotk,'')
    		})
     		.catch(e => console.log(e))
     limitAdd(sender, limit)
     		break
    
 
      case 'ytmp3':
			  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ Use en comando más el link de YouTube\n\n📌 Ejemplo: *${prefix + command}* https://www.youtube.com/watch?v=_aelrhBsIRE`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(errorfg(prefix))
				try {
				reply(wait()) 
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
					
			    if (Number(filesize) >= 100000) return reply('✳️ El archivo pesa más de 100 MB! no puedo enviar')
				const captions = `
*✅ Descarga Completa*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp3
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🔗 Link* : ${a.data}

_📤 La música se está enviando, si no llega descargue por el link_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				limitAdd(sender, limit)
				})
				})
				} catch (err) {
				reply(mess.error.api)}
				break
				
 		case 'ytmp4':
			  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ Use en comando más el link de YouTube\n\n📌 Ejemplo: *${prefix + command}* https://www.youtube.com/watch?v=_aelrhBsIRE`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(errorfg(prefix))
				try {
				reply(wait()) 
				ytv(args[0])
				.then((res) => {
					
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 100000) return reply('✳️ El archivo pesa más de 100 MB! no puedo enviar')
				const captionsYtmp4 = `
*✅ Descarga Completa*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp4
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🔗 Link* : ${a.data}

_📤 El video se está enviando, si no llega descargue por el link_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				limitAdd(sender, limit)
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
				
				//---
				case 'play':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return //reply(premi())  
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
reply(wait())
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `
*🎶Musica encontrada*

‣ *📌Título* : ${title}
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🎈Subido* : ${yut.videos[0].ago}
‣ *⏱️Duración* : ${yut.videos[0].timestamp}

‣ *🔗 Link* : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, capti)
ya = await getBuffer(thumb)
py =  await Fg.prepareMessage(from, ya, image)
gbutsan = [
{buttonId: `${prefix}mp3fg ${q}`, buttonText: {displayText: '🎶AUDIO'}, type: 1},
{buttonId: `${prefix}mp4fg ${q}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: capti,
footerText: `Elija un formato\n\nSi tiene problemas  con el comando use *${prefix}play2*`,
buttons: gbutsan,
headerType: 4
}
limitAdd(sender, limit)
await Fg.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {quoted:mek})
})
break

//--- sin api
case 'mp3fg':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
try {
reply(wait())
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 100000) return reply('✳️ El archivo pesa más de 100 MB! no puedo enviar')

const captionis = `*P L A Y  M P 3*\n\nTitle : ${title}\n Size : ${filesizeF}\nViews: ${yut.videos[0].views}\n Duration : ${yut.videos[0].timestamp}\nURL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
//sendMediaURL(from, thumb, captionis)
sendMediaURL(from, dl_link, '')

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
break
//--con api
   case 'mp3fg2':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
reply(wait())
  pl = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=WRhywqyYC0doYNeqTZymcB2SjrT&q=${q}`)
  judul = pl.result.title
  lagu = pl.result.url_audio
  size = pl.result.size
  foto = pl.result.thumbnail
  durasi = pl.result.duration
  capt = `≡ *PLAY*
▢ *Título* : ${judul}
▢ *Peso* : ${size}
▢ *Duracion* : ${durasi}`
  if(Number(size.split(' MB')[0]) >= 99.00) return reply(`✳️ El archivo es demasiado grande, la reproducción de música se canceló, el tamaño máximo del archivo es de *99* mb`)
  thumb = await getBuffer(foto)
  //-Fg.sendMessage(from, thumb, image, {quoted: mek, caption: capt})
  mp3 = await getBuffer(lagu)
  Fg.sendMessage(from, mp3, document, {mimetype: 'audio/mp4', filename: `${judul}.mp3`, quoted: mek})
  break

case 'mp4fg' :
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())

reply(wait()) 
var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if(Number(filesizeF.split(' MB')[0]) >= 99.00) return reply('✳️ El archivo es demasiado grande, la reproducción de música se canceló, el tamaño máximo del archivo es de *99* mb')
                capt = `≡ *PLAY*\n▢ *Judul* : ${tilte}\n▢ *Ukuran* : ${filesizeF}`
                reply(mess.wait)
               // sendMediaURL(from, thumb, capt);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
break
        
 case 'play2':
			if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
       if(!isPremium)return reply(premi()) 
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (args.length < 1) return reply(`✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
  reply(wait())
            var srch = args.join('')
    		ytfg = await yts(srch);
    		aramat = ytfg.all 
   			var mulaikah = aramat[0].url							
                  try {
                  	
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return reply('✳️ El archivo pesa más de 100 MB! no puedo enviar')
                        const captions = `
*🎶Musica encontrada*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp3
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🎈Subido* : ${ytfg.videos[0].ago}
‣ *⏱️Duración* : ${ytfg.videos[0].timestamp}
‣ *🔗 Link* : ${a.data}

_📤 Enviando, espere si el audio no aparece, descargue por el link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        limitAdd(sender, limit)
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api) }
                   break
   case 'play3':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())  
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
reply(wait())
  pl = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=WRhywqyYC0doYNeqTZymcB2SjrT&q=${q}`)
  judul = pl.result.title
  lagu = pl.result.url_audio
  size = pl.result.size
  foto = pl.result.thumbnail
  durasi = pl.result.duration
  capt = `≡ *PLAY*
▢ *Título* : ${judul}
▢ *Peso* : ${size}
▢ *Duracion* : ${durasi}`
  if(Number(size.split(' MB')[0]) >= 99.00) return reply(`✳️ El archivo es demasiado grande, la reproducción de música se canceló, el tamaño máximo del archivo es de 99 mb`)
  thumb = await getBuffer(foto)
  Fg.sendMessage(from, thumb, image, {quoted: mek, caption: capt})
  mp3 = await getBuffer(lagu)
  Fg.sendMessage(from, mp3, document, {mimetype: 'audio/mp4', filename: `${judul}.mp3`, quoted: mek})
  break
 
 //---apokey
case 'play4':
			if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
reply(wait())

                playfg = q
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${playfg}&apikey=hamilton49`)
                if (anu.error) return reply(anu.error)
                infomp3 = `
*🎶Musica encontrada*

‣ *📌Título* : ${anu.result.title}
‣ *🔮 Fuente :* ${anu.result.source}
‣ *⚖️Tamaño* : ${anu.result.size}
‣ *🔗 Link* : ${anu.result.url_audio}

_📤 Enviando, espere si el audio no aparece, descargue por el link_`

                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                Fg.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                Fg.sendMessage(from, lagu, document, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                limitAdd(sender, limit)
                break
        
      case 'video':
				case 'playvideo':
				case 'playvid':
				case 'playmp4':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
           if (args.length < 1) return reply(`✳️ *Ingresa el título de un video*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
           reply(wait())
        var srch = args.join("");
        vidfg = await yts(srch);
        aramat = vidfg.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if(Number(filesizeF.split(' MB')[0]) >= 99.00) return reply('❎ El archivo es demasiado grande, la reproducción de video se canceló\nel video debe pesar - 100mb')
                capt = `≡ *🎥 PLAY VIDEO*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp4
‣ *⚖️ Tamaño* : ${filesizeF}

_📤 Enviando, espere si el video no aparece, descargue por el link_`
                
                sendMediaURL(from, thumb, capt);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        limitAdd(sender, limit)
        break;
				

      case 'igfoto':       
                 case 'igvideo':    
                    case 'ig':
                    case 'instagram':
         if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!isUrl(args[0]) && !args[0].includes("instagram.com")) return reply(mess.link);
       if (args.length < 1) return reply(`✳️ Ingrese un link de una foto o video de Instagram`)
        reply(wait());
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, video, {
                quoted: mek,
                caption: `✅ Aquí está`,
              });
            } else {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, image, {
                quoted: mek,
                caption: `✅ Aquí tienes`,
              });
            }
          }
        });
          limitAdd(sender, limit)
        break;
      //******************** 》 SEARCH 《 ********************\\
case 'ytsearch':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ejemplo : ${prefix + command} Lil Peep`)
                    reply(wait())
				var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await Fg.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '📌 *Título :* ' + video.title + '\n'
		            ytresult += '*🔗 Link* : ' + video.url + '\n'
		            ytresult += '*⏳ Duración* : ' + video.timestamp + '\n'
		            ytresult += '*📤 Publicado* : ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '─── DyLux ┃ ᴮᴼᵀ ───'
		    		
		            Fg.sendMessage(from, tbuff, image, {thumbnail:fs.readFileSync(`./image/fake.jpg`), quoted: mek, caption: ytresult})
		            limitAdd(sender, limit)
					break
					
					case 'ytstalk':
					if(!isVerify) return isUser()
                     if (isBanned) return reply(banf())
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                     if (args.length < 1) return reply(`✳️ Ingrese un nombre del canal \n\n📌 Ejemplo : *${prefix + command}* Lil Peep`)  
                     reply(wait())
					ytk = q
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••••••••••\n'
					for (let search of anu.result) {
					cari += `*Canal* : ${search.channel_name}\n*Acerca de* : ${search.channel_about}\n*Creado* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					limitAdd(sender, limit)
					break
				
//==========================================================//
      case "inspect":
      case "inspeccionar":
      if(!isVerify) return isUser()
                     if (isBanned) return reply(banf())
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("✳️ Ingrese un link de WhatsApp");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("Asegúrate de que el link contenga https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,} = await Fg.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `
▢ *Id* : ${id}
▢ *Owner* : wa.me/${id.split('-')[0]}
▢ *Nombre* : ${subject}
▢ *Creado* : ${formatDate(creation * 1000)}
▢ *Miembros* : ${size}
${desc ? `▢ *Descripción* : ${desc}` : "▢ *Descripción* : Sin descripción"}
▢ *Id desc* : ${descId}
${
  descOwner
    ? `▢ *Desc modificado por* : @${descOwner.split("@")[0]}`
    : "▢ Desc modificado por : No lo se :v"
}\n*▢ Fecha* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*▢ Contactos guardados*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*▢ Admin* : ${
              y.isAdmin ? "Si" : "No"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          Fg.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link invalido");
        }
        break;

				//-- link del grupo
case 'linkgroup': 
case 'linkgp':
case 'link':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isBotGroupAdmins) return reply(Badmin())
linkgp = await Fg.groupInviteCode(from)
fgxd = `Link del Grupo *${groupName}*\n\nhttps://chat.whatsapp.com/${linkgp}`
Fg.sendMessage(from, fgxd, text, {quoted: mek})
break
				
case 'igstalk':
case 'stalking':
   if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if (args.length < 1) return reply(`✳️ Escriba un Nombre de Usuario\n\n📌Ejemplo : *${prefix + command}* fg98._`)
                   reply(wait()) 
           ig.fetchUser(`${args.join(' ')}`).then(Y => {
   //         console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `┌──「 *STALKING* 」
▢ *🆔 ID :* ${Y.profile_id}
▢ *🔖 Username* : ${args.join('')}
▢ *🔖 Nombre Completo* : ${Y.full_name}
▢ *📌 Bio :* ${Y.biography}
▢ *🫂 Siguiendo* : ${Y.followers}
▢ *👥 Seguidores* : ${Y.following}
▢ *🔐 Privado* : ${Y.is_private}
▢ *✅ Verificado* : ${Y.is_verified}

▢ *🔗 Link* : https://instagram.com/${q}
└──────────────`
            sendMediaURL(from,ten,teks) 
            })     
              limitAdd(sender, limit)
            break
        
      case "githubstalk":
        if(!isVerify) return isUser() 
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!q) return reply(`✳️Ingrese Username de Github`);
        reply(wait())
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=${q}`
        );
        const mm = `┌──「 *GITHUB STALK* 」
▢ *🔖 Username* : ${oi.result.username}
▢ *🔖 Nombre Completo* : ${oi.result.name}
▢ *📌 Bio :* ${oi.result.user_bio}
▢ *🗂️ Repositorios :* ${oi.result.user_repo}
▢ *🫂 Siguiendo* : ${oi.result.user_following}
▢ *👥 Seguidores* : ${oi.result.user_followers}
└──────────────`;
        reply(mm);
          limitAdd(sender, limit)
        break;
    
      case "igstory":
      case "ighistoria":
                if(!isVerify) return isUser() 
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!q) return reply(`✳️Ingrese el nombre de usuario\n\n??Ejemplo : ${prefix + command} auronplay`);
        reply(wait())
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, video, {
                quoted: mek,
                caption: `✅ De nada`,
              });
            } else {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, image, {
                quoted: mek,
                caption: `✅ Descargando`,
              });
            }
          }
        });
        limitAdd(sender, limit)
        break;
        
        case 'buscarmensaje':
case 'buscarmsg':
case 'searchmsg':
      if (!isOwner && !isMods) return reply(modsB())
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Ingrese el mensaje para buscar\n\n*📌 Ejemplo :*\n • ${prefix + command} hola`)
        let v = await Fg.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`✅ ${el.length} Mensajes encontrados`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await Fg.sendMessage(from, "🔍 Mensaje", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("❎ Mensaje no encontrado!");
        }
        break;
        
      case 'lyrics':
case 'letra':
case 'letras':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply('✳️ Ingrese el nombre de la canción')
  reply(wait())
  
  try {
    let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
 } catch {
    reply(mess.ferr)
  }
limitAdd(sender, limit)
break

     case 'covid':
case 'covid19':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!q) return reply(`✳️ Nombre de un país \n\n📌 Ejemplo : ${prefix + command} Argentina`)
cvd = await fetchJson(`http://zekais-api.herokuapp.com/corona?country=${q}`)
copid = `❒ *「 Covid ${q} 」* ❒ 

‣ *Total de casos :* _${cvd.result.total_case}_
‣ *Muertos :* _${cvd.result.total_deaths}_
‣ *Recuperados :* _${cvd.result.total_tests}_
‣ *Casos de hoy :* _${cvd.result.today_cases}_
‣ *Muertos de hoy :* _${cvd.result.today_deaths}_
‣ *Total tratados :* _${cvd.result.total_active}_`
reply(copid)
limitAdd(sender, limit)
break

//no api
             /*case 'pinterest':
if (args.length < 1) return reply(`✳️ Que image buco`) 
reply(wait())
pinterest(`${q}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL(from ,pimterest , `Pinterest : ${q}`)
})
break*/

      case "pinterest":
        if(!isVerify) return isUser()
        if (isBanned) return reply(banf())
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!q) return reply(`❎ Que imagen quieres que busque?`);
        reply(wait())
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await Fg.sendMessage(from, di, image, { quoted: mek, caption: `✅ Pinterest : *${q}*` });
        limitAdd(sender, limit)
        break;
       
       
        
       case 'image':
   case 'imagen':
   case 'img':
   if(!isVerify) return isUser()
        if (isBanned) return reply(banf())
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!q) return reply(`❎ Que imagen quieres que busque?`);
        reply(wait())
             gimg = q
            try {
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            Fg.sendMessage(from,{url:images},image,{quoted: mek, caption: `✅ Aqui tienes : *${q}*`})
            });
            limitAdd(sender, limit)
            } catch {
  	reply(mess.ferr)
  }
   break

        case 'woman':
case 'girl':
case 'mujer':
  if(!isVerify) return isUser()
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (isBanned) return reply(banf())
  reply(wait()) 
        inic = ["pretty girl","girl","russian woman","schoolgirl", "girl in bikinis"]
        inid = inic[Math.floor(Math.random() * inic.length)]
        inie = await hx.pinterest(inid);
        acd = inie[Math.floor(Math.random() * inie.length)];
        b = await getBuffer(acd)
       await sendButImage(from, '✅ Aquí tienes :)', 'Click en siguiente para ir a la siguiente imagen', b, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⏩ Siguiente`,
            },
            type: 1,
          },
        ], {quoted: mek});
     limitAdd(sender, limit)
        break
        
      case 'man':
                    case 'hombre':
          if(!isVerify) return isUser()
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (isBanned) return reply(banf())
  reply(wait()) 
        inic = ["Hombre","man","joven guapo"]
        inid = inic[Math.floor(Math.random() * inic.length)]
        inie = await hx.pinterest(inid);
        acd = inie[Math.floor(Math.random() * inie.length)];
        b = await getBuffer(acd)
       await sendButImage(from, '✅ Aquí tienes :)', 'Click en siguiente para ir a la siguiente imagen', b, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⏩ Siguiente`,
            },
            type: 1,
          },
        ], {quoted: mek});
             limitAdd(sender, limit)
        break
        
      case "wallpaper":
      case "wp":
      case "wallpapers":
       if(!isVerify) return isUser()
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (isBanned) return reply(banf())
  if (args.length < 1) return reply(`✳️ Que fondo de pantalla busco?`)
  reply(wait()) 
        wpsh = q
        inie = await hx.pinterest(`Wallpaper hd ${wpsh}`);
        acd = inie[Math.floor(Math.random() * inie.length)];
        b = await getBuffer(acd)
       await sendButImage(from, '✅ Aqui tienes?', 'Click en siguiente para ir a otra imagen', b, [
          {
            buttonId: `${prefix + command} ${q}`,
            buttonText: {
              displayText: `⏩ Siguiente`,
            },
            type: 1,
          },
        ], {quoted: mek});
        break
        
        case 'loli':
  if(!isVerify) return isUser()
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (isBanned) return reply(banf())
  reply(wait()) 
        inic = ["anime loli","loli"]
        inid = inic[Math.floor(Math.random() * inic.length)]
        inie = await hx.pinterest(inid);
        acd = inie[Math.floor(Math.random() * inie.length)];
        b = await getBuffer(acd)
       await sendButImage(from, '✅ Aqui tienes *Onii chan*', 'Click en siguiente para ir a la siguiente imagen', b, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⏩ Siguiente`,
            },
            type: 1,
          },
        ], {quoted: mek});
     limitAdd(sender, limit)
        break
        case 'neko':
  if(!isVerify) return isUser()
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (isBanned) return reply(banf())
  reply(wait()) 
        inic = ["anime neko","neko"]
        inid = inic[Math.floor(Math.random() * inic.length)]
        inie = await hx.pinterest(inid);
        acd = inie[Math.floor(Math.random() * inie.length)];
        b = await getBuffer(acd)
       await sendButImage(from, '✅ Aqui tienes', 'Click en siguiente para ir a la siguiente imagen', b, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⏩ Siguiente`,
            },
            type: 1,
          },
        ], {quoted: mek});
     limitAdd(sender, limit)
        break
        case 'waifu':
  if(!isVerify) return isUser()
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (isBanned) return reply(banf())
  reply(wait()) 
        inic = ["anime waifu","loli","neko","waifu"]
        inid = inic[Math.floor(Math.random() * inic.length)]
        inie = await hx.pinterest(inid);
        acd = inie[Math.floor(Math.random() * inie.length)];
        b = await getBuffer(acd)
       await sendButImage(from, '✅ Aqui tienes', 'Click en siguiente para ir a la siguiente imagen', b, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⏩ Siguiente`,
            },
            type: 1,
          },
        ], {quoted: mek});
     limitAdd(sender, limit)
        break
        //--image
case 'rip':
					case 'f':
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if(!isVerify) return isUser()
  if (isBanned) return reply(banf()) 
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(wait())
         owgi = await Fg.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
Fg.sendMessage(from, ojan, image, {quoted: mek})
} else {
reply('✳️ *Envia una imagen con el comando o etiqueta una imagen que se haya enviado*')
}
limitAdd(sender, limit)
break

//----𝗔𝗦𝗨𝗣𝗔𝗡 
case 'asupan':
 if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if(!isGroup)return reply(group())
po1 = Fg.prepareMessageFromContent(from, {
  "listMessage":  {
"title": "*Lista Comandos*",
"description": `Elija uno a continuación`,
"buttonText": "Click Aqui",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": "Indo 😏!",
"rowId": `${prefix}+62`
},
{
"title": "Indo 2 😏!",
"rowId": `${prefix}indo2`
},
{
"title": "Indo 3 😏",
"rowId": `${prefix}asulol`
}
//--
]}]}}, {})
Fg.relayWAMessage(po1, {waitForAck: true})
limitAdd(sender, limit)
break
case '+62':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
reply(wait())
sendMediaURL(from,`https://itsmevall.herokuapp.com/api/asupan?apikey=${valkey}`, `✅ Aquí tienes señor!`)
limitAdd(sender, limit)
 break
 case 'indo2':
    if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            reply(wait())
                    url = `https://megayaa.herokuapp.com/api/asupan`
                    asupan = await getBuffer(url)
                   Fg.sendMessage(from, asupan, MessageType.video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted: mek, caption: '✅ Aquí tienes señor'})
                   limitAdd(sender, limit)
                break
 case 'asulol':
			   if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            reply(wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    buffer = await getBuffer(get_result.result)
                    
                   Fg.sendMessage(from, buffer, video, { quoted: mek})
                   limitAdd(sender, limit)
                    break
  
      case 'contag':
                    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                 //   if (!isGroupAdmins && !isOwner) return reply(admin())
                    if (!isGroup) return reply(group())
                    if (args.length < 1) return reply(`✳️ Usu del comando *${prefix + command }* nombre|número\n\n📌 Ejemplo : ${prefix + command} DyLux |19199992616`)
                    
                    const pepek = q
                    const adan = pepek.split("|")[0]
                    const nuahh = pepek.split("|")[1]
                    const trot = 
                    'BEGIN:VCARD\n' +
                    'VERSION:3.0\n' +
                    'FN:' + adan + '\n' +
                    'ORG:Kontak\n' +
                    'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' +
                    'END:VCARD'
                    let taih = await Fg.groupMetadata(from)
                    let setan = taih.participants
                    let bruy = []
                    for (let go of setan){
                    bruy.push(go.jid)
                    }
                    Fg.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {"mentionedJid": bruy}})
                    limitAdd(sender, limit)
                    break
                   
                   case 'tagsticker':
case 'sticktag':
case 'stickertag':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                   if (!isGroup) return reply(group())
		        //   if (!isGroupAdmins && !isOwner) return reply(admin())
                    if ((isMedia && !MythicXbot.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Fg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        teks = args.join(" ")
                        gc = await Fg.groupMetadata(from)
                        member = gc['participants']
                        jids = []
                        member.map(async adm => {
                            jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        
                        var options = {
                            contextInfo: { mentionedJid: jids },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Fg.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`✳️ Responde a un sticker`)
                    }
                      limitAdd(sender, limit)
                    break
                    
                   case 'imgtag':
                   case 'imagentag':
                          if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                   if (!isGroup) return reply(group())
		        //   if (!isGroupAdmins && !isOwner) return reply(admin())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Fg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        teks = args.join(" ")
                        gc = await Fg.groupMetadata(from)
                        member = gc['participants']
                        jids = []
                        member.map(async adm => {
                            jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        
                        var options = {
                            contextInfo: { mentionedJid: jids },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Fg.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`✳️ Envia o responde a una imagen`)
                    }
                    limitAdd(sender, limit)
                    break
                   
        
      case "totag":
      case "tag":
        if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                   if (!isGroup) return reply(group())
		         if (!isGroupAdmins && !isOwner) return reply(admin())
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await Fg.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await Fg.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          Fg.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await Fg.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await Fg.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          Fg.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await Fg.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await Fg.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          Fg.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await Fg.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await Fg.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          Fg.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(`✳️ Responde a *imagen/sticker/audio/video* con el comando ${prefix + command}` );
        }
        break;
                   //--fake reply
case 'fitnah':
case 'fake':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ *Uso del comamdo* :\n${prefix}fake @tag|msj|msjbot\n\n📌 *Ejemplo* : \n${prefix + command} @taguser|hola|hola que hace`)
        var gh = q
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        Fg.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
limitAdd(sender, limit)
        break;
     
     
        

      case "fdeface":
        if(!isOwner) return reply(ownerB())
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await Fg.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await Fg.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        Fg.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
       
       case "mode":
      case "modo":
        if (!isOwner)return reply(ownerB()) 
        sendButMessage(from, `🛡️ Bot MODO Privado/Publico`, `Elija un modo`, [
          {
            buttonId: `${prefix}privado`,
            buttonText: {
              displayText: `🛡️Privado`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}publico`,
            buttonText: {
              displayText: `🌍 Publico`,
            },
            type: 1,
          },
        ]);
        break;
        
      case 'public':
case 'publico':
      if (!isOwner)return reply(ownerB()) 
        if (banChats === false)  return;
        banChats = false;
        reply(`*🌍 Bot Modo* : Publico`);
        break
   
case 'privado':
case 'private':
case 'self':
if (!isOwner)return reply(ownerB()) 
        if (banChats === true) return;
        banChats = true;
        reply(  `*🛡️Bot Modo* : privado`);
        break;
       
       
        case 'topgay':
try{
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
                   if (!isGroup) return reply(group())
             
d = []
teks = '≡ 🏳️‍🌈 *TOP 10 GAYS*\n Está es una lista de los más gays del grupo\n┌──────────────\n' 
for(i = 0; i < 10; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `▢ @${groupMembers[r].jid.split('@')[0]}\n`
d.push(groupMembers[r].jid)
}
teks += `└──────────────`
mentions(teks, d, true)

  gameAdd(sender, glimit)
  
} catch (e) {
console.log(e)
reply('❎ Ocurrió un error inesperado intente de nuevo')

}
break
	
				
case 'dueñogrupo':
  case 'dueñogp':
 case 'ownergroup':
		case 'creadorgrupo':
		case 'ownergp':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
				Fg.updatePresence(from, Presence.composing)
				cfg = `${from.split("-")[0]}@s.whatsapp.net`
				cgp = `✅ El creador del grupo es : @${cfg.split("@")[0]}`
				Fg.sendMessage(from, cgp, text, { contextInfo: {  mentionedJid: [cfg]},quoted: mek } )  
				break
				 
				// Nivel

case 'level':
case 'nivel':
case 'lvl':

if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group()) 
                if (!isLevelingOn) return reply(leveloff())
             
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `┏━━━━━━♡ *NIVEL* ♡━━━━━━━┓
┃╭───────────────────
┃│➸ *Nombre* : ${pushname}
┃│➸ *XP* : ${userXp} / ${requiredXp}
┃│➸ *NIVEL* : ${userLevel}
┃│➸ *Rango* : ${role}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
               Fg.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`❎ Ocurrió un Error!\n${err}`)
                    })
            break
           
           case 'toplvl':
		case 'topnivel':
		case 'topniveles':
		 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)

				let leaderboardlvl = '-----[ *TOP NIVEL* ]----\n\n'
				
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*${nom}┃* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Nivel*: ${_level[i].level}\n\n`
					
				}
				await reply(leaderboardlvl)
				
				} catch (err) {
				console.error(err)
				await reply(`✳️ Un mínimo de *10* usuarios para poder acceder a la base de datos`)
				}
				break
				
				case 'ranks':
            case 'rangos':
            if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
            const usernivel = getLevelingLevel(sender)
            
           fgranks = `▢ *${pushname}* Nivel : *${usernivel}* Rango : *${role}*

           ❑ *RANGOS*
┌────────────────
   *Niveles* ─╬─ *Rangos*
├────────────────
▷  _1_ = *Novato*
▷  _4_ = *Bronce III*
▷  _6_ = *Bronce II*
▷  _8_ = *Bronce I*
▷  _10_ = *Plata II*
▷  _12_ = *Plata I*
▷  _14_ = *Oro II*
▷  _16_ = *Oro I*
▷  _18_ = *Platino II*
▷  _20_ = *Platino I*
▷  _22_ = *Diamante II*
▷  _24_ = *Diamante I*
▷  _26_ = *Maestro II*
▷  _28_ = *Maestro I*
▷  _30_ = *♕︎ Gran Maestro*
└─────────────────
*NOTA* : _Alcanzas un rango al subir de nivel_`
           reply(fgranks)
           break
				
			
  
//Leveling 

    case 'leveling':
case 'nivelación':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
                if (!isGroup) return reply(group()) 
               if (!isGroupAdmins && !isOwner) return reply(admin())
                if (args.length < 1) return reply(`✳️ *NIVELACION*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
                if (args[0] === 'on') {
                    if (isLevelingOn) return reply('✳️ *Ya está activado*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                   reply('✅ Nivelacion habilitada en el grupo')
                } else if (args[0] === 'off') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                     reply('✅ Nivelacion deshabilita')
                } else {
                    reply(`✳️ *NIVELACION*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
                }
                
            break
                  
//--- Bienvenida on/off
case 'welcome':
case 'bv':
case 'bienvenidas':
case 'bienvenida':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
		if (!isGroup) return reply(group())
		if (!isGroupAdmins && !isOwner) return reply(admin())
		if (args.length < 1) return reply(`✳️ *BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
		if ((args[0]) === 'on') {
		if (isWelcom) return reply('✳️ El mensaje de *Bienvenida* ya esta activa')
						_welcom.push(from)
						fs.writeFileSync('./database/welcom.json', JSON.stringify(_welcom))
						reply(`✅ La función de bienvenida se activo en el grupo *${groupMetadata.subject}*`)
		} else if ((args[0]) === 'off') {
		if (!isWelcom) return reply('✳️ Bienvenida ya esta desactivada')
						_welcom.splice(from, 1)
						fs.writeFileSync('./database/welcom.json', JSON.stringify(_welcom))
						reply(`✅ La función de Bienvenida se desactivo en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`✳️ *BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
		break

case 'leave':
case 'left':
case 'goodbye':
case 'salidas':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isWelcom) return reply('✳️ Para usar este comando, debe activar primero las *Bienvenidas*')
if (args.length < 1) return reply(`✳️ *DESPEDIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
if ((args[0]) === 'on') {
	if (isLeft) return reply('✳️ El mensaje de *Despedida* ya esta activa ')
	_left.push(from)
	fs.writeFileSync('./database/left.json', JSON.stringify(_left))
	reply(`✅ El mensaje de *Despedida* se activo en el grupo *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
	if (!isLeft) return reply('✳️ Se desactivo antes')
	_left.splice(from, 1)
	fs.writeFileSync('./database/left.json', JSON.stringify(_left))
reply(`✅ El mensaje de *Despedida* se desactivo en el grupo *${groupMetadata.subject}*`)
} else {
reply(`✳️ *DESPEDIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
}
break

//--- on/off antilink WhatsApp 
				case 'antilink':
				case 'antilinkwha':
				case 'antilinkwhatsapp':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`✳️ *ANTILINK WHATSAPP*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					if ((args[0]) === 'on') {
						if (isAntilink) return reply('✳️ Antilink ya está activo')
						_antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
						reply(`✅ Se activo el *Antilink WhatsApp* en el grupo *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntilink) return reply('✳️ Antilink ya está desactivado')
						_antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
						reply(`✅ Se desactivo el *Antilink WhatsApp* en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`✳️ *ANTILINK WHATSAPP*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
					break
					
					//---  antilink Telegram
				
case 'antilinktelegram':
case 'antilinktele':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`✳️ *ANTILINK TELEGRAM*\n\n*${prefix + command} 1* para activar\n*${prefix + command} 0* para desactivar`)
					if ((args[0]) === '1') {
						if (isAntiTele) return reply('✳️ Antilink Telegram ya está activo')
						_antilinkte.push(from)
						fs.writeFileSync('./database/antilinkte.json', JSON.stringify(_antilinkte))
						reply(`✅ Se activo el *Antilink Telegram* en el grupo *${groupMetadata.subject}*`)
					} else if ((args[0]) === '0') {
						if (!isAntiTele) return reply('✳️ Antilink Telegram ya está desactivado')
						_antilinkte.splice(from, 1)
						fs.writeFileSync('./database/antilinkte.json', JSON.stringify(_antilinkte))
						reply(`✅ Se desactivo el *Antilink Telegram* en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`✳️ *ANTILINK TELEGRAM*\n\n*${prefix + command} 1* para activar\n*${prefix + command} 0* para desactivar`)
					}
					break
					
					//---  antilink Discord 
				
case 'antilinkdiscord':
case 'antilinkdis':
case 'antilinkdi':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`✳️ *ANTILINK DISCORD*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					if ((args[0]) === 'on') {
						if (isAntiDis) return reply('✳️ Antilink Discord ya está activo')
						_antilinkdi.push(from)
						fs.writeFileSync('./database/antilinkdi.json', JSON.stringify(_antilinkdi))
						reply(`✅ Se activo el *Antilink Discord* en el grupo *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiDis) return reply('✳️ Antilink Discord ya está desactivado')
						_antilinkdi.splice(from, 1)
						fs.writeFileSync('./database/antilinkdi.json', JSON.stringify(_antilinkdi))
						reply(`✅ Se desactivo el *Antilink Discord* en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`✳️ *ANTILINK DISCORD*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
					break
					
					case "antiviewonce":
					case "vionce":
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
if (args[0] == "on") {
if (isAntiviewonce) return reply("✳️ Anti ViewOnce ya está activo");
antivo.push(from);
fs.writeFileSync("./database/antiviewonce.json", JSON.stringify(antivo));
reply("✅ Se activo *Anti ViewOnce* en el grupo");
} else if (args[0] == "off") {
let akuu = antivo.indexOf(from)
if (! isAntiviewonce) return reply('✳️ Anti ViewOnce ya está desactivado')
antivo.splice(akuu, 1)
fs.writeFileSync("./database/antiviewonce.json", JSON.stringify(antivo));
reply("✅ Se desactivó *Anti ViewOnce* en el grupo");
} else if (!q) {
sendButMessage(from,
`✳️ MODO ANTIVIEWONCE`,
`✅ *On* para activar 
✅ *Off* para desactivar`,
[
{buttonId: `${prefix + command} on`,buttonText: {displayText: `On`,},type: 1,},
{buttonId: `${prefix + command} off`,buttonText: {displayText: `Off`,},type: 1,},]
);
}
break;


case 'banchat':
if (!isGroup) return reply(group())
if (!isOwner && !isMods) return reply(modsB())
//if (!isBotGroupAdmins) return reply(Badmin())
if (isBanchat) return reply(`✳️ Este grupo ya está silenciado`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`✅ *Grupo Silenciado*\n\n⏯️ El bot ha sido silenciado en este chat. No responderá ningún comando`)
break

case 'unbanchat':
if (!isOwner && !isMods) return reply(modsB())
if (!isBanchat) return reply(`✳️El grupo no estaba silenciado`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`✅ *Grupo desmuteado*\n\n ▶️ Ahora ya pueden usar los comandos`)
break

case 'listbanchat': 
case 'listbc':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
 teks = `▢ *Grupos silenciados!*\n▢ _Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await Fg.groupMetadata(i)
teks += '🛡️ Id : ' + i + '\n'
teks += '📌 Nombre : ' + met.subject + '\n\n'
}
reply(teks)
break

case 'detectorinfo':
       case 'detecinfo':
        case 'infodetec':
detec = `
≡ *DETECTOR INFO*
┌──────────────
▷ *🚫 Antidelete* : ${antidel_}
▷ *📮Bienvenida* : ${Welcome_}
▷ *🫂Despedida* : ${Adios_}
▷ *🚨Anti Link Wha* : ${AntiLink_}
▷ *🚨Anti Link Telegram* : ${AntiLinktele_}
▷ *🚨Anti Link Discord* : ${AntiLinkdis_}
▷ *🔞NSFW* : ${Nsfw_}
▷ *🆙Leveling* : ${Leveling_}
▷ *👀ViewOnce* : ${ViOnce_}
└──────────────`
reply(detec) 
break

case 'infogp':
				case 'groupinfo':
				case 'infogrupo':
        case 'grupoinfo':
          // if(!isVerify) return isUser()
  if (isBanned) return reply(banf())  
Fg.updatePresence(from, Presence.composing)
if (!isGroup) return reply(group())
  try {
	ppUrl = await Fg.getProfilePicture(from)
		} catch {
	ppUrl = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'
  	}
  reply(wait())
  
infogp = `┌──「 *INFO DE GRUPO* 」

▢ *🔖Nombre* : ${groupName}
▢ *🪀Se creó el* : ${moment(`${groupMetadata.creation}` * 1000).tz('America/La_Paz').format('DD/MM/YYYY HH:mm:ss')}
▢ *👥Miembros* : ${groupMembers.length}
▢ *🕵🏻‍♂️Admins* : ${groupAdmins.length}
▢ *📮Bienvenida* : ${Welcome_}
▢ *🫂Despedida* : ${Adios_}
▢ *🚨Anti Link Wha* : ${AntiLink_}
▢ *🚨Anti Link Telegram* : ${AntiLinktele_}
▢ *🚨Anti Link Discord* : ${AntiLinkdis_}
▢ *🔞NSFW* : ${Nsfw_}
▢ *🏆Leveling* : ${Leveling_}
▢ *👀ViewOnce* : ${ViOnce_}
▢ *📌Descripción* : \n${groupDesc}`
buffer = await getBuffer(ppUrl)
Fg.sendMessage(from, buffer, image, {thumbnail: fakefg, quoted: mek,caption:infogp })
break

//-- Dar admin 
case 'promote':
case 'promover':
case 'rol':
				  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✳️ Mencione o responde al mensaje del usuario para promoverlo a administrador')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '✅ Ahora es un admin del grupo:\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						Fg.groupMakeAdmin(from, mentioned)
						mentions(teks, mentioned, true)
						
					} else {
						mentions(`✅ Ahora @${mentioned[0].split('@')[0]} Es un admin del grupo *${groupMetadata.subject}*`, mentioned, true)
						Fg.groupMakeAdmin(from, mentioned)
					}
					break
					
					



//-- Bajar posiciones - quitar admin
case 'demote':
case 'degradar':
case 'delrol':
			    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona o responde al mensaje del usuario para degradarlo')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '✅ Admin degradado :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Fg.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`✅ Admin degradado : @${mentioned[0].split('@')[0]} Se convierte en miembro, Lo sentimos 😔`, mentioned, true)
						Fg.groupDemoteAdmin(from, mentioned)
					}
		break
					
//--ver estado info usuarios
case 'verbio':
case 'verinfo': 
case 'getbio':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await Fg.getStatus(`${mentioned}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("❎ Nose encontro la información del usuario")
  } 
} else {
reply('✳️ Responde a un mensaje o etiqueta al usuario')
}
break
				
				//ver perfil a un usuario
case 'getpic':
case 'perfil+':
case 'profile+':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	try {
	pic = await Fg.getProfilePicture(mentioned[0])
	} catch {
	pic = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'
	}
thumb = await getBuffer(pic)
Fg.sendMessage(from, thumb,image,{quoted : mek})
} else {
reply('✳️ Responde a un mensaje o etiqueta al usuario')
}
limitAdd(sender, limit)
break
				
//mi perfil 
case 'profile':
					case 'perfil':
					case 'itsme':
					   if(!isVerify) return isUser()
                       if (isBanned) return reply(banf())  
					Fg.updatePresence(from, Presence.composing)
    				try {
					ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
					} catch {
					ppimg = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'

					}
					const lvl = getLevelingLevel(sender)
					let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                    const prmm = isPremium ? `${cekprm.days} *_días_* ${cekprm.hours} *_horas_* ${cekprm.minutes} _*minutos*_ ${cekprm.seconds} *_segundos_* `:'No Premium'

					infost = await Fg.getStatus(`${sender.split('@')[0]}@c.us`)
				    infost = infost.status == 401 ? '' : infost.status
				    num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})

					 profile = `┌───「 *PERFIL* 」
					
▢ *🔖 Nombre:* ${pushname}
▢ *🔮 Tag :* @${sender.split("@")[0]}
▢ *📇 Info:* ${infost}
▢ *📮 Info Número:* ${num.data.country_code} - ${num.data.carrier.type} - ${num.data.carrier.name}
▢ *🥇Rango:* ${role}
▢ *⭐ Premium* : ${prem_}
▢ *🕐 Expira :* ${prmm}
▢ *🆙 Nivel* : ${lvl}
▢ *💎 Diamantes :* ${isPremium ? 'Ilimitado' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
▢ *🎰 GameCoins* : ${cekGLimit(sender, gcount, glimit)}/${gcount} 
▢ *💰 Coin* : ${getBalance(sender, balance)}
└──────────────`

					buffer = await getBuffer(ppimg)
					
					Fg.sendMessage(from, buffer, image, {contextInfo: {  mentionedJid: [sender]}, thumbnail: fakefg, quoted: mek, caption: profile})
break
  
//-- Eliminar mensaje del bot
case 'delete':
case 'del':
case 'd':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					if (!isGroup)return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
try{
if(!isQuotedMsg)return reply('✳️ Responde a un mensaje mío para que lo elimine!')
pp = {id:mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true}
Fg.deleteMessage(from,pp)
} catch(e) {
reply('✳️ Responde a un mensaje mío para que lo elimine!')
reply(e)
console.log(e)
}
break

      
        
      //𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 
									
case 'stiker': 
case 's': 
case 'stikergif':
case 'sticker': 
case 'stickergif': 
case 'sgif':  
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf()) 
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const dlfile1 = await Fg.downloadMediaMessage(encmedia1)

const bas641 = `data:image/jpeg;base64,${dlfile1.toString('base64')}`

anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `🔮 DyLux ┃ ᴮᴼᵀ `
dua = typeof anu[1] !== 'undefined' ? anu[1] : `💎 @fg98._`

var mantap1 = await convertSticker(bas641, `${dua}`, `${satu}`)
var st = new Buffer.from(mantap1, 'base64');
Fg.sendMessage(from, st, sticker, {contextInfo: {externalAdReply:{
title:`${pushname}`,body:"",previewType:"PHOTO",thumbnail:fakelogo,sourceUrl:`https://chat.whatsapp.com/${soportefg}` }},quoted: mek})

} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia2 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media2 = await Fg.downloadAndSaveMediaMessage(encmedia2, `./sticker/${sender}`)

anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `DyLux`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `@fg98._`

const Nombre2 = `${satu}`  //animados💎
const author101 = `${dua}`
exif.create(Nombre2, author101, `stickwm_${sender}`)
reply(wait())
await ffmpeg(`${media2}`)
.inputFormat(media2.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`❎ Error : ${err}`)
fs.unlinkSync(media2)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❎ Falló, en el momento de la conversión ${tipe} a la pegatina`)
})
.on('end', function () {
console.log('✅ Listo')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
sendSticker(from, fs.readFileSync(`./sticker/${sender}.webp`), mek)
fs.unlinkSync(media2)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decre
ase,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`  *STICKER MAKER*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envia una imagen con *${prefix + command}* Nombre|Autor \n o etiqueta una imagen que se haya enviado, *Videos 1-9 segundos*\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS DEL COMAMDO*\n\n${prefix}s\n${prefix}sticker\n${prefix}stickergif\n${prefix}sgif`)
}
break

case 'take':
         case 'takestick':
         case 'robar':
         case 'stickfg':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!isQuotedSticker) return reply(`✳️ Responde a un sticker\n\n*USO DEL COMAMDO*\n*${prefix + command}* Nombre|Autor\n\n📌Ejemplo *${prefix + command}* Memes|FG98`);
const encmediats = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
kls = args.join(" ").split("|");
pack = kls[0] !== "" ? kls[0] : `🔮 DyLux ┃ ᴮᴼᵀ`;
author2 = typeof kls[1] !== "undefined" ? kls[1] : `💎 @fg98._`;

const dlfile = await Fg.downloadMediaMessage(encmediats)

const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');

Fg.sendMessage(from, imageBuffer, sticker, {quoted: mek})
limitAdd(sender, limit)
break
        
      //////𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 𝗦𝗪𝗠 𝗻𝗼𝗺𝗯𝗿𝗲 | 𝗮𝘂𝘁𝗼𝗿
case 'stiker2': 
	case 'sticker2':
    case 'swm': 
    case 'stickergif2':
    case 's2':
    case 'sgif2': 
         if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
if (!q.includes('|')) return reply(`✳️Envia una imagen con *${prefix + command}* Nombre|Autor`)
if(!q)return reply(`✳️Envia una imagen con *${prefix + command}* Nombre|Autor`)
let media = await Fg.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = q.split('|')[0]
var author = q.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
	} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var pembawm = args.join('')
let media = await Fg.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(wait())
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else  {
reply(`  *STICKER MAKER*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envia una imagen con *${prefix + command}* Nombre | Autor \o etiqueta una imagen que se haya enviado, *Videos 1-9 segundos*\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS DEL COMAMDO*\n\n${prefix}s2\n${prefix}sticker2\n${prefix}stickergif2\n${prefix}swm`)
}
limitAdd(sender, limit)
break
        
      case 'toimage': 
case 'toimg':
case 'aimg':
case 'aimagen':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedSticker) return reply(`STICKER a IMAGEN\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n✳️ Responde a un sticker con el comando\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS DEL COMAMDO*\n\n${prefix}toimg\n${prefix}aimg`)
					reply(wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' ❎ Error al convertir Sticker a imagen ')
						buffer = fs.readFileSync(ran)
						Fg.sendMessage(from, buffer, image, {thumbnail: fakefg, quoted: mek, caption: '✅ Aqui tienes'})
						fs.unlinkSync(ran)
					})
limitAdd(sender, limit)
break

      
      

      case 'emoji':
                   case 'semoji':
                   case 'smoji':
                   case 'jumbo':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(` *_EMOJI A STICKER_*\n──────────────\n✳️ Ingrese el emoji\n\n📌 Ejemplo : *${prefix + command}* 😜\n\n\nAlias del comando\n${prefix}emoji\n${prefix}semoji\n${prefix}jumbo\n${prefix}smoji`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

      case "term":
      case "termux":
        if(!isOwner) return (ownerB())
        if (!q) return reply(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return reply(`FG98:~ ${err}`);
          if (stdout) {
            reply(stdout);
          }
        });
        break;
        
              case "eval":
        if (!isOwner) return;
        Fg.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
       
       
      case 'join2':
case 'entrabot2':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Envie el link de tu Grupo  sin el *https://*\n\n📌 Ejemplo *${prefix + command}* chat.whatsapp.com/G5sXrkhJ0pb0Tu8nhWLaFK`)
if (!q.includes('https://chat.whatsapp.com')) return reply(`❎ asegúrese de que el enlace sea correcto!\n\n📌 Para aprender a usar el comando Escriba *${prefix + command}*`)
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.link)
let code = args[0].replace('https://chat.whatsapp.com/', '')
Fg.acceptInvite(code)
.then((res) => { 
Fg.sendMessage(res.gid,`🎈 Hola soy *${Fg.user.name}*\n_🛡️ Fui invitado por @${sender.split("@")[0]} para unirme al grupo_\n📌 Escriba *${prefix}help* para ver el Menu del bot\📃 *${prefix}reglas*`,text,{contextInfo:{mentionedJid:[sender]}, quoted : estadofake})
reply(`✅ Me uní correctamente al grupo`)
})
.catch((err) => reply(err))
limitAdd(sender, limit)
break

case 'join':
case 'entrabot':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (args.length < 1) return reply(`✳️ Envie el link de tu Grupo\n\n📌 Ejemplo *${prefix + command}* https://chat.whatsapp.com/${soportefg}`); 
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.link);
          hen = args[0];

          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return reply("Asegúrese de que el enlace sea correcto");
          var response = await Fg.acceptInvite(codeInvite);
          reply("✅ Me uní correctamente al grupo");
        } catch {
          reply("❎ Link invalido!");
        }
        limitAdd(sender, limit)
        break;

      case 'runtime':
	              if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					uptime = process.uptime()
					fgrunti = ` ${kyun(uptime)}`
					try {
					const runfg = await getBuffer(`https://api.xteam.xyz/attp?file&text=${fgrunti}`)
					Fg.sendMessage(from, runfg, sticker, {contextInfo: {externalAdReply:{
title:`「 TIEMPO DE EJECUCION 」`,body:"",previewType:"PHOTO",thumbnail:fakelogo,sourceUrl:`https://chat.whatsapp.com/${soportefg}` }},quoted: mek})

} catch (err) {
	runte2 =`「 *TIEMPO DE EJECUCION* 」
 ${kyun(uptime)}`
    reply(runte2)
  }
break
      case 'speed':
case 'ping': 
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
reply(`🟢 *Velocidad* : ${latensi.toFixed(4)} _Segundos_`)
break

case 'tovn': 
case 'toav':
case 'toaudio':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedAudio && !isQuotedVideo) return reply(`✳️ Responde a un audio o vídeo`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
hah = fs.readFileSync(media)
Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true,quoted : mek})
fs.unlinkSync(media)
limitAdd(sender, limit)
break

case 'tomp3': 
case 'amp3':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
Fg.updatePresence(from, Presence.composing)
if (!isQuotedVideo && !isQuotedAudio) return reply(`MP4 a MP3\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n🎥 Envia un video con el comando *${prefix + command}* o etiqueta un video  que se haya enviado`)
reply(wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(errofg(prefix))
buffer = fs.readFileSync(ran)
Fg.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break
      case 'tovid':
case 'tomp4':
case 'amp4':
case 'mp4': 
case 'tovideo':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
	reply(wait())
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fg.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            	
            sendMediaURL(from,res.result,'✅ Aquí tienes')
            })
            }else {
            reply('✳️ Responde a un sticker animado')
            }
            fs.unlinkSync(owgi)
            
limitAdd(sender, limit)
break
						 
case 'togif':
case 'agif':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedSticker) return reply('✳️ Responde a un sticker')
reply(wait())
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
memek = await webp2gifFile(media)

console.log(memek)
anu = await getBuffer(memek.result)
Fg.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: '✅ Aquí tienes', quoted: mek})
limitAdd(sender, limit)
break
      case 'tourl':
case 'aurl':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  Fg.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('e4bb5222011a8521cc60ce61a2aa1f98', media)
.then(data => {
var caps = `❒ 「 *IMAGEN A URL* 」

➸ *ID :* ${data.id}
➸  *Tipo :* ${data.image.mime}
➸ *Extension :* ${data.image.extension}
➸ *URL :* ${data.display_url}`
			ibb = fs.readFileSync(media)
Fg.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
})
.catch(err => {
throw err 
})
limitAdd(sender, limit)
break
case 'tourl2':
case 'aurl2':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fg.downloadMediaMessage(boij)
            fgurl = await upload(owgi)
            reply(fgurl)
            limitAdd(sender, limit)
            } else {
            reply('✳️Responde a un video o imagen')
            }
            break	
            case 'urltoimg':
case 'urlaimg':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!q)return reply('✳️ Ingrese un link de una imagen junto al comando')
reply(wait())
sendMediaURL(from,`${q}`)
limitAdd(sender, limit)
break
//-----------------------------ATTP - TTP----------------------------

case 'ttp':                     
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
					colorf = ["red","yellow","white","magenta","lime","aqua"]
                   ttpfg = colorf[Math.floor(Math.random() * colorf.length)]
                   
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${q}&color=${ttpfg}`
reply(wait())
sendStickerUrl(from, buffer)
limitAdd(sender, limit)
break 
						case 'ttp2':  
             if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
                    reply(wait())
                    F = q
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=${lolkey}&text=${F}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    limitAdd(sender, limit)
                    break
                    

	case 'attp':
	              if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
					  reply(wait())
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					Fg.sendMessage(from, attp, sticker, {quoted: mek})
					  limitAdd(sender, limit)
break
					
					case 'attp2':  
                  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
                    reply(wait())
                    F = q
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/attp?apikey=${lolkey}&text=${F}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    limitAdd(sender, limit)
                    break
                   
	
case 'attp3':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
buffer = `https://pecundang.herokuapp.com/api/attp?teks=${q}`
reply(wait())
sendStickerUrl(from, buffer)
limitAdd(sender, limit)
break

//******************** 》Owner Prem《 ********************\\

case 'addprem':
case 'addpremium':
if (!isOwner)return reply(ownerB()) 
if (!q)return reply(`✳️ *Uso del comamdo!*\n\n*📌Ejemplo :*\n• *${prefix + command} @tag 10d*\n\n*Nota :*\n• s : segundos\n• m : minutos\n• h : horas\n• d : dias*`)
expired = q.split(" ")[1]
const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(`✅ *Premium añadido*`)
break

case 'delprem':
case 'delpremium':
  if(!isOwner) return reply(ownerB())
user = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`✅Se eliminó  premium de @${user.split("@")[0]}`,[user],true)
}
}
break

case 'listprem':
case 'listapremium':
case 'listpremiem':
case 'premiumlist':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())

Fg.updatePresence(from, Presence.composing)
let txt = `≡ *USUARIOS PREMIUM 💎*\n\n*Total* : ${premium.length}\n────⊷ *LISTA* ⊶\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `▢ *🏷️Nombre :* @${i.id.split("@")[0]}\n*⏳Expira :* ${cekvip.days} *_días_* ${cekvip.hours} *_horas_* ${cekvip.minutes} *_minutos_* ${cekvip.seconds} *_segundos_*\n\n`
  }
mentions(txt, men, true)
break

case 'checkprem': 
case 'checkpremium':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isPremium) return reply(`❎ No eres un usuario premium`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} *_días_* ${cekvip.hours} *_horas_* ${cekvip.minutes} *_minutos_* ${cekvip.seconds} *_segundos_`
try {
ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'
}
teks = `❒ *「 Usuario Premium 」* ❒ 
  
 *🏷️Nombre* : ${pushname}
 *🔮Tag* : @${sender.split("@")[0]}
 *⏳Expira* : ${premiumnya}*`
its = await getBuffer (ppimg)
Fg.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: mek, caption: teks
})
break

//******************** 》DIAMANTES《 ********************\\

case 'shop':
	case 'tienda':
	 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
	shopfg = `┌───⊷ *TIENDA* ⊶
├❏ *💎 1 Diamante* : ➜ *500* 💰
├❏ *?? 1 GameCoin* : ➜ *100* 💰
└──────────────

*NOTA :* Puedes comprar 💎 diamantes usando
 *${prefix}buy* 
Para comprar 🎰GameCoins
*${prefix}buygcoin*`
reply(shopfg)
	break
	
/*case 'topbalance':
case 'topbal':
case 'top':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if(!isGroup)return reply(group())
Fg.updatePresence(from, Presence.composing)
let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
let mebn = [];
for (let i of balance){
mebn.push(i.id)
let bl = (i.balance)
txot += `*🏷️ID :* @${i.id.split("@")[0]}\n➸ *💰Coin* : ${bl}\n\n`
  }
mentions(txot, mebn, true)
break*/

case 'diamond':
case 'diamonds': 
case 'diamantes': 
case 'diamantes': 
case 'bal':
case 'balance':
 case 'dinero':
 case 'Coins':
case 'Coin':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
bal = `❏ *Nombre* : ${pushname}

┌───⊷ *BALANCE* ⊶
├❏ 💎 *Diamantes* : ${isPremium ? 'Ilimitado' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
├❏ 🎰 *GameCoin* : ${cekGLimit(sender, gcount, glimit)}/${gcount}
├❏ 💰 *Coins* : ${getBalance(sender, balance)}
└──────────────
*NOTA :* 
Puedes comprar 💎 diamantes usando\n *${prefix}buy* \nPara comprar 🎰GameCoins\n ${prefix}buygcoin`
reply(bal)
break

case 'claim':
              case 'daily':
              case 'diario':
              if(!isVerify) return isUser()
               if (isBanned) return reply(banf())
                    if (isDailyOn) return reply(dailyR())
                    addLevelingXp(sender, 10000)
                    daily = Math.floor(Math.random() * 1000) + 500
                    addBalance(sender, daily, balance)
                    _daily.push(sender)
                    fs.writeFileSync('./database/daily.json', JSON.stringify(_daily))
                    reply(dailyOn(daily))
                    break

case 'buy':
case 'buydiamond':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
{
if (!q) return reply(`✳️ Uso del comamdo *${prefix +  command}* cantidad\n📌Ejemplo ${prefix + command} 4\n\n💰Precio\n 💎 1 Diamante = 500 💰`)
if (q.includes('-')) return reply(`❎ No use  -`)
if (isNaN(q)) return reply(`✳️ Tiene que ser un número`)
let ane = Number(nebal(q) * 500) //---precio diamante
if (getBalance(sender, balance) < ane) return reply(`❎ Lo siento, no tienes suficientes Coins💰 para comprar *${q}* Diamantes💎`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)

diafg = `
┌─「 *NOTA DE PAGO* 」
‣ *Compra nominal* : ${q}
‣ *💰Coin restante* : ${getBalance(sender, balance)}
‣ *💎Diamantes* : ${getLimit(sender, limitCount, limit)}/${limitCount}
└──────────────`
reply(diafg)
}
break


case 'buyglimit':
case 'buygcoin':
case 'buygamecoin':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
{
if(!q)return reply(`📌 Ejemplo : ${prefix + command} 10\n\n💰Precio\n 🎰1 glimit = 100💰`)
if (q.includes('-')) return reply(`❎ No use  -`)
if (isNaN(q)) return reply(`✳️ Tiene que ser un número`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`❎ Lo siento, no tienes suficientes Coins💰 para comprar *${q}* 🎰GameCoins`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
gcoi = `
┌─「 *NOTA DE PAGO* 」
‣ *Compra nominal* : ${q}🎰
‣ *💰Coin restante* : ${getBalance(sender, balance)}
‣ *🎰 GameCoins* : ${cekGLimit(sender, gcount, glimit)}/${gcount}
└──────────────`
reply(gcoi)
  }
break

case 'giftlimit':
case 'adddiamond':
case 'adddiama':
case 'añadirdiamantes':
case 'añadirdiama':
  if(!isOwner) return reply(ownerB())
if (!q)return reply(`📌Ejemplo : ${prefix + command} @tag 10`)
lim = q.split(" ")[1]
const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
giveLimit(tag1, lim, limit)
reply('✅ Diamantes 💎 agregados al usuario')
break

//---añadir Game coin 
case 'addgcoin':
  if(!isOwner) return reply(ownerB())
if (!q)return reply(`📌Ejemplo : ${prefix + command} @tag 10`)
gco = q.split(" ")[1]
const tag2 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
givegame(tag2, gco, glimit)
reply(`✅ GameCoins agregados al usuario`)
break


//******************** 》 GAME 《 ********************\\
case  'tictactoe': 
case 'ttc':
case 'ttt':
if(!isVerify) return isUser()
                                         if (isBanned) return reply(banf())
if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
if (!isGroup) return reply(group())
if (!q)return reply(`📌Mensiona al usuario que deseas desafiar`) 
if (fs.existsSync(`./libreria/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `TICTACTOE GAME..
     
Hay una sesión de juego en este grupo.!!

Info : 
  Jugador1 ❎ : @${boardnow.X}
  Jugador2 ⭕ : @${boardnow.O}
     

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Tu turno:  @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
          
Escriba *rendirse* para dejar el juego..
Escriba ${prefix}delttc para eliminar la sesión de juego..`;
Fg.sendMessage(from, chatMove, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
  boardnow.X + "@s.whatsapp.net",
  boardnow.O + "@s.whatsapp.net",
  ],
  },
 });
return;
  }
if (argss.length === 1)
return reply(`✳️ Etiqueta a quien quiere ser tu oponente\n\n📌Uso  : *${prefix + command} @Tag*`
                         );
const boardnow = setGame(`${from}`);
console.log(`Iniciar TTC ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./libreria/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2));
const strChat = `TICTACTOE GAME..

@${sender.replace("@s.whatsapp.net","")} desafía a ${argss[1]} para una partida de tictactoe
     
${argss[1]}  Escribe S/N 

Nota : 
  • N : rechazar el desafío.
  • S : Acepta el desafío..`;
Fg.sendMessage(from, strChat, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
 },
});
gameAdd(sender, glimit)
break
                    
case  'delttc':

if(!isVerify) return isUser()
                                         if (isBanned) return reply(banf())
                                         //if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isGroup) return reply(group())
if (fs.existsSync("./libreria/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./libreria/tictactoe/db/" + from + ".json");
reply(`✅ Sesión de juego reiniciado`);
  } else {
reply(`No hay sesión en curso, 🛡️ Para iniciar uno escribe ${prefix}ttc`);
  }
break
               //-----  𝗝𝘂𝗲𝗴𝗼𝘀 𝗽𝗮𝗿𝗮 𝗴𝗮𝗻𝗮𝗿 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀--         
case 'math':
case 'mate':
case 'mates':
case 'matemáticas':
if(!isVerify) return isUser()
                                         if (isBanned) return reply(banf())
  if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
if (!isGroup) return reply(group())
if (game.isMtk(from, mtk)) return reply(`❎ Todavía hay preguntas sin respuesta en este chat`)
if (!q) return reply(`*🧮 Dificultades disponibles :*\n1. noob\n2. fácil\n3. normal\n4. difícil\n5. extremo\n6. imposible\n\n_📌Ejemplo : ${prefix + command} normal_`)
					if (args[0] === 'noob' ) {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=very_easy`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'fácil') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=easy`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'facil') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=easy`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
					} else if (args[0] === 'normal') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=medium`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
					} else if (args[0] === 'difícil') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=hard`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'dificil') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=hard`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'extremo') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=extreme`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'imposible') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=impossible`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
					} else {
					  reply(`🗂️  *${args[0]}* No disponible!\n\n*🧮 Dificultades disponibles :*\n1. noob\n2. fácil\n3. normal\n4. difícil\n5. extremo\n6. imposible\n\n_📌Ejemplo : ${prefix + command} normal_`)
					}
					gameAdd(sender, glimit)
break


case 'slot':
case 'lucky':
if(!isVerify) return isUser()
                                         if (isBanned) return reply(banf())
                     if (!isGroup) return reply(group()) 
                if (!isLevelingOn) return reply(leveloff())
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
                 
                    const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
                    const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} ⬅️\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}* \n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else if (somtoyy == '🍒 : 🍒 : 🍒') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} ⬅️\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}*\n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} ⬅️\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}*\n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else if (somtoyy == '🍐 : 🍐 : 🍐') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} ⬅️\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}* \n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} ⬅️\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}*\n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} ⬅️\n${somtoyyy}\n-----------------\n 🎰 | Perdiste *${pushname}*\n\n Se descontará - 998 de XP`)
                    addLevelingXp(sender, -998)
	     	        }
                    gameAdd(sender, glimit)
                    break
                   
                    //-- Piedra papel o tijera 
case 'ppt':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
					if (args.length < 1) return reply(`✳️ Seleccione piedra/papel/tijera\n\nEjemplo : *${prefix + command}* papel`)
                let ppt = ["piedra", "papel", "tijera"];
                let isPpt = ppt.includes(q)
                if (isPpt){
                    let ppt1 = ppt[Math.floor(Math.random() * (ppt.length))]
                    let hadi = numeroRandom(1000)
                    if (q === ppt[0]){
                        if (ppt1 === "piedra"){
                            piedra = `
▢ *Tú* : _${q}_
▢ *Bot* : _${ppt1}_

Empate 😏`
                            reply(piedra)
                        } else if (ppt1 === "papel"){
                            pierde = `
▢ *Tú* : _${q}_
▢ *Bot* : _${ppt1}_

Perdiste 😎`
                            reply(pierde)
                        } else {
                            ganas = `
▢ *Tú* : _${q}_
▢ *Bot* : _${ppt1}_

🎊 *Ganaste!!*
*Recompensa* : *${hadi}* Coins💰`
                            reply(ganas)
                            addBalance(sender, hadi, balance)
                        }
                    } else if (q === ppt[1]){
                        if (ppt1 === "papel"){
                            papel = `
▢ *Tú* : _${q}_
▢ *Bot* : _${ppt1}_

Empate 😏`
                            reply(papel)
                        } else if (ppt1 === "tijera"){
                            pierde = `
▢ *Tú* : _${q}_
▢ *Bot* : _${ppt1}_

Perdiste 😎`
                            reply(pierde)
                        } else {
                            ganas = `
▢ *Tú* : _${q}_
▢ *Bot* : _${ppt1}_

🎊 *Ganaste!!*
*Recompensa* : *${hadi}* Coins💰`
reply(ganas)
                            addBalance(sender, hadi, balance)
                        }
                    } else if (q === ppt[2]){
                        if (ppt1 === "tijera"){
                            tijera = `
▢ *Tú* : _${q}_
▢ *Bot* : _${ppt1}_

Empate 😏`
                            reply(tijera)
                        } else if (ppt1 === "piedra"){
                            pierde = `
▢ *Tú* : _${q}_
▢ *Bot* : _${ppt1}_

Perdiste 😎`
                            reply(pierde)
                        } else {
                            ganas = `
▢ *Tú* : _${q}_
▢ *Bot* : _${ppt1}_

🎊 *Ganaste!!*
*Recompensa* : *${hadi}* Coins💰`
               reply(ganas)
                            addBalance(sender, hadi, balance)
                        }
                    }
                    gameAdd(sender, glimit)
                } else {
                    reply(`🗂️ *${args[0]}* No disponible!\n\n✳️ Seleccione piedra/papel/tijera\n\nEjemplo : *${prefix + command}* papel`)
                }
                break
               

//----ENCODE Y DECODE---FG98
case 'code':
case 'encode':
if(!isVerify) return isUser()
                                         if (isBanned) return reply(banf())
if (!q) return reply(`✳️ *Ingresa un texto para codificar*`) 
texto = args.join(' ')
var rawStr = `${texto}`
var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
var base64 = CryptoJS.enc.Base64.stringify(wordArray);
reply(`${base64}`)
break

case 'decode':
if(!isVerify) return isUser()
                                         if (isBanned) return reply(banf())
                                         if (!q) return reply(`✳️ *Que quieres que decodifique*`) 
texto = args.join(' ')
var parseWordArray = CryptoJS.enc.Base64.parse(`${texto}`);
var parsedStr = parseWordArray.toString(CryptoJS.enc.Utf8);
reply(`${parsedStr}`)
break



///===============NSFW ========
case 'nsfw':
case '+18':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
		           if (!isGroupAdmins && !isOwner) return reply(admin())
				
					if (args.length < 1) return reply(`🔞 *CONTENIDO +18*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
if ((args[0]) === 'on') {
if (isNsfw) return reply('✳️Ya está activado!')
nsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
reply(`✅  Contenido *${command}* habilitado en el grupo`)
} else if ((args[0]) === 'off') {
nsfw.splice(from, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
reply(`✅  Contenido *${command}* Deshabilitado en el grupo`)
} else {
reply(`?? *CONTENIDO +18*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
}
break

 //CONTENIDO NSFW  🔞
     case 'menunsfw':
     case 'menu+18':
         if (!isGroup) return reply(group())
         if (!isNsfw) return reply(fgnsfw())
         if (!isVerify) return reply(userB(prefix))
         if (isBanned) return reply(banf())
                
                mnsfw = `▢ ${tanggal()}
▢ Hora ${jam} 

  ≡ *MENU*
┌───⊷ *NSFW* ⊶
▢ *${prefix}pussy*
▢ *${prefix}boobies*
▢ *${prefix}lesbian*
├──────────────
├    _*Estilo Anime*_
├──────────────
▢ *${prefix}asfwavatar*
▢ *${prefix}oppai*
▢ *${prefix}erokemo*
▢ *${prefix}trap*
▢ *${prefix}hentai*
▢ *${prefix}blowjob*
▢ *${prefix}awoo*
▢ *${prefix}Lewdkemo*
▢ *${prefix}cumimage*
└──────────────`
reply(mnsfw)
break

case 'pussy':
   if(!isVerify) return isUser()
        if (isBanned) return reply(banf())
        if (!isGroup) return reply(group())
       if (!isNsfw) return reply(fgnsfw())
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
       reply(wait())
       fgx = ["nsfw pussy", "nsfw vagina", "xxx vagina"]
        fgxd = fgx[Math.floor(Math.random() * fgx.length)]

        try {
        
        res = await gis(fgxd, google);
        function google(error, result) {
          if (error) { return reply("_❎ Error, no se encontró la imagen" );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            Fg.sendMessage(from,{url:random},image,{quoted: mek, caption: `✅ Aqui tienes 😈`})
          }
        }
        limitAdd(sender, limit)
        } catch {
  	reply(`❎ Intentalo de nuevo mas tarde`)
  }
        break;
       
       case 'boobies':
       case 'tetas':
       case 'boobs':
   if(!isVerify) return isUser()
        if (isBanned) return reply(banf())
        if (!isGroup) return reply(group())
       if (!isNsfw) return reply(fgnsfw())
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
       reply(wait())
       
        fgx = ["amazingtits", "tits", "boobs", "xxx tits", "xxx boobies"]
        fgxd = fgx[Math.floor(Math.random() * fgx.length)]

        try {
        res = await gis(fgxd, google);
        function google(error, result) {
          if (error) { return reply("_❎ Error, no se encontró la imagen" );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            Fg.sendMessage(from,{url:random},image,{quoted: mek, caption: `✅ Aqui tienes 😈`})
          }
        }
        limitAdd(sender, limit)
        } catch {
  	reply(`❎ Intentalo de nuevo mas tarde`)
  }
        break;
        
        case 'ass':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  if (isLimit(sender)) return reply(fdiama(prefix))
	  if (!isGroup) return reply(group())
if (!isNsfw) return reply(fgnsfw())
	
pw = ["https://meme-api.herokuapp.com/gimme/ass"]

porn = await fetchJson(`${pw}`, {
        method: 'get'
})
reply(wait())
buffer = await getBuffer(`${porn.url}`)
Fg.sendMessage(from, buffer, image, { quoted: mek})
  limitAdd(sender, limit)
  break

///-----------------

  

//--------------------------------------
      default:
 
                 if (budy.includes(`Gracias bot`)) {
                  replyfg(`De nada 😊 estoy para ayudarte`)
                  }
				//audios
                  if (budy.startsWith(`Buenos días`)) {
        const aufg = fs.readFileSync('./src/mp3/2.mp3');
		Fg.sendMessage(from, aufg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.startsWith(`Buenas tardes`)) {
        const aufg = fs.readFileSync('./src/mp3/3.mp3');
		Fg.sendMessage(from, aufg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.startsWith(`Buenas noches`)) {
        const aufg = fs.readFileSync('./src/mp3/4.mp3');
		Fg.sendMessage(from, aufg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 
                  //gif con sonido 
                  if (budy.startsWith(`Linda noche`)) {
        const gfso = fs.readFileSync('./src/mp4/1.mp4');
		Fg.sendMessage(from, gfso, MessageType.video, {mimetype: Mimetype.gif,quoted : mek})
		setTimeout( () => {
		reply('_La leyenda dice que si le das_ *doble click* _al gif escucharas la voz del tipo en tu mente._')
		}, 1000)
                  }
                  if (budy.startsWith(`linda noche`)) {
        const none = fs.readFileSync('./src/mp4/1.mp4');
		Fg.sendMessage(from, none, MessageType.video, {mimetype: Mimetype.gif,quoted : mek})
		setTimeout( () => {
		reply('_La leyenda dice que si le das_ *doble click* _al gif escucharas la voz del tipo en tu mente._')
		}, 1000)
                  }
                  //fin gif con sonido 



}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[FG98]', 'red'), 'Chat PRIVADO', color(sender.split('@')[0]))
	}		
} catch (e) {
     e = String(e) 
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'red'))
        }
	 //console.log(e)
	}
}


        

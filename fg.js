/*============ FG98 ============

    🇩 🇾 🇱 🇺 🇽  𝗩4  template

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
  processTime,
} = require("@adiwajshing/baileys");

//-- Modulos
const simple = require("./libreria/simple.js");
const hx = require("hxz-api");
const yo = require("tod-api");
const dh = require("dhn-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const imgbb = require('imgbb-uploader');
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const googlefg = require('google-it')
const gis = require("g-i-s");
const got = require("got");
const Exif = require('./libreria/exif');
const exif = new Exif();
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const CryptoJS = require("crypto-js");
const crypto = require('crypto');
const {convertSticker} = require("./libreria/swm.js")
const { webp2mp4Url, webp2gifFile, reverseVideoFile } = require('./libreria/ezgif')
const { recognize } = require('./libreria/ocr')

//--New
const {  getBuffer, h2k,  generateMessageID, getGroupAdmins,  getRandom, banner,  start,  info, success, close,} = require("./libreria/functions");
const { color, bgcolor } = require("./libreria/color");
const { fetchJson, getBase64, kyun, createExif } = require("./libreria/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./libreria/ytdl");
const { webp2mp4File } = require("./libreria/webp2mp4");
const time = moment().tz("America/La_Paz").format("HH:mm:ss");
const { sleep, isAfk, cekafk,  } = require("./libreria/offline");
const { cmdadd } = require("./libreria/totalcmd.js");


//-- Reportes
const _informe = JSON.parse(fs.readFileSync('./result/reportes/informe.json'));
const _solicitud = JSON.parse(fs.readFileSync('./result/reportes/solicitud.json'));

//---Data Base
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'));
const confi = JSON.parse(fs.readFileSync('./settings.json'))
const _welcom = JSON.parse(fs.readFileSync('./database/welcom.json'))
const _user = JSON.parse(fs.readFileSync('./database/verify.json'))
const awgp = JSON.parse(fs.readFileSync('./database/awgp.json'))
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
const { wait, stick, errorfg, group, banf, ownerB, modsB, userB, admin, Badmin} = require('./help/respon');

//--------𝗔𝗣𝗜𝗞𝗘𝗬----------
const Vkey = confi.Zekskey
const lolkey = confi.LolHumanKey
const valkey = 'rivalgans'
const Xinz = 'XinzBot'
const Pkode = 'pais' 

  //---- 𝗦𝗧𝗔𝗙𝗙 -----
const owner = confi.ownerN
const mods = confi.mods

//---------𝗥𝗘𝗗𝗘𝗦 𝗦𝗢𝗖𝗜𝗔𝗟𝗘𝗦---------
const soportefg = 'https://chat.whatsapp.com/G5sXrkhJ0pb0Tu8nhWLaFK' 
const instafg = 'https://www.instagram.com/fg98._'
//--anti delete 
antidel = false
ngetik = false
vn = true
//---
hit_today = [];
baterai = {
    baterai: 0,
    cas: false
}


//--Contacto del dueño
const vcard1 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + 'FN:FG98\n'
 + 'ORG:Dueño de DyLuxBot;\n' 
 + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`
 + 'END:VCARD'
      

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
 

//------------
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

module.exports = Fg = async (Fg, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;

global.prefix
global.blocked
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    
   const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
    
    const type = Object.keys(mek.message)[0]
    1;
    if (mek.key.fromMe) return
    
    const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    
    //---Multi Prefix
if(multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~,¿;+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'

} else {
if (nopref){
prefix = ''

} else {
if(single){
prefix = prefa }}}

     const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''  
    const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const autofg = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    hit_today.push(command);
    const args = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(prefix)
    const q = args.join(" ");
    
    const botNumber = Fg.user.jid;
    const botNumero = botNumber.replace('@s.whatsapp.net', '') //sólo número del bot   
    const isGroup = from.endsWith("@g.us"); 
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
      const isOwner = senderNumber == owner || senderNumber == botNumero
      const isMods = mods.includes(senderNumber)

    const isVerify = _user.includes(sender)
    const isAntilink = isGroup ? _antilink.includes(from) : false
    const isWelcom = isGroup ? _welcom.includes(from) : false
   
    
    const totalchat = await Fg.chats.all();
    const m = simple.smsg(Fg, mek);
    const groupMetadata = isGroup ? await Fg.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;

const isBanned = ban.includes(sender)
const isAw = isGroup ? awgp.includes(from) : false 

    const conts = mek.key.fromMe
      ? Fg.user.jid
      : Fg.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? Fg.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (isCmd) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./libreria/totalcmd.json"))[0]
      .totalcmd;

   
   chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const arg = chats.slice(command.length + 2, chats.length)
    const argss = body.split(/ +/g)
    //Y
    const time = moment.tz('America/La_Paz').format('DD/MM HH:mm:ss')
    const hora = moment.tz('America/La_Paz').format('HH:mm')
    const hora2 = moment.tz('America/La_Paz').format('HH:mm:ss')
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Libra", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    
    //----saludos
    const time2 = moment().tz("America/La_Paz").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Buenas noches";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "buenas tardes";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "buenas tardes";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Buenos dias";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Buenas noches";
    }

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
    //fake reply
      const replyimg = (pesan, tipe, rep1, rep2) => {
        Fg.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: {
"imageMessage": {
"mimetype": "image/jpeg",
"caption": `${rep1}`,
"fileLength": "201809",
"jpegThumbnail": `${rep2}` } } }})
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
  
  //-------  Stickers
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
  
    //----
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        Fg.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      Fg.groupAdd(from, orangnya);
    };
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await Fg.relayWAMessage(
        Fg.prepareMessageFromContent(
          target,
          Fg.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      Fg.sendMessage(target, teks, "conversation");
    };

    //Funcion
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

Fg.on('CB:action,,battery', json => {
	const a = json[2][0][1].value
	const b = json[2][0][1].live
	baterai.baterai = a
	baterai.cas = b
})


//-------𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗔𝗡𝗧𝗜 𝗟𝗜𝗡𝗞 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣------
if (isGroup && isAntilink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins && isOwner) return
if (!isBotGroupAdmins) return reply('🤨 Por suerte no soy  admin, asi que no te expulsare')
linkgp = await Fg.groupInviteCode (from)
    if (budy.includes(`https://chat.whatsapp.com/${linkgp}`)) return //reply('✳️ Menos mal que este enlace es de este grupo v:')
    if (budy.includes(`https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA`)) return reply('✳️ Menos mal que este enlace es del grupo *📲💻ANDROID WORLD🎬🎮* v:')
    if (budy.includes(`${soportefg}`)) return
console.log(color('[KICK]', 'red'), color('Anti link WhatsApp!', 'yellow'))
reply(`❎ No permitimos enlaces de otros grupos!\nLo siento *${pushname}* seras expulsado`)
setTimeout(() => {
Fg.groupRemove(from, [sender])
}, 2000);
}
}
	
	
//---colores 
    colors = ["red", "white", "black", "blue", "yellow", "green"];
   
   //---Tipo de mensaje
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
      
 
 if (!isGroup && isCmd) console.log(color('[FG98]','aqua'), "Pv", color(command, "blue"), "de", (sender.split('@')[0]),  args.length)
if (isGroup && isCmd) console.log(color('[FG98]','aqua'), "Gp", color(command, "green"), "de", (sender.split('@')[0]), "en", (groupName), args.length)

//----------- 𝗩𝗘𝗥 𝗖𝗔𝗥𝗔𝗖𝗧𝗘𝗥𝗜́S𝗧𝗜𝗖𝗔𝗦---------

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
let AntiLink_ = 'Inactivo'
			if (isAntilink) {
			AntiLink_ = 'Activo'
			}

//----
const sendMessageFromContent = async(jid, message, options) => { 
		var option = { contextInfo: {}, ...options }
		send = await Fg.prepareMessageFromContent(jid,message,option)
		return Fg.relayWAMessage(send) 
             }

    if (!isOwner && banChats && isCmd === true) return reply('✳️ Bot en modo privado, todas las funciones bloqueadas')
   
   //----𝗔𝗨𝗧𝗢 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 
        
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
    switch (command) {
      case "menu":
      case "help":  
      if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
	uptime = process.uptime()
  capt = `Total Hits : ${totalhit} \n‣ Clasificacion : ★★★★☆\n‣ Usuarios : ${_user.length}`
  thum = await fs.readFileSync('./image/fg.jpg').toString('base64')
      replyimg(help(prefix, pushname), text, capt, thum)
break;


case 'info':
if (!isVerify) return reply(userB(prefix))
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
*${soportefg}*

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
https://github.com/FG98F/fgbotv3
▢ DUEÑO :
https://github.com/FG98F`
mentions(infobot, [fgnum, crisnum], true)
break

//----  Reglas bot
case 'rules':
case 'reglas':
case 'reglasbot':
if (!isVerify) return reply(userB(prefix))
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

case 'soporte':
case 'support':
 if (!isVerify) return reply(userB(prefix))
     dylux = `📌 *Grupo soporte del Bot*\n\n${soportefg}`
      reply(dylux) 
   break
   
//--- verificación 
case 'verify':
case 'reg':
case 'verificar':
case 'register':
case 'daftar':
			if (isVerify) return replyfg('*✳️ Tu cuenta ya esta registrada*')
					_user.push(sender)
fs.writeFileSync('./database/verify.json', JSON.stringify(_user))
try {
ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}

			capt = `
┌────「 *VERIFICADO* 」─
▢ *Nombre:* ${pushname}
▢ *Hora:* _${hora2}_
▢ *Usuarios Verificados:* _${_user.length}_
└────「 *${Fg.user.name}* 」

Verificación completa usa *${prefix}Help* para ver el Menu`

daftarimg = await getBuffer(ppimg)
Fg.sendMessage(from, daftarimg, image, {quoted: mek, caption: capt})
break

//-- Simsimi
case 'simi':
case 'bot':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
		 if (args.length < 1) return reply(`Hola _*${pushname}*_ quieres charlar un rato?\n\nResponde con *${prefix + command}* _tu mensaje_`)
                     texto = args.join(' ')
                     anu = await getJson(`https://api.simsimi.net/v1/?text=${texto}&lang=es`)
                     simfg = (`${anu.success}`)      
                     replyfg(simfg)
                     break
                     

//-- Dueño del bot
case 'owner':
case 'creator':
case 'creador': 
case 'developer':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
Fg.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
//Fg.sendMessage(from, {displayname: "jeff", vcard: vcard2}, MessageType.contact, { quoted: mek})
                    .then((res) => Fg.sendMessage(from, `✅ Aqui mi dueño, solo chatea si es necesario`, text, {quoted: res}))
 break

case 'status':
case 'estado':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 
stat = `*「 ESTADO DEL BOT 」*
*🛡️ Modo* : ${public_}
`
reply(stat)
break
			


//--- Pedidos solicitud
case 'pedido':
case 'solicitud':
if (!isVerify) return reply(userB(prefix))
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
if (!isVerify) return reply(userB(prefix))
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
  if (!isVerify) return reply(userB(prefix))
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
if (!isVerify) return reply(userB(prefix))
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


//-- Verdad 

case 'verdad':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const verdad = _verdad[Math.floor(Math.random() * _verdad.length)]
  reply(`‣ *Verdad*\n\n${verdad}`)
break

//--reto
case 'reto':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  const reto = _reto[Math.floor(Math.random() * _reto.length)]
  reply(`‣ *Reto*\n\n${reto}`)
break



//-- link whatsapp
case 'wame':
case 'wa.me':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					reply(`*Link WhatsApp:* wa.me/${sender.split('@')[0]}\n*O*\napi.whatsapp.com/send?phone=${sender.split('@')[0]}`)
			break

//-- say
case 'say':
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
sendMess(from, q)
break

//-- Escanea el texto de una imagen----- Reconocimiento de texto
case 'ocr':
case 'rt':
     if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const media = await Fg.downloadAndSaveMediaMessage(encmedia)
			
			reply(wait())
						await recognize(media, {lang: 'eng+es', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							  
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
    if (!isVerify) return reply(userB(prefix))
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
    if (!isVerify) return reply(userB(prefix))
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
if (!isOwner)return reply(ownerB())
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
  if (!isVerify) return reply(userB(prefix))
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
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  if (!isGroup) return reply(group())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    
			    let online = [...Object.keys(Fg.chats.get(ido).presences), Fg.user.jid]
			    Fg.sendMessage(from, 'En linea:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n` + `\n*©POWERED BY Dylux ┃ ᴮᴼᵀ*`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
    
			    })

				break

      

                  case 'hoy':
                   case 'hora' :
                   case 'fecha':
                   if (!isVerify) return reply(userB(prefix))
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

//---Acortar enlaces
				case 'tinyurl':
				 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
				if (args.length < 1) return reply(`✳️ Ingrese el link para acortar`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break

case 'tagme':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
mentions(`@${sender.split("@")[0]} Hola :)`, [sender], true)
break


      case 'kick':
 if (!isVerify) return reply(userB(prefix))
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
if (!isBotGroupAdmins) return reply(Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✳️ Responde al mensaje! del usuario para que lo expulse')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`✅ Ordenes recibidas, emitidas : @${mentioned[0].split('@')[0]}`, mentioned, true)
Fg.groupRemove(from, mentioned)
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
case 'grupo':
					case 'group':
					 if (!isVerify) return reply(userB(prefix))
                    if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
if (args.length < 1) return reply(`✳️ Para abrir grupo : *${prefix + command}* open\npara cerrar grupo : *${prefix + command}* close`)
if (args[0] === 'open') {
 reply('✅ Grupo abierto ahora *todos los participantes* pueden escribir')
Fg.groupSettingChange(from, GroupSettingChange.messageSend, false)
	} else if (args[0] === 'close') {
reply('✅ Grupo cerrado ahora *solo los admin* pueden escribir')
Fg.groupSettingChange(from, GroupSettingChange.messageSend, true)
	} else {
reply(` 🗂️ (${args[0]}) No disponible\n*${prefix + command}* open\npara cerrar grupo : *${prefix + command}* close`)
}
break

//--- Cambiar descripción del grupo
case 'setdesc': 
case'setdescgp':
if (!isVerify) return reply(userB(prefix))
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
if (!isVerify) return reply(userB(prefix))
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
if (!isVerify) return reply(userB(prefix))
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
if (!isVerify) return reply(userB(prefix))
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
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					teks = `▢ *STAFF DEL GRUPO* _${groupMetadata.subject}_\nTotal : ${groupAdmins.length}\n\n┌─────────⊷\n`
			
					for (let admin of groupAdmins) {
						teks += `▢ @${admin.split('@')[0]}\n`
					}
					teks += `└────✪ Dylux ┃ ᴮᴼᵀ ✪────`
					mentions(teks, groupAdmins, true)
					break

     //--- preguntas

case 'pregunta':
if (!isVerify) return reply(userB(prefix))
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
    if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf()) 
    if (!isGroup) return reply(group())
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
					break	
					
					case 'random':
  if (!isVerify) return reply(userB(prefix))
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
	        

//-----

   case  'trigger': 
       case 'triggered':
					case 'ger':
					case 'motivado':
					case 'motivada':
					 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
					
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
		case  'sgay':
		case  'gay2':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
					
					case 'srip':
					case 'sf':
					if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
} else {
reply('✳️ *Envia una imagen con el comando o etiqueta una imagen que se haya enviado*')
}
break
		
		case  'passed':
		case  'aprobado':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
					
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
					
		case  'jail':
		case  'scelda':
		case  'celda':
		case  'carcel':
		case 'scarcel':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
		
		case  'wasted':
		case  'desperdiciado':
		case  'desperdiciada':
		if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
					
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break 
		case 'stickmeme':
case 'smeme':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
break
case 'stickmeme2':		
case 'smeme2':	
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())						
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
break
        
      

//-- mencionar a todos los miembros
case 'mentionall': 
case 'tagall':
 if (!isVerify) return reply(userB(prefix))
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
if (!isVerify) return reply(userB(prefix))
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
   if (!isVerify) return reply(userB(prefix))
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

//-------(𝗗𝗘𝗦𝗖𝗔𝗥𝗚A𝗦 -  𝗜𝗡𝗦𝗧𝗔 - 𝗧𝗜𝗞𝗧𝗢𝗞------
      case 'tiktok':
      if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
     
     		break
     case 'tiktokaudio':
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.link)
 		if (args.length < 1) return reply(`✳️ Ingrese el link de un video`)
 		reply(wait())
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    	
    		const { audiotk} = result
            sendMediaURL(from,audiotk,'')
    		})
     		.catch(e => console.log(e))
     
     		break
        
      case 'ytmp3':
			  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Use en comando más el link de YouTube\n\n📌 Ejemplo: *${prefix + command}* https://www.youtube.com/watch?v=_aelrhBsIRE`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(err(prefix))
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
				
				})
				})
				} catch (err) {
				reply(mess.error.api)}
				break
				
 		case 'ytmp4':
			  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Use en comando más el link de YouTube\n\n📌 Ejemplo: *${prefix + command}* https://www.youtube.com/watch?v=_aelrhBsIRE`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(err(prefix))
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
				
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
				

      case 'igfoto':       
                 case 'igvideo':    
                    case 'ig':
                    case 'instagram':
         if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
        break;
      //******************** 》 SEARCH 《 ********************\\
case 'ytsearch':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
		    		
		            Fg.sendMessage(from, tbuff, image, {quoted: mek, caption: ytresult})
		            
					break
					
					case 'ytstalk':
					if (!isVerify) return reply(userB(prefix))
                     if (isBanned) return reply(banf())
                  if (args.length < 1) return reply(`✳️ Ingrese un nombre del canal \n\n📌 Ejemplo : *${prefix + command}* Lil Peep`)  
                     reply(wait())
					ytk = q
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••••••••••\n'
					for (let search of anu.result) {
					cari += `*Canal* : ${search.channel_name}\n*Acerca de* : ${search.channel_about}\n*Creado* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					
					break
				
//==========================================================//
      

				//-- link del grupo
case 'linkgroup': 
case 'linkgp':
case 'link':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isBotGroupAdmins) return reply(Badmin())
linkgp = await Fg.groupInviteCode(from)
fgxd = `Link del Grupo *${groupName}*\n\nhttps://chat.whatsapp.com/${linkgp}`
Fg.sendMessage(from, fgxd, text, {quoted: mek})
break
				
case 'igstalk':
case 'stalking':
   if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
              
            break
        
      
        
      case 'lyrics':
case 'letra':
case 'letras':
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply('✳️ Ingrese el nombre de la canción')
  reply(wait())
  
  try {
    let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
 } catch {
    reply(mess.ferr)
  }
break

     case 'covid':
case 'covid19':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
break

      case "pinterest":
        if (!isVerify) return reply(userB(prefix))
        if (isBanned) return reply(banf())
   if (!q) return reply(`❎ Que imagen quieres que busque?`);
        reply(wait())
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await Fg.sendMessage(from, di, image, { quoted: mek, caption: `✅ Pinterest : *${q}*` });
        
        break;
       case 'image':
   case 'imagen':
   case 'img':
   if (!isVerify) return reply(userB(prefix))
        if (isBanned) return reply(banf())
       if (!q) return reply(`❎ Que imagen quieres que busque?`);
        reply(wait())
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_❎ Error, no se encontró la imagen_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        
        break;
       
        
        //--image
case 'rip':
					case 'f':
					if (!isVerify) return reply(userB(prefix))
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
break


                   //--fake reply
case 'fitnah':
case 'fake':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
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
        break;
     
      case 'take':
         case 'takestick':
         case 'robar':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
 if (!isQuotedSticker) return reply(`✳️ Responde a un sticker\n\n*USO DEL COMAMDO*\n*${prefix + command}* Nombre|Autor\n\n📌Ejemplo *${prefix + command}* Memes|FG98`);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await Fg.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `DyLux`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `@fg98._`;
        require("./libreria/fetcher.js").createExif(satu, dua);
        require("./libreria/fetcher.js").modStick(media, Fg, mek, from);
        break;
        

      case 'public':
case 'publico':
      if (!isOwner)return reply(ownerB()) 
        if (banChats === false)  return;
        banChats = false;
        reply(`*🌍 Bot Modo* : Publico`);
        break
    case 'self':
case 'privado':
case 'private':
if (!isOwner)return reply(ownerB()) 
        if (banChats === true) return;
        banChats = true;
        reply(  `*🛡️Bot Modo* : privado`);
        break;
       
       
        case 'topgay':
try{
 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
 
} catch (e) {
console.log(e)
reply('❎ Ocurrió un error inesperado intente de nuevo')

}
break
	
//--- Bienvenida on/off
case 'welcome':
case 'bv':
case 'bienvenidas':
case 'bienvenida':
  if (!isVerify) return reply(userB(prefix))
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

//--- on/off antilink WhatsApp 
				case 'antilink':
				case 'antilinkwha':
				case 'antilinkwhatsapp':
				if (!isVerify) return reply(userB(prefix))
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
					
					
//-- Dar admin 
case 'promote':
case 'promover':
case 'rol':
				  if (!isVerify) return reply(userB(prefix))
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
			    if (!isVerify) return reply(userB(prefix))
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
					

//mi perfil 
case 'profile':
					case 'perfil':
					case 'itsme':
					   if (!isVerify) return reply(userB(prefix))
                       if (isBanned) return reply(banf())  
					Fg.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'
					}
					 profile = `╭────「 *PERFIL* 」
│• *🔖 Nombre:* ${pushname}
│• *🔗 Link:* wa.me/${sender.split("@")[0]}
╰──────────────────`

					buffer = await getBuffer(ppimg)

					Fg.sendMessage(from, buffer, image, {quoted: mek, caption: profile})

					break
  
//-- Eliminar mensaje del bot
case 'delete':
case 'del':
case 'd':
if (!isVerify) return reply(userB(prefix))
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
//----
      
 case 'play':
			if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
                        
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api) }
                   break
                   
                   case 'video':
				case 'playvideo':
				case 'playvid':
				case 'playmp4':
				 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
           if (args.length < 1) return reply(`✳️ *Ingresa el título de un video*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
            var srch = args.join('')
            vidfg = await yts(srch);
            aramat = vidfg.all 
            var mulaikah = aramat[0].url                            
                  try {
                  	reply(wait()) 
                    ytv(mulaikah)
                    .then((res) => {
                    
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if(Number(filesizeF.split(' MB')[0]) >= 99.00) return reply('❎ El archivo es demasiado grande, la reproducción de video se canceló\nel video debe pesar - 100mb')
                capt = `≡ *🎥 PLAY VIDEO*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp4
‣ *⚖️ Tamaño* : ${filesizeF}
‣ *🎈 Subido* : ${vidfg.videos[0].ago}
‣ *⏱️ Duración* : ${vidfg.videos[0].timestamp}
‣ *🔗 Link* : ${a.data}

_📤 Enviando, espere si el video no aparece, descargue por el link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('❎ Ocurrió un error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)} 
                   break

        
      //𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 
									
case 'stiker': 
case 's': 
case 'stikergif':
case 'sticker': 
case 'stickergif': 
case 'sgif':  
  if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
					var a = 'FG98'
        var b = 'DyLux v4'
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await Fg.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              Fg.sendMessage(from, "Ocurrió un error", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./sticker/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                Fg.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await Fg.downloadAndSaveMediaMessage(encmedia);
        var a = 'FG98'
        var b = 'DyLux v4'
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              Fg.sendMessage(from, "Se produjo un error", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./sticker/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                Fg.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(`✳️ Envia una imagen con *${prefix + command}* o etiqueta una imagen que se haya enviado\n*Videos 1-9 segundos*`)
        }
        break
        
      case 'toimage': 
case 'toimg':
case 'aimg':
case 'aimagen':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isQuotedSticker) return reply(`STICKER a IMAGEN\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n✳️ Responde a un sticker con el comando\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS DEL COMAMDO*\n\n${prefix}toimg\n${prefix}aimg`)
					reply(wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' ❎ Error al convertir Sticker a imagen ')
						buffer = fs.readFileSync(ran)
						Fg.sendMessage(from, buffer, image, {quoted: mek, caption: '✅ Aqui tienes'})
						fs.unlinkSync(ran)
					})
break

      case 'emoji':
                   case 'semoji':
                   case 'smoji':
                   case 'jumbo':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
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
break

     
       
     

case 'join':
case 'entrabot':
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
  if (args.length < 1) return reply(`✳️ Envie el link de tu Grupo \n\n📌 Ejemplo *${prefix + command}* ${soportefg}`);
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
       
        break;

      case 'runtime':    
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf()) 
					runtime = process.uptime()
					runte = `「 *TIEMPO DE EJECUCION* 」\n\n*${kyun(runtime)}*`
					reply(`${runte}`)
					break
      case 'speed':
case 'ping': 
if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
reply(`🟢 *Velocidad* : ${latensi.toFixed(4)} _Segundos_`)
break

case 'tovn': 
case 'toav':
case 'toaudio':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
               if (!isQuotedAudio && !isQuotedVideo) return reply(`✳️ Responde a un audio o vídeo`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
hah = fs.readFileSync(media)
Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true,quoted : mek})
fs.unlinkSync(media)
break

case 'tomp3': 
case 'amp3':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
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
break
      case 'tovid':
case 'tomp4':
case 'amp4': 
case 'tovideo':
case 'mp4':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
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
break
						 
case 'togif':
case 'agif':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
if (!isQuotedSticker) return reply('✳️ Responde a un sticker')
reply(wait())
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
memek = await webp2gifFile(media)

console.log(memek)
anu = await getBuffer(memek.result)
Fg.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: '✅ Aquí tienes', quoted: mek})
break
      
case 'tourl':
case 'aurl':
if (!isVerify) return reply(userB(prefix))
                   if (isBanned) return reply(banf())
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fg.downloadMediaMessage(boij)
            fgurl = await upload(owgi)
            reply(fgurl)
            
            } else {
            reply('✳️Responde a un video o imagen')
            }
            break	
            
//-----------------------------ATTP - TTP----------------------------

case 'ttp':  
             if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
                    reply(wait())
                    F = q
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=${lolkey}&text=${F}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    
                    break
                    

	case 'attp':
	              if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* DyLux`)
					  reply(wait())
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${teks}`)
					Fg.sendMessage(from, attp, sticker, {quoted: mek})
					  
break
					
					
//----ENCODE Y DECODE---FG98
case 'code':
case 'encode':
if (!isVerify) return reply(userB(prefix))
                                         if (isBanned) return reply(banf())
if (!q) return reply(`✳️ *Ingresa un texto para codificar*`) 
texto = args.join(' ')
var rawStr = `${texto}`
var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
var base64 = CryptoJS.enc.Base64.stringify(wordArray);
reply(`${base64}`)
break

case 'decode':
if (!isVerify) return reply(userB(prefix))
                                         if (isBanned) return reply(banf())
                                         if (!q) return reply(`✳️ *Que quieres que decodifique*`) 
texto = args.join(' ')
var parseWordArray = CryptoJS.enc.Base64.parse(`${texto}`);
var parsedStr = parseWordArray.toString(CryptoJS.enc.Utf8);
reply(`${parsedStr}`)
break




//--------------------------------------
      default:
 
                 if (budy.includes(`Gracias bot`)) {
                  replyfg(`De nada 😊 estoy para ayudarte`)
                  }
				
//-------------------------------------///---------------------------//----------
        if (isOwner && body.startsWith(">")) {
          try {
            return Fg.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }
  
    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[CHAT]", "red"),
        "PRIVADO",
        color(sender.split("@")[0])
      );
    }
  } catch (e) {
    e = String(e);
    if (!e.includes("this.isZero") && !e.includes("jid")) {
      console.log("Message : %s", color(e, "green"));
    }
    // console.log(e)
  }
};

console.log('✅ Preparando ...')

const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./libreria/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const fs = require("fs");
const { banner, start, success, getGroupAdmins } = require("./libreria/functions");
const { color } = require("./libreria/color");
//const { keepalive } = require("./keepalive");
const fetch = require("node-fetch");
const axios = require("axios")  
const moment = require("moment-timezone");

blocked = [];

require("./fg.js");
nocache("./fg.js", (module) => console.log(`${module} Se actualizó!`));

const starts = async (Fg = new WAConnection()) => {
  Fg.logger.level = "warn";
 // Fg.version = [2, 2119, 6];
 
 const CFonts  = require('cfonts')
CFonts.say('FG98', {
  font: 'pallet',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`DyLux By FG98 Ig : @fg98._`, {
  font: 'console',
  align: 'center',
  colors: ['yellow']
})


  /*Fg.browserDescription = ["DyLux v4", "Chrome", "3.0"];
  console.log(banner.string);*/
  
  
  Fg.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" Escanee el codigo QR para conectarse...")
    );
  });

  fs.existsSync("./session/FG98.json") && Fg.loadAuthInfo("./session/FG98.json");
  Fg.on("connecting", () => {
    start("2", "Conectando...");
  });
  Fg.on("open", () => {
    success("2", "Conectado");
  });
  await Fg.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync(
    "./session/FG98.json",
    JSON.stringify(Fg.base64EncodedAuthInfo(), null, "\t")
  );
  
//-----𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔 𝗬 𝗗𝗘𝗦𝗣𝗘𝗗𝗜𝗗𝗔-----
Fg.on('group-participants-update', async (anu) => {
	const _welcom = JSON.parse(fs.readFileSync('./database/welcom.json'))
		if (!_welcom.includes(anu.jid)) return
		try {
			const mdata = await Fg.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hola @${num.split('@')[0]}\nBienvenido/a al Grupo *${mdata.subject}*

▢ *Pide las reglas del grupo* para evitar ser baneado

//▢ *📌 Descripción :* \n${mdata.desc}
`
				
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `≡ *NUEVO ADMIN*
┌──────────────
▢ *Nombre* : @${num.split('@')[0]}
▢ *Número* : ${num.replace('@s.whatsapp.net', '')}
▢ *Mensaje* : Felicidades  Admin 🎉
└──────────────`
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `≡ *ADMIN DEGRADADO*
┌──────────────
▢ *Nombre* : @${num.split('@')[0]}
▢ *Número* : ${num.replace('@s.whatsapp.net', '')}
▢ *Mensaje* : Lo siento :'v
└──────────────`
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `_Adios @${num.split('@')[0]}_`
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})




  Fg.on("chat-update", async (message) => {
    require("./fg.js")(Fg, message);
  });
  isBattre = "Not Detect"; //
  isCharge = "Not Detect"; //
  Fg.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
  Fg.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
};

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Modulo", `'${module}'`, "Se está revisando");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();

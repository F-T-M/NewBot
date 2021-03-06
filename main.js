console.log('β Cargando ...')

const {
    WAConnection:_WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const simple = require('./libreria/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const { banner, start, success } = require('./libreria/functions')
const { color } = require('./libreria/color')
const fetch = require("node-fetch");
const axios = require("axios")  
const encodeUrl = require('encodeurl')
const moment = require("moment-timezone");

require('./fg.js')
nocache('./fg.js', module => console.log(`${module} se actualizΓ³! β`))

const starts = async (Fg = new WAConnection()) => {
    Fg.logger.level = 'warn'
    
    //console.log(banner.string)
    
    Fg.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Escanea el codigo Qr'))
    })

const CFonts  = require('cfonts')
CFonts.say('Bot Boss', {
  font: 'pallet',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`Boss ofc`, {
  font: 'console',
  align: 'center',
  colors: ['yellow']
})


    fs.existsSync('./FG98.json') && Fg.loadAuthInfo('./FG98.json')
    Fg.on('connecting', () => {
        start('2', 'Conectando...')
    })
    Fg.on('open', () => {
        success('2', 'Conectado')
    })
    await Fg.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./FG98.json', JSON.stringify(Fg.base64EncodedAuthInfo(), null, '\t'))

//-----ππππ‘π©ππ‘πππ π¬ πππ¦π£πππππ-----
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
					ppimg = 'https://i.ibb.co/bXt41pb/blank-profile-picture-973460-640.webp'
				}
				teks = `Hola @${num.split('@')[0]}\nBienvenido/a al Grupo *${mdata.subject}*

β’ *Pide las reglas del grupo* para evitar ser baneado

β’ *π DescripciΓ³n :* \n${mdata.desc}
`
				
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/bXt41pb/blank-profile-picture-973460-640.webp'
				}
				teks = `β‘ *NUEVO ADMIN*
βββββββββββββββ
β’ *Nombre* : @${num.split('@')[0]}
β’ *NΓΊmero* : ${num.replace('@s.whatsapp.net', '')}
β’ *Mensaje* : Felicidades  Admin π
βββββββββββββββ`
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/bXt41pb/blank-profile-picture-973460-640.webp'
				}
				teks = `β‘ *ADMIN DEGRADADO*
βββββββββββββββ
β’ *Nombre* : @${num.split('@')[0]}
β’ *NΓΊmero* : ${num.replace('@s.whatsapp.net', '')}
β’ *Mensaje* : Lo siento :'v
βββββββββββββββ`
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/bXt41pb/blank-profile-picture-973460-640.webp'
				}
				teks = `_Adios @${num.split('@')[0]}_`
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})


    Fg.on('chat-update', async (message) => {
        require('./fg.js')(Fg, message)
    })
}

/************************************
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Se estΓ‘ revisando!')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/*************************************
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()

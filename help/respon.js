// Función de respuesta

//-- 
const wait = () => { 
return '*⌛ _Cargando..._ ▬▬▬▭*\n\n*🧘🏻‍♂️ Espere por favor,* esto puede tomar unos segundos.'
}

//--
const stick = () => {
  return '❎ Los siento ocurrió Error, repita después de este mensaje'
}

//--
const errorfg = (prefix) => {
  return `❎ Error! \n🔍 Intentalo de nuevo mas tarde`
}

//-- 
const group = () => {
  return '❎  Este comando es solo para grupos'
}

//-- 
const banf = () => {
  return '❎ Estás en la lista de baneados, Lo siento no puedes usar ningun comando'
}

//--
const ownerB = () => {
  return '❎  Esta función es solo para *Para el dueño del Bot*'
}
//--
const modsB = () => {
  return `❎ Este comando es solo para el *Dueño y Moderadores del Bot*`
}
//--
const leveloff = () => {
  return '❎ La nivelación no está habilitado en el grupo'
}
const lvlnul = () => {
  return '❎ Tu nivel aun está vacio'
}

//--
const userB = (prefix) => {
  return `≡ No estas Verificado como usuario del bot, para usar los comandos primero verificate\n\n┌─⊷ *VERIFICACIÓN* ⊶\n▢ Escribe *${prefix}Verify*\n└─────────────`
}

//--
const admin = () => {
  return '❎ Esta función es solo para administradores de grupo'
}

//--
const Badmin = () => {
  return '❎ ¡Para usar este comando debo ser *Administrador!*'
}


module.exports =  { wait, stick, errorfg, group, banf, ownerB, userB, modsB, admin, Badmin, leveloff, lvlnul} 
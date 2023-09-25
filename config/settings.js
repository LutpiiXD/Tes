const fs = require('fs')
const chalk = require('chalk')
const petik = '```'

// SUBS MY YT DIRRONE OFC
global.owner = ['6281543342705'] // Nomer Lu
global.ownvcard = '+62 815-4334-2705' // Menu owner
global.nomerOwner = '6281543342705'
global.nameowner = '᭖͜͡𝗗𝗜𝗥𝗥𝗢𝗡𝗘 𝗢𝗙𝗖 〆' // Nama
global.namebot = 'DirlyBotz-Mdོ' // Nama Bot
global.imel = `dirroneofc@gmail.com`
global.verbot = `1.0.2` // gak usah ganti
global.anticall = false // jika true , anti call on

//Name stiker
global.packname = 'DirlyBotz Md\nSubs Yete Sammya Om 🗿\nYtb dirroneofc' // name stiker
global.author = '᭖͜͡𝗗𝗜𝗥𝗥𝗢𝗡𝗘 𝗢𝗙𝗖\n' // name stiker

// image
global.dbimg = fs.readFileSync('./image/logo.jpg')
global.logo = { url: 'https://telegra.ph/file/8becd96f0dfdc16e74b35.jpg'}  // ganti logo lu
global.qrisdonate = { url: 'https://telegra.ph/file/bdc777f44ff72aef6e33a.jpg' } // donasi

/*
Terserah mau diganti apa kaga
ingat !! , kalau gak paham jangan di ganti !
!*/
global.mess = {
    wait: `${petik}⌛ Please wait sis${petik}`,
    succes: `${petik}✅ Success sis !!${petik}`,
    publics: `${petik}✅ Succes changed to public!${petik}`,
    selfs: `${petik}✅ Succes changed to self!${petik}`,
    admin: `${petik}❎ This feature is only admin !!${petik}`,
    botAdmin: `${petik}❎ Bot is not Admin !!${petik}`,
    owner: `${petik}❎ Owner Only !!${petik}`,
    group: `${petik}❎ Group only features !!${petik}`,
    private: `${petik}❎ Private Only !!${petik}`,
    error: `${petik}❎ Error 404\nLapor Ke owners dirly bot Jika Eror \nLapor Ke Owners Bila penting !!${petik}`,
}
// Biarin aja
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})



/*

Base Ori By Dirrone Ofc
Subscribe Ytb Dirrone Ofc
Wts? Chat wa.me/6281543342705

*/
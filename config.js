const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VUa4+iSBT9K5v6qhl5KK+kk0WkhVYERHxt5kM1FFDKy6JAYeJ/32B3T0822dlePhVVN+eee8+59wfIC1yhBWqB8gOUBDeQov5I2xIBBUzrKEIEDEEIKQQKsO1gLXe3jO2MSluudW7xvJhVi7PqqtnOsOli696YfPuKGfcJ3IegrF9THPwGcMnDQBiFe/NWkTowl2JlQW3aXiaNM8qarjhahmwx563NqE/g3iNCTHAe62WCMkRgukCtAzH5Gn13qpFTERR8fmETV4PMLhGLqF1ya6O7FLPG3tTQ86TGm4+/Rv98QDzTuaJ9u8HnAWUxoVWwGDh89ipjSW2Pew0Vri4ms+sb/QrHOQrNEOUU0/bLfbeMXeRkXBOPfTcqnGo6YG3yYgV5SVw+RpP6sDzeTgNWy4uvEZcmeOtvhW1jGvOX9bUbrW+3zTas6ihzLpPF9brV5NCpidUxvxJ3yIdXzv+n7+qLE5YHuIu1WLSQP4qWB3/lCxpb15u5tXPLo4/tbFKinfk1+nyzzlfRKDO24j7KBH7gRTS6XsxnLzhLLC/HHn/W51mmT+NP+pDW5HcsX4J5I1TNLI0wI13SNj8Ja2O5d6cz7Xln2ulltTdfBbJPgpculE+FbItlHVwm8lGtmeexeqIHi1SdFtqTTZg1fu0wehI/PSo6o9YMgcLeh4CgGFeUQIqL/HHHMUMAw8ZDAUH00V7QnUtOCFfL0WDP3TbLDnF5IO2raIZMsjjpTpIRIiA7n1/8JzAEJSkCVFUoNHBFC9JaqKpgjCqg/PV9CHJ0o2/C9el4dggiTCrq53WZFjD8UPXjEQZBUefUa/NA6w+IAIX5vEaU4jyu+j7WOSRBghukJZBWQIlgWqGfFSKCQqBQUqOfU6sV4aPxki7LnqmBIcgeguAQKEDmeJ4fs8xYZCSFk/+svl17WFiW33JEwRCkjzCOkzhRnAgcy/ehfWT/MAQ57MGAeU5SePlDTTIU9p1/592nCRGFOK2AArSXRm6Lq6ZbximWivlc1WNVi1XwWeeHYd4EuV2yLDPghE+J00pkmm48ukl5aswGJcsZF7S2RvbghHnvIcg/QYACcHnmN9Y0i6cpPLCeti1S69kazNjWDWtzwvuNfTW7djPt0p3uj+Uz62qHhRusz4TlvU2kn+rT3FH1Fp4EeSuazSwUp+pTny1EDQ7Qr8kO2EP7VsoHnL7ytpZvHfVRMye748jXdNY4r2fjQymtjmFw29fccWeLUlM06WZvLQ+Sxd5ki30W0pVh+u7KzOzEW6w8/G7lxyil7ysMP0zWK9j/Rhg9NsK7FP+p6Bvx3njMffgLxvuO+Zc5nQawLMuEq8MJ7KRmcT36DPEnobi+ji5hmAj5eeN0TTGmTAru9+9DUKaQRgXJgAJgHpLi4RdS1L2TzTwqfpNMU31TjeNVX3kKK6p+TscGZ6iiMCuBworCRBJ4SeLeohxSlAasEqAAdjFOjHFv9VYtS49C+jFsQO2/6UAC978B5Ge72IgHAAA=",
    PREFIX: process.env.PREFIX || "-",
    BOT_NAME: process.env.BOT_NAME || "✦ Silva ✦ MD ✦",
    AUTO_STATUS_REACT: convertToBool(process.env.AUTO_STATUS_REACT, "true"),
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
    DELETE_LINKS: convertToBool(process.env.DELETE_LINKS, "false"),
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923334104708",
    OWNER_NAME: process.env.OWNER_NAME || "✦ IKHLAQ ✦ AHMED ✦",
    DESCRIPTION: process.env.DESCRIPTION || "*© ✦ IKHLAQ ✦ AHMED ✦*",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/5uli5p.jpeg",
    LIVE_MSG: process.env.LIVE_MSG || "> SILVA MD IS ACTIVE ⚡",
    READ_MESSAGE: convertToBool(process.env.READ_MESSAGE, "false"),
    AUTO_REACT_NEWSLETTER: convertToBool(process.env.AUTO_REACT_NEWSLETTER, "true"), // Newsletter auto-react
    ANTI_BAD: convertToBool(process.env.ANTI_BAD, "false"),
    AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN, "true"),
    AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY, "true"),
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*👀 Seen by Silva MD ✅*",
    MODE: process.env.MODE || "both", // both, public, or private
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE, "true"),
    AUTO_TYPING: convertToBool(process.env.AUTO_TYPING, "true"),
    AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING, "false"),
    
    // Anti-Delete Settings
    ANTIDELETE_GROUP: convertToBool(process.env.ANTIDELETE_GROUP, "true"),
    ANTIDELETE_PRIVATE: convertToBool(process.env.ANTIDELETE_PRIVATE, "true"),
    
    // Debug Settings
    DEBUG: convertToBool(process.env.DEBUG, "true")
};



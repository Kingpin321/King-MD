const _0x5575a9=_0x1714;function _0x1714(_0x4836c3,_0x4d5394){const _0x452060=_0x4520();return _0x1714=function(_0x17141d,_0xb4578){_0x17141d=_0x17141d-0x89;let _0x430f84=_0x452060[_0x17141d];return _0x430f84;},_0x1714(_0x4836c3,_0x4d5394);}(function(_0x2d3340,_0x437e44){const _0x32a431=_0x1714,_0x2ffbbf=_0x2d3340();while(!![]){try{const _0x114e18=parseInt(_0x32a431(0x99))/0x1+-parseInt(_0x32a431(0xa6))/0x2+-parseInt(_0x32a431(0x95))/0x3+parseInt(_0x32a431(0x9a))/0x4*(parseInt(_0x32a431(0x9f))/0x5)+-parseInt(_0x32a431(0x98))/0x6*(parseInt(_0x32a431(0xa9))/0x7)+parseInt(_0x32a431(0xa5))/0x8*(parseInt(_0x32a431(0x8e))/0x9)+parseInt(_0x32a431(0x9d))/0xa*(parseInt(_0x32a431(0x92))/0xb);if(_0x114e18===_0x437e44)break;else _0x2ffbbf['push'](_0x2ffbbf['shift']());}catch(_0x15f075){_0x2ffbbf['push'](_0x2ffbbf['shift']());}}}(_0x4520,0x56f5d));function _0x4520(){const _0x11fd9e=['../bdd/stickcmd','stickerMessage','11zyoHqN','only\x20Mods\x20can\x20use\x20this\x20command','allcmd','777468KjCPOX','\x20is\x20deleted\x20successfully.','delcmd','30YMIhlw','169193Vpvcix','480108zJjqtI','toLowerCase','the\x20commande\x20','6298130aDRpZn','url','15hptRlf','*List\x20of\x20all\x20stickcmd\x20:*\x0a\x20','join','stickcmd','No\x20stickcmd\x20save','cmd','8sDdKaD','1298148sZBXrf','mention\x20a\x20sticker','put\x20the\x20name\x20of\x20the\x20command\x20that\x20you\x20want\x20to\x20delete','13951tmkjZY','\x20don\x27t\x20existe','you\x20can\x27t\x20use\x20this\x20command','../framework/france','put\x20the\x20name\x20of\x20the\x20command','length','1037673ErqlIU','map'];_0x4520=function(){return _0x11fd9e;};return _0x4520();}const {france}=require(_0x5575a9(0x8b)),{addstickcmd,deleteCmd,getCmdById,inStickCmd,getAllStickCmds}=require(_0x5575a9(0x90));france({'nomCom':'setcmd','categorie':_0x5575a9(0xa2)},async(_0xb4af95,_0x20c5b3,_0x5a0f3b)=>{const _0x23d0a1=_0x5575a9,{ms:_0x1813a4,arg:_0x2c1454,repondre:_0x12b8fa,superUser:_0x326a3a,msgRepondu:_0x2e1730}=_0x5a0f3b;if(!_0x326a3a){_0x12b8fa(_0x23d0a1(0x8a));return;};if(_0x2e1730&&_0x2e1730[_0x23d0a1(0x91)]){if(!_0x2c1454||!_0x2c1454[0x0]){_0x12b8fa(_0x23d0a1(0x8c));return;};await addstickcmd(_0x2c1454[0x0][_0x23d0a1(0x9b)](),_0x2e1730['stickerMessage'][_0x23d0a1(0x9e)]),_0x12b8fa('Stick\x20cmd\x20save\x20successfully');}else _0x12b8fa(_0x23d0a1(0xa7));}),france({'nomCom':_0x5575a9(0x97),'categorie':_0x5575a9(0xa2)},async(_0xc7e524,_0x53119e,_0x110a67)=>{const _0x359116=_0x5575a9,{ms:_0x5cabbc,arg:_0x20b953,repondre:_0x457e1c,superUser:_0x40d419}=_0x110a67;if(!_0x40d419){_0x457e1c(_0x359116(0x93));return;}if(!_0x20b953||!_0x20b953[0x0]){_0x457e1c(_0x359116(0xa8));return;}const _0x228c32=_0x20b953[0x0];try{await deleteCmd(_0x228c32[_0x359116(0x9b)]()),_0x457e1c(_0x359116(0x9c)+_0x228c32+_0x359116(0x96));}catch{_0x457e1c('the\x20command\x20'+_0x228c32+_0x359116(0x89));}}),france({'nomCom':_0x5575a9(0x94),'categorie':'stickcmd'},async(_0x4f8f1b,_0x5e584d,_0xa584f8)=>{const _0x48c0fb=_0x5575a9,{repondre:_0x598e97,superUser:_0x23031c}=_0xa584f8;if(!_0x23031c){_0x598e97('only\x20Mods\x20can\x20use\x20this\x20command');return;}const _0x6f05ea=await getAllStickCmds();if(_0x6f05ea[_0x48c0fb(0x8d)]>0x0){const _0x22d3cc=_0x6f05ea[_0x48c0fb(0x8f)](_0x56bb5b=>_0x56bb5b[_0x48c0fb(0xa4)])[_0x48c0fb(0xa1)](',\x20');_0x598e97(_0x48c0fb(0xa0)+_0x22d3cc);}else _0x598e97(_0x48c0fb(0xa3));});
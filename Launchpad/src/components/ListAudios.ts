
//import fs from 'fs';


//import * as fs from "fs";
export function ListAudios(){

  //const fs = require('fs');
  const dir = URL;

  var tree:Array<{label: string,children: Array< {label: string}>, icon: string}> = [];

  var Bass:Array<{label: string}> = [{label: "Lofi Bass 001.wav"},{label:  "Lofi Bass 002.wav"},{label: "Lofi Bass 003.wav"},{label: "Lofi Bass 004.wav"},{label: "Lofi Bass 005.wav"},{label: "Lofi Bass 006.wav"},{label: "Lofi Bass 007.wav"},{label: "Lofi Bass 008.wav"},{label: "Lofi Bass 009.wav"},{label: "Lofi Bass 010.wav"}]
  tree.push({label: "Bass One Shots", children: Bass,icon: "album"});
  var Kicks:Array<{label: string}> = [{label: "Lofi Kick 001.wav"},{label: "Lofi Kick 002.wav"},{label: "Lofi Kick 003.wav"},{label: "Lofi Kick 004.wav"},{label: "Lofi Kick 005.wav"},{label: "Lofi Kick 006.wav"},{label: "Lofi Kick 007.wav"},{label: "Lofi Kick 008.wav"},{label: "Lofi Kick 009.wav"},{label: "Lofi Kick 010.wav"},{label: "Lofi Kick 011.wav"},{label: "Lofi Kick 012.wav"},{label: "Lofi Kick 013.wav"},{label: "Lofi Kick 014.wav"},{label: "Lofi Kick 015.wav"},{label: "Lofi Kick 016.wav"},{label: "Lofi Kick 017.wav"},{label: "Lofi Kick 018.wav"}]
  tree.push({label: "Kicks",children: Kicks,icon: "fas fa-drum" });
  Bass/*var Bass:Array<string> = ["Lofi Bass 001.wav", "Lofi Bass 002.wav", "Lofi Bass 003.wav", "Lofi Bass 004.wav", "Lofi Bass 005.wav", "Lofi Bass 006.wav", "Lofi Bass 007.wav", "Lofi Bass 008.wav", "Lofi Bass 009.wav", "Lofi Bass 010.wav"]
  tree.push({name: "Bass One Shots", files: Bass});
  var Bass:Array<string> = ["Lofi Bass 001.wav", "Lofi Bass 002.wav", "Lofi Bass 003.wav", "Lofi Bass 004.wav", "Lofi Bass 005.wav", "Lofi Bass 006.wav", "Lofi Bass 007.wav", "Lofi Bass 008.wav", "Lofi Bass 009.wav", "Lofi Bass 010.wav"]
  tree.push({name: "Bass One Shots", files: Bass});
  var Bass:Array<string> = ["Lofi Bass 001.wav", "Lofi Bass 002.wav", "Lofi Bass 003.wav", "Lofi Bass 004.wav", "Lofi Bass 005.wav", "Lofi Bass 006.wav", "Lofi Bass 007.wav", "Lofi Bass 008.wav", "Lofi Bass 009.wav", "Lofi Bass 010.wav"]
  tree.push({name: "Bass One Shots", files: Bass});
  var Bass:Array<string> = ["Lofi Bass 001.wav", "Lofi Bass 002.wav", "Lofi Bass 003.wav", "Lofi Bass 004.wav", "Lofi Bass 005.wav", "Lofi Bass 006.wav", "Lofi Bass 007.wav", "Lofi Bass 008.wav", "Lofi Bass 009.wav", "Lofi Bass 010.wav"]
  tree.push({name: "Bass One Shots", files: Bass});
  var Bass:Array<string> = ["Lofi Bass 001.wav", "Lofi Bass 002.wav", "Lofi Bass 003.wav", "Lofi Bass 004.wav", "Lofi Bass 005.wav", "Lofi Bass 006.wav", "Lofi Bass 007.wav", "Lofi Bass 008.wav", "Lofi Bass 009.wav", "Lofi Bass 010.wav"]
  tree.push({name: "Bass One Shots", files: Bass});
  var Bass:Array<string> = ["Lofi Bass 001.wav", "Lofi Bass 002.wav", "Lofi Bass 003.wav", "Lofi Bass 004.wav", "Lofi Bass 005.wav", "Lofi Bass 006.wav", "Lofi Bass 007.wav", "Lofi Bass 008.wav", "Lofi Bass 009.wav", "Lofi Bass 010.wav"]
  tree.push({name: "Bass One Shots", files: Bass});
  var Bass:Array<string> = ["Lofi Bass 001.wav", "Lofi Bass 002.wav", "Lofi Bass 003.wav", "Lofi Bass 004.wav", "Lofi Bass 005.wav", "Lofi Bass 006.wav", "Lofi Bass 007.wav", "Lofi Bass 008.wav", "Lofi Bass 009.wav", "Lofi Bass 010.wav"]
  tree.push({name: "Bass One Shots", files: Bass});
  var Bass:Array<string> = ["Lofi Bass 001.wav", "Lofi Bass 002.wav", "Lofi Bass 003.wav", "Lofi Bass 004.wav", "Lofi Bass 005.wav", "Lofi Bass 006.wav", "Lofi Bass 007.wav", "Lofi Bass 008.wav", "Lofi Bass 009.wav", "Lofi Bass 010.wav"]
  tree.push({name: "Bass One Shots", files: Bass});*/


  //const files = fs.readdirSync(dir);
  //const files = readdir(dir);

  //const files = (require.context(dir, true, /.*/));

  return tree;

};



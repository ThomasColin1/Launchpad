/*This methods returns an array fitting for a q-tree with all the audios and their categories*/
export function listAudios(){

  var tree:Array<{label: string,children: Array< {label: string}>, icon: string}> = [];

  //Here, necessary to add each instrument one by one because require.context() does not allows variables as arguments
  var Bass:Array<{label:string}>=[];
  require.context("../assets/Lofi/", false, /^.*Bass.*$/).keys().forEach(function (value:string) {
    value=value.substring(2,value.length);
    Bass.push({label: value});
  });
  tree.push({label: "Bass",children: Bass,icon: "fas fa-guitar" });

  var Kicks:Array<{label:string}>=[];
  require.context("../assets/Lofi/", false, /^.*Kick.*$/).keys().forEach(function (value:string) {
    value=value.substring(2,value.length);
    Kicks.push({label: value});
  });
  tree.push({label: "Kicks",children: Kicks,icon: "fas fa-drum" });

  var Snares:Array<{label: string}> = [];
  require.context("../assets/Lofi/", false, /^.*Sna.*$/).keys().forEach(function (value:string) {
    value=value.substring(2,value.length);
    Snares.push({label: value});
  });
  tree.push({label: "Snares", children: Snares, icon: "fas fa-drum-steelpan"});

  var Percs:Array<{label: string}> = [];
  require.context("../assets/Lofi/", false, /^.*Perc.*$/).keys().forEach(function (value:string) {
    value=value.substring(2,value.length);
    Percs.push({label: value});
  });
  tree.push({label: "Percs", children: Percs, icon: "fas fa-compact-disc"});

  var Samples:Array<{label: string}> = [];
  require.context("../assets/Lofi/", false, /^.*Sample.*$/).keys().forEach(function (value:string) {
    value=value.substring(2,value.length);
    Samples.push({label: value});
  });
  tree.push({label: "Samples", children: Samples, icon: "fas fa-music"});

  var Vocals:Array<{label: string}> = [];
  require.context("../assets/Lofi/", false, /^.*Vocal.*$/).keys().forEach(function (value:string) {
    value=value.substring(2,value.length);
    Vocals.push({label: value});
  });

  var FX:Array<{label: string}> = [];
  require.context("../assets/Lofi/", false, /^.*FX.*$/).keys().forEach(function (value:string) {
    value=value.substring(2,value.length);
    FX.push({label: value});
  });
  require.context("../assets/Lofi/", false, /^.*Vinyl.*$/).keys().forEach(function (value:string) {
    value=value.substring(2,value.length);
    FX.push({label: value});
  });
  tree.push({label: "FX and Vinyl", children: FX, icon: "album"});

  //The eraser : used to delete the audio assigned to a pad
  tree.push({label: "Erase", children: [], icon: "fas fa-eraser"});

  return tree;
};


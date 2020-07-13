﻿// Copyright 2013 
// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril

// enable double clicking from the Finder or Explorer
#target photoshop

//Make Photoshop the front most application
app.bringToFront();

///////////////////////////////////////////////////
// SETUP
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////

///////////////////////////////////////////////////
//FUNCTIONS
///////////////////////////////////////////////////


function onSkin() {

    ErrStrs = {}; 
    ErrStrs.USER_CANCELLED=localize("$$$/ScriptingSupport/Error/UserCancelled=User cancelled the operation"); 
    try {
        var idslct = charIDToTypeID( 'slct' );
        var desc444 = new ActionDescriptor();
        var idnull = charIDToTypeID( 'null' );
        var ref385 = new ActionReference();
        var idMnspsp = charIDToTypeID( 'Mn  ' );
        var idMnIt = charIDToTypeID( 'MnIt' );
        var idtimelineEnableOnionSkins = stringIDToTypeID( 'timelineEnableOnionSkins' );
        ref385.putEnumerated( idMnspsp, idMnIt, idtimelineEnableOnionSkins );
        desc444.putReference( idnull, ref385 ); executeAction( idslct, desc444, DialogModes.ALL ); 
    } 
    catch(e){
        if (e.toString().indexOf(ErrStrs.USER_CANCELLED)!=-1) {;} 
        else{alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=The command is currently not available"));}
    }

};
//=========================================
// onSkin.main
//=========================================
//

onSkin.main = function () {
  onSkin();
};

//app.activeDocument.suspendHistory("Enable/Disable Onion Skin", 'onSkin.main()');
onSkin.main();
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

function showTimeline() {

    // Show Timeline Panel
    ErrStrs = {}; 
    ErrStrs.USER_CANCELLED=localize("$$$/ScriptingSupport/Error/UserCancelled=User cancelled the operation"); 
    try {
        var idslct = charIDToTypeID( 'slct' );
        var desc766 = new ActionDescriptor();
        var idnull = charIDToTypeID( 'null' );
        var ref637 = new ActionReference();
        var idMnspsp = charIDToTypeID( 'Mn  ' );
        var idMnIt = charIDToTypeID( 'MnIt' );
        var idtoggleAnimationPalette = stringIDToTypeID( 'toggleAnimationPalette' );
        ref637.putEnumerated( idMnspsp, idMnIt, idtoggleAnimationPalette );
        desc766.putReference( idnull, ref637 ); executeAction( idslct, desc766, DialogModes.ALL );

    // Allows for cancel without feedback message
    } catch (e) {
        if (e.toString().indexOf(ErrStrs.USER_CANCELLED) != -1) {;}
        else {alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=The command is currently not available"));}
    }
};

//=========================================
// showTimeline.main
//=========================================
//

showTimeline.main = function () {
  showTimeline();
};
// Doesnt use history
//app.activeDocument.suspendHistory("Show / Hide the Timeline Panel", 'showTimeline.main()');
showTimeline.main();
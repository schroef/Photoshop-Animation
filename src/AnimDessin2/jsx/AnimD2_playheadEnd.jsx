﻿// Copyright 2013 
// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril

// Updated 2020
// Modified on April 2020 by Rombout (https://https://github.com/schroef/AnimDessin2)

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

function playheadEnd() {

    ErrStrs = {}; 
    ErrStrs.USER_CANCELLED=localize("$$$/ScriptingSupport/Error/UserCancelled=User cancelled the operation");
    try {
        var idslct = charIDToTypeID( 'slct' );
        var desc461 = new ActionDescriptor();
        var idnull = charIDToTypeID( 'null' );
        var ref402 = new ActionReference();
        var idMnspsp = charIDToTypeID( 'Mn  ' );
        var idMnIt = charIDToTypeID( 'MnIt' );
        var idtimelineSetEndOfWorkArea = stringIDToTypeID( 'timelineSetEndOfWorkArea' );
        ref402.putEnumerated( idMnspsp, idMnIt, idtimelineSetEndOfWorkArea );
        desc461.putReference( idnull, ref402 ); executeAction( idslct, desc461, DialogModes.ALL );

    // Allows for cancel without feedback message
    } catch (e) {
        if (e.toString().indexOf(ErrStrs.USER_CANCELLED) != -1) {;}
        else {alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=The command is currently not available"));}
    }
};

//=========================================
// playheadEnd.main
//=========================================
//

playheadEnd.main = function () {
  playheadEnd();
};

app.activeDocument.suspendHistory("Set end of workarea", 'playheadEnd.main()');
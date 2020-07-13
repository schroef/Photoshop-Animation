﻿// Copyright 2014  
// Compiled (via JavascriptListener or ActionToJavascript Xtools…) by Stéphane Baril

// Updated 2020
// Modified on April 2020 by Rombout (https://https://github.com/schroef/AnimDessin2)

// enable double clicking from the Finder or Explorer
#target photoshop

//Make Photoshop the front most application
// app.bringToFront();
// docRef = app.activeDocument;

// Call main function from getselected, we can reuse scripts
// var ScriptFilePath = Folder($.fileName).parent.fsName;
// $.evalFile(new File(ScriptFilePath + '/AnimD2_applyToAllLayers.jsx'));

///////////////////////////////////////////////////
//FUNCTIONS
///////////////////////////////////////////////////

// New document 1920x1080p
var idMk = charIDToTypeID("Mk  ");
var desc1 = new ActionDescriptor();
var idNw = charIDToTypeID("Nw  ");
var desc2 = new ActionDescriptor();
var idNm = charIDToTypeID("Nm  ");
desc2.putString(idNm, """Anim""");
var idMd = charIDToTypeID("Md  ");
var idRGBM = charIDToTypeID("RGBM");
desc2.putClass(idMd, idRGBM);
var idWdth = charIDToTypeID("Wdth");
var idRlt = charIDToTypeID("#Rlt");
desc2.putUnitDouble(idWdth, idRlt, 1920.000000);
var idHght = charIDToTypeID("Hght");
var idRlt = charIDToTypeID("#Rlt");
desc2.putUnitDouble(idHght, idRlt, 1080.000000);
var idRslt = charIDToTypeID("Rslt");
var idRsl = charIDToTypeID("#Rsl");
desc2.putUnitDouble(idRslt, idRsl, 72.000000);
var idpixelScaleFactor = stringIDToTypeID("pixelScaleFactor");
desc2.putDouble(idpixelScaleFactor, 1.000000);
var idFl = charIDToTypeID("Fl  ");
var idFl = charIDToTypeID("Fl  ");
var idWht = charIDToTypeID("Wht ");
desc2.putEnumerated(idFl, idFl, idWht);
var idDpth = charIDToTypeID("Dpth");
desc2.putInteger(idDpth, 8);
var idprofile = stringIDToTypeID("profile");
desc2.putString(idprofile, """sRGB IEC61966-2.1""");
var idDcmn = charIDToTypeID("Dcmn");
desc1.putObject(idNw, idDcmn, desc2);
executeAction(idMk, desc1, DialogModes.ALL);


function AnimD2_newDoc() {

    ErrStrs = {}; 
    ErrStrs.USER_CANCELLED=localize("$$$/ScriptingSupport/Error/UserCancelled=User cancelled the operation");
    try{
        // =======================================================
        // Create a new Layer
        var idMk = charIDToTypeID("Mk  ");
        var desc80 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref60 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        ref60.putClass(idLyr);
        desc80.putReference(idnull, ref60);
        executeAction(idMk, desc80, DialogModes.NO);

        // =======================================================
        // create a Video Timeline
        var idmakeTimeline = stringIDToTypeID("makeTimeline");
        executeAction(idmakeTimeline, undefined, DialogModes.NO);

        // =======================================================
        // Setup the default framerate to 24
        var idsetd = charIDToTypeID("setd");
        var desc243 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref150 = new ActionReference();
        var idPrpr = charIDToTypeID("Prpr");
        var iddocumentTimelineSettings = stringIDToTypeID("documentTimelineSettings");
        ref150.putProperty(idPrpr, iddocumentTimelineSettings);
        var idtimeline = stringIDToTypeID("timeline");
        ref150.putClass(idtimeline);
        desc243.putReference(idnull, ref150);
        var idframeRate = stringIDToTypeID("frameRate");
        desc243.putDouble(idframeRate, 24.000000);
        executeAction(idsetd, desc243, DialogModes.NO);

        // =======================================================
        // open dialog box to setup the Duration framerate
        var idslct = charIDToTypeID("slct");
        var desc10 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref10 = new ActionReference();
        var idMn = charIDToTypeID("Mn  ");
        var idMnIt = charIDToTypeID("MnIt");
        var idtimelineDocumentSettings = stringIDToTypeID("timelineDocumentSettings");
        ref10.putEnumerated(idMn, idMnIt, idtimelineDocumentSettings);
        desc10.putReference(idnull, ref10);
        executeAction(idslct, desc10, DialogModes.NO);

        // =======================================================
        // Create a Video Group based on the Selected layer(s)
        var idMk = charIDToTypeID("Mk  ");
        var desc4 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref3 = new ActionReference();
        var idsceneSection = stringIDToTypeID("sceneSection");
        ref3.putClass(idsceneSection);
        desc4.putReference(idnull, ref3);
        var idFrom = charIDToTypeID("From");
        var ref4 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        var idOrdn = charIDToTypeID("Ordn");
        var idTrgt = charIDToTypeID("Trgt");
        ref4.putEnumerated(idLyr, idOrdn, idTrgt);
        desc4.putReference(idFrom, ref4);
        executeAction(idMk, desc4, DialogModes.NO);

        // =======================================================
        // Rename the Video Group
        var idsetd = charIDToTypeID("setd");
        var desc98 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref76 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        var idOrdn = charIDToTypeID("Ordn");
        var idTrgt = charIDToTypeID("Trgt");
        ref76.putEnumerated(idLyr, idOrdn, idTrgt);
        desc98.putReference(idnull, ref76);
        var idT = charIDToTypeID("T   ");
        var desc99 = new ActionDescriptor();
        var idNm = charIDToTypeID("Nm  ");
        desc99.putString(idNm, """Anim""");
        var idLyr = charIDToTypeID("Lyr ");
        desc98.putObject(idT, idLyr, desc99);
        executeAction(idsetd, desc98, DialogModes.NO);

        // =======================================================
        // Move (select) the layer below
        var idslct = charIDToTypeID("slct");
        var desc7 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref7 = new ActionReference();
        var idLyr = charIDToTypeID("Lyr ");
        var idOrdn = charIDToTypeID("Ordn");
        var idBckw = charIDToTypeID("Bckw");
        ref7.putEnumerated(idLyr, idOrdn, idBckw);
        desc7.putReference(idnull, ref7);
        var idMkVs = charIDToTypeID("MkVs");
        desc7.putBoolean(idMkVs, false);
        executeAction(idslct, desc7, DialogModes.NO);

        // =======================================================
        var idsetd = charIDToTypeID("setd");
        var desc53 = new ActionDescriptor();
        var idnull = charIDToTypeID("null");
        var ref38 = new ActionReference();
        var idPrpr = charIDToTypeID("Prpr");
        var idtime = stringIDToTypeID("time");
        ref38.putProperty(idPrpr, idtime);
        var idtimeline = stringIDToTypeID("timeline");
        ref38.putClass(idtimeline);
        desc53.putReference(idnull, ref38);
        var idT = charIDToTypeID("T   ");
        var desc54 = new ActionDescriptor();
        var idseconds = stringIDToTypeID("seconds");
        desc54.putInteger(idseconds, 0);
        var idframe = stringIDToTypeID("frame");
        desc54.putInteger(idframe, 2);
        var idframeRate = stringIDToTypeID("frameRate");
        desc54.putDouble(idframeRate, 24.000000);
        var idtimecode = stringIDToTypeID("timecode");
        desc53.putObject(idT, idtimecode, desc54);
        executeAction(idsetd, desc53, DialogModes.NO);


        // =======================================================
        var idmoveOutTime = stringIDToTypeID("moveOutTime");
        var desc49 = new ActionDescriptor();
        executeAction(idmoveOutTime, desc49, DialogModes.NO);

        // =======================================================
        var idmoveInTime = stringIDToTypeID("moveInTime");
        var desc50 = new ActionDescriptor();
        executeAction(idmoveInTime, desc50, DialogModes.NO);
    // Allows for cancel without feedback message
    } catch(e){
        if (e.toString().indexOf(ErrStrs.USER_CANCELLED)!=-1) {;}
        else{alert(localize("$$$/ScriptingSupport/Error/CommandNotAvailable=The command is currently not available"));}
  }    
};

//=========================================
// AnimD2_newDoc.main
//=========================================
//

AnimD2_newDoc.main = function() {
    AnimD2_newDoc();
};
AnimD2_newDoc.main()
// Issues when no doc is open > activeDocument does not excist yet
// app.activeDocument.suspendHistory(localize(locNewDoc), 'AnimD2_newDoc.main()');

// EOF

"AnimD2_newDoc.jsx"
// EOF

//==================================================================================

// Main entry point
/*main();
function main() {
	// Show alert box
	alert("If the default Document Size (1920x1080) doesn't fit to your need, please change it now with the Image Size (Cmd/Ctrl+Alt+I) or Canvas Size (Cmd/Ctrl+Alt+C) function.", "Document Size", false);
	}
*/
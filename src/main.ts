/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');


// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');

    const userTag = WA.player.tags;

    // If user is admin, name it with a dark blue border
    if(userTag.includes("srm")) {
        WA.player.setOutlineColor(255, 216, 0);
    }
    if(userTag.includes("consultations")) {
        WA.player.setOutlineColor(248, 116, 56);
    }
    if(userTag.includes("soustraitance")) {
        WA.player.setOutlineColor(0, 145, 215);
    }
    if(userTag.includes("consignes")) {
        WA.player.setOutlineColor(121, 122, 127);
    }
    if(userTag.includes("risque")) {
        WA.player.setOutlineColor(17, 17, 17);
    }
    if(userTag.includes("outiller")) {
        WA.player.setOutlineColor(255, 0, 0);
    }
    if(userTag.includes("blueon")) {
        WA.player.setOutlineColor(88, 0, 168);
    }
    if(userTag.includes("carbnone")) {
        WA.player.setOutlineColor(0, 194, 23);
    }
    if(userTag.includes("ia")) {
        WA.player.setOutlineColor(0, 122, 25);
    }




    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));


export {};

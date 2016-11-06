// ==UserScript==
// @name         SpyFall Cheater
// @namespace    http://nikhiljha.com/
// @version      0.2
// @description  Win every game of spyfall, every time.
// @author       Nikhil Jha
// @match        http://spyfall.crabhat.com/*/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var zNode       = document.createElement('div');
    zNode.innerHTML = '<center><button id="myButton" type="button">' + 'Perform Magic</button></center>';
    zNode.setAttribute ('id', 'myContainer');
    document.body.insertBefore(zNode, document.body.firstChild);

    document.getElementById ("myButton").addEventListener (
        "click", ButtonClickAction, false
    );

    function ButtonClickAction (zEvent) {
            Players.find({isSpy: true}).forEach(function (v) { document.getElementsByClassName('status-container')[0].append("The spy is " + v.name); });
            document.getElementsByClassName('status-container')[0].append(" and everyone else is at the " + Games.findOne(Session.get('gameID')).location.name + ".");
    }

})();
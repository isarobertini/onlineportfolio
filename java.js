navigator.xr.addEventListener('sessiongranted', function (evt) {
   // One could check for the type of session granted.
   // Events notifies of session creation after navigation, UA action, or requestSession.
   // The session object is provided as part of this event.
   if (evt.session.mode === 'immersive-vr') {
      // set up app state for immersive vr, if that's what the app wants
   } else {
      // notify user that this app only works in immersive vr mode, if desired
   }
}

var showText = document.querySelector('#hotspotText');
        var textPopover = document.querySelector('#textPopover');
        var gotoAnotherScene = document.querySelector("#sceneHotspot1");
        var scene = document.querySelector("#pano");


        showText.addEventListener('click', function()
        {

          console.log("show text");
          textPopover.setAttribute('visible', 'true');
          cursor.setAttribute('visible', 'false');

        });

        gotoAnotherScene.addEventListener('click', function()
        {

          var currScene = scene.getAttribute('src');

          if (currScene == "#reception")
            {

              console.log("the arrow has clicked");
              scene.setAttribute('src', '#salesroompano');
              gotoAnotherScene.setAttribute('position', '-6 -2 -4');
              gotoAnotherScene.setAttribute('rotation', '-90 45 0');
              showText.setAttribute('visible', 'false');

            }
          else if (currScene == "#salesroompano")
            {

              console.log("the arrow has clicked");
              scene.setAttribute('src', '#reception');
              gotoAnotherScene.setAttribute('position', '2 1 4');
              gotoAnotherScene.setAttribute('rotation', '90 30 0');
              showText.setAttribute('visible', 'true');

            }

        });

       function closeText()
        {
          textPopover.setAttribute('visible', 'false');
          cursor.setAttribute('visible', 'true');
        }

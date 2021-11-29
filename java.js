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

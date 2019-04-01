
// Uses Screen API to detect orientation and return a Boolean of "false" if the device orientation is landscape.  

export default function detectOrientation() {
  console.log("in landscape");
  
  let orntn = window.screen.msOrientation || window.screen.mozOrientation || (window.screen.orientation || {}).type;
  if(orntn === "landscape-primary"){
    return true;
  } else {
    return false
  }
}


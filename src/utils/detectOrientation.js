
// Uses Screen API to detect orientation and return a Boolean of "false" if the device orientation is landscape.  
let history = null;
let landscapeURI = '/landscape', verticalURI = '/';
export default function detectOrientation(props) {
  let orntn = window.screen.msOrientation || window.screen.mozOrientation || (window.screen.orientation || {}).type;

  if(orntn === "landscape-primary"){
    handleLandscapeOrientation(landscapeURI, props);
    // return true;
  } else {
    handleLandscapeOrientation(verticalURI, props);
    // return false;
  }
}

export const orientationListener = (props) => {
  window.addEventListener('orientationchange', ()=>{
    detectOrientation(props);
  })
}

const handleLandscapeOrientation = (URI,props) => {
  console.log(props);
  props.history.push(URI);
}


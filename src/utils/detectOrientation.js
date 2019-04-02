
// Uses Screen API to detect orientation and return a Boolean of "false" if the device orientation is landscape.  

export default function detectOrientation(props) {
  let orntn = window.screen.msOrientation || window.screen.mozOrientation || (window.screen.orientation || {}).type;
  if(orntn === "landscape-primary"){
    console.log('props in detectO >>> ', props);
    orientationListener(props);
    return true;
  } else {
    return false;
  }
}

export const orientationListener = (props) => {
  window.addEventListener('orientationchange', ()=>{
    let isLandscape = detectOrientation();
    handleLandscapeOrientation(isLandscape, props);
  })
}

const handleLandscapeOrientation = (isLandscape, props) => {
  console.log(props);
  props.history.push('/landscape');
}


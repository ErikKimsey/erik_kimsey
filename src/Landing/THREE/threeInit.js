import {Scene} from './Scene';
export const ThreeWrapper = (container) => {

  console.log(container);
  
  createCanvas(document, container);

  function createCanvas(document, container) {
    let tempCanvas = document.createElement('canvas');
    tempCanvas.width = container.width;
    console.log(container.offsetHeight);
    return tempCanvas;
  }

  /**
   * Listeners:
   *  1. resizeCanvas,
   *  2. mouseMove
   */

  function resizeCanvas(){
    console.log('canvas resuze');
  }

  function mouseMove(screenX){
    console.log(`mouseX: ${screenX}`);
  }

  // Set event listeners
  function setEventListeners(){
    window.onresize = resizeCanvas;
    window.onmousemove = mouseMove;
  }

  // Update scene
  function render(){
    requestAnimationFrame(render);
  }

  render();
}

// export default ThreeWrapper;
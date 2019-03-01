import Scene from './Scene';
export default ThreeWrapper = (container) => {


  const canvas = createCanvas(document, container);
  const scene = new Scene({canvas});

  function createCanvas(document, container) {
    let tempCanvas = document.createElement('canvas');
    container.appendChild(tempCanvas);
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
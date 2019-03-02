import {Scene} from './Scene';


export const ThreeWrapper = (container) => {

  console.log(container);
  
  let canvas = createCanvas(document, container);
  let scene = new Scene({canvas});

  function createCanvas(document, container) {
    let tempCanvas = document.createElement('canvas');
    container.appendChild(tempCanvas);
    return tempCanvas;
  }

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
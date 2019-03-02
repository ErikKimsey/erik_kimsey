import * as THREE from 'three';

export const threeInit = () => {

}

export default class Scene {
  constructor(container){
    this.container = container;
    
    this.sceneDimensions = {
      
    }
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
  }
  
  init(){
    console.log(this.container);
  }

  // Instantiates camera
  buildCamera(){}
  
  
  // Instantiates renderer
  buildRenderer(){}
  
  // Instantiates scene
  buildScene(){}
  
  // Instantiates lights
  buildLights(){}

  // Utility function to add items to scene instance
  addToScene(arg){}

  // applying responsive dimensions to canvas
  onWindowResize(){}
  
  // initalize render() and rAF
  animate(){}
  


}
import * as THREE from 'three';

export const threeInit = () => {

}

export default class Scene {
  constructor(container){
    this.container = container;
    this.sceneDimensions = {}
    this.scene = null;
    this.camera = null;
    this.renderer = null;
  }
  
  init(){
    console.log(this.container);
  }

  // Instantiates camera
  buildCamera(){
    this.camera = new THREE.PerspectiveCamera();
  }
  
  // Instantiates renderer
  buildRenderer(){
    this.renderer = new THREE.WebGLRenderer();
  }
  
  // Instantiates scene
  buildScene(){
    this.scene = new THREE.Scene();
  }
  
  // Instantiates lights
  buildLights(){}

  // create scene controls
  buildControls(){}

  // Utility function to add items to scene instance
  addToScene(arg){}

  // applying responsive dimensions to canvas
  onWindowResize(){}
  
  // initalize render() and rAF
  animate(){}
  


}
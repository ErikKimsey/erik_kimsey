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
    this.pointLight = null;
    this.ambientLight = null;
  }
  
  init(){
    console.log(this.container);
  }

  // Instantiates camera
  buildCamera(){
    this.camera = new THREE.PerspectiveCamera(
      45, 
      this.container.offSetWidth / this.container.offsetHeight, 
      0.2, 
      100 );
      this.camera.position( 0, 5, 5 );
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
  buildLights(){
    this.pointLight = new THREE.PointLight(0xff0000, 0.8, 100);
    this.ambientLight = new THREE.AmbientLight(0x404040);
    this.addToScene(this.scene, [this.pointLight, this.ambientLight]);
  }

  // create scene controls
  buildControls(){}

  // Utility function to add items to scene instance
  addToScene(scene, ...toAdd){
    toAdd.forEach(item => scene.add(item));
  }

  // applying responsive dimensions to canvas
  onWindowResize(){}
  
  // initalize render() and rAF
  animate(){}

}
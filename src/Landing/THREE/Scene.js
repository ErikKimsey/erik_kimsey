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
    this.buildCamera();
    this.buildLights();
    let prom = new Promise((res, rej)=>{
      setTimeout(() => {
        res(this.scene = this.buildScene())
      }, 100);
    });
    prom.then(()=>{
      console.log(this.scene.add(this.onWindowResize));
    })
  }

  // Instantiates camera
  buildCamera(){
    this.camera = new THREE.PerspectiveCamera(
      45, 
      this.container.offSetWidth / this.container.offsetHeight, 
      0.2, 
      100 );
      this.camera.position.set( 0, 5, 5 );
  }
  
  // Instantiates renderer
  buildRenderer(){
    this.renderer = new THREE.WebGLRenderer();
  }
  
  // Instantiates scene
  buildScene(){
    return new THREE.Scene();
  }
  
  // Instantiates lights
  buildLights(){
    this.pointLight = new THREE.PointLight(0xff0000, 0.8, 100);
    this.ambientLight = new THREE.AmbientLight(0x404040);
  }

  // create scene controls
  buildControls(){}

  // Utility function to add items to scene instance
  addToScene(scene, ...toAdd){
    toAdd.forEach(item => scene.add(item));
    // console.log(this.scene);
  }

  // applying responsive dimensions to canvas
  onWindowResize(){}
  
  // initalize render() and rAF
  animate(){}

}
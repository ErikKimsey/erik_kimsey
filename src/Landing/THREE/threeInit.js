import * as THREE from 'three';

export const threeInit = () => {

}

export default class Scene {
  constructor(container){
    this.container = container;
    console.log(this.container);
    
    this.sceneDimensions = {

    }
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera();
  }

  init(container){
    console.log('initing');
  }
}
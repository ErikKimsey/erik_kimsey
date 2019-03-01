import * as THREE from 'three';
import { WebGLRenderer } from 'three';


/**
 * class Scene:
 * -- instatiates Three.js scene
 * Args: 
 *  1. reference to div,
 *  2. canvas dimensions,
 *  3. 
 */
export class Scene {
  constructor(...args){
    super();
    this.canvas = args.canvas;
    this.canvasDimensions = {
      w: 0,
      h: 0,
    };
    this.scene;
    this.camera;
    this.renderer;
    this.mesh;
    this.mousePosition = {
      x: 0,
      y: 0,
    };
    this.cameraVals = {
      fov: 75,
      aspect: 0,
      near: 0,
      far: 0,
    }
  }


  setCanvasDimensions(w,h){
    console.log(this.canvas);
  }

  /**
   * A Bunch of Methods:
   * -- init:
   * ---- create Canvas instance, assign it to "args.parent-div"
   * ---- Scene(),
   * ---- Camera(),
   * ---- Renderer(),
   */

  init(){
    this.createCamera();
    this.createScene();
  }

  // create Scene
  createScene(){
    return new THREE.Scene();
  }

  createCamera(){
    this.camera = new THREE.PerspectiveCamera(this.cameraVals.fov,
       this.cameraVals.aspect, 
       this.cameraVals.near, 
       this.cameraVals.far);
    this.camera.position.set( 0, 5, 5 );
  }

  createRenderer(){
    this.renderer = new WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize()
  }


}

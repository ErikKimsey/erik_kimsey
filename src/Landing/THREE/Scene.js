import * as THREE from 'three';


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
    this.canvasDimensions;
    this.scene;
    this.camera;
    this.renderer;
    this.mesh;
    this.mousePosition = {
      x: 0,
      y: 0,
    };
  }


  /**
   * Variables/values defining:
   * canvas dimensions,
   * mouse x/y locations,
   * ...
   */




  /**
   * A Bunch of Methods:
   * -- init:
   * ---- create Canvas instance, assign it to "args.parent-div"
   * ---- Scene(),
   * ---- Camera(),
   * ---- Renderer(),
   */


  // create Scene
  createScene(){
    return new THREE.Scene();
  }

  createCamera(){
    /**
     * 1. isntantiate with (fov, aspect-ratio, near, far)
     * 2. 
     */
    return new THREE.PerspectiveCamera()
  }
  // create Camera
  // create Renderer
  // event methods pertaining to:
  // -- interactivity, 
  // -- canvas resize, 
  // -- update()

}

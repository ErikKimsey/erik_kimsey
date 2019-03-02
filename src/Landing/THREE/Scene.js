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
    this.geometry = null;
    this.material = null;
    this.sphere = null;
  }
  
  init(){
    this.buildScene();
    this.buildCamera();
    this.buildLights();
    this.buildGeometryAndMaterial();
    this.buildRenderer();
    this.animate();
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
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      this.container.appendChild( this.renderer.domElement );
      console.log(this.renderer);
    }
    
    // Instantiates scene
    buildScene(){
      this.scene = new THREE.Scene();
    }
    
    // Instantiates lights
    buildLights(){
      this.pointLight = new THREE.PointLight(0xff0000, 0.8, 100);
      this.ambientLight = new THREE.AmbientLight(0x404040);
      this.scene.add(this.pointLight);
      this.scene.add(this.ambientLight);
    }
    
    // Instantiates and adds geometry to scene
    buildGeometryAndMaterial(){
      this.geometry = new THREE.SphereGeometry(5, 32, 32);
      this.material = new THREE.MeshBasicMaterial( { color: 0xff11ee } );
      this.buildSphere();
    }
    
    buildSphere(){
      this.sphere = new THREE.Mesh( this.geometry, this.material );
      this.scene.add(this.sphere);
    }
    
    
    // create scene controls
    buildControls(){}
    
    // Utility function to add items to scene instance
    // addToScene(scene, ...toAdd){
      //   toAdd.forEach(item => scene.add(item));
      // }
      
      // applying responsive dimensions to canvas
      onWindowResize(){}
      
      // initalize render() and rAF
      animate(){
        requestAnimationFrame(this.animate);
        this.renderIt();
      }
      
      renderIt(){
        // console.log('built sphere >>>> ', this.sphere);
        this.sphere.rotation.y += 0.4;
        this.renderer.render( this.scene, this.camera );
      }

}
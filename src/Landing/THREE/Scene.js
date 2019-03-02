import * as THREE from 'three';

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
    this.buildGeometryAndMaterial();
    this.buildLights();
    this.buildRenderer();
    this.animate();
  }

  // Instantiates camera
  buildCamera(){
    this.camera = new THREE.PerspectiveCamera(
      45, 
      this.container.offSetWidth / (this.container.offSetWidth/2.5), 
      1, 
      1000 );
      this.camera.position.set( 0, 0 ,400 );
      // this.camera.position.z = 1800;

      this.camera.lookAt(this.scene.position);
    }
    
    // Instantiates renderer
    buildRenderer(){
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setPixelRatio( window.devicePixelRatio);
      this.renderer.setSize();
      this.container.appendChild( this.renderer.domElement );
    }
    
    // Instantiates scene
    buildScene(){
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color( 0xaa0aaa );
    }
    
    // Instantiates lights
    buildLights(){
      this.pointLight = new THREE.DirectionalLight(0xff0000);
      this.pointLight.position.set(10,10,11);
      this.scene.add(this.pointLight);
      this.ambientLight = new THREE.AmbientLight(0x404040);
      this.scene.add(this.ambientLight);
    }
    
    // Instantiates and adds geometry to scene
    buildGeometryAndMaterial(){
      this.geometry = new THREE.SphereGeometry(15, 32, 32, 0, 6.3,0,3.1);
      // this.geometry.colors(0xFFFFFF);
      this.material = new THREE.MeshLambertMaterial( {color: 0xffff00} );
      this.buildSphere(this.geometry,this.material);
    }
    
    buildSphere(geo, mat){
      this.sphere = new THREE.Mesh( geo, mat );   
      this.sphere.position.z = 100;   
      this.scene.add(this.sphere);
      console.log(this.sphere);
      
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
    
      
      renderIt(){
        console.log('built sphere >>>> ', this.sphere);
        this.sphere.rotation.y += 0.4;
        this.renderer.render( this.scene, this.camera );
      }
      
      animate(){
        window.requestAnimationFrame(this.animate);
        this.renderIt();
      }

}
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
      this.camera = new THREE.PerspectiveCamera(75, this.container.offSetWidth / (this.container.offSetWidth/2.5), 0.8, 1000);
      this.camera.position.z = 20;
      this.scene.add(this.camera);
    }
    
    // Instantiates renderer
    buildRenderer(){
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setPixelRatio( window.devicePixelRatio);
      this.renderer.setClearColor(0xffffff);
      this.renderer.setSize(this.container.offSetWidth,  (this.container.offSetWidth/2.5));
      this.container.appendChild( this.renderer.domElement );
    }
    
    // Instantiates scene
    buildScene(){
      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color( 0xaa0aaa );
    }
    
    // Instantiates lights
    buildLights(){
      this.ambientLight = new THREE.AmbientLight(0xFFFFFF);
      this.scene.add(this.ambientLight);
      this.pointLight = new THREE.DirectionalLight(0xffffff, 0.9, 1000);
      this.pointLight.position.set(-120, 120, 222);
      this.pointLight.castShadow = false; 
      this.scene.add(this.pointLight);
    }
    
    // Instantiates and adds geometry to scene
    buildGeometryAndMaterial(){
      this.geometry = new THREE.SphereGeometry(3, 5, 60);
      this.material = new THREE.MeshPhongMaterial({ color: 'rgb(0,70,111)'});
      this.sphere = new THREE.Mesh( this.geometry, this.material );   
      this.sphere.position.z = 9;   
      this.scene.add(this.sphere);
      console.log(this.sphere);
    }
    
    // buildSphere(geo, mat){
    //   this.sphere = new THREE.Mesh( geo, mat );   
    //   this.sphere.position.z = 100;   
    //   this.scene.add(this.sphere);
    // }
    
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
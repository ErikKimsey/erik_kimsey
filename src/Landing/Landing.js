import React, { Component } from 'react';
import * as THREE from 'three';
import './landing.scss';
import Scene from './THREE/Scene';

const mouse = new THREE.Vector2();
const radius = 100, theta = 0, raycaster=0;

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount(){
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    this.raycaster = new THREE.Raycaster();
    this.vector2 = new THREE.Vector2();

    

    this.scene = new THREE.Scene();
    this.fogColor = new THREE.Color(0xffffff);
    this.scene.fog = new THREE.Fog(0xffffff, 1, 10);
    this.camera = new THREE.PerspectiveCamera(75, width/height, 0.8, 1000);
    this.camera.position.z = 17;
    this.scene.add(this.camera);

    this.renderer = new THREE.WebGLRenderer({ antialias: true});
    this.renderer.setClearColor(0xffffff);
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    this.light = new THREE.AmbientLight(0xFFFFFF);
    this.scene.add(this.light);

    this.pointLight = new THREE.DirectionalLight(0xffffff, 0.9, 1000);
    this.pointLight.position.set(-120, 120, 222);
    this.pointLight.castShadow = false; 
    this.scene.add(this.pointLight);

    this.spotLight = new THREE.SpotLight(0xFFFFFF);
    this.spotLight.position.set(-20, 20, 100);
    this.spotLight.receiveShadow = true;
    this.spotLight.shadow.mapSize = new THREE.Vector2(1024,1024);
    // this.spotLight.shadow.far = 120;
    // this.spotLight.shadow.near = 6;
    // this.scene.add(this.spotLight);

    this.geometry = new THREE.SphereGeometry(3, 5, 60);
    // this.geometry.position.z = 10;
    this.material = new THREE.MeshPhongMaterial({ color: 'rgba(255,70,111,0.5)'});
    this.sphere = new THREE.Mesh(this.geometry, this.material);
    this.sphere.position.z = 9;
    this.scene.add(this.sphere);

    this.raycaster = new THREE.Raycaster();

    document.addEventListener('mousemove', this.onMouseMove, false);
    this.start();
  }

  componentWillUnmount(){
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start = () => {
    console.log(this.sphere);
    
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop = () => {
    cancelAnimationFrame(this.frameId);
  }

  animate = () => {
    this.sphere.rotation.x += 0.01
    this.sphere.rotation.y += 0.01
    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  }

  onMouseMove = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2-1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    console.log(`${e.clientX}, ${e.clientY}`);
  }
  
  render(){
    return (
      <div
      style={{ width: `${window.innerWidth*0.8}px`, height: `${window.innerHeight-220}px` }}
      ref={(mount) => { this.mount = mount }}
    />
    )
  }
}

export default Landing;
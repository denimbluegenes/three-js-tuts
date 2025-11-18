/* Doggo loves ball!
1. two directional lights with helpers enabled
2. scene background color changed
3. glTF dog model loaded
4. ball position updates with sin curves 
5. dog rotation on sin curve
*/


//~~~~~~~Import Three.js (also linked to as an import map in the HTML)~~~~~~

  const loader = new GLTFLoader();
  loader.load(
    'models/dog_shiny.gltf',   // path to your model file
    (gltf) => {
      const model = gltf.scene;

     
      model.position.set(1.5, -1, 0); // move slightly right & down
      model.scale.set(1.5, 1.5, 1.5); // make bigger if needed

      scene.add(model);
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error);
    }
  );


function animate() {
  requestAnimationFrame(animate);

 
  if (cube) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }

  controls.update();
  renderer.render(scene, camera);
}


init();
animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
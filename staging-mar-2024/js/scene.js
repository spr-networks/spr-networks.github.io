const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
)
const renderer = new THREE.WebGLRenderer({ alpha: true })
renderer.setSize(window.innerWidth, window.innerHeight)

renderer.setPixelRatio(window.devicePixelRatio)
let w = 800,
  h = w / (window.outerWidth / window.outerHeight)
console.log('wh=', w, h)
renderer.setSize(w, h)

const container = document.getElementById('3dcontainer')
container.appendChild(renderer.domElement)


camera.position.z = 0.15

// Create a new point light
const light = new THREE.PointLight(0xffffff, 1, 100)
camera.add(light) // Add the light to the camera's children
light.position.set(0, 0, 2)
//scene.add(light);
scene.add(camera)

function setMaterial(parent, mtl) {
  parent.traverse((o) => {
    if (o.type == 'Mesh' && o.name != null) {
      o.material = mtl
    }
  })
}

let antenna
let gltf
let rpi4
let group


function first_update(){
  if (!antenna || !gltf || !rpi4){
    return
  }
  let new_mtl

  is_vapor = container.classList.contains("vaporwave");

  if (!is_vapor) {
    new_mtl = new THREE.MeshPhongMaterial({
      color: 0x323232,
      shininess: 165
    })
  } else {
    new_mtl = new THREE.MeshNormalMaterial(); // Create a new MeshNormalMaterial
  }

  new_mtl.transparent = true
  new_mtl.opacity = 0.5

  new_mtl.side = THREE.DoubleSide
  setMaterial(gltf.scene, new_mtl)
  setMaterial(antenna.scene, new_mtl)

  let rpi4_mtl;
  if (!is_vapor) {
    rpi4_mtl = new THREE.MeshPhongMaterial({
      color: 0x323232,
      shininess: 165
    })
  } else {
    rpi4_mtl = new THREE.MeshNormalMaterial(); // Create a new MeshNormalMaterial
  }
  //set separate material w/ no transparency for pcb
  setMaterial(rpi4.scene, rpi4_mtl)

  group = new THREE.Group();
  group.add(antenna.scene)

  let x = 0
  let y = 50
  let z = 25
  let x_rot = -Math.PI/8
  group.rotation.set(x_rot, 0, 0)
  antenna.scene.position.set(x, y, z)
  group.position.set(-x, -y, -z)

  gltf.scene.attach(rpi4.scene)

  gltf.scene.attach(group)

  gltf.scene.scale.set(0.002, 0.002, 0.002) // Scale the model down to make it visible
  gltf.scene.position.set(0, 0.05, 0) // Position the model at the center of the scene
  gltf.scene.rotation.set(1.5, 0, 0) // Set the model's rotation
  gltf.scene.visible = true // Make sure the object is visible

  scene.add(gltf.scene)

  let size = 2,
    divisions = 40
  const gridHelper = new THREE.GridHelper(
    size,
    divisions,
    0xe0e0e0,
    0xe0e0e0
  )

  gridHelper.position.y = -0.025

  scene.add(gridHelper)

  const controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)
  controls.update()

}

let x_rot = 0
let x_dir = 1
let x_step = Math.PI/2000

let vapor_enabled = container.classList.contains("vaporwave");


function tick(){
  if (!antenna || !gltf || !rpi4){
    return
  }

  let x = 0
  let y = 50
  let z = 25

  if (x_rot >= 0) {
    x_dir = -1
  }

  if (x_rot < -Math.PI/2) {
    x_dir = 1
  }

  x_rot += x_step * x_dir


  group.rotation.set(x_rot, 0, 0)
  antenna.scene.position.set(x, y, z)
  group.position.set(-x, -y, -z)

  //update material?
  let new_state = container.classList.contains("vaporwave");
  if (new_state != vapor_enabled) {
    let new_mtl, rpi4_mtl;
    vapor_enabled = new_state
    if (new_state == false) {
      new_mtl = new THREE.MeshPhongMaterial({
        color: 0x323232,
        shininess: 165
      })

      rpi4_mtl = new THREE.MeshPhongMaterial({
        color: 0x323232,
        shininess: 165
      })

    } else {
      new_mtl = new THREE.MeshNormalMaterial(); // Create a new MeshNormalMaterial
      rpi4_mtl = new THREE.MeshNormalMaterial(); // Create a new MeshNormalMaterial
    }

    new_mtl.side = THREE.DoubleSide
    new_mtl.transparent = true
    new_mtl.opacity = 0.5

    setMaterial(gltf.scene, new_mtl)
    setMaterial(antenna.scene, new_mtl)
    setMaterial(rpi4.scene, rpi4_mtl)
  }
}

const loader = new THREE.GLTFLoader()
loader.load(
  'models/top.gltf',
  function (in_antenna) {
loader.load(
  'models/rpi4.gltf',
  function (in_rpi4) {
loader.load(
  'models/model.gltf',
  function (in_gltf) {
    console.log('loaded')
    antenna = in_antenna
    gltf = in_gltf
    rpi4 = in_rpi4
    first_update()
  },
  undefined,
  function (error) {
    console.error(error)
  }
)})});

//camera.position.x = 0;
camera.position.y = 0.2
//camera.position.z = 0;

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

setInterval(tick, 10);

animate()

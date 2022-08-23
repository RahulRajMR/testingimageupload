const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');
const fileRemove = document.getElementById("remove-image");
const updateImage=document.querySelector('.update-image');

updateImage.addEventListener('click',function (){
	inputFile.click();
})
selectImage.addEventListener('click', function () {
inputFile.click();

	// img.style.visibility = (visible ? 'visible' : 'hidden');
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 200000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			var testimage = [];
			testimage.push(imgUrl);
			newfunction(testimage);
			// imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
			const box = document.getElementsByClassName('filebox')[0];
			box.style.visibility = 'hidden';
			
			setTimeout(function (){
				alert("change to landscape")
		
			},10)
		
		
		}
		reader.readAsDataURL(image);
	} 
});

function newfunction(arr){
		var panoramasArray = arr;
		var panoramaNumber = Math.floor(Math.random()*panoramasArray.length);
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio( window.devicePixelRatio );
		var elements = document.getElementsByTagName('canvas');
		//console.log(elements.length);
		if(elements.length == 1){
			document.body.removeChild(elements[0]);
		}
		document.body.appendChild(renderer.domElement);

		const updateimage = document.getElementsByClassName('update-image')[0];
		updateimage.style.display = 'block';

		// creating a new scene
		var scene = new THREE.Scene();

		// adding a camera
		var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000); camera.position.z = 1;
		// camera.target = new THREE.Vector3(0, 0, 0);

		// creation of a big sphere geometry
		var sphere = new THREE.SphereGeometry(100, 100, 40);
		sphere.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));

		// creation of the sphere material
		var sphereMaterial = new THREE.MeshBasicMaterial();
		sphereMaterial.map = THREE.ImageUtils.loadTexture(panoramasArray[panoramaNumber])

		// geometry + material = mesh (actual object)
		var sphereMesh = new THREE.Mesh(sphere, sphereMaterial);
		scene.add(sphereMesh);

		const controls = new THREE.OrbitControls(camera, renderer.domElement);
		// controls.maxPolarAngle = Math.PI/2.1;  

			controls.minDistance=20;
			controls.maxDistance=20;
			

		render();
			
		function render(){
			requestAnimationFrame(render);
			// calling again render function
			// controls.update();
			renderer.render(scene, camera);
		}
	//console.log(panoramaNumber);
}


	
	
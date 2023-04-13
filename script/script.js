var container = document.querySelector('#container');
var panorama = new PANOLENS.ImagePanorama('./assets/gambar2.jpg');
var panorama2 = new PANOLENS.ImagePanorama('./assets/gambar3.jpg');
var panorama3 = new PANOLENS.ImagePanorama('./assets/gambar1o.jpg');
var viewer = new PANOLENS.Viewer({ container: container });
var lookAtPositions = [
    new THREE.Vector3(4871.39, 1088.07, -118.41),
    new THREE.Vector3(1278.27, 732.65, 4769.19)
  ];
viewer.add(panorama, panorama2,panorama3);
var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
infospot.addEventListener('enter', function () {
    viewer.tweenControlCenter( lookAtPositions[1], 0 );
});
panorama.link( panorama2, new THREE.Vector3( 0, 0, -5000 )) ;
panorama2.link( panorama3, new THREE.Vector3( 0, 0, -5000 )) ;
panorama3.link(panorama, new THREE.Vector3( 0, 0, -5000 ));

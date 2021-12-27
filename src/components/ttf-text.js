import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

AFRAME.registerComponent('ttf-text', {
    schema: {
        text: { type: 'string', default: 'Happy birthday!' },
        size: { type: 'number', default: 0.5 },
        height: { type: 'number', default: 0.2 },
        color: { type: 'color', default: 'pink' }
    },

    /**
 * Initial creation and setting of the mesh.
 */
    init: function () {
        var data = this.data;
        var el = this.el;


        const text_loader = new TTFLoader();
        text_loader.load("/Poppins-Regular.ttf", data => {
            console.log("loaded", data)
            const font = new FontLoader().parse(data)
            this.geometry = new TextGeometry('Happy Birthday', {
                font: font,
                size: 0.5,
                height: 0.2,
                bevelEnabled: true,
                bevelThickness: 0.2,
                bevelSize: 0.05,

            })
            this.geometry.center()
            this.material = new THREE.MeshStandardMaterial({
                color: data.color,
                metalness: 0.0,
                roughness: 0.5
            })

            this.mesh = new THREE.Mesh(this.geometry, this.material);
            el.setObject3D('mesh', this.mesh);
        })
    }
});
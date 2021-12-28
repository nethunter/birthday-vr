import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

AFRAME.registerComponent('ttf-text', {
    schema: {
        text: { type: 'string', default: 'Happy birthday!' },
        font: { type: 'string', default: '/Poppins-Regular.ttf' },
        size: { type: 'number', default: 0.5 },
        height: { type: 'number', default: 0.2 },
        color: { type: 'color', default: 'pink' },
        bevel: { type: 'boolean', default: false },

    },

    /**
     * Initial creation and setting of the mesh.
     */
    init: function () {
        var data = this.data;
        var el = this.el;

        const text_loader = new TTFLoader();
        text_loader.load(data.font, loaded => {
            const font = new FontLoader().parse(loaded)

            this.geometry = new TextGeometry(data.text, {
                font: font,
                size: data.size,
                height: data.height,
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
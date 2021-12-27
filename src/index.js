require('aframe');
require('aframe-environment-component');
require('aframe-extras');
require('aframe-particle-system-component');
require('super-hands');

AFRAME.registerComponent('music-near-cake', {
    init() {
        this.el.addEventListener('navigation-end', event => {
            if (event.detail.checkpoint.id === 'cake-checkpoint') this.onCakeCheckpoint();
        });
    },
    onCakeCheckpoint() {
        const el = document.querySelector('#cake');
        console.log(el);
        console.log(el.components);
        el.components.sound.playSound();
    }
});

AFRAME.registerComponent('change-color-on-hover', {
    schema: {
      color: {default: '#ceceff'}
    },

    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var defaultColor = el.getAttribute('material').color;

      el.addEventListener('mouseenter', function () {
        el.setAttribute('color', data.color);
      });

      el.addEventListener('mouseleave', function () {
        el.setAttribute('color', defaultColor);
      });
    }
  });

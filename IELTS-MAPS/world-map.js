/**
 * Created by Millie Lin on 08/07/2016.
 */
(function () {
    // Load the world map
    var world = new Datamap({
        element: document.getElementById('world-map-container'),
        scope: 'world',
        responsive: true,

        geographyConfig: {
            highlightFillColor: 'rgb(227, 24, 55)'
        },
        fills: {
            'USA': 'rgb(227, 24, 55)',
            'GBR': 'rgb(227, 24, 55)',
            defaultFill: 'rgba(225,225, 225, 1)'
        },
        data: {
            'USA': {fillKey: 'USA'},
            'GBR': {fillKey: 'GBR'}
        },
        done: function (datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
                if (geography.properties.name === 'United States of America') {
                    window.location = "us.html";
                }
                if (geography.properties.name === 'United Kingdom') {
                    window.location = "uk.html";
                }
            });
            datamap.svg.selectAll('.datamaps-subunit').on('touchstart', function (geography) {
                if (geography.properties.name === 'United States of America') {
                    window.location = "us.html";
                }
                if (geography.properties.name === 'United Kingdom') {
                    window.location = "uk.html";
                }
            });
        }
    });

    // Responsive Map
   window.addEventListener('resize', function() {
        world.resize();
    });

    // check for touch
    if (Modernizr.touch) {

        // run the forEach on each figure element
        [].slice.call(document.querySelectorAll("figure")).forEach(function(el,i){

            // check if the user moves a finger
            var fingerMove = false;
            el.addEventListener("touchmove",function(e){
                e.stopPropagation();
                fingerMove = true;
            });

            // always reset fingerMove to false on touch start
            el.addEventListener("touchstart",function(e){
                e.stopPropagation();
                fingerMove = false;
            });

            // add hover class if figure touchend and fingerMove is false
            el.addEventListener("touchend",function(e){
                e.stopPropagation();
                if (fingerMove == false) {
                    classie.toggle(el,"hover");
                }
            });

        });

    }

})();
/**
 * Created by ux-digital on 04/10/2016.
 */

(function () {
    var legendContainer = new Vue({
        el: "#legend-container",
        data: {
            legendItems: [
                {"id": "1", "color": "c1", "scale": "1-20"}
                , {"id": "2", "color": "c2", "scale": "21-50"}
                , {"id": "3", "color": "c3", "scale": "51-75"}
                , {"id": "4", "color": "c4", "scale": "76-100"}
                , {"id": "5", "color": "c5", "scale": "101-150"}
                , {"id": "6", "color": "c6", "scale": "151-200"}
                , {"id": "7", "color": "c7", "scale": "over 200"}
            ]
        }

    });

// // check for touch
    if (Modernizr.touch) {

        // run the forEach on each figure element
        [].slice.call(document.querySelectorAll("figure")).forEach(function (el) {

            // check if the user moves a finger
            var fingerMove = false;
            el.addEventListener("touchmove", function (e) {
                e.stopPropagation();
                fingerMove = true;
            });

            // always reset fingerMove to false on touch start
            el.addEventListener("touchstart", function (e) {
                e.stopPropagation();
                fingerMove = false;
            });

            // add hover class if figure touchend and fingerMove is false
            el.addEventListener("touchend", function (e) {
                e.stopPropagation();
                if (fingerMove == false) {
                    classie.toggle(el, "hover");
                }
            });

        });

    }

})();
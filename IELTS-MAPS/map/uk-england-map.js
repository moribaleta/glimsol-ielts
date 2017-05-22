/**
 * Created by Millie Lin on 08/07/2016.
 */

/**
 * Tutorial and Reference for UK Map:
 * https://bost.ocks.org/mike/map/
 * http://martinjc.github.io/UK-GeoJSON/
 */

// Map for the United Kingdom
(function () {
    var stateNameParser = document.getElementById('state-name-parser');
    // Load the England map
    var englandMap = new Datamap({
        element: document.getElementById('map-container'),
        scope: 'eer',
        setProjection: function (element, options) {
            var projection = d3.geo.albers()
            .center([0, 55.4])
            .rotate([4.4, 0])
            .parallels([50, 60])
            .scale(4000)
            .translate([element.offsetWidth / 2 - 100, 40]);

            var path = d3.geo.path()
            .projection(projection);

            return {path: path, projection: projection};
        },
        responsive: true,
        geographyConfig: {
            dataUrl: 'http://mysite.com/ielts/maps/uk.england.topo.json',
            highlightFillColor: 'rgb(227, 24, 55)',
            popupTemplate: function (geography, data) {
                /*return '<div class="hoverinfo">' + geography.properties.name +
                ', Number of Universities: ' + data.numberOfUniversities + ' '*/
                var value = geography.properties.name;
                var output = 0;
                for(var i=0; i<states.length;i++){
                    var elem = states[i];
                    elem = elem.split(",");
                    if(elem[0]==value){
                        
                        output = elem[1];
                    }
                }            
                return '<div class="hoverinfo">' + geography.properties.name +
                ', Number of Universities: ' + output + ' '
            }
        },
        // Define the color for states on the map base on the universities numbers
        fills: {
            "c0": 'rgba(225,225, 225, 1)', // Grey: 0
            "c1": '#8DD15A', //green: 1-20
            "c2": '#AD70D1', //purple: 21-50
            "c3": '#FC9651', //orange: 51-75
            "c4": '#8AB3E0', //blue: 76-100
            "c5": '#FF001E', //red: 101-150
            "c6": '#248699', //turquoise: 151-200
            "c7": '#FFCBFD', //pink: over 200
            defaultFill: 'rgba(225,225, 225, 1)'
        },
        data: {
            // TODO: update universities data and fillKey for each region
            // South West
            "SW": {
                "fillKey": "c3",
                "numberOfUniversities": 0
            },
            // South East
            "SE": {
                "fillKey": "c5",
                "numberOfUniversities": 0
            },
            // London
            "LD": {
                "fillKey": "c7",
                "numberOfUniversities": 0
            },
            // Eastern
            "ETN": {
                "fillKey": "c3",
                "numberOfUniversities": 0
            },
            // West Midlands
            "WM": {
                "fillKey": "c3",
                "numberOfUniversities": 0
            },
            // East Midlands
            "EM": {
                "fillKey": "c2",
                "numberOfUniversities": 0
            },
            // Yorkshire and The Humber
            "YTH": {
                "fillKey": "c2",
                "numberOfUniversities": 0
            },
            // North West
            "NW": {
                "fillKey": "c3",
                "numberOfUniversities": 0
            },
            // North East
            "NE": {
                "fillKey": "c1",
                "numberOfUniversities": 0
            }
        },


        done: function (datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
                // Pass the selected state name to state-name-parser input
                if (geography.properties.name != null) {
                    stateNameParser.value = geography.properties.name;
                }
                console.log(geography.properties.name);
            });
            datamap.svg.selectAll('.datamaps-subunit').on('touchstart', function (geography) {
                // Pass the selected state name to state-name-parser input
                if (geography.properties.name != null) {
                    stateNameParser.value = geography.properties.name;
                }

            });
        }
    });

    // Responsive Map
    window.addEventListener('resize', function () {
        englandMap.resize();
    });

})();
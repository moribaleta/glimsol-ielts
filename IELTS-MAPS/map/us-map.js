/**
 * Created by Millie Lin on 08/07/2016.
 */

// Map for the USA
(function () {
    var stateNameParser = document.getElementById('state-name-parser');
    // Load the us map
    var usa = new Datamap({
        element: document.getElementById('usa-map-container'),
        scope: 'usa',
        responsive: true,
        geographyConfig: {
            highlightFillColor: 'rgb(227, 24, 55)',
            popupTemplate: function (geography, data) {
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
            "AL": {
                "fillKey": "c0",
                "state": "Alabama",
                "numberOfUniversities":0
            }
            ,"AK":{
                "fillKey": "c0",
                "state": "Alaska",
                "numberOfUniversities":0
            }
            , "AZ": {
                "fillKey": "c0",
                "state": "Arizona",
                "numberOfUniversities":0
            }
            , "AR": {
                "fillKey": "c0",
                "state": "Arkansas",
                "numberOfUniversities":0
            }
            , "CA": {
                "fillKey": "c0",
                "state": "California",
                "numberOfUniversities":0
            }
            , "CO": {
                "fillKey": "c0",
                "state": "Colorado",
                "numberOfUniversities":0
            }
            , "CT": {
                "fillKey": "c0",
                "state": "Connecticut",
                "numberOfUniversities":0
            }
            , "DE": {
                "fillKey": "c0",
                "state": "Delaware",
                "numberOfUniversities":0
            }
            , "DC": {
                "fillKey": "c0",
                "state": "District of Columbia",
                "numberOfUniversities":0
            }
            , "FL": {
                "fillKey": "c0",
                "state": "Florida",
                "numberOfUniversities":0
            }
            , "GA": {
                "fillKey": "c0",
                "state": "Georgia",
                "numberOfUniversities":0
            }
            , "HI": {
                "fillKey": "c0",
                "state": "Hawaii",
                "numberOfUniversities":0
            }
            , "ID": {
                "fillKey": "c0",
                "state": "Idaho",
                "numberOfUniversities":0
            }
            , "IL": {
                "fillKey": "c0",
                "state": "Illinois",
                "numberOfUniversities":0
            }
            , "IN": {
                "fillKey": "c0",
                "state": "Indiana",
                "numberOfUniversities":0
            }
            , "IA": {
                "fillKey": "c0",
                "state": "Iowa",
                "numberOfUniversities":0
            }
            , "KS": {
                "fillKey": "c0",
                "state": "Kansas",
                "numberOfUniversities":0
            }
            , "KY": {
                "fillKey": "c0",
                "state": "Kentucky",
                "numberOfUniversities":0
            }
            , "LA": {                
                "fillKey": "c0",
                "state": "Louisiana",
                "numberOfUniversities":0
            }
            , "ME": {
                "fillKey": "c0",
                "state": "Maine",
                "numberOfUniversities":0
            }
            , "MD": {
                "fillKey": "c0",
                "state": "Maryland",
                "numberOfUniversities":0
            }
            , "MA": {
                "fillKey": "c0",
                "state": "Massachusetts",
                "numberOfUniversities":0
            }
            , "MI": {
                "fillKey": "c0",
                "state": "Michigan",
                "numberOfUniversities":0
            }
            , "MN": {
                "fillKey": "c0",
                "state": "Minnesota",
                "numberOfUniversities":0
            }
            , "MS": {
                "fillKey": "c0",
                "state": "Mississippi",
                "numberOfUniversities":0
            }
            , "MO": {
                "fillKey": "c0",
                "state": "Missouri",
                "numberOfUniversities":0
            }
            , "MT": {
                "fillKey": "c0",
                "state": "Montana",
                "numberOfUniversities":0
            }
            , "NE": {
                "fillKey": "c0",
                "state": "Nebraska",
                "numberOfUniversities":0
            }
            , "NV": {
                "fillKey": "c0",
                "state": "Nevada",
                "numberOfUniversities":0
            }
            , "NH": {
                "fillKey": "c0",
                "state": "New Hampshire",
                "numberOfUniversities":0
            }
            , "NJ": {
                "fillKey": "c0",
                "state": "New Jersey",
                "numberOfUniversities":0
            }
            , "NM": {
                "fillKey": "c0",
                "state": "New Mexico",
                "numberOfUniversities":0
            }
            , "NY": {
                "fillKey": "c0",
                "state": "New York",
                "numberOfUniversities":0
            }
            , "NC": {
                "fillKey": "c0",
                "state": "North Carolina",
                "numberOfUniversities":0
            }
            , "ND": {
                "fillKey": "c0",
                "state": "North Dakota",
                "numberOfUniversities":0
            }
            , "OH": {
                "fillKey": "c0",
                "state": "Ohio",
                "numberOfUniversities":0
            }
            , "OK": {
                "fillKey": "c0",
                "state": "Oklahoma",
                "numberOfUniversities":0
            }
            , "OR": {
                "fillKey": "c0",
                "state": "Oregon",
                "numberOfUniversities":0
            }
            , "PA": {
                "fillKey": "c0",
                "state": "Pennsylvania",
                "numberOfUniversities":0
            }
            , "RI": {
                "fillKey": "c0",
                "state": "Rhode Island",
                "numberOfUniversities":0
            }
            , "SC": {
                "fillKey": "c0",
                "state": "South Carolina",
                "numberOfUniversities":0
            }
            , "SD": {
                "fillKey": "c0",
                "state": "South Dakota",
                "numberOfUniversities":0
            }
            , "TN": {
                "fillKey": "c0",
                "state": "Tennessee",
                "numberOfUniversities":0
            }
            , "TX": {
                "fillKey": "c0",
                "state": "Texas",
                "numberOfUniversities":0
            }
            , "UT": {
                "fillKey": "c0",
                "state": "Utah",
                "numberOfUniversities":0
            }
            , "VT": {
                "fillKey": "c0",
                "state": "Vermont",
                "numberOfUniversities":0
            }
            , "VA": {
                "fillKey": "c0",
                "state": "Virginia",
                "numberOfUniversities":0
            }
            , "WA": {
                "fillKey": "c0",
                "state": "Washington",
                "numberOfUniversities":0
            }
            , "WV": {
                "fillKey": "c0",
                "state": "West Virginia",
                "numberOfUniversities":0
            }
            , "WI": {
                "fillKey": "c0",
                "state": "Wisconsin",
                "numberOfUniversities":0
            }
            , "WY": {
                "fillKey": "c0",
                "state": "Wyoming",
                "numberOfUniversities":0
            }

        },

        done: function (datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
                // Pass the selected state name to state-name-parser input
                if (geography.properties.name != null) {
                    stateNameParser.value = geography.properties.name;
                }

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
        usa.resize();
    });

     window.addEventListener('load',function(){
        updateDatamapColor();
        console.log("finished loading");
    });

    function updateDatamapColor(){
        var stateUnits = document.getElementsByClassName('datamaps-subunit');
        for(var i = 0; i<stateUnits.length; i++){
            var data_info = stateUnits[i].getAttribute("data-info");
            console.log('datamap: '+data_info);
            data_info = data_info.split(",");
            var stateName = data_info[1].split(":");
            stateUnits[i].style.fill = getColorState(stateName[1]);
        }
    }

    function getColorState(stateName){
        stateName = stateName.slice(1,stateName.length-1);
        for(var i = 0; i<states.length; i++){
            var data = states[i].split(",");
            //console.log("changing "+stateName+" to "+data[0]);
            if(stateName == data[0]){
                var color = getColor(data[1]);
                console.log("changing "+stateName+" to "+color+" by "+data[1]);
                return color;
            }
        }
    }

    function getColor(size){
        if(size==0){
            return "rgba(225,225, 225, 1)";
        }else if(size>=1&&size<=20){
            return "#8DD15A";
        }else if(size>=21&&size<=50){
            return "#AD70D1";
        }else if(size>=51&&size<=75){
            return "#FC9651";
        }else if(size>=76&&size<=100){
            return "#8AB3E0";
        }else if(size>=101&&size<=150){
            return "#FF001E";
        }else if(size>=151&&size<=200){
            return "#248699";
        }else{
            return "#FFCBFD";
        }

    }



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

/*
function updateDatamapColor(){

    var stateUnits = document.getElementsByClassName('datamaps-subunit');
    for(var i = 0; i<stateUnits.length; i++){
        var data_info = stateUnits[i].getAttribute("data-info");
        console.log('datamap: '+data_info);
        data_info = data_info.split(",");
        var stateName = data_info[1].split(":");
        stateUnits[i].style.fill = getColorState(stateName[1]);
    }
}

function getColorState(stateName){
    stateName = stateName.slice(1,stateName.length-1);
    for(var i = 0; i<states.length; i++){
        var data = states[i].split(",");
        console.log("changing "+stateName+" to "+data[0]);
        if(stateName == data[0]){
            var color = getColor(data[1]);
            console.log("changing "+stateName+" to "+color+" by "+data[1]);
            return color;
        }
    }
}

function getColor(size){
    if(size==0){
        return "rgba(225,225, 225, 1)";
    }else if(size>=1&&size<=20){
        return "#8DD15A";
    }else if(size>=21&&size<=50){
        return "#AD70D1";
    }else if(size>=51&&size<=75){
        return "#FC9651";
    }else if(size>=76&&size<=100){
        return "#8AB3E0";
    }else if(size>=101&&size<=150){
        return "#FF001E";
    }else if(size>=151&&size<=200){
        return "#248699";
    }else{
        return "#FFCBFD";
    }
/*
                 "c0": 'rgba(225,225, 225, 1)', // Grey: 0
            "c1": '#8DD15A', //green: 1-20
            "c2": '#AD70D1', //purple: 21-50
            "c3": '#FC9651', //orange: 51-75
            "c4": '#8AB3E0', //blue: 76-100
            "c5": '#FF001E', //red: 101-150
            "c6": '#248699', //turquoise: 151-200
            "c7": '#FFCBFD', //pink: over 200*/
       /* }

        document.onreadystatechange = function () {
            updateDatamapColor();
            console.log("ready");
        };*/
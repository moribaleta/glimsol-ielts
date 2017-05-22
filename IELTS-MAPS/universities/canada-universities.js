/**
 * Created by ux-digital on 04/10/2016.
 */

// Load universities data in Canada
//var dataURL = '/data/canada-universities.json';
var dataURL = 'http://mysite.com/ielts/partner-search/ielts-results/Canada';
var states = [];
var universities = new Vue({
    el: "#map-wrapper",
    data: {
        universities: null
        , selectedStateName: null
        , showModal: true
    },
    methods: {
        fetchData: function () {
            this.$http.get(dataURL).then(function (response) {
                // Success
                this.universities = response.data;                
                var arr_json = this.universities;
                console.log("object: %O", arr_json);
                for(var key in arr_json){
                    states.push(arr_json[key]['stateName']+","+arr_json[key]['universities'].length);
                    //states.push(arr_json[key]['stateName']+","+arr_json[key]['stateId']+","+20);
                    console.log("adding states: "+arr_json[key]['stateName']+",size: " +arr_json[key]['universities'].length);
                }
                updateDatamapColor();
            }, function (response) {
                console.log('fetchdata() fail');
                fetchData();
                // Failed
            });
        },
        parseValue: function () {
            if (document.getElementById('state-name-parser').value != null) {
                this.showModal = true;
                this.selectedStateName = document.getElementById('state-name-parser').value;
                console.log("selected state: "+ this.selectedStateName);
            }
        },
        resetData: function () {
            this.selectedStateName = null
        },
        closeModal: function () {
            this.showModal = false;
            setTimeout(this.resetData, 1000);
        }
    }
});

universities.fetchData();

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
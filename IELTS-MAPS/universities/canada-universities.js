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
            }, function (response) {
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


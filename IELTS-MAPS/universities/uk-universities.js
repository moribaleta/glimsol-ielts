/**
 * Created by ux-digital on 04/10/2016.
 */

// Load universities data in the United States
var dataURL = 'http://mysite.com/ielts/data/uk-universities.json';
//var dataURL = 'http://mysite.com/ielts/partner-search/ielts-results/';

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
            }, function (response) {
                // Failed
            });
        },
        parseValue: function () {
            if (document.getElementById('state-name-parser').value != null) {
                this.showModal = true;
                this.selectedStateName = document.getElementById('state-name-parser').value;
                // console.log("selected state: "+ this.selectedStateName);
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
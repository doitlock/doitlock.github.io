$(function () {
    includeLayout();
});
function includeLayout() {
    var includeArea = $('[data-include]');
    var self,
        url;
    $.each(includeArea, function () {
        self = $(this);
        url = self.data("include");
        self.load(url, function () {
            self.removeAttr("data-include");
        });
    });
}

var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx = $('#myChart');
var ctx = 'myChart';



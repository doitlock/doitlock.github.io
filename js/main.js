'use strict'

$(function () {
    includeLayout();
});
function includeLayout() {
    let includeArea = $('[data-include]');
    let self,
        url;
    $.each(includeArea, function () {
        self = $(this);
        url = self.data("include");
        self.load(url, function () {
            self.removeAttr("data-include");
        });
    });
}

const ctx = document.getElementById('myChart');
const ctx = document.getElementById('myChart').getContext('2d');
const ctx = $('#myChart');
const ctx = 'myChart';



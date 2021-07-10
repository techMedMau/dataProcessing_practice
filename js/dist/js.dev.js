"use strict";

function getData() {
  var api = './index.json';
  fetch(api).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    build(data);
  });
}

getData();

function build(data) {
  var dataStr = '';
  var table = document.querySelector('.table');
  var timeStr = "".concat(data[0].Date.substring(0, 4), "/").concat(data[0].Date.substring(4, 6), "/").concat(data[0].Date.substring(6, 8));
  document.querySelector('.date').textContent = timeStr;
  data.forEach(function (item) {
    if (item.CF > 0) {
      dataStr += "<tr class=\"row\">\n        <td class=\"name\">".concat(item.CommName, "</td>\n        <td class=\"closePr\">").concat(item.ClosePr, "</td>\n        <td class=\"cf red\">").concat(item.CF, "</td>\n        <td class=\"percent red\">").concat(item.CFPercent, "</td>\n        <td class=\"sale\">").concat((item.SalePrice / 100000).toFixed(1), "</td>\n      </tr>");
    } else {
      dataStr += "<tr class=\"row\">\n            <td class=\"name\">".concat(item.CommName, "</td>\n            <td class=\"closePr\">").concat(item.ClosePr, "</td>\n            <td class=\"cf green\">").concat(item.CF, "</td>\n            <td class=\"percent green\">").concat(item.CFPercent, "</td>\n            <td class=\"sale\">").concat((item.SalePrice / 100000).toFixed(1), "</td>\n          </tr>");
    }
  });
  table.innerHTML += dataStr;
}
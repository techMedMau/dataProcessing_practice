function getData() {
    const api = './index.json';
    fetch(api)
        .then(resp => resp.json())
        .then(data => { build(data); });

}
getData();

function build(data) {
    let dataStr = '';
    const table = document.querySelector('.table');
    let timeStr = `${data[0].Date.substring(0, 4)}/${data[0].Date.substring(4, 6)}/${data[0].Date.substring(6, 8)}`;
    document.querySelector('.date').textContent = timeStr;
    data.forEach(item => {
        if (item.CF > 0) {

            dataStr += `<tr class="row">
        <td class="name">${item.CommName}</td>
        <td class="closePr">${item.ClosePr}</td>
        <td class="cf red">${item.CF}</td>
        <td class="percent red">${item.CFPercent}</td>
        <td class="sale">${(item.SalePrice / 100000).toFixed(1)}</td>
      </tr>`;

        } else {

            dataStr += `<tr class="row">
            <td class="name">${item.CommName}</td>
            <td class="closePr">${item.ClosePr}</td>
            <td class="cf green">${item.CF}</td>
            <td class="percent green">${item.CFPercent}</td>
            <td class="sale">${(item.SalePrice / 100000).toFixed(1)}</td>
          </tr>`;
        }
    });
    table.innerHTML += dataStr;

}




var delky_premi = []
var delky_data = []

delky.forEach(function(d) {
    delky_premi.push(d.rok + ' ' + d.jmeno)
    delky_data.push({'y': d.pocetslov, 'color': timeCols[d.obdobi]})
});

Highcharts.chart('delka', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Délky programových prohlášení'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: delky_premi,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Počet slov'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        headerFormat: '<span style="font-size:16px">{point.key}</span><table>',
        pointFormat: '<tr><td style=";padding:0">Délka: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} slov</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        data: delky_data
    }]
});
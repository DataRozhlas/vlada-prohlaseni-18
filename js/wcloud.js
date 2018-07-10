function drawChart(vl) {
    Highcharts.chart(vl, {
        chart: {
            width: 400,
        },
        credits: {
            enabled: false
        },
        tooltip: {
            style: {
                fontSize: '16px'
            },
            formatter: function () {
                return '<span style="text-align: center;">Sousloví <b>' + this.point.name +
                    '</b><br> se objevilo <b>' + this.point.weight + 'krát</b></span>';
            }
        },
        colors: [timeCols[meta[vl]['obd']]],
        series: [
            {
                rotation: {
                    from: 0,
                    to: 0
            },
            maxFontSize: 15,
            minFontSize: 1,
            type: 'wordcloud',
            data: vlady[vl].slice(0,15),
        }],
        title: {
            text: '<a href="javascript:window.open(\'' + meta[vl]['url'] + '\', \'\_blank\'\);">' + vl + '</b>'
        },
        subtitle: { 
            text: meta[vl]['obd'] ,
            style: {
                color: timeCols[meta[vl]['obd']],
                fontSize: '15px'
            }
        }
    });
};
Object.keys(vlady).reverse().forEach(function(vl) {
    document.getElementById('charts').innerHTML += '<div class="cloud" id="' + vl + '"></div>'
});
Object.keys(vlady).forEach(function(vl) {
    drawChart(vl)
});
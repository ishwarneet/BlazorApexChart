let chartInstance = null;
function drawChart() {
    // Function to draw chart with some data initialized
    chartInstance = null;
    var options = {
        chart: {
            type: 'line',
            height: 350
        },
        series: [{
            name: 'Sales',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    };

    // Ensure the element exists before initializing ApexChart
    var chartElement = document.querySelector("#chart1");
    if (chartElement) {
        chartInstance = new ApexCharts(chartElement, options);
        chartInstance.render();
    } else {
        console.error("Chart element not found.");
    }
}

function emptyChart() {
    // Function to display an empty chart with no data
    chartInstance = null;
    var options = {
        chart: {
            type: 'line',
            height: 350
        },
        series: [{
            name: 'No Data',
            data: []
        }],
        xaxis: {
            categories: []
        },
        noData: { // Displayed when no-data is available
            text: 'No Data Available',
            align: 'center',
            verticalAlign: 'middle',
            offsetX: 0,
            offsetY: 0,
            style: {
                color: '#888',
                fontSize: '14px'
            }
        }
    };

    var chartElement = document.querySelector("#chart1");
    if (chartElement) {
        chartInstance = new ApexCharts(chartElement, options);
        chartInstance.render();
    } else {
        console.error("Chart element not found.");
    }
}

function generateChartWithRandomData() {
    // Function to update existing charts with randomly generated data
    const data = getRandomData(9, 0, 200);
    chartInstance.updateSeries([{ name: 'Sales', data: data }]);
    chartInstance.updateOptions({
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        }
    });
}

function getRandomData(length, min, max) {
    // Function to generate random data
    return Array.from({ length }, () => getRandomNumber(min, max));
}

function getRandomNumber(min, max) {
    // Function to generate random numbers
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

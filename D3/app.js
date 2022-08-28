d3.select('body > div.app')
    .selectAll('p')
    .data([1, 2, 3])
    .enter()
    .append('p')
    .text(dta => dta + ' paragraph');

let ps = d3.select("body > div.scenario > p").data([4, 8, 15, 16, 23, 42]);
console.log(ps);
ps = ps.enter().append("p");
console.log(ps);
ps.text(function (d) { return "I’m number " + d + "!"; });
console.log(ps);

const paragraphs = d3.selectAll("p");
paragraphs.style("color", function () {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});

// DUMMY DATA CHART

DUMMY_DATA = [
    { "id": 1, "name": "Germany", "value": 8940000 },
    { "id": 2, "name": "USA", "value": 5000000 },
    { "id": 3, "name": "France", "value": 7200000 }
];

let chart = d3.select('body > div.chart')
chart.selectAll('div').data(DUMMY_DATA)
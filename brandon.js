
// function get data 
function getData() {
  var dropdown = d3.select("#selectData");
  var dataset = dropdown.property("value");
  buildcharts(dataset)

}
// event lister
d3.selectAll("#selectData").on("change", getData);

// initial page (Home page)
// FUNCTION 1, set init() for dashboard and do dropdown button
function buildcharts(dataset) {

  // function tracie(BankValue) {

  console.log(dataset)


  d3.json(dataset).then((data) => {
    // console.log(data)
    // console.log(data[0].Name)

    let bankname = data.map(x => x.Name)
    console.log(bankname)

    let close_price = data.map(y => y.close)
    console.log(close_price)

    let banktime = data.map(z => z.date)
    console.log(banktime)

    let bankvolumes = data.map(b => b.volume)
    console.log(bankvolumes)

    let bubblebankvolumes = data.map(b => b.volume / 1000000)
    console.log(bubblebankvolumes)

    var trace1 = {
      x: banktime,
      y: close_price,
      text: bankname,
      type: "scatter",
      marker: { color: "red" }
    }

    var data = [trace1]

    var layout = {
      title: `${bankname[0]} Time Series Plot`,
      xaxis: { title: "Observed time (one-year 2018)" },
      yaxis: { title: "Close Prices" }
    }

    Plotly.newPlot("line", data, layout)


    // create a trace for BUBBLE chart: 


    var bank_bub_values = [{
      x: banktime,
      y: bankvolumes,
      text: bankvolumes,
      mode: "markers",
      marker: {
        color: bankvolumes,
        size: bubblebankvolumes,
        colorscale: "Earth"
      }
    }]

    // Define bubble layout format:   
    var bank_bub_layout = {
      title: `${bankname[0]} Bubble Plot`,
      xaxis: { title: "Bank stocks" },
      yaxis: { title: "Volume" }
    }

    Plotly.newPlot("bubble", bank_bub_values, bank_bub_layout);
    // Data not available pass this line 
  });
}

function init() {
  buildcharts("resources/bank30.json");

}
init();


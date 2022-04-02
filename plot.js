
// initial page (Home page)
// FUNCTION 1, set init() for dashboard and do dropdown button
function init() {

  // select dropdown menu 
  var dropdown = d3.select("navbardrop");
  
  // read the data 
  d3.json("finance.json").then((data)=> {
    console.log(data)
  
    // get the id data to the dropdwown menu
    data.names.forEach(function(name) {
        dropdown.append("option").text(name).property("value",name);
    });
    getPriceInfo("Finance")
    tracie("Finance")
  });
  }
  
  init();
  
  // Function 4, to get the necessary data for demographic box
  
  function getPriceInfo(id) {
  
    // read the json file to get data
        d3.json("finance.json").then((data)=> {
  
    // get the metadata info for the demographic panel
          var closeprice = data.close;
          console.log(closeprice)
    
          // filter meta data info by stockname | filter function return array of values (for loop in js)
          var prices = closeprice.filter(meta => meta.id.toString() === id)[0];
  
          // select demographic panel to put data
          var porfolioInfo = d3.select("#sample-metadata");
            
         // empty the box info panel each time before getting new stock info
          porfolioInfo.html("");
    
         // grab the necessary porfolio data for the box and append the info to the panel
         // `$...` is similar to f string in python,

          Object.entries(result).forEach(([key,value]) => {
            porfolioInfo.append("h5").text(`${key.toUpperCase()} : ${value}`);    
            });
        });
    }
  
    // FUNCTION 3, use function to do the change event
  //(user click and change the id with appropriate content box)
  
  function optionChanged(id) {
    getPriceInfo(id);
    tracie(id);
  }
  
  // Find the values for charts
  // Create the 1st function to get data set out and use further:
  // & use d3 to call the data from json file and put them in a place we name "data" to use further
  
  // Function 5: to get id, sample_values, otu_ids, otu_labels of TOP 10
  
  function tracie(StockValue) {
    // var selector = d3.select("#selDataset");
      d3.json("bank.json").then((data) => {
        // console.log(data)
  
        var closeprices = data.close
        console.log(closeprices)
  
        var volumes = data.volume
        console.log(volumes)

        var timeseries = data.date
        
        var filteredprice = closeprice.filter(priceObj => priceObj.close == StockValue)[1]
  
        var filteredvolumes = volumes.filter(volumeObj => volumeObj.id == StockValue)[1]
  
     
        var otu_id = filteredSample.otu_ids;
        console.log(otu_id)
        
        var otu_labels = filteredSample.otu_labels;
        console.log(otu_labels)
        
        var sample_value = filteredSample.sample_values;
        console.log(sample_value)
  
        var yvalue = otu_id.slice(0,10).map(otu_id=> `OTU ${otu_id}`).reverse()
  
      // now create BAR CHART with above 3 arrays
      // Create a function for plotting first: 
      
  // create a Trace for plotting:
        var bar_values = [{
            x : sample_value.slice(0,10).reverse(),
            y : yvalue,
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
            marker: {color: "lightsalmon"},
        }]
        
      // define the bar layout format: 
        var bar_format = {
            title: "Top 10 Microbial Species in Belly Button",
            // xaxis: "Bacteria Sample Values",
            // yaxis: "OTU IDs"
        }
        
        Plotly.newPlot("bar", bar_values, bar_format)
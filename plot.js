
// initial page (Home page)
// FUNCTION 1, set init() for dashboard and do dropdown button
// function init() {

//   // select dropdown menu 
//   var dropdown = d3.select("navbardrop");
  
//   // read the data 
//   d3.json("finance.json").then((data)=> {
//     console.log(data)
  
//     // get the stockname data to the dropdwown menu
//     data.names.forEach(function(name) {
//         dropdown.append("option").text(name).property("value",name);
//     });
//     getPriceInfo("Finance")
//     tracie("Finance")
//   });
//   }
  
//   init();
  
  // Function 4, to get the necessary data for demographic box
  
  function getPriceInfo(id) {
  
    // read the json file to get data
        d3.json("bank.json").then((data)=> {
  
    // get the metadata info for the demographic panel
          var closeprice = data.close;
          console.log(closeprice)
    
          // filter meta data info by stockname | filter function return array of values (for loop in js)
          var prices = closeprice.filter(meta => meta.id.toString() === id)[0];
  
          // select demographic panel to put data
          // var porfolioInfo = d3.select("#sample-metadata");
            
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
  
//Function for Bank industry: 
  
  function tracie(BankValue) {
    // var selector = d3.select("#selDataset");
      d3.json("bank.json").then((databank) => {
        // console.log(data)
  
        var bankprices = databank.close
        console.log(bankprices)
  
        var bankvolumes = databank.volume
        console.log(bankvolumes)

        var banktimedate = databank.date

        var bankname = databank.Name
        
        // var filteredprice = closeprice.filter(priceObj => priceObj.close == StockValue)[1]
  
        // var filteredvolumes = volumes.filter(volumeObj => volumeObj.id == StockValue)[1]
     
  // create a Trace for plotting:

        var bank_line_values = [{
            x : banktimedate,
            y : bankprices,
            text: bankname,
            type: "line",
            marker: {color: "red"},
        }]
        
      // define the bar layout format: 
        var bank_line_format = {
            title: "15 Stocks Trends in Banking Industry",
            xaxis: "Timeseries (one-year 2018)",
            yaxis: "Close Prices"
        }
        
        Plotly.newPlot("line", bank_line_values, bank_line_format)

  // create a trace for BUBBLE chart: 

        var bubble_values = [{
          x: otu_id,
          y: sample_value,
          text: otu_labels,
          mode: "markers",
          marker: {
              color: otu_id,
              size: sample_value,
              colorscale: "continent"
        }
      }]

        // Define bubble layout format:   
        var layout = {
          title: "Belly Button Samples",
          xaxis: {title: "OTU IDs"},
          yaxis: {title: "Sample Values"}
        }

        Plotly.newPlot("bubble", bubble_values, layout)

// Function for tech industry:

  function Luan(TechStocks)
      d3.json("tech.json").then((datatech) => {
        // console.log(data)

        var techprices = datatech.close
        console.log(techprices)

        var techvolumes = datatech.volume
        console.log(techvolumes)

        var techtimedate = datatech.date

        var techname = datatech.Name

        // create a Trace for plotting:
        var tech_line_values = [{
          x : techtimedate,
          y : techprices,
          text: techname,
          type: "line",
          marker: {color: "green"},
      }]
      
    // define the bar layout format: 
      var tech_line_format = {
          title: "7 Stocks Trends in Technology Industry",
          xaxis: "Timeseries (one-year 2018)",
          yaxis: "Close Prices"
      }
      
      Plotly.newPlot("line", tech_line_values, tech_line_format)

//Function for Pharmaceutical industry:
      
  function James(PharmValue) {
        // var selector = d3.select("#selDataset");
          d3.json("pharm.json").then((datapharm) => {
  
      // create a Trace for plotting:
      var pharm_line_values = [{
        x : pharmtimedate,
        y : pharmprices,
        text: pharmname,
        type: "line",
        marker: {color: "blue"},
    }]
    
  // define the bar layout format: 
    var pharm_line_format = {
        title: "7 Stocks Trends in Pharmaceutical Industry",
        xaxis: "Timeseries (one-year 2018)",
        yaxis: "Close Prices"
    }
    
    Plotly.newPlot("line", pharm_line_values, pharm_line_format)
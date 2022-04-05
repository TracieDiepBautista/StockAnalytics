
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  console.log(selector);

  // Use the list of sample names to populate the select options
  d3.json("bank.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
          selector
              .append("option")
              .text(sample)
              .property("value", sample);
      });
      // Use the first sample from the list to build the initial plots
      var firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();
  
  // Function 4, to get the necessary data for demographic box
  
  function getPriceInfo(Name) {
  
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
  
  function optionChanged(Name) {
    getPriceInfo(Name);
    tracie(Name);
  }
  
  // Find the values for charts
  // Create the 1st function to get data set out and use further:
  // & use d3 to call the data from json file and put them in a place we name "data" to use further
  
//Function for Bank industry: 
  
  function tracie(BankValue) {
    // var selector = d3.select("#selDataset");
      d3.json("bank.json").then((databank) => {
        console.log(data)
  
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

        var bank_bub_values = [{
          x: bankname,
          y: bankvolumes,
          text: bankvolumes,
          mode: "markers",
          marker: {
              color: bankname,
              size: bankvolumes,
              colorscale: "continent"
        }
      }]

        // Define bubble layout format:   
        var bank_bub_layout = {
          title: "15 Stocks volumes in Banking Industry",
          xaxis: {title: "Bank stocks"},
          yaxis: {title: "Volume"}
        }

        Plotly.newPlot("bubble", bank_bub_values, bank_bub_layout);


// Function for tech industry:

  // function Luan(TechStocks)
  //     d3.json("tech.json").then((datatech) => {
  //       // console.log(data)

  //       var techprices = datatech.close
  //       console.log(techprices)

  //       var techvolumes = datatech.volume
  //       console.log(techvolumes)

  //       var techtimedate = datatech.date

  //       var techname = datatech.Name

  //       // create a Trace for plotting:
  //       var tech_line_values = [{
  //         x : techtimedate,
  //         y : techprices,
  //         text: techname,
  //         type: "line",
  //         marker: {color: "green"},
  //     }]
      
  //   // define the bar layout format: 
  //     var tech_line_format = {
  //         title: "7 Stocks Trends in Technology Industry",
  //         xaxis: "Timeseries (one-year 2018)",
  //         yaxis: "Close Prices"
  //     }
      
  //     Plotly.newPlot("line", tech_line_values, tech_line_format)
  // // create a trace for BUBBLE chart: 

  //       var tech_bub_values = [{
  //         x: techname,
  //         y: techvolumes,
  //         text: techvolumes,
  //         mode: "markers",
  //         marker: {
  //             color: techname,
  //             size: techvolumes,
  //             colorscale: "continent"
  //       }
  //     }]

  //       // Define bubble layout format:   
  //       var tech_bub_layout = {
  //         title: "15 Stocks volumes in technology Industry",
  //         xaxis: {title: "technology stocks"},
  //         yaxis: {title: "Volume"}
  //       }

  //       Plotly.newPlot("bubble", tech_bub_values, tech_bub_layout);
  //     })
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

      // create a trace for BUBBLE chart: 

      var pharm_bub_values = [{
        x: pharmname,
        y: pharmvolumes,
        text: pharmvolumes,
        mode: "markers",
        marker: {
            color:pharmname,
            size: pharmvolumes,
            colorscale: "continent"
      }
    }]

      // Define bubble layout format:   
      var pharm_bub_layout = {
        title: "15 Stocks volumes in pharmaceutical Industry",
        xaxis: {title: "pharmaceutical stocks"},
        yaxis: {title: "Volume"}
      }

      Plotly.newPlot("bubble", pharm_bub_values, pharm_bub_layout);
    })
  }
      })};
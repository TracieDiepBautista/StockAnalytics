
// initial page (Home page)
// FUNCTION 1, set init() for dashboard and do dropdown button
//  function init() {

//   //   // select dropdown menu 
//     var dropdown = d3.select("#selectData");
    
  //   // read the data 

  // function tracie(BankValue) {

     d3.json("resources/bank30.json").then((data)=> {
      // console.log(data)
      // console.log(data[0].Name)

      let bankname = data.map(x => x.Name)
      console.log(bankname)

      let close_price = data.map(y => y.close)
      console.log(close_price)

      let banktime = data.map(z => z.date)
      console.log(banktime)

      // var bank_price = close_price.filter(priceObj => priceObj.close == BankValue)
      // console.log(bank_price)

    // get the stockname data to the dropdwown menu
      //  data.names.forEach(function(Name) {
      //    dropdown.append("option").text(Name).property("value",Name);
      //  });
      //  getPriceInfo("Name")
      //  tracie("Name")
      //   });

      // init();
      
      // Function 4, to get the necessary data for demographic box
      
      // function getPriceInfo(Name) {
      
      //   // read the json file to get data
      //       d3.json("bank.json").then((data)=> {
      
      //   // get the metadata info for the demographic panel
      //         var closeprice = data.close;
      //         console.log(closeprice)
        
      //         // filter meta data info by stockname | filter function return array of values (for loop in js)
      //         var prices = closeprice.filter(meta => meta.id.toString() === id)[0];
      
      //         // select demographic panel to put data
      //         // var porfolioInfo = d3.select("#sample-metadata");
                
      //        // empty the box info panel each time before getting new stock info
      //         porfolioInfo.html("");
        
      //        // grab the necessary porfolio data for the box and append the info to the panel
      //        // `$...` is similar to f string in python,
    
      //         Object.entries(result).forEach(([key,value]) => {
      //           porfolioInfo.append("h5").text(`${key.toUpperCase()} : ${value}`);    
      //           });
      //       });
      //   }
      
    //     // FUNCTION 3, use function to do the change event
    //   //(user click and change the id with appropriate content box)
      
      // function optionChanged(Name) {
      //   getPriceInfo(Name);
      //   tracie(Name);
      // }
      
      // Find the values for charts
      // Create the 1st function to get data set out and use further:
      // & use d3 to call the data from json file and put them in a place we name "data" to use further
      
    //Function for Bank industry: 
    
         
      // create a Trace for plotting:
    
      var trace1 = {
          x : banktime,
          y : close_price,
          text: bankname,
           type: "scatter",
           marker: {color: "red"}
      }
           
      var data = [trace1]
    // define the bar layout format: 
      var layout = {
          title: "03 Stocks Trends in Banking Industry",
          xaxis: {title: "Observed time (one-year 2018)"},
          yaxis: {title: "Close Prices"}
      }
      
      Plotly.newPlot("line", data, layout)
  })
;

    
      // create a trace for BUBBLE chart: 

          //   var bank_bub_values = [{
          //     x: bankname,
          //     y: bankvolumes,
          //     text: bankvolumes,
          //     mode: "markers",
          //     marker: {
          //         color: bankname,
          //         size: bankvolumes,
          //         colorscale: "continent"
          //   }
          // }]
    
          //   // Define bubble layout format:   
          //   var bank_bub_layout = {
          //     title: "15 Stocks volumes in Banking Industry",
          //     xaxis: {title: "Bank stocks"},
          //     yaxis: {title: "Volume"}
          //   }
    
          //   Plotly.newPlot("bubble", bank_bub_values, bank_bub_layout);

    //         'Bank of America', 'Citizens Financial Group', 'Comerica',
    //    'Citigroup', 'Fifth Third Bancorp', 'Huntington Bancshares',
    //    'JPMorgan Chase & Co.', 'KeyCorp', 'M&T Bank',
    //    "People's United Financial", 'The PNC Financial Services Group',
    //    'Regions Financial', 'U.S. Bancorp', 'Wells Fargo & Company',
    //    'Zions Bancorporation NA'

            // create Box plot
            // function selectBank(bank){
            //     return databank.name = "Bank of America";
            // }
            // var bankOfAmerica = databank.filter(selectBank);
            // var trace1 = {
            //     y: bankOfAmerica.close,
            //     type: 'box',
            //     name: 'Bank of America',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace2 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'Citizens of Financial Group',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace3 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'Comerica',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace4 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'Citigroup',
            //     marker:{
            //         color: 'black'
            //     }
            //     };
            // var trace5 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'Fifth Third Bancorp',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace6 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'Huntington Bancshares',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace7 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'JPMorgan Chase & Co.',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace8 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'KeyCorp',
            //     marker:{
            //         color: 'black'
            //     }
            //     };
            // var trace9 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'M&T Bank',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace10 = {
            //     y: y0,
            //     type: 'box',
            //     name: "People's United Financial",
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace11 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'The PNC Financial Services Group',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace12 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'Regions Financial',
            //     marker:{
            //         color: 'black'
            //     }
            //     };
            // var trace13 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'U.S. Bancorp',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace14 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'Wells Fargo & Company',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var trace15 = {
            //     y: y0,
            //     type: 'box',
            //     name: 'Zions Bancorporation NA',
            //     marker:{
            //         color: 'black'
            //     }
            //     };

            // var data = [trace1];

            // Plotly.newPlot('myDiv', data);

    
    
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
          
      // function James(PharmValue) {
      //       // var selector = d3.select("#selDataset");
      //         d3.json("pharm.json").then((datapharm) => {
      
      //     // create a Trace for plotting:
      //     var pharm_line_values = [{
      //       x : pharmtimedate,
      //       y : pharmprices,
      //       text: pharmname,
      //       type: "line",
      //       marker: {color: "blue"},
      //   }]
        
      // // define the bar layout format: 
      //   var pharm_line_format = {
      //       title: "7 Stocks Trends in Pharmaceutical Industry",
      //       xaxis: "Timeseries (one-year 2018)",
      //       yaxis: "Close Prices"
      //   }
        
      //   Plotly.newPlot("line", pharm_line_values, pharm_line_format)
    
      //     // create a trace for BUBBLE chart: 
    
      //     var pharm_bub_values = [{
      //       x: pharmname,
      //       y: pharmvolumes,
      //       text: pharmvolumes,
      //       mode: "markers",
      //       marker: {
      //           color:pharmname,
      //           size: pharmvolumes,
      //           colorscale: "continent"
      //     }
      //   }]
    
      //     // Define bubble layout format:   
      //     var pharm_bub_layout = {
      //       title: "15 Stocks volumes in pharmaceutical Industry",
      //       xaxis: {title: "pharmaceutical stocks"},
      //       yaxis: {title: "Volume"}
      //     }
    
      //     Plotly.newPlot("bubble", pharm_bub_values, pharm_bub_layout);
      //   })
       
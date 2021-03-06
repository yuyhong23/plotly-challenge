// using ./samples instead of the url
// // Read the samples.json 
// const url = "https://yuyhong23.github.io/plotly-challenge/samples.json";

// Initializes the page with a default plot
// Also for setting up the dropdown buttons
function init() {
  d3.json("./samples.json").then(function(data) {
    // Extract the names
    var names = data.names;
    //console.log(names);

    // Append the options to the dropdown menu
    names.forEach(x => {
      var dropDown = d3.select("#selDataset");
      var selectOption = dropDown.append("option");
      selectOption.attr("value", x).text(x);
    })

    // Call on the optionChanged function
    // Show the first id's charts
    optionChanged(names[0]);
  })
}

// Data and charts will change based on the id selected
function optionChanged(id){
  buildCharts(id);
}

// Data to use for building the charts
function buildCharts(id){
  d3.json("./samples.json").then(function(data) {
  // Display the data to understand
    console.log(data);

  //Bar Chart values//

  // Set up filter based on id selected for bar chart
  var filteredSamples = data.samples.filter(d=>d.id===id);
  console.log(filteredSamples);
  
  // Extract the sample_values from the filtered id samples data
  // Use slice to get the top 10 OTU values found in that individual
  // Because it's in the 0 index, need to indicate that
  var sampleValues = filteredSamples.map(x=>x.sample_values.slice(0,10))[0];
  // Use reverse so the graph descend from more to less
  var valueSorted = sampleValues.reverse();
  console.log(valueSorted);

  // Use slice to get the top 10 OTU ids found in that individual
  var outIds = filteredSamples.map(x=>x.otu_ids.slice(0,10))[0];
  // Use reverse so the graph descend from more to less
  var outIdsSorted = outIds.reverse();
  console.log(outIdsSorted);

  // Change the id to string with the word OTU in front
  var slicedOutIdsConvert = [];
  for (var i = 0; i < outIdsSorted.length; i ++){
    var newI = `OTU ${outIdsSorted[i].toString()}`;
    slicedOutIdsConvert.push(newI);
  }
  console.log(slicedOutIdsConvert);

  // Use slice to get the top 10 OTU labels found in that individual
  var outLabels = filteredSamples.map(x=>x.otu_labels.slice(0,10))[0];
  // Use reverse so the graph descend from more to less
  var outLabelsSorted = outLabels.reverse();
  console.log(outLabelsSorted);

  // Bubble Chart Values //
  // Get all sample values
  var bubble_samples = filteredSamples.map(x=>x.sample_values)[0];
  console.log(bubble_samples);

  // Get all otu ids
  var bubble_otuIds = filteredSamples.map(x=>x.otu_ids)[0];
  console.log(bubble_otuIds);

  // Get all otu labels
  var bubble_otuLabels = filteredSamples.map(x=>x.otu_labels)[0];
  console.log(bubble_otuLabels);

  // Demographic Info //

  // Set up filter based on id selected for 
  var filteredMeta = data.metadata.filter(d=>d.id==id);
  console.log(filteredMeta);

  // Gauge Chart //
  var wfreq = filteredMeta.map(x=>x.wfreq)[0];
  console.log(wfreq);

  // Call on the barChart function
  barChart(valueSorted, slicedOutIdsConvert, outLabelsSorted);
  bubbleChart(bubble_otuIds, bubble_samples, bubble_otuLabels);
  demoInfo (filteredMeta);
  gaugeChart(wfreq);
})
}

// Function to create the bar chart
function barChart (xValue, yValue, textName){
  var trace1 = {
    x: xValue,
    y: yValue,
    text:textName,
    type: "bar",
    orientation: "h"
  };

  var layout ={
    "titlefont":{
      "size":24
    },
    title: "Top 10 OTUs Bar Chart",
    xaxis: {
        title: "Sample Values",
        tickangle: -45,
        automargin: true
    },
    yaxis: {
        title: "OTU IDs",
        automargin: true
    },
    autosize: false,
    width: 350,
    height: 600
    };

  Plotly.newPlot("bar", [trace1], layout);
}

// Function to create the bubble chart
function bubbleChart (xValue, yValue, textValue){
  var trace1 = {
    x: xValue,
    y: yValue,
    text: textValue,
    mode: 'markers',
    marker: {
      color: xValue,
      size: yValue,
      colorscale: "Jet"
    }
  };
  
  var data = [trace1];
  
  var layout = {
    "titlefont":{
      "size":24
    },
    title: 'Bubble Chart for Each Sample',
    showlegend: false,
    xaxis: {
      title: "OTU IDs",
      automargin: true
  },
  yaxis: {
      title: "Sample Values",
      automargin: true
  },
    height: 600,
    width: 1200
  };
  
  Plotly.newPlot('bubble', data, layout);
}

function demoInfo (data){
  var panelBody = d3.select("#sample-metadata");
  // to clear the previous input
  panelBody.html("");
  data.forEach(x=> {
    Object.entries(x).forEach(([key, value])=>{
      panelBody.append("div").text(key + ": " + value);
    })
  })
}

// Optional
function gaugeChart (data){
  var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: data,
      title: { text: "Scrubs per Week" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        bar: { color: "PaleGreen" },
        axis: { range: [0, 9] },
        steps: [
          { range: [0, 1], color: "lightcyan"},
          { range: [1, 2], color: "paleturquoise"},
          { range: [2, 3], color: "aquamarine"},
          { range: [3, 4], color: "turquoise"},
          { range: [4, 5], color: "mediumaquamarine"},
          { range: [5, 6], color: "mediumseagreen"},
          { range: [6, 7], color: "lawngreen"},
          { range: [7, 8], color: "limegreen"},
          { range: [8, 9], color: "seagreen" }
        ]
      }
    }
  ]; 

  var layout = { width: 500, height: 400, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', data, layout);
}

// Call on the function init()
init();
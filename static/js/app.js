// // Fetch the JSON data 
// function buildPlot(sample){
  d3.json("/samples.json").then(function(data) {
    // Display the data to understand
    //console.log(data);

    // Extract the names
    var names = data.names;
    //console.log(names);

    // Append the options to the dropdown menu
    names.forEach(x => {
      var dropDown = d3.select("#selDataset");
      var selectOption = dropDown.append("option");
      selectOption.attr("value", x).text(x);
    })

    // Get the samples data
    var id1 = data.samples[0];
    console.log(id1);

    // Extract the sample_values from the samples data
    var sampleValue1 = id1.sample_values;
    //console.log(sampleValue1);

    // Use slice to get the top 10 OTU values found in that individual
    // Use reverse so the graph descend from more to less
    var value1Sorted = (sampleValue1.slice(0, 10)).reverse();
    console.log(value1Sorted); 

    // Use slice to get the top 10 OTU ids found in that individual
    // Use reverse so the graph descend from more to less
    // Convert the ids to string
    var outIds1 = id1.otu_ids;
    var slicedOutIds1 =  ((outIds1.slice(0,10))).reverse();
    console.log(slicedOutIds1);

    var slicedOutIdsConvert1 = [];
    for (var i = 0; i < slicedOutIds1.length; i ++){
      var newI = `OTU ${slicedOutIds1[i].toString()}`;
      slicedOutIdsConvert1.push(newI);
    }
    console.log(slicedOutIdsConvert1);

    // Use slice to get the top 10 OTU labels found in that individual
    // Use reverse so the graph descend from more to less
    var outlabels1 = id1.otu_labels;
    var slicedOutlabels1 =  (outlabels1.slice(0,10)).reverse();
    console.log(slicedOutlabels1);

    var trace1 = {
      x: value1Sorted,
      y: slicedOutIdsConvert1,
      text:slicedOutlabels1,
      type: "bar",
      orientation: "h"
    };

    var layout ={
      title: "Bar Chart",
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

})
//}

// Using the onchange from the html
// function optionChanged(id){
//   console.log(id);
//   filtered = data.filter(d=>d.id===id);
//   newFunctionforChart(filtered);
// }
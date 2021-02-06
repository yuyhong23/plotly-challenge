// Initializes the page with a default plot
// Also for setting up the dropdown buttons
function init() {
  d3.json("/samples.json").then(function(data) {
    // Extract the names
    var names = data.names;
    //console.log(names);

    // Append the options to the dropdown menu
    names.forEach(x => {
      var dropDown = d3.select("#selDataset");
      var selectOption = dropDown.append("option");
      selectOption.attr("value", x).text(x);
    })

    // Show the first id's charts
    optionChanged(names[0]);
  })
}

// Data and charts will change based on the id selected
function optionChanged(id){
  buildCharts(id);
}

// Data to use for building the charts
function forAllCharts(id){
  d3.json("/samples.json").then(function(data) {
  // Display the data to understand
    // console.log(data);

  // Set up filter based on id selected
  var filteredSamples = data.samples.filter(d=>d.id===id);
  var filteredMeta = data.metadata.filter(d=>d.id===id);

  // Extract the sample_values from the samples data
  var sampleValue = filteredSamples.sample_values;
  //console.log(sampleValue1);

  // Use slice to get the top 10 OTU values found in that individual
  // Use reverse so the graph descend from more to less
  var valueSorted = (sampleValue.slice(0, 10)).reverse();
  console.log(valueSorted); 

  // Use slice to get the top 10 OTU ids found in that individual
  // Use reverse so the graph descend from more to less
  // Convert the ids to string
  var outIds = filteredSamples.otu_ids;
  var slicedOutIds =  ((outIds.slice(0,10))).reverse();
  console.log(slicedOutIds);

  var slicedOutIdsConvert = [];
  for (var i = 0; i < slicedOutIds.length; i ++){
    var newI = `OTU ${slicedOutIds[i].toString()}`;
    slicedOutIdsConvert.push(newI);
  }
  console.log(slicedOutIdsConvert);

  // Use slice to get the top 10 OTU labels found in that individual
  // Use reverse so the graph descend from more to less
  var outlabels = filteredSamples.otu_labels;
  var slicedOutlabels =  (outlabels.slice(0,10)).reverse();
  console.log(slicedOutlabels);
})
}


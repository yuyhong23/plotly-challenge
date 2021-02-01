// Fetch the JSON data and console log it
d3.json("/samples.json").then(function(data) {

    // Display the data to understand
    //console.log(data);

    // Get the samples data
    var sampleData = [];
    Object.entries(data.samples).forEach(([key, value]) =>{
        sampleData.push(value);
        })
    //console.log(sampleData);
    
    // Extract the sample_values from the samples data
    var sampleValues = sampleData.map(x=>x.id);
    //console.log(sampleValues);

    // Sort data for from most to least
    var sampleSorted = sampleValues.sort((first, second) => 
    second - first);
    //console.log(sampleSorted);

    // Use slice to get the top 10 OTUs found in that individual
    var sample_values = sampleSorted.slice(0,10);
    console.log(sample_values);
  })

// Sort data for the top 10 OTUs found in that individual
// var sortedData = data.sort((first, second) => 
//     second.greekSearchResults - first.greekSearchResults);
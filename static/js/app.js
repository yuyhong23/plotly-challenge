// Fetch the JSON data and console log it
d3.json("/samples.json").then(function(data) {
    var metaData = [];
    Object.entries(data.metadata).forEach(([key, value]) =>{
            metaData.push(value);
        })
    //console.log(metaData);
    var sample_values = metaData.map(x=>x.wfreq);
    console.log(sample_values);
    // console.log(data);
  })

// Sort data for the top 10 OTUs found in that individual
// var sortedData = data.sort((first, second) => 
//     second.greekSearchResults - first.greekSearchResults);
# Plotly JavaScript

Data and instructions provided by UC Berkeley Extension Data Analytics Bootcamp.

# Introduction 

The goal of this assignment is to use my newfound knowledge and skills on javascript's plotly library to create dynamic visualizations using a set of data.

Link to the GitHub Page for this assignment: https://yuyhong23.github.io/plotly-challenge/ .

# Technologies/Libraries

- HTML

- JavaScript

- plotly

-D3

# Detailed Instructions/Assignment Background

### Background

    In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
    
    The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

### Visualization 1: Horizontal Bar Chart

    1. Use the D3 library to read in samples.json.
        - Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

    2. Use sample_values as the values for the bar chart.
        - Use otu_ids as the labels for the bar chart.
        - Use otu_labels as the hovertext for the chart.

### Visualization 2: Bubble Chart

    3. Create a bubble chart that displays each sample.
        - Use otu_ids for the x values.
        - Use sample_values for the y values.
        - Use sample_values for the marker size.
        - Use otu_ids for the marker colors.
        - Use otu_labels for the text values.

### Visualization 3: Info Chart

    4. Display the sample metadata, i.e., an individual's demographic information.
    
    5. Display each key-value pair from the metadata JSON object somewhere on the page.
    
6. Update all of the plots any time that a new sample is selected.

### Visualization 4: Optional Gauge Chart

The following task is advanced and therefore optional.

    - Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.

    - You will need to modify the example gauge code to account for values ranging from 0 through 9.

    - Update the chart whenever a new sample is selected.

# Files

    - index.html
    
    - samples.json: the data file
    
    - static/js:
        - app.js: where my codes are

# Process and Credits

My first assignment working with plotly. I used class materials and outside resources for reference. I asked my groupmate for help on setting up the functions. I also asked for help during office hour.

Here are the outside resources that I used for this assignment (as well as attempts):

    - https://bl.ocks.org/hrecht/f84012ee860cb4da66331f18d588eee3
    - https://www.d3-graph-gallery.com/graph/barplot_horizontal.html
    - https://webmasters.stackexchange.com/questions/83344/getting-error-uncaught-syntaxerror-unexpected-token-on-json-file
    - https://plotly.com/javascript/setting-graph-size/
    - https://canvasjs.com/docs/charts/chart-options/title/padding/
    - https://plotly.com/javascript/bubble-charts/
    - https://community.plotly.com/t/what-colorscales-are-available-in-plotly-and-which-are-the-default/2079
    - https://testfairy.com/blog/utilize-github-pages-as-json-api/
    - https://github.com/gitname/react-gh-pages/issues/9
    - https://plotly.com/javascript/gauge-charts/
    - https://www.w3schools.com/colors/colors_names.asp
    - https://www.w3schools.com/colors/colors_groups.asp
    - https://community.plotly.com/t/change-title-size-and-make-bold/1728/3

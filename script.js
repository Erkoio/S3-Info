document.addEventListener("DOMContentLoaded", function() {
    // Get the graph container
    var graphContainer = document.querySelector("#social-media-section .graph-container");

    // Hide the graph initially
    graphContainer.style.display = "none";

    // Add click event listener to toggle the graph container visibility
    document.getElementById("social-media-section").addEventListener("click", function(event) {
        // Check if the click target is not the graph container itself
        if (!event.target.closest('.graph-container')) {
            // Toggle the visibility of the graph
            graphContainer.style.display = (graphContainer.style.display === "none") ? "block" : "none";
        }
    });

    // Function to draw the graph
    function drawGraph() {
        var ctx = document.getElementById('socialMediaGraph').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Social Media Usage Over Time',
                    data: [3282, 3640,3950 ,4212, 4418, 4758, 4950],
                    fill: false,
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(0, 123, 255, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(0, 123, 255, 1)'
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 50 // Adjust the step size of the y-axis ticks
                        },
                        gridLines: {
                            display: true, // Show grid lines on the y-axis
                            color: 'rgba(0, 0, 0, 0.1)' // Set grid line color
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false // Hide grid lines on the x-axis
                        }
                    }]
                },
                legend: {
                    display: true, // Show legend
                    position: 'bottom', // Set legend position
                    labels: {
                        fontColor: '#333', // Set legend label color
                        fontSize: 14 // Set legend label font size
                    }
                }
            }
        });
    }

    // Call the function to draw the graph
    drawGraph();
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all the section headings
    var sectionHeadings = document.querySelectorAll("section h2");

    // Add click event listener to each section heading
    sectionHeadings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            // Toggle the visibility of the content within the section
            var content = this.nextElementSibling;
            content.classList.toggle("show");

            // Toggle the visibility of the graph
            var graphContainer = content.nextElementSibling;
            if (graphContainer.tagName === 'DIV' && graphContainer.classList.contains('graph-container')) {
                graphContainer.classList.toggle("show");
            }

            // Toggle the plus and minus icons
            var icon = this.querySelector("i");
            icon.classList.toggle("fa-plus");
            icon.classList.toggle("fa-minus");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("language-button").addEventListener("click", function() {
        toggleLanguage();
    });
});

function toggleLanguage() {
    loadLanguageTexts("ar"); 
}
document.addEventListener("DOMContentLoaded", function() {
    // Get all the section headings
    var sectionHeadings = document.querySelectorAll("section h2");

    // Add click event listener to each section heading
    sectionHeadings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            // Toggle the visibility of the content within the section
            var content = this.nextElementSibling;
            content.classList.toggle("show");

            // Toggle the visibility of the graph
            var graphContainer = content.nextElementSibling;
            if (graphContainer.tagName === 'DIV' && graphContainer.classList.contains('graph-container')) {
                graphContainer.classList.toggle("show");
            }

            // Toggle the plus and minus icons
            var icon = this.querySelector("i");
            icon.classList.toggle("fa-plus");
            icon.classList.toggle("fa-minus");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get all the section headings
    var sectionHeadings = document.querySelectorAll("section h2");

    // Add click event listener to each section heading
    sectionHeadings.forEach(function(heading) {
        heading.addEventListener("click", function() {
            // Toggle the visibility of the content within the section
            var content = this.nextElementSibling;
            content.classList.toggle("show");

            // Toggle the plus and minus icons
            var icon = this.querySelector("i");
            icon.classList.toggle("fa-plus");
            icon.classList.toggle("fa-minus");
        });
    });
});

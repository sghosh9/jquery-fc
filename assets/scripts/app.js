var chartJSON = {
    "chart": {
        "caption": "Top Global Oil Reserves",
        "subCaption": "[2015-16]",
        "xAxisName": "MMbbl= One Million barrels",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "showValues": "0",
        "theme": "fusion"
    },
    "data": [{
        "label": "Venezuela",
        "value": "290"
    }, {
        "label": "Saudi",
        "value": "260"
    }, {
        "label": "Canada",
        "value": "180"
    }, {
        "label": "Iran",
        "value": "140"
    }, {
        "label": "Russia",
        "value": "115"
    }, {
        "label": "UAE",
        "value": "100"
    }, {
        "label": "US",
        "value": "30"
    }, {
        "label": "China",
        "value": "30"
    }]
};

var jsonCode = CodeMirror(document.getElementById("chartCode"), {
    tabSize: "4",
    smartIndent: true,
    lineNumbers: true,
    readOnly: true,
    theme: "dracula",
    mode: "javascript"
});

jsonCode.setValue(JSON.stringify(chartJSON, null, 2));

var step1command1 = CodeMirror(document.getElementById("c1"), {
    tabSize: "4",
    smartIndent: true,
    lineNumbers: true,
    readOnly: true,
    theme: "dracula",
    mode: "javascript",
    viewportMargin: Infinity
});

step1command1.setValue("$ npm install react-fusioncharts --save");

var step1command2 = CodeMirror(document.getElementById("c2"), {
    tabSize: "4",
    smartIndent: true,
    lineNumbers: true,
    readOnly: true,
    theme: "dracula",
    mode: "javascript",
    viewportMargin: Infinity
});

step1command2.setValue("$ npm install fusioncharts --save");

var step2command1 = CodeMirror(document.getElementById("c3"), {
    tabSize: "4",
    smartIndent: true,
    lineNumbers: true,
    readOnly: true,
    theme: "dracula",
    mode: "javascript",
    viewportMargin: Infinity
});

step2command1.setValue("code goes here");


var step2command2 = CodeMirror(document.getElementById("c4"), {
    tabSize: "4",
    smartIndent: true,
    lineNumbers: true,
    readOnly: true,
    theme: "dracula",
    mode: "javascript",
    viewportMargin: Infinity
});

step2command2.setValue("code goes here");

var step2command3 = CodeMirror(document.getElementById("c5"), {
    tabSize: "4",
    smartIndent: true,
    lineNumbers: true,
    readOnly: true,
    theme: "dracula",
    mode: "javascript"
});

//step2command3.setValue("code goes here");
step2command3.setValue(JSON.stringify(chartJSON, null, 2));

var modal = document.getElementById("myModal");
var btn = document.getElementById("mobileChart-selector");

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Samples
// Change the code snippet to default
jsonCode.setValue(sampleConfig["simple-chart"]["code"]);

Array.from(document.querySelectorAll(".side-nav .nav-item")).forEach(
  item => {
    item.onclick = function(event) {
      // Get the tab ID and Chart ID
      var tabID = (event.currentTarget.getAttribute("data-id"));

      // Get the active button
      var activeBtnID = document.querySelector(".code-nav-btns button.selected").getAttribute("data-id");

      if (tabID && activeBtnID) {
        // Switch the selected tab
        document.querySelector(".side-nav .nav-item.selected").classList.remove("selected");
        event.currentTarget.classList.add("selected");

        // Change the sample iframe src
        document.getElementById("chart-container").src = window.location.href + "/samples/" + tabID;

        // Change the code snippet js/html/data
        jsonCode.setValue(sampleConfig[tabID][activeBtnID]);
      }
    }
  }
)
Array.from(document.querySelectorAll(".code-nav-btns button")).forEach(
  item => {
    item.onclick = function(event) {
      // Get the button ID
      var btnID = (event.currentTarget.getAttribute("data-id"));

      // Get the active tab
      var activeTabID = document.querySelector(".side-nav .nav-item.selected").getAttribute("data-id");

      if (btnID && activeTabID) {
        // Switch the selected button
        document.querySelector(".code-nav-btns button.selected").classList.remove("selected");
        event.currentTarget.classList.add("selected");

        // Change the code snippet js/html/data
        jsonCode.setValue(sampleConfig[activeTabID][btnID]);
      }
    }
  }
)

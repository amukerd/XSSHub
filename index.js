// so it executes once
if (typeof executed === 'undefined') {
    executed = true; 

    // eruda bc useful for debugging
    (function(){var script=document.createElement("script");script.src="https://cdn.jsdelivr.net/npm/eruda";document.body.append(script);script.onload=function(){eruda.init();console.log("Script Loaded: Thank you for using SparXSS!")}})();
    
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.backgroundColor = '#222';
    container.style.zIndex = '9999';
    
    var sparxsstext = document.createElement("div");
    sparxsstext.style.position = "fixed";
    sparxsstext.style.top = "30%";
    sparxsstext.style.left = "50%";
    sparxsstext.style.transform = "translate(-50%, -50%)";
    sparxsstext.style.fontSize = "100px";
    sparxsstext.style.textAlign = "center";
    sparxsstext.style.color = "#aaa"; 
    sparxsstext.style.fontWeight = "bold"; 
    sparxsstext.innerText = "SparXSS";

    var invis2 = document.createElement("div");
    invis2.style.position = "fixed";
    invis2.style.top = "50%";
    invis2.style.left = "50%";
    invis2.style.transform = "translate(-50%, -50%)";
    invis2.style.backgroundColor = "transparent";
    invis2.style.textAlign = "center";

    var textBox1 = document.createElement("input");
    textBox1.type = "text";
    textBox1.placeholder = "Temporary Redirect";
    textBox1.style.display = "block";
    textBox1.style.margin = "10px auto";
    textBox1.style.width = "80vw";
    textBox1.style.color = '#aaa';
    textBox1.style.placeholderColor = '#aaa';
    textBox1.style.background = '#333';
    textBox1.style.border = 'none';
    textBox1.style.padding = '10px 10px';
    textBox1.style.fontSize = '20px';
    textBox1.style.borderRadius = '10px';
    textBox1.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    textBox1.style.transition = 'background-color 0.3s ease';
    textBox1.style.textAlign = 'center';
    textBox1.style.outline = 'none';

    textBox1.addEventListener('mouseover', function() {
        textBox1.style.backgroundColor = '#444';
    });

    textBox1.addEventListener('mouseout', function() {
        textBox1.style.backgroundColor = '#333';
    });

    textBox1.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            if (redirectSwitcher) {
                permRedirector();
            } else {
                tempRedirector();
            }
        }
    });

    textBox1.addEventListener('click', function() {
        if (textBox1.placeholder === "Temporary Redirect" || textBox1.placeholder === "Permanent Redirect") {
            textBox1.placeholder = "";
        }
    });

    textBox1.addEventListener('blur', function() {
        if (textBox1.value.trim() === "") {
            if (redirectSwitcher) {
                textBox1.placeholder = "Permanent Redirect";
            } else {
                textBox1.placeholder = "Temporary Redirect";
            }
        }
    });

    var button1 = document.createElement("button");
    button1.innerText = "Redirect";
    button1.style.cursor = 'pointer';
    button1.style.width = '30vw';
    button1.style.backgroundColor = '#333';
    button1.style.border = 'none';
    button1.style.padding = '10px 10px';
    button1.style.fontSize = '20px';
    button1.style.borderRadius = '10px';
    button1.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    button1.style.transition = 'background-color 0.3s ease';
    button1.style.color = '#aaa';
    button1.style.display = 'block';
    button1.style.margin = '10px auto'; 
    button1.style.display = 'block'; 
    button1.style.textAlign = 'center';
    button1.style.outline = 'none';

    button1.addEventListener('mouseover', function() {
        button1.style.backgroundColor = '#444';
    });

    button1.addEventListener('mouseout', function() {
        button1.style.backgroundColor = '#333';
    });

    button1.addEventListener('click', function() {
        if (redirectSwitcher) {
            permRedirector();
        } else {
            tempRedirector();
        }
    });

    var button3 = document.createElement("button");
    button3.innerText = "Javascript";
    button3.style.cursor = 'pointer';
    button3.style.width = '10vw';
    button3.style.backgroundColor = '#333';
    button3.style.border = 'none';
    button3.style.padding = '10px 10px';
    button3.style.fontSize = '20px';
    button3.style.borderRadius = '10px';
    button3.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    button3.style.transition = 'background-color 0.3s ease';
    button3.style.color = '#aaa';
    button3.style.position = "fixed";
    button3.style.bottom = "10px";
    button3.style.left = "10px";
    button3.style.display = 'block'; 
    button3.style.textAlign = 'center'; 
    button3.style.outline = 'none';

    button3.addEventListener('mouseover', function() {
        button3.style.backgroundColor = '#444';
    });

    button3.addEventListener('mouseout', function() {
        button3.style.backgroundColor = '#333';
    });

    button3.addEventListener('click', function() {
        backgroundDiv.style.display = 'block';
    });

    // start of javascript execution elements
    var backgroundDiv = document.createElement('div');
    backgroundDiv.style.position = 'fixed';
    backgroundDiv.style.top = '0';
    backgroundDiv.style.left = '0';
    backgroundDiv.style.width = '100%';
    backgroundDiv.style.height = '100%';
    backgroundDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    backgroundDiv.style.zIndex = '10001';
    backgroundDiv.style.display = 'none';

    var contentContainer = document.createElement('div');
    contentContainer.style.position = 'fixed';
    contentContainer.style.top = '0';
    contentContainer.style.left = '0';
    contentContainer.style.right = '0';
    contentContainer.style.bottom = '0';
    contentContainer.style.margin = '75px';
    contentContainer.style.backgroundColor = '#333';
    contentContainer.style.padding = '40px';
    contentContainer.style.borderRadius = '10px';
    contentContainer.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    contentContainer.style.color = '#fff';
    contentContainer.style.backgroundColor = '#222';

    var largeTextBox = document.createElement('textarea');
    largeTextBox.style.width = '100%';
    largeTextBox.style.height = '86%';
    largeTextBox.style.fontSize = '18px';
    largeTextBox.style.color = '#fff';
    largeTextBox.style.backgroundColor = '#333';
    largeTextBox.style.border = 'none';
    largeTextBox.style.borderRadius = '10px';
    largeTextBox.style.padding = '20px';
    largeTextBox.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    largeTextBox.style.resize = 'none';
    largeTextBox.style.outline = 'none';
    largeTextBox.setAttribute('spellcheck', 'false');
    document.body.appendChild(largeTextBox);

    var history = [''];
    var historyIndex = 0;

    function saveState() {
        if (historyIndex < history.length - 1) {
            history = history.slice(0, historyIndex + 1);
        }
        history.push(largeTextBox.value);
        historyIndex = history.length - 1;
    }

    largeTextBox.addEventListener('input', saveState);

    function undo() {
        if (historyIndex > 0) {
            historyIndex--;
            largeTextBox.value = history[historyIndex];
        }
    }

    function redo() {
        if (historyIndex < history.length - 1) {
            historyIndex++;
            largeTextBox.value = history[historyIndex];
        }
    }

    largeTextBox.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'z') {
            e.preventDefault();
            undo();
        } else if (e.ctrlKey && e.key === 'y') {
            e.preventDefault();
            redo();
        } else if (e.key === 'Tab') {
            e.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var spaces = '    ';
            var value = this.value;
            if (start === end) {
                this.value = value.substring(0, start) + spaces + value.substring(end);
                this.selectionStart = this.selectionEnd = start + spaces.length;
            } else {
                var lines = value.substring(start, end).split('\n');
                var indentedText = lines.map(function(line) {
                    return spaces + line;
                }).join('\n');
                this.value = value.substring(0, start) + indentedText + value.substring(end);
                this.selectionStart = start;
                this.selectionEnd = end + spaces.length * lines.length;
            }
            saveState();
        // added deleting a 4 space tab
        } else if (e.key === 'Backspace' && this.value.substring(this.selectionStart - 4, this.selectionStart) === '    ') {
            e.preventDefault();
            var start = this.selectionStart;
            this.value = this.value.substring(0, start - 4) + this.value.substring(start);
            this.selectionStart = this.selectionEnd = start - 4;
            saveState();
        }
    });        

    var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'space-between';
    buttonContainer.style.marginTop = '20px';

    var executeButton = document.createElement('button');
    executeButton.innerText = 'Execute';
    executeButton.style.width = '47.5%';
    executeButton.style.backgroundColor = '#333';
    executeButton.style.border = 'none';
    executeButton.style.borderRadius = '10px';
    executeButton.style.padding = '15px';
    executeButton.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    executeButton.style.fontSize = '20px';
    executeButton.style.color = '#aaa';
    executeButton.style.cursor = 'pointer';
    executeButton.style.transition = 'background-color 0.3s ease';

    executeButton.addEventListener('mouseover', function() {
        executeButton.style.backgroundColor = '#444';
    });

    executeButton.addEventListener('mouseout', function() {
        executeButton.style.backgroundColor = '#333';
    });

    // actual javascript execution
    executeButton.addEventListener('click', function() {
        var jsCode = largeTextBox.value;

        try {
            eval(jsCode);
        } catch (error) {
            executeButton.innerText = 'Error: Execution Failed';
            console.log(error)
            setTimeout(function() {
                executeButton.innerText = 'Execute';
            }, 2000);
        }
    });

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Close Menu';
    deleteButton.style.width = '47.5%';
    deleteButton.style.backgroundColor = '#333';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '10px';
    deleteButton.style.padding = '15px';
    deleteButton.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    deleteButton.style.fontSize = '20px';
    deleteButton.style.color = '#aaa';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.transition = 'background-color 0.3s ease';

    deleteButton.addEventListener('mouseover', function() {
        deleteButton.style.backgroundColor = '#444';
    });

    deleteButton.addEventListener('mouseout', function() {
        deleteButton.style.backgroundColor = '#333';
    });

    deleteButton.addEventListener('click', function() {
        backgroundDiv.style.display = 'none';
    });

    buttonContainer.appendChild(executeButton);
    buttonContainer.appendChild(deleteButton);
    contentContainer.appendChild(largeTextBox);
    contentContainer.appendChild(buttonContainer);

    backgroundDiv.appendChild(contentContainer);
    document.body.appendChild(backgroundDiv);
    // end of javascript execution elements

    var modeButton = document.createElement("button");
    modeButton.innerText = "Current Mode: Temporary Redirect";
    modeButton.style.position = "fixed";
    modeButton.style.bottom = "10px";
    modeButton.style.left = "50%";
    modeButton.style.transform = "translateX(-50%)";
    modeButton.style.cursor = "pointer";
    modeButton.style.width = "30vw";
    modeButton.style.backgroundColor = "#333";
    modeButton.style.border = "none";
    modeButton.style.padding = "10px 10px";
    modeButton.style.fontSize = "20px";
    modeButton.style.borderRadius = "10px";
    modeButton.style.boxShadow = "0 0 5px rgba(0, 0, 0, 0.5)";
    modeButton.style.transition = "background-color 0.3s ease";
    modeButton.style.color = "#aaa";
    modeButton.style.outline = 'none';

    modeButton.addEventListener("mouseover", function() {
        modeButton.style.backgroundColor = "#444";
    });

    modeButton.addEventListener("mouseout", function() {
        modeButton.style.backgroundColor = "#333";
    });

    modeButton.addEventListener("click", function() {
        if (redirectSwitcher) {
            redirectSwitcher = false;
            modeButton.innerText = "Current Mode: Temporary Redirect";
            textBox1.placeholder = "Temporary Redirect";
        } else {
            redirectSwitcher = true;
            modeButton.innerText = "Current Mode: Permanent Redirect";
            textBox1.placeholder = "Permanent Redirect";
        }
    });

    invis2.appendChild(textBox1);
    invis2.appendChild(button1);

    container.appendChild(button3);
    container.appendChild(sparxsstext);
    container.appendChild(invis2);
    container.appendChild(modeButton);

    document.body.appendChild(container);
    
    var redirectSwitcher = false;

    function tempRedirector() {
        var setUrl = textBox1.value;
        if (setUrl.trim() !== "") {
            if (!setUrl.startsWith("http://") && !setUrl.startsWith("https://")) {
                setUrl = "https://" + setUrl;
            }
            window.open(setUrl, '_blank');
        }
    }

    function permRedirector() {
        var setUrl = textBox1.value;
        if (setUrl.trim() !== "") {
            if (!setUrl.startsWith("http://") && !setUrl.startsWith("https://")) {
                setUrl = "https://" + setUrl;
            }
            window.location.href = setUrl;
        }
    }
}

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

    var invis = document.createElement("div");
    invis.style.position = "fixed";
    invis.style.top = "50%";
    invis.style.left = "50%";
    invis.style.transform = "translate(-50%, -50%)";
    invis.style.backgroundColor = "transparent";
    invis.style.textAlign = "center";

    var textBox1 = document.createElement("input");
    textBox1.type = "text";
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

    var JSContainer = document.createElement('div');
    JSContainer.style.position = 'fixed';
    JSContainer.style.top = '0';
    JSContainer.style.left = '0';
    JSContainer.style.right = '0';
    JSContainer.style.bottom = '0';
    JSContainer.style.margin = '75px';
    JSContainer.style.backgroundColor = '#333';
    JSContainer.style.padding = '40px';
    JSContainer.style.borderRadius = '10px';
    JSContainer.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    JSContainer.style.color = '#fff';
    JSContainer.style.backgroundColor = '#222';

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

    var closeButton = document.createElement('button');
    closeButton.innerText = 'Close Menu';
    closeButton.style.width = '47.5%';
    closeButton.style.backgroundColor = '#333';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '10px';
    closeButton.style.padding = '15px';
    closeButton.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
    closeButton.style.fontSize = '20px';
    closeButton.style.color = '#aaa';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'background-color 0.3s ease';

    closeButton.addEventListener('mouseover', function() {
        closeButton.style.backgroundColor = '#444';
    });

    closeButton.addEventListener('mouseout', function() {
        closeButton.style.backgroundColor = '#333';
    });

    closeButton.addEventListener('click', function() {
        backgroundDiv.style.display = 'none';
    });

    buttonContainer.appendChild(executeButton);
    buttonContainer.appendChild(closeButton);
    JSContainer.appendChild(largeTextBox);
    JSContainer.appendChild(buttonContainer);

    backgroundDiv.appendChild(JSContainer);
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
        } else {
            redirectSwitcher = true;
            modeButton.innerText = "Current Mode: Permanent Redirect";
        }
    });

    invis.appendChild(textBox1);
    invis.appendChild(button1);

    container.appendChild(button3);
    container.appendChild(sparxsstext);
    container.appendChild(invis);
    container.appendChild(modeButton);

    document.body.appendChild(container);
    
    var redirectSwitcher = false;

    function tempRedirector() {
        var Url = textBox1.value;
        if (Url.trim() !== "") {
            if (!Url.startsWith("http://") && !Url.startsWith("https://")) {
                Url = "https://" + Url;
            }
            window.open(Url, '_blank');
        }
    }

    function permRedirector() {
        var Url = textBox1.value;
        if (Url.trim() !== "") {
            if (!Url.startsWith("http://") && !Url.startsWith("https://")) {
                Url = "https://" + Url;
            }
            window.location.href = Url;
        }
    }
}

// Target the dropdown
let selectElem = document.getElementById('webdevlist');

// Target elements we will change
let topicTitle = document.getElementById('topic-title');
let topicList = document.getElementById('topic-list');
let mainImg = document.getElementById('main-img');

// Listen for dropdown changes
selectElem.addEventListener('change', function() {
    let value = selectElem.value;

    if (value === "html") {
        topicTitle.textContent = "HyperText Markup Language";
        topicList.innerHTML = `
            <li>Defines the structure and content of a web page.</li>
            <li>Without HTML there's nothing for the browser to display.</li>
        `;
        mainImg.setAttribute("src", "https://wddbyui.github.io/wdd131/images/html.png");
        topicTitle.style.color = "#c0392b";

    } else if (value === "css") {
        topicTitle.textContent = "Cascading Style Sheets";
        topicList.innerHTML = `
            <li>Controls how the HTML elements look.</li>
            <li>Without CSS pages look plain and unstyled.</li>
        `;
        mainImg.setAttribute("src", "https://wddbyui.github.io/wdd131/images/css.png");
        topicTitle.style.color = "#2980b9";

    } else if (value === "js") {
        topicTitle.textContent = "JavaScript";
        topicList.innerHTML = `
            <li>Adds interactivity and dynamic behavior.</li>
            <li>Without JavaScript nothing responds to user actions.</li>
        `;
        mainImg.setAttribute("src", "https://wddbyui.github.io/wdd131/images/js.png");
        topicTitle.style.color = "#f1c40f";

    } else {
        // Reset to default
        topicTitle.textContent = "HyperText Markup Language";
        topicList.innerHTML = `
            <li>Defines the structure and content of a web page.</li>
            <li>Without HTML there's nothing for the browser to display.</li>
        `;
        mainImg.setAttribute("src", "https://wddbyui.github.io/wdd131/images/trifecta.png");
        topicTitle.style.color = "#035f9c";
    }
});

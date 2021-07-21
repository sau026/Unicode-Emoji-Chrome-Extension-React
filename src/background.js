chrome.commands.onCommand.addListener(function (command) {
    if (command === "scroll") {
        alert("scrolled");
    }
});
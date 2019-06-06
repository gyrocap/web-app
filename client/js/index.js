const infoCSS = "color: #066FF9;"
    + "font-style: italic;";

const warnCSS = "color: #F97F06;"
    + "font-style: italic;";

function info(message){
    console.info("%c" + message, infoCSS);
}

function warn(message){
    console.info("%c" + message, warnCSS);
}

$("document").ready(function(document){
    info("DOM is now ready !");
});

function removeWelcome(){
    info("Welcome removal required ...");
    $("#welcome").remove();
}
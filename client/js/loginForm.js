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

$("#loginForm").submit(function(event){
    info("Login form submitted !");
    if (!verifChamps()){
        warn("One or more fields are not acceptable ! Form will not be submitted to the server ...")
        event.preventDefault();
    }
});

function verifChamps(){
    info("Verifying form fields ...");
    var a = verifChampNonVide("username"); 
    var b = verifChampNonVide("password");
    return a && b;
}

function verifChampNonVide(id){
    info("Verifying field with ID='" + id + "' ...")
    var value = $("#" + id).val();
    if(typeof(value)=='undefined' || value == ""){
        warn("Field with ID='" + id + "' is empty !")
        message(id, "Ne peut pas être vide !")
        return false;
    }else{
        info("Field with ID='" + id + "' is OK !")
        noMessage(id);
    }
    return true;
}

function message(id, message){
    var input = $("#" + id);
    if(!input.hasClass("is-danger")){
        info("Adding message to field with ID='" + id + "' ...")
        input.addClass("is-danger");
        var parent = input.parent();
        var grandParent = parent.parent();
        var newP = $("<p class='help is-danger'>" + message + "</p>");
        grandParent.append(newP);
    }else{
        info("Message already exists for field with ID='" + id + "' ...")
    }
}

function noMessage(id){
    var input = $("#" + id);
    if(input.hasClass("is-danger")){
        info("Removing message from field with ID='" + id + "' ...")
        input.removeClass("is-danger");
        var parent = input.parent();
        var grandParent = parent.parent();
        grandParent.find("p").remove();
    }
}
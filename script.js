$(".login").click(function(){
    return alert("In working progress");
    return console.log("true");
});


$("#VSubmit").click(function(){
    var searched = $("#VPost").val();
    $("#VMessages").append("<div><h2 id='TextDisplay'>"+searched+"</h2></div><hr>");
    $("#TextDisplay").css({ 'color': 'orange'});
});
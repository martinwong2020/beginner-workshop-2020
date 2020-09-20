$(".login").click(function(){
    return alert("In working progress");
    return console.log("true");
});


$("#VSubmit").click(function(){
    var searched = $("#VPost").val();
    $("#VMessages").append("<div><h2 id='TextDisplay'>"+searched+"</h2></div><hr>");
    $("#TextDisplay").css({ 'color': 'orange'});
});
$("#SBSubmit").click(function(){
    var searched = $("#SBPost").val();
    $("#SBMessages").append("<div><h2 id='TextDisplay'>"+searched+"</h2></div><hr>");
    $("#TextDisplay").css({ 'color': 'orange'});
});
$("#AUSubmit").click(function(){
    var searched = $("#AUPost").val();
    $("#AUMessages").append("<div><h2 id='TextDisplay'>"+searched+"</h2></div><hr>");
    $("#TextDisplay").css({ 'color': 'orange'});
});
$("#FGSubmit").click(function(){
    var searched = $("#FGPost").val();
    $("#FGMessages").append("<div><h2 id='TextDisplay'>"+searched+"</h2></div><hr>");
    $("#TextDisplay").css({ 'color': 'orange'});
});
$("#VUpload").click(function(){
    var uploaded = $("#VPost").val();
    $("#VMessages").append("<div><img id='Uploadimg' src='"+uploaded+"'></div><hr>");
});
$("#SBUpload").click(function(){
    var uploaded = $("#SBPost").val();
    $("#SBMessages").append("<div><img id='Uploadimg' src='"+uploaded+"'></div><hr>");
});
$("#AUUpload").click(function(){
    var uploaded = $("#AUPost").val();
    $("#AUMessages").append("<div><img id='Uploadimg' src='"+uploaded+"'></div><hr>");
});
$("#FGUpload").click(function(){
    var uploaded = $("#FGPost").val();
    $("#FGMessages").append("<div><img id='Uploadimg' src='"+uploaded+"'></div><hr>");
});
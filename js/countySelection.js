
function resetDepartmentListVisibility(){
    var countySelectedButtons = document.querySelectorAll('[data-county]');
    countySelectedButtons.forEach(element => element.setAttribute("style", ""));
}

function updateDepartmentList(ev, selectBox){
    var tgt = ev.target;
    var tgtValue = tgt.value;
    console.log(tgt, tgtValue, selectBox);
    if(tgt != null && tgtValue != '' && typeof selectBox === 'undefined' ){
        resetDepartmentListVisibility();
        var countySelectedButtons = document.querySelectorAll('[data-county="'+tgtValue+'"]');
        countySelectedButtons.forEach(element => element.setAttribute("style", "display:block !important;"));
    }else{
        var countySelectedButtons = document.querySelectorAll('[data-county="'+selectBox.value+'"]');
        countySelectedButtons.forEach(element => element.setAttribute("style", "display:block !important;"));
    }
}

window.addEventListener("load", function(){
    updateDepartmentList(event, document.getElementById("countySelect"));
});
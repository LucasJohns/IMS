function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("src", ev.target.id);
}

function drop(ev) {

    ev.preventDefault();
    console.log(ev.currentTarget.id, ev.target);
    if (ev.target.id.search('ENG') == -1 && ev.target.children.length == 0) {
        var dragged = ev.dataTransfer.getData("src");
        ev.target.appendChild(document.getElementById(dragged));
    } else {
        var src = document.getElementById(ev.dataTransfer.getData("src"));
        var srcParent = src.parentNode;
        var tgt = ev.currentTarget.firstElementChild;
        console.log(tgt.className);
        if (tgt.parentNode.className != 'sidebarItemContainer') {
            // if (srcParent.className != 'sidebarItemContainer') { //Determines if you are trying to swap blocks from the container to within the table
            ev.currentTarget.replaceChild(src, tgt);
            srcParent.prepend(tgt);
            console.log("oof2");
            // }
        } else {
            tgt.parentNode.prepend(src);
        }
    }


}
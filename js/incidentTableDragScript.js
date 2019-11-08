function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("src", ev.target.id);
}

function drop(ev) {

    ev.preventDefault();
    console.log(ev.target.id.search('cell'), ev.currentTarget.children.length);
    if (ev.target.id.search('ENG') == -1 && ev.target.children.length == 0) {
        var dragged = ev.dataTransfer.getData("src");
        ev.target.appendChild(document.getElementById(dragged));
    } else {
        var src = document.getElementById(ev.dataTransfer.getData("src"));
        var srcParent = src.parentNode;
        var tgt = ev.currentTarget.firstElementChild;
        ev.currentTarget.replaceChild(src, tgt);
        srcParent.appendChild(tgt);
    }


}
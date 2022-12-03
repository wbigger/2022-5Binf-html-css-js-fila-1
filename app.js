
let onPari = function() {
    $(".grid-item.pari").addClass("selected");
}

let onDispari = function() {
    $(".grid-item.dispari").addClass("selected");
}

let onItem = function() {
    let n = $(this).data("n");
    console.log(n);
    $(`.grid-item[data-n=${n}]`).addClass("gold");
}

let init = function() {
    $(".grid-item").click(onItem);    
}

$(document).ready(init);
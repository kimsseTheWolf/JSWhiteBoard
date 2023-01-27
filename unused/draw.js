let x_position = 0;
let y_position = 0;
function initialize(){
    let apply_x_position = x_position + "px";
    let apply_y_position = y_position + "px";
    document.getElementById("div").style.marginLeft = apply_x_position;
    document.getElementById("div").style.marginTop = apply_y_position;
}
function modify_X(num){
    x_position += num;
    let apply_x_position = x_position + "px";
    document.getElementById("div").style.marginLeft = apply_x_position;
}

function modify_Y(num){
    y_position += num;
    let apply_y_position = y_position + "px";
    document.getElementById("div").style.marginTop = apply_y_position;
}
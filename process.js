//board elements list
let boardElementList = [];

//properties
let color = {"red":255,"green":0,"blue":0,"alpha":1};
let border = {"thick":0,"red":0,"green":0,"blue":0,"alpha":0};

//dropdown display
function dropdown_display(tagret_button){
    console.log("Function activated")
    let operate_menu_content = document.querySelector("#operate-menu");
    let dropdown_menu;
    //Event Trigger (Modify here)
    if (tagret_button == "create-square"){
        dropdown_menu = operate_menu_content.querySelector("#create-square-menu");
    }
    else if (tagret_button == "create-line"){
        dropdown_menu = operate_menu_content.querySelector("#create-line-menu");
    }
    else if (tagret_button == "change-color"){
        dropdown_menu = operate_menu_content.querySelector("#color-panel");
    }
    else if (tagret_button == "create-text"){
        dropdown_menu = operate_menu_content.querySelector("#create-text-menu");
    }
    else if (tagret_button == "create-circle"){
        dropdown_menu = operate_menu_content.querySelector("#create-circle-menu");
    }
    //logic (DONT MODIFY)
    if (dropdown_menu.style.display === "none"){
        dropdown_menu.style.display = "block";
        console.log("display");
    }
    else{
        dropdown_menu.style.display = "none";
        console.log("hidden");
    }
}

//create methods
//setup color
function set_color(target,r,g,b,a){
    if (target == "color"){
        color.red = r;
        color.green = g;
        color.blue = b;
        color.alpha = a;
    }
    else{
        border.red = r;
        border.green = g;
        border.blue = b;
        border.alpha = a;
    }
    //sync the color of the display panel
    let operate_menu = document.querySelector("#operate-menu");
    let panel1 = operate_menu.querySelector("#panel1");
    let color_display = panel1.querySelector("#color-display");
    color_display.setAttribute("style","background-color:"+get_color("color"));
    console.log("Setted up!")
}

function btn_set_color(select_value,r,g,b,a){
    if (select_value == "color"){
        set_color("color",r,g,b,a);
    }
    else{
        set_color("border",r,g,b,a);
    }
}

function shortcut_set_color(input_color,type){
    if (input_color == "red"){
        set_color(type,255,34,0,1);
    }
    else if (input_color == "orange"){
        set_color(type,255,136,0,1);
    }
    else if (input_color == "yellow"){
        set_color(type,255,196,0,1);
    }
    else if (input_color == "green"){
        set_color(type,0,189,22,1);
    }
    else if (input_color == "aqua"){
        set_color(type,0,230,230,1);
    }
    else if (input_color == "blue"){
        set_color(type,30,144,255,1);
    }
    else if (input_color == "purple"){
        set_color(type,115,0,255,1);
    }
    else if (input_color == "pink"){
        set_color(type,255,0,242,1);
    }
    else if (input_color == "black"){
        set_color(type,0,0,0,1);
    }
    else if (input_color == "white"){
        set_color(type,255,255,255,1);
    }
    else{
        set_color(type,0,0,0,1);
    }
}

//Turn RGB to HEX
//This function is not written by myself, this source code is from:https://www.cnblogs.com/jtjds/p/15508653.html#:~:text=JS%E5%AE%9E%E7%8E%B0%E9%A2%9C%E8%89%B2%E5%80%BC%E6%A0%BC%E5%BC%8F%E8%BD%AC%E6%8D%A2%20rgb%E5%92%8C%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E7%9A%84%E8%BD%AC%E6%8D%A2%20%E3%80%9016%E8%BF%9B%E5%88%B6%E8%BD%AC%E6%8D%A2%E4%B8%BARGB%20%E3%80%91%2016%E8%BF%9B%E5%88%B6%E4%B8%80%E8%88%AC%E6%9C%893%E4%BD%8D%E6%88%96%E8%80%856%E4%BD%8D%2C%E5%A6%82%E6%9E%9C%E4%B8%BA3%E4%BD%8D%E7%9A%84%E8%AF%9D%EF%BC%8C%E9%9C%80%E8%A6%81%E8%A1%A5%E9%BD%90%E4%B8%BA6%E4%BD%8D,%E8%B0%83%E7%94%A8%E6%96%B9%E6%B3%95%E5%A6%82%EF%BC%9A%20set16ToRgb%20%28%22%233ef%22%29%20%E3%80%90RGB%E8%BD%AC%E6%8D%A2%E4%B8%BA16%E8%BF%9B%E5%88%B6%20%E3%80%91
//Visit the website for more details
function setRgbTo16(str){
    let reg = /^(rgb|RGB)/;
    if(!reg.test(str)){return;}
    var arr = str.slice(4, str.length-1).split(",")
    let color = '#';
    for(var i=0;i<arr.length;i++){
         var t = Number(arr[i]).toString(16)
         if(t == "0"){   //如果为“0”的话，需要补0操作,否则只有5位数
             t =  t + "0"
         }
         color += t;
    }
    return color;
}

//return the color
function get_color(target){
    if (target == "color"){
        return "rgba(" + color.red + "," + color.green + "," + color.blue + "," + color.alpha + ")";
    }
    else{
        return "rgba(" + border.red + "," + border.green + "," + border.blue + "," + border.alpha + ")";
    }
}

//generate the name sequence number
function generate_name_sequence(name){
    let list_length = boardElementList.length;
    return name + list_length;
}

//add items into element list
function item_list_progress(action, value = {}){
    if (action == "new"){
        boardElementList.push(value);
        let panel_content = document.querySelector("#operate-menu");
        let panel1 = panel_content.querySelector("#panel1");
        let list_content = panel1.querySelector("#element-list");
        let list_item_element = document.createElement("div");
        list_item_element.setAttribute("class","menu");
        list_item_element.setAttribute("id",value.name);
        list_item_element.setAttribute("onclick","display_selection_border("+value.name+");")
        list_item_element.innerHTML = value.name;
        list_content.appendChild(list_item_element);
    }
    else{
        let panel_content = document.querySelector("#operate-menu");
        let panel1 = panel_content.querySelector("#panel1");
        let list_content = panel1.querySelector("#element-list");
        for (let i in boardElementList){
            let target_item_id = boardElementList[i].name;
            let target_item = document.getElementById(target_item_id);
            list_content.removeChild(target_item);
        }
    }
}

//clear
function clearup(){
    let board = document.querySelector("#board");
    item_list_progress("remove", {});
    for (let i in boardElementList){
        let target_item_id = boardElementList[i].name;
        let target_item = document.getElementById(target_item_id);
        board.removeChild(target_item);
    }
    boardElementList.splice(0,boardElementList.length);
}

//display a cube outside the square to indicate where it is when item list clicked
function display_selection_border(item_id){
    let board = document.querySelector("#board");
    let target_shape = board.querySelector("#"+item_id);
    let original_shape_css = target_shape.getAttribute("style");
    let modified_shape_css = original_shape_css + "border:5px;border-color:dodgerblue;";
    target_shape.setAttribute("style",modified_shape_css);
    setTimeout(()=>{
        target_shape.setAttribute("style",original_shape_css);
    },3000);
}

//Create a square main function
function create_square(x,y,width,height){

    console.log("create clicked!")
    console.log("x:"+x);
    //setup board
    let board_content = document.getElementById("board");
    //create the basic shape
    let target_create_element = document.createElement("div");
    //setup css attributes for the shape
    let styleAttributeContent = "position:absolute; margin-top:"+y+"px; margin-left:"+x+"px; width:"+width+"px; height:"+height+"px; background-color:"+get_color("color")+"; border:"+border.thick+"px; border-color:"+get_color("border");
    target_create_element.setAttribute("id",generate_name_sequence("square"));
    target_create_element.setAttribute("style", styleAttributeContent);

    //generate the information for the shape in order to save it.
    shape_info = {
        "name": generate_name_sequence("square"),
        "x":x,
        "y":y,
        "width":width,
        "height":height,
        "fillColor":get_color("color"),
        "border":border
    }
    item_list_progress("new",shape_info);
    //draw the shape on the board
    board_content.appendChild(target_create_element);
    console.log("Created!")
}

//create text
function create_text(x,y,size,content){
    console.log(x+" "+y);
    //setup board
    let board = document.getElementById("board");
    //create basis shape
    let target_create_element = document.createElement("div");
    //setup the contents inside the div
    target_create_element.innerHTML = content;
    //setup css format
    target_create_element.setAttribute("id", generate_name_sequence("text"));
    target_create_element.setAttribute("style", "position:absolute;width:fit-content;height:fit-content;margin-top:"+y+"px;margin-left:"+x+"px;color:"+get_color("color")+";font-size:"+size+"px;")
    //generate shape info
    shape_info = {
        "name": generate_name_sequence("text"),
        "x":x,
        "y":y,
        "size":size,
        "content":content,
        "color":get_color("color"),
        "border":border,
    }
    item_list_progress("new",shape_info);
    //draw text
    board.appendChild(target_create_element);
    console.log("Created!");
}

function create_circle(x,y,width,height){
    //setup board
    let board = document.getElementById("board");
    //create basic shape
    let target_create_element = document.createElement("div");
    //setup css format
    let number_width = parseFloat(width);
    let border_radius = number_width/2;
    target_create_element.setAttribute("id", generate_name_sequence("circle"));
    target_create_element.setAttribute("style", "position:absolute;width:"+width+"px;height:"+height+"px;border-radius:"+border_radius+"px;margin-top:"+y+"px;margin-left:"+x+"px;background-color:"+get_color("color")+";")
    //generate info
    shape_info = {
        "name": generate_name_sequence("circle"),
        "x":x,
        "y":y,
        "width":width,
        "height":height,
        "color":get_color("color"),
        "border":border,
    }
    item_list_progress("new",shape_info);
    //draw circle
    board.appendChild(target_create_element);
    console.log("created!");
}

//line
function create_line(start_x,start_y,end_x,end_y,thickness){
    //setup board
    let board = document.getElementById("board");
    let name = generate_name_sequence("line");
    //create a canvas element
    let target_element_canvas = document.createElement("canvas");
    //calculate the basic information
    let canvas_width = Math.abs(parseFloat(start_x)-parseFloat(end_x));
    let canvas_height = Math.abs(parseFloat(start_y)-parseFloat(end_y));
    start_x = parseFloat(start_x);
    start_y = parseFloat(start_y);
    end_x = parseFloat(end_x);
    end_y = parseFloat(end_y);
    //figure out the true beginning point for the canvas
    let real_start_x = 0.0;
    let real_start_y = 0.0;
    let real_end_x = 0.0;
    let real_end_y = 0.0;
    let sides_vertical = "";
    let sides_horizontal = "";
    //x
    if (start_x <= end_x){
        real_start_x = start_x;
        real_end_x = end_x;
        sides_horizontal = "left";
    }
    else if (start_x > end_x){
        real_start_x = end_x;
        real_end_x = start_x;
        sides_horizontal = "right";
    }
    else{
        return console.log("Error");
    }
    //y
    if (start_y <= end_y){
        real_start_y = start_y;
        real_end_y = end_y;
        sides_vertical = "up";
    }
    else if (start_y > end_y){
        real_start_y = end_y;
        real_end_y = start_y;
        sides_vertical = "down";
    }
    else{
        return console.log("Error");
    }
    // Calculate the startup point inside the canvas
    let canvas_start_point_x = 0.0;
    let canvas_start_point_y  = 0.0;
    let canvas_end_point_x = 0.0;
    let canvas_end_point_y  = 0.0;
    if (sides_horizontal == "left"){
        if (sides_vertical == "up"){
            canvas_start_point_x = 0;
            canvas_start_point_y = 0;
            canvas_end_point_x = canvas_width;
            canvas_end_point_y = canvas_height;
        }
        else{
            canvas_start_point_x = 0;
            canvas_start_point_y = canvas_height;
            canvas_end_point_x = canvas_width;
            canvas_end_point_y = 0;
        }
    }
    else{
        if (sides_vertical == "up"){
            canvas_start_point_x = canvas_width;
            canvas_start_point_y = 0;
            canvas_end_point_x = 0;
            canvas_end_point_y = canvas_height;
        }
        else{
            canvas_start_point_x = canvas_width;
            canvas_start_point_y = canvas_height;
            canvas_end_point_x = 0;
            canvas_end_point_y = 0;
        }
    }
    //generate the css style for the canvas
    target_element_canvas.setAttribute("style", "position:absolute;margin-top:"+real_start_y+"px;margin-left:"+real_start_x+"px;");
    target_element_canvas.setAttribute("width", canvas_width);
    target_element_canvas.setAttribute("height", canvas_height);

    //setup attributes for the canvas
    target_element_canvas.setAttribute("id", name);

    //process in inner canvas (The target line should be the crossingline in the canvas)
    let content = target_element_canvas.getContext("2d");
    content.strokeStyle = setRgbTo16(get_color("color"));
    content.lineWidth = thickness;
    content.moveTo(canvas_start_point_x,canvas_start_point_y);
    content.lineTo(canvas_end_point_x,canvas_end_point_y);
    content.stroke();

    //generate shape info
    shape_info = {
        "name": generate_name_sequence("line"),
        "start-x":start_x,
        "start-y":start_y,
        "end-x":end_x,
        "end-y":end_y,
        "color":get_color("color"),
    }
    item_list_progress("new",shape_info);

    //display the canvas
    board.appendChild(target_element_canvas);
}

function pen_draw(){

}
# Documentatino for CodCreate.com

This is a general practice project for Javascript. User could draw and create their own shape by indicating the properties and locations in the panel or draw it by coding in our online coder.

This document will record all the methods we used and make the development easier in the future.

```js
let boardElementList = [];
```

This is the list to record board element. After user create an element inside the board, the properties and information for this shape will add into this list and make the modification and export easier.

```js
let color = {"red":255,"green":0,"blue":0,"alpha":1};
let border = {"thick":0,"red":0,"green":0,"blue":0,"alpha":0};
```

Two dictionary to record the colors. These colors will be used while createing a new shape.

```js
function dropdown_display(tagret_button){}
```

The dropdown buttons control paenl. If there are more dropdown menus in the op bar, please remember to bond the button and the panel together in this function

```js
function set_color(target,r,g,b,a){}
```

This method will help us to setup the color for color or border.

```js
function btn_set_color(select_value,r,g,b,a){}
```

This method will help the user setup the color they want after they click the set color button in the webpage

```js
function shortcut_set_color(input_color,type){}
```

This method records 10 different kinds of pre-set colors for user to directly use instead of entering the rgb value.

```js
function get_color(target){}
```

This method will gather the current color and export as a string: `rgba(r,b,g,a)`

```js
function generate_name_sequence(name){}
```

Output a sequenced name with the shape. E.g.: `square0`,`text1`



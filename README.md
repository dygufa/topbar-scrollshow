# Simple Carousel

The goal of this plugin is not generate the interface for the carousel, it's just provide the back structure. In this way, the developer have more facility do adapt the plugin for his necessities.

## Options

```
var settings = $.extend({
    number: 3,
    size: 150,
    minusArrow: '.sc-minus',
    plusArrow: '.sc-plus',
    container: '.sc-container',
    item: '.sc-item',
    axis: 'x',
    speed: 600
}, options);
```

* number: it's the number of visible itens;
* size: width or height (depending on the axis) of each item;
* minusArrow: class of the "arrow" (button to emit the event) to left or top (depending on the axis);
* plusArrow: class of the "arrow" (button to emit the event) to right or bottom (depending on the axis);
* container: class of the container element (all the structure is inside this);
* item: class of the item;
* axis: axis where will happen the movement;
* speed: how much fast is the movement.
# Topbar SS

The goal of this plugin is to show a fixed topbar when the "scrollHeight" to exceed the value setted in "distance" (pixels).

## Options

```
var settings = $.extend({
    trigger: document,
    distance: 100,
	effect_speed: 250
}, options);
```

* trigger: element being scrolled;
* speed: max distance before show the topbar;
* effect_speed: how fast the fade effect is executed.
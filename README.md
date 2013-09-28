# Topbar SS

The goal of this plugin is show a fixed topbar when the "scrollHeight" to exceed the value setted in "distance" (pixels).

## Options

```
var settings = $.extend({
    trigger: document,
    distance: 100
}, options);
```

* trigger: element being scrolled;
* speed: max distance before show the topbar.
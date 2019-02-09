# Toggle Switch
ES6 module for switches.

- This module attatches to a HTML element and then every time the switch is toggled, a function is run.
- Useful for settings menus


## How to use

#### Import the toggleswitch module into your project

```Javascript
import {
    ToggleSwitch
} from "./toggleswitch.js";
```

#### Initiate your new switch

```Javascript
let mySwitch = new ToggleSwitch({
    element: document.getElementById("demoswitch"),
    toggled: true,
    height: "30px"
});
```

#### Implement your own logic to the onToggle Event

```Javascript
mySwitch.onToggle(function (toggled) {
    if (toggled) {
        //switch is on
        console.log("on");
    } else {
        //switch is off
        console.log("off");
    }
});
```

## Parameters

| Parameter | Default | Datetype | Description |
| --- | --- | --- | --- |
| element | undefined | Element Object | DOM element to attatch to and add switch |
| toggled | false | boolean | Defines if the switch begins in an on or off state |
| height | 60px | String | Height of the switch |
| gap | 4px | String | Gap between the edge of the background and foreground |
| background_off | #cccccc | String (HEX value) | Colour of the background of the switch when in an off state |
| background_on | #21f358 | String (HEX value) | Colour of the background of the switch when in an on state |
| foreground | #ffffff | String (HEX value) | Colour of the foreground of the switch |
| round | true | boolean | Defines if the switch should be round. If not the switch is square |

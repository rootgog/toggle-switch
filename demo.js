import {
    ToggleSwitch
} from "./toggleswitch.js";

window.onload = function () {
    let mySwitch = new ToggleSwitch({
        element: document.getElementById("demoswitch"),
        toggled: true,
        height: "30px"
    });
    mySwitch.onToggle(function (toggled) {
        if (toggled) {
            //switch is on
            console.log("on");
        } else {
            //switch is off
            console.log("off");
        }
    });
}
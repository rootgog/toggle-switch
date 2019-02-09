class ToggleSwitch {
    constructor({
        element = undefined,
        toggled = false,
        height = "60px",
        gap = "4px",
        background_off = "#cccccc",
        background_on = "#21f358",
        foreground = "#ffffff",
        round = true
    }) {
        if (element === undefined) {
            throw new Error("Must provide element to bind to");
        } else {
            element.innerHTML = `
            <label class = "toggleswitch">
                <input type = "checkbox" ${toggled ? "checked='checked'": ""}>
                <span class = "slider ${round ? "round" : ""}"> </span>
            </label>`;
            let checkbox = element.getElementsByTagName("input")[0];
            checkbox.addEventListener('change', this.toggle.bind(this));
            this.toggled = toggled;
            let css = `
            .toggleswitch {
                --toggleswitch-height: ${height};
                --toggleswitch-gap: ${gap};
                --toggleswitch-slider-diameter: calc(var(--toggleswitch-height) - (var(--toggleswitch-gap) * 2));
                position: relative;
                display: inline-block;
                width: calc((var(--toggleswitch-height) - var(--toggleswitch-gap)) * 2);
                height: var(--toggleswitch-height);
            }
            .toggleswitch input {
                opacity: 0;
                width: 0;
                height: 0;
            }
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: ${background_off};
                -webkit-transition: .4s;
                transition: .4s;
            }
            .slider:before {
                position: absolute;
                content: "";
                height: var(--toggleswitch-slider-diameter);
                width: var(--toggleswitch-slider-diameter);
                left: var(--toggleswitch-gap);
                bottom: var(--toggleswitch-gap);
                background-color: ${foreground};
                -webkit-transition: .4s;
                transition: .4s;
            }
            input:checked+.slider {
                background-color: ${background_on};
            }
            input:checked+.slider:before {
                -webkit-transform: translateX(var(--toggleswitch-slider-diameter));
                -ms-transform: translateX(var(--toggleswitch-slider-diameter));
                transform: translateX(var(--toggleswitch-slider-diameter));
            }
            /* Rounded sliders */
            .slider.round {
                border-radius: var(--toggleswitch-height);
            }
            .slider.round:before {
                border-radius: 50%;
            }`;
            let head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet) {
                // This is required for IE8 and below.
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
        }
    }
    toggle(e) {
        this.toggled = this.toggled ? false : true;
        this.onToggleFunc(this.toggled);
    }
    onToggle(handler) {
        if (typeof handler !== 'function') {
            throw new Error("onToggle must be provided with a function");
        } else {
            this.onToggleFunc = handler;
        }
    }
}

export {
    ToggleSwitch
}
import { unitsConverter } from "./conversions.js"

var myButton = document.getElementById("executeCalc")

export function loadEvents() {
    myButton.addEventListener("click", () => {
        unitsConverter()
    })
}

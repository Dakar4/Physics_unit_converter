var input = document.getElementById("inputConversions")
var output = document.getElementById("outputConversions")
var inputSelect = document.getElementById("input")
var outputSelect = document.getElementById("output")

export function unitsConverter() {
    let inputOption = inputSelect.options[inputSelect.selectedIndex].value
    let outputOption = outputSelect.options[outputSelect.selectedIndex].value
    let inputVal = input.value.replace(",", ".")
    

    // DISTANCE
    if (inputOption == "Centimeters") {
        if (outputOption == "Meters") {
            return output.value = inputVal / 100
        }
        if (outputOption == "Kilometers") {
            return output.value = inputVal / 100000
        }
        if (outputOption == "Feets") {
            return output.value = inputVal * 0.032808
        }
        if (outputOption == "Inches") {
            return output.value = inputVal * 0.39370
        }
        if (outputOption == "Yards") {
            return output.value = inputVal * 0.010936
        }
        if (outputOption == "Miles") {
            return output.value = inputVal * 0.0000062137
        }
        output.value = input.value
    }

    if (inputOption == "Meters") {
        if (outputOption == "Centimeters") {
            return output.value = inputVal / 0.01
        }
        if (outputOption == "Kilometers") {
            return output.value = inputVal / 1000
        }
        if (outputOption == "Feets") {
            return output.value = inputVal * 3.2808
        }
        if (outputOption == "Inches") {
            return output.value = inputVal * 39.370
        }
        if (outputOption == "Yards") {
            return output.value = inputVal * 1.0936
        }
        if (outputOption == "Miles") {
            return output.value = inputVal * 0.00062137
        }
        output.value = input.value
    }


    if (inputOption == "Kilometers") {
        if (outputOption == "Centimeters") {
            return output.value = inputVal * 100000
        }
        if (outputOption == "Meters") {
            return output.value = inputVal * 1000
        }
        if (outputOption == "Feets") {
            return output.value = inputVal * 3280.8
        }
        if (outputOption == "Inches") {
            return output.value = inputVal * 39370
        }
        if (outputOption == "Yards") {
            return output.value = inputVal * 1093.6
        }
        if (outputOption == "Miles") {
            return output.value = inputVal * 0.62137
        }
        output.value = input.value
    }

    if (inputOption == "Feets") {
        if (outputOption == "Centimeters") {
            return output.value = inputVal / 0.032808
        }
        if (outputOption == "Meters") {
            return output.value = inputVal / 3.2808
        }
        if (outputOption == "Kilometers") {
            return output.value = inputVal / 3280.8
        }
        if (outputOption == "Inches") {
            return output.value = inputVal * 12
        }
        if (outputOption == "Yards") {
            return output.value = inputVal * 0.33333
        }
        if (outputOption == "Miles") {
            return output.value = inputVal * 0.00018939
        }
        output.value = input.value
    }

    if (inputOption == "Inches") {
        if (outputOption == "Centimeters") {
            return output.value = inputVal / 0.39370
        }
        if (outputOption == "Meters") {
            return output.value = inputVal / 39.370
        }
        if (outputOption == "Kilometers") {
            return output.value = inputVal / 39370
        }
        if (outputOption == "Feets") {
            return output.value = inputVal * 0.083333
        }
        if (outputOption == "Yards") {
            return output.value = inputVal * 0.027778
        }
        if (outputOption == "Miles") {
            return output.value = inputVal * 0.000015783
        }
        output.value = input.value
    }

    if (inputOption == "Yards") {
        if (outputOption == "Centimeters") {
            return output.value = inputVal / 0.010936
        }
        if (outputOption == "Meters") {
            return output.value = inputVal / 1.0936
        }
        if (outputOption == "Kilometers") {
            return output.value = inputVal / 1093.6
        }
        if (outputOption == "Feets") {
            return output.value = inputVal * 3
        }
        if (outputOption == "Inches") {
            return output.value = inputVal * 36
        }
        if (outputOption == "Miles") {
            return output.value = inputVal * 0.00056818
        }
        output.value = input.value
    }

    if (inputOption == "Miles") {
        if (outputOption == "Centimeters") {
            return output.value = inputVal / 0.0000062137
        }
        if (outputOption == "Meters") {
            return output.value = inputVal / 0.00062137
        }
        if (outputOption == "Kilometers") {
            return output.value = inputVal / 0.62137
        }
        if (outputOption == "Feets") {
            return output.value = inputVal * 5280
        }
        if (outputOption == "Inches") {
            return output.value = inputVal * 63360
        }
        if (outputOption == "Yards") {
            return output.value = inputVal * 1760
        }
        output.value = input.value
    }






    // TIME
    if (inputOption == "Seconds") {
        if (outputOption == "Minutes") {
            return output.value = inputVal / 60
        }
        if (outputOption == "Hours") {
            return output.value = inputVal / 3600
        }
        if (outputOption == "Days") {
            return output.value = inputVal / 86400
        }
        if (outputOption == "Weeks") {
            return output.value = inputVal / 604800
        }
        if (outputOption == "Months") {
            return output.value = inputVal / 2629743
        }
        if (outputOption == "Years") {
            return output.value = inputVal / 31536000
        }
        if (outputOption == "Decades") {
            return output.value = inputVal / 315360000
        }
        if (outputOption == "Centuries") {
            return output.value = inputVal / 3153600000
        }
        if (outputOption == "Millenia") {
            console.log(output.value)
            return output.value = inputVal / 31536000000
        }
        output.value = input.value
    }

    if (inputOption == "Minutes") {
        if (outputOption == "Seconds") {
            return output.value = inputVal * 60
        }
        if (outputOption == "Hours") {
            return output.value = inputVal / 60
        }
        if (outputOption == "Days") {
            return output.value = inputVal / 1440
        }
        if (outputOption == "Weeks") {
            return output.value = inputVal / 10080
        }
        if (outputOption == "Months") {
            return output.value = inputVal / 43800
        }
        if (outputOption == "Years") {
            return output.value = inputVal / 525600
        }
        if (outputOption == "Decades") {
            return output.value = inputVal / 5256000
        }
        if (outputOption == "Centuries") {
            return output.value = inputVal / 52560000
        }
        if (outputOption == "Millenia") {
            return output.value = inputVal / 525600000
        }
        output.value = input.value
    }


    if (inputOption == "Hours") {
        if (outputOption == "Seconds") {
            return output.value = inputVal * 3600
        }
        if (outputOption == "Minutes") {
            return output.value = inputVal * 60
        }
        if (outputOption == "Days") {
            return output.value = inputVal / 24
        }
        if (outputOption == "Weeks") {
            return output.value = inputVal / 168
        }
        if (outputOption == "Months") {
            return output.value = inputVal / 730
        }
        if (outputOption == "Years") {
            return output.value = inputVal / 8760
        }
        if (outputOption == "Decades") {
            return output.value = inputVal / 87600
        }
        if (outputOption == "Centuries") {
            return output.value = inputVal / 876000
        }
        if (outputOption == "Millenia") {
            return output.value = inputVal / 8760000
        }
        output.value = input.value
    }

    if (inputOption == "Days") {
        if (outputOption == "Seconds") {
            return output.value = inputVal * 86400
        }
        if (outputOption == "Minutes") {
            return output.value = inputVal * 1440
        }
        if (outputOption == "Hours") {
            return output.value = inputVal * 24
        }
        if (outputOption == "Weeks") {
            return output.value = inputVal / 7
        }
        if (outputOption == "Months") {
            return output.value = inputVal / 30.4167 // media entres los 12 meses
        }
        if (outputOption == "Years") {
            return output.value = inputVal / 365
        }
        if (outputOption == "Decades") {
            return output.value = inputVal / 3650
        }
        if (outputOption == "Centuries") {
            return output.value = inputVal / 36500
        }
        if (outputOption == "Millenia") {
            return output.value = inputVal / 365000
        }
        output.value = input.value
    }

    if (inputOption == "Weeks") {
        if (outputOption == "Seconds") {
            return output.value = inputVal * 604800
        }
        if (outputOption == "Minutes") {
            return output.value = inputVal * 10080
        }
        if (outputOption == "Hours") {
            return output.value = inputVal * 168
        }
        if (outputOption == "Days") {
            return output.value = inputVal * 7
        }
        if (outputOption == "Months") {
            return output.value = inputVal / 4.34524
        }
        if (outputOption == "Years") {
            return output.value = inputVal / 52.1429
        }
        if (outputOption == "Decades") {
            return output.value = inputVal / 521.429
        }
        if (outputOption == "Centuries") {
            return output.value = inputVal / 5214.29
        }
        if (outputOption == "Millenia") {
            return output.value = inputVal / 52142.9
        }
        output.value = input.value
    }

    if (inputOption == "Months") {
        if (outputOption == "Seconds") {
            return output.value = inputVal * 2629800
        }
        if (outputOption == "Minutes") {
            return output.value = inputVal * 43800
        }
        if (outputOption == "Hours") {
            return output.value = inputVal * 730
        }
        if (outputOption == "Days") {
            return output.value = inputVal * 30.4167
        }
        if (outputOption == "Weeks") {
            return output.value = inputVal * 4.34524
        }
        if (outputOption == "Years") {
            return output.value = inputVal / 12
        }
        if (outputOption == "Decades") {
            return output.value = inputVal / 120
        }
        if (outputOption == "Centuries") {
            return output.value = inputVal / 1200
        }
        if (outputOption == "Millenia") {
            return output.value = inputVal / 12000
        }
        output.value = input.value
    }

    if (inputOption == "Years") {
        if (outputOption == "Seconds") {
            return output.value = inputVal * 31536000
        }
        if (outputOption == "Minutes") {
            return output.value = inputVal * 525600
        }
        if (outputOption == "Hours") {
            return output.value = inputVal * 8760
        }
        if (outputOption == "Days") {
            return output.value = inputVal * 365
        }
        if (outputOption == "Weeks") {
            return output.value = inputVal * 52.1429
        }
        if (outputOption == "Months") {
            return output.value = inputVal * 12
        }
        if (outputOption == "Decades") {
            return output.value = inputVal / 10
        }
        if (outputOption == "Centuries") {
            return output.value = inputVal / 100
        }
        if (outputOption == "Millenia") {
            return output.value = inputVal / 1000
        }
        output.value = input.value
    }

    if (inputOption == "Decades") {
        if (outputOption == "Seconds") {
            return output.value = inputVal * 315360000
        }
        if (outputOption == "Minutes") {
            return output.value = inputVal * 5259487.66
        }
        if (outputOption == "Hours") {
            return output.value = inputVal * 87600
        }
        if (outputOption == "Days") {
            return output.value = inputVal * 3650
        }
        if (outputOption == "Weeks") {
            return output.value = inputVal * 521.429
        }
        if (outputOption == "Months") {
            return output.value = inputVal * 120
        }
        if (outputOption == "Years") {
            return output.value = inputVal * 10
        }
        if (outputOption == "Centuries") {
            return output.value = inputVal / 100
        }
        if (outputOption == "Millenia") {
            return output.value = inputVal / 1000
        }
        output.value = input.value
    }

    if (inputOption == "Centuries") {
        if (outputOption == "Seconds") {
            return output.value = inputVal * 3155692600
        }
        if (outputOption == "Minutes") {
            return output.value = inputVal * 52560000
        }
        if (outputOption == "Hours") {
            return output.value = inputVal * 876000
        }
        if (outputOption == "Days") {
            return output.value = inputVal * 36500
        }
        if (outputOption == "Weeks") {
            return output.value = inputVal * 5214.29
        }
        if (outputOption == "Months") {
            return output.value = inputVal * 1200
        }
        if (outputOption == "Years") {
            return output.value = inputVal * 100
        }
        if (outputOption == "Decades") {
            return output.value = inputVal * 10
        }
        if (outputOption == "Millenia") {
            return output.value = inputVal / 10
        }
        output.value = input.value
    }

    if (inputOption == "Millenia") {
        if (outputOption == "Seconds") {
            return output.value = inputVal *  31536000000
        }
        if (outputOption == "Minutes") {
            return output.value = inputVal * 525600000
        }
        if (outputOption == "Hours") {
            return output.value = inputVal * 8760000
        }
        if (outputOption == "Days") {
            return output.value = inputVal * 365000
        }
        if (outputOption == "Weeks") {
            return output.value = inputVal * 52142.9
        }
        if (outputOption == "Months") {
            return output.value = inputVal * 12000
        }
        if (outputOption == "Years") {
            return output.value = inputVal * 1000
        }
        if (outputOption == "Decades") {
            return output.value = inputVal * 100
        }
        if (outputOption == "Centuries") {
            return output.value = inputVal * 10
        }
        output.value = input.value
    }
}

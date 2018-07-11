/**
* Jordan Electronics
* May, 2018
* Based on Weatherbit code from Sparkfun:
* https://github.com/sparkfun/pxt-weather-bit
*
* Development environment specifics:
* Written in Microsoft PXT
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Distributed as-is; no warranty is given.
*/

//% color=#5042f4 icon="\uf2c9"
namespace DS1820 {

    // Functions for interfacing with the DS1820
    /**
     * Reads the temperature from the one-wire temperature sensor.
     * Returns a 4 digit number. value should be divided by 100 to get 
     *temperature in hundreths of a degree centigrade. 
     * block="Temperature(C)"
     */
    //% weight=10 blockId="DS1820_Temp" 
    //% shim=DS1820::Temperature
    //% block="Temperature(C)"
    export function Temperature(): number {
        // Fake function for simulator
        return 0
    }

    /**
     * Convert the 4 digit number to celsius degree rounded to 2 d.p.
     * Return a string. 
     */
    //% blockId="DS1820_Temp_celsius"
    //% block="Convert to celsius %temp"
    export function celsius(temp: number): string{
        let whole = temp / 100
        let decimal = temp % 100
        if (decimal >= 10){
            return whole +"." + decimal
        }
        else {
            return whole + "." + "0" + decimal
        }
    }
}

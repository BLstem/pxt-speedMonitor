//% color=#1D78CB icon="\uf1b9" block="Speed Monitor"

namespace speedMonitor {

    /*
    * Calcluting car speed and multiply by 10000
    */
    function calculatingSpeed(n: number, t: number): number {
        let pi = 3140   /*pi * 1000*/
        let d = 68      /*d * 10*/
        let tmp = (pi * d / 20) * n / t
        return tmp
    }

    /*
    * Measuring car speed and return in string. Suitable for learning pack 3, 6 and 7
    */
    function calculatingSpeed_float(n: number, t: number): string {
        let speed_tmp = calculatingSpeed(n, t)
        let whole = speed_tmp / 10000
        let decimal = speed_tmp % 10000
        if (decimal >= 1000) {
            return whole + "." + decimal
        }
        else {
            return whole + "." + "0" + decimal
        }
    }

    //% blockId="motor_speed"
    //%block="Motor speed %count| time %time"
    export function speedCalculating(count: number, time: number): string {
        return calculatingSpeed_float(count, time)
    }

    //% blockId="car_speed"
    //%block="Car speed Left sensor %countL| Right sensor %countR| Time %time"
    export function carSpeed(countL: number, countR: number, time: number): string {
        let carCount = (countL + countR) / 2
        return calculatingSpeed_float(carCount, time)
    }

}
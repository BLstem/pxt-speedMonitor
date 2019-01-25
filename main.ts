//% color=#1D78CB icon="\uf1b9" block="Speedometer"
namespace speedMonitor {
    let pi = 3.14
    let d = 6.8

    //%blockId="motor_speed" blockExternalInputs=true
    //%block="Motor speed: Dial count %count| time (s) %time"
    export function speedCalculating(count: number, time: number): number {
        return (pi * d * count / 20) / time
    }

    //%blockId="car_speed" blockExternalInputs=true
    //%block="Car speed: Left sensor %countL| Right sensor %countR| time (s) %time"
    export function carSpeed(countL: number, countR: number, time: number): number {
        let carCount = (countL + countR) / 2
        return (pi * d * carCount / 20) / time
    }
}

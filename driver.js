const event=require("./event")
require("./driverEvents")

function pickUp(){
    event.emit('pick the package up');
}

function transit(){
    event.emit('package is in transit');
}
function scan(){
    event.emit(' scan a package');
}

module.exports={
    driver:console.log("********* As a driver **********"),
    pickUp:pickUp(),
    transit:transit(),
    scan:scan(),
    log:console.log()
}

const event=require("./event")
require("./vendorEvents")

function pickUp(){
    event.emit('vendor pick the package up');
}

function transit(){
    event.emit('vendor package is in transit');
}
function scan(){
    event.emit('vendor  scan a package');
}

module.exports={
    vendor:console.log("********* As a vendor **********"),
    pickUp:pickUp(),
    transit:transit(),
    scan:scan(),
    log:console.log()
}

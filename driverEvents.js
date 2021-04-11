const event=require("./event")
event.on("pick the package up",()=>{
    console.log("pick the package up")
    })
    event.on("package is in transit",()=>{
        console.log("the package is in transit")
        })
        event.on(" scan a package",()=>{
            console.log("he package has been delivered")
            })
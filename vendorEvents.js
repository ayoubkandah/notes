const event=require("./event")
event.on("vendor pick the package up",()=>{
    console.log("when  the package will be pick up ?")
    })
    event.on("vendor package is in transit",()=>{
        console.log("is the package  in transit ?")
        })
        event.on("vendor  scan a package",()=>{
            console.log("when the package has been delivered?")
            })
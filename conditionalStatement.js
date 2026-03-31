function browserName(input){
    if(input === "Chrome"){
        console.log("Launch browser - " + input)
    } else if (input === "Bing") {
      console.log("Launch browser - " + input)
    } else {
        console.log("Not a Browser - " + input)
    }
}


function testType(input){
    switch(input){
        case("Smoke"):
            console.log("Testing Type is - " + input)
            break;
        case("Regression"):
            console.log("Testing Type is - " + input)
            break;
        case("Sanity"):
            console.log("Testing Type is - " + input)
            break;
        default:
            console.log("Default testing - Smoke")
    }
}

browserName("Chrome")
testType("Regression")
function verifyCharacters(textJoin) {
    resetGeneralMsg()
    if (textJoin.value.length >= 50) {
        document.getElementById(textJoin.id + "ErrorMsg").style.visibility = "visible"
        return false
    }
    else{
        document.getElementById(textJoin.id + "ErrorMsg").style.visibility = "hidden"
        return true
    }
}

function verifyAge(ageJoin){
    resetGeneralMsg()
    if (ageJoin.value >= 100){
        document.getElementById(ageJoin.id + "ErrorMsg").style.visibility = "visible"
        return false
    }
    else{
        document.getElementById(ageJoin.id + "ErrorMsg").style.visibility = "hidden"
        return true
    }
}

function verifyDate(dateJoin){
    resetGeneralMsg()
    if (dateJoin.value == ""){
        document.getElementById(dateJoin.id + "ErrorMsg").style.visibility = "visible"
        return false
    }
    else{
        document.getElementById(dateJoin.id + "ErrorMsg").style.visibility = "hidden"
        return true
    }
}

function verifyEmpty(){
    let names = document.getElementById("names")
    let lastNames = document.getElementById("lastNames")
    let age = document.getElementById("age")
    let date = document.getElementById("date")

    if(names.value == "" || lastNames.value == "" || age.value == "" || date.value == ""){
        console.log("log: " + names.value + " " + lastNames.value + " " + age.value + " " + date.value)
        document.getElementById("generalError").style.visibility = "visible"
        return true
    }
    return false
}

function resetGeneralMsg(){
    document.getElementById("generalError").style.visibility = "hidden"
}

function verifyData(){
    let bool = false;
    let names = document.getElementById("names")
    let lastNames = document.getElementById("lastNames")
    let age = document.getElementById("age")
    let date = document.getElementById("date")

    if(verifyCharacters(names) && verifyCharacters(lastNames) && verifyAge(age) && verifyDate(date) && !verifyEmpty())
        window.location.href = 'formularioRealizado.html';
}
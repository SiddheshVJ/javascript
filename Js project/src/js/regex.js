let regex = / /

function countryChange() {
    let conytryName = document.getElementById('lst-country').value
    let flag = document.getElementById("flag")

    let mobile = document.getElementById('txtmobile')


    if (conytryName == "india") {
        flag.src = "images/India.png"
        mobile.placeholder = "+91 and 10digit"
        regex = /\+91\d{10}/
    }
    if (conytryName == "uk") {
        flag.src = "images/UK.png"
        mobile.placeholder = "+(44)(20) 1234 5678"
        regex = /\+\(44\)\(\d{2}\)\s\d{4}\s\d{4}/
    }
    if (conytryName == "us") {
        flag.src = "images/US.png"
        mobile.placeholder = "+(1)(245) 555-0100"
        regex = /\+\(1\)\(\d{3}\)\s\d{3}-\d{4}/
    }
}

function registerClick() {
    let mobileval = document.getElementById('txtmobile').value
    var mobilError = document.getElementById('mobileerr')

    if (mobileval.match(regex)) {
        document.write('Register')
    } else {
        mobilError.innerHTML = `Invalid Mobile - ${document.getElementById('txtmobile').placeholder}`
    }
}
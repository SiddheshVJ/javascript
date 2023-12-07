// function getTime() {
//     var now = new Date()
//     document.getElementById('time').innerHTML = now.toLocaleTimeString()
// }


// function bodyLoad() {
//     var msg = document.getElementById('msg')
//     var now = new Date()
//     if (now.getHours() >= 0 && now.getHours() <= 12) {
//         msg.innerHTML = 'Good Morning'
//     } else if (now.getHours() > 12 && now.getHours() <= 17) {
//         msg.innerHTML = 'Good Afternoon'
//     } else {
//         msg.innerHTML = 'Good Evening'
//     }
//     date = document.getElementById('cal').innerHTML = now.toLocaleDateString()
//     setInterval(getTime, 1000)
// }

function showDate() {
    var now = new Date(document.getElementById("date").value)
    console.log(now)
    document.getElementById("showDate").innerHTML = now.toLocaleDateString()
}

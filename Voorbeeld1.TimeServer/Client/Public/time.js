// fetch("/time")
//     .then((response) => {
//         return response.json();
//     })
//     .then((objectWithTime) => {
//         document.getElementById("time").innerText = objectWithTime.time;
//     })
//     .catch((err) => {
//         console.error(err);
//     });
(async function() {
    try {
        let response = await fetch("/time");
        let objectWithTime = await response.json();
        document.getElementById("time").innerText = objectWithTime.time;
    } catch (err) {
        console.error(err);
    }
})();

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

    let objectToPost = {
        getal1: parseFloat(document.getElementById("getal1").value),
        getal2: parseFloat(document.getElementById("getal2").value)
    }
    let response = await fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectToPost)
    })
    let result = await response.json();
    
    document.getElementById("result").innerText = result.sum;
});
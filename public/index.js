

// Le help https://stackoverflow.com/questions/75772057/how-to-communicate-between-client-side-and-server-side-in-node-and-express-js

document.getElementById("submit-data").addEventListener("click", async () => {
    const textArea = document.getElementById("input-text").value;

    const reqBody = { text: textArea };

    // fetch response to post request
    const res = await fetch("/list", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
    });

    // le data
    const data = await res.json();
    console.log("Resv:", data.list);
});

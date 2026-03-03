function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "admin" && password === "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").innerText = "Invalid Login Details";
    }
}

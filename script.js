function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user === "admin" && pass === "1234") {
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerHTML = "Wrong username or password";
    }
}

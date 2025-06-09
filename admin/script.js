function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "geneksis123") {
    localStorage.setItem("login", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("status").textContent = "Username atau password salah!";
  }
}

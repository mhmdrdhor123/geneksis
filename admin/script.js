function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Username dan password bisa lo ganti sendiri
  if (user === "admin" && pass === "geneksis123") {
    localStorage.setItem("login", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("status").textContent = "Username atau password salah!";
  }
}

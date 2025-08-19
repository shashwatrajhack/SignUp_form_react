export const handleSave = () => {
  if (
    saveEmail.current.value == "" ||
    savePassword.current.value == "" ||
    (toggle && saveUsername.current.value == "")
  ) {
    return window.alert("Add user !!");
  }

  // LOGIN
  if (!toggle) {
    const raw = localStorage.getItem("data");
    if (!raw) return window.alert("User doesn't exist");

    let users = [];
    try {
      users = JSON.parse(raw);
    } catch {
      return window.alert("Corrupted user data");
    }

    const emailInput = saveEmail.current.value.trim().toLowerCase();
    const passInput = savePassword.current.value;

    // normalize each stored user to { email, password }
    const user = users
      .map((u) => ({
        email: (u.email ?? u.saveEmail ?? "").trim().toLowerCase(),
        password: (u.password ?? u.savePassword ?? "").trim(),
      }))
      .find((u) => u.email === emailInput && u.password === passInput);

    if (user) {
      window.alert("Login successful ✅");
    } else {
      window.alert("Invalid credentials ❌");
    }
  }

  if (saveEmail && savePassword) {
    if (toggle && saveUsername) {
      const userData = {
        saveEmail: saveEmail.current.value,
        savePassword: savePassword.current.value,
        userName: saveUsername.current.value,
      };

      const existingData = JSON.parse(localStorage.getItem("data")) || [];

      existingData.push(userData);
      localStorage.setItem("data", JSON.stringify(existingData));
      alert("User data saved to local storage as an object!");
    }
  }

  saveEmail.current.value = "";
  savePassword.current.value = "";
  saveUsername.current.value = "";
};

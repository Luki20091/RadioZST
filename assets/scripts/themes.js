document.getElementById("theme").addEventListener("click", changeTheme);

function changeTheme() {
    const currentTheme = localStorage.getItem("theme");

    const typeTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute('data-theme', typeTheme);
    
    if (typeTheme == "light") {
        document.getElementById("theme").title = "Kliknij, aby zmienić motyw na ciemny.";
    } else {
        document.getElementById("theme").title = "Kliknij, aby zmienić motyw na jasny.";
    };

    localStorage.setItem("theme", typeTheme);
};

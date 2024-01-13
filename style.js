let burgerBtn = document.querySelectorAll(".burger-menu-btn");
let burgerMenu = document.querySelectorAll(".burger-menu");

let isBurgerOpen = false;

burgerBtn.forEach(function(btn) {
    btn.onclick = function () {
        if(!isBurgerOpen) {
            burgerMenu.forEach(function(menu) {
                menu.style.display = "block";
            });
            this.style.backgroundPosition = "center, left 50px center";
            isBurgerOpen = true;
        }
        else if (isBurgerOpen) {
            burgerMenu.forEach(function(menu) {
                menu.style.display = "none";
            });
            this.style.backgroundPosition = "center, center left 50px"
            isBurgerOpen = false;
        }
    }
});
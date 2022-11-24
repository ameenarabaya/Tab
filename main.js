let tabul = document.querySelectorAll("ul a li");
let divs = document.querySelectorAll(".all");

tabul.forEach(function (li) {
    li.addEventListener('click', function (e) {
        tabul.forEach(function (li) {
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");

        divs.forEach(function (div) {
            div.style.display = "none";
        })
        console.log(e.currentTarget.dataset.cont);
        document.querySelector(e.currentTarget.dataset.cont).style.display = "grid";
    })
})

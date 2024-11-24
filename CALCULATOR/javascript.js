let backBtn = document.querySelector(".container .scientific-btns .back-btn");
let scientificBtnBox = document.querySelector(".container .scientific-btns ");
let lightModeBtn = document.querySelector(".container .input-box .toggle-btn #light-mode-btn");
let darkModeBtn = document.querySelector(".container .input-box .toggle-btn #dark-mode-btn");
let container = document.querySelector(".container");
let input = document.querySelector(".container .input-box input");
let result = document.querySelector(".container .input-box .result");
let allBtns = document.querySelectorAll(".container .btn");

for (let item of allBtns) {
    item.addEventListener("click", (e) => {
        let btnText = e.target.innerHTML;
        if (btnText == "×") {
            btnText = '*';
        }
        if (btnText == "÷") {
            btnText = '/';
        }
        if (btnText == "%") {
            btnText = '/100';
        }
        input.value += btnText;
    });
}

let sin = () => {
    let inputValue = parseFloat(input.value);
    if (!isNaN(inputValue)) {
        result.innerHTML = Math.sin(inputValue);
    } else {
        result.innerHTML = "Error";
    }
};

let cos = () => {
    let inputValue = parseFloat(input.value);
    if (!isNaN(inputValue)) {
        result.innerHTML = Math.cos(inputValue);
    } else {
        result.innerHTML = "Error";
    }
};

let tan = () => {
    let inputValue = parseFloat(input.value);
    if (!isNaN(inputValue)) {
        result.innerHTML = Math.tan(inputValue);
    } else {
        result.innerHTML = "Error";
    }
};

let fact = () => {
    let number = parseInt(input.value);
    if (!isNaN(number) && number >= 0) {
        let x = 1;
        for (let i = 1; i <= number; i++) {
            x *= i;
        }
        result.innerHTML = x;
    } else {
        result.innerHTML = "Error";
    }
};

let pi = () => {
    input.value = "3.14159";
};

let log = () => {
    let inputValue = parseFloat(input.value);
    if (!isNaN(inputValue) && inputValue > 0) {
        result.innerHTML = Math.log(inputValue);
    } else {
        result.innerHTML = "Error";
    }
};

let sqrt = () => {
    let inputValue = parseFloat(input.value);
    if (!isNaN(inputValue) && inputValue >= 0) {
        result.innerHTML = Math.sqrt(inputValue);
    } else {
        result.innerHTML = "Error";
    }
};

let e = () => {
    input.value = "2.71828";
};

let pow = () => {
    let base = parseFloat(input.value);
    if (!isNaN(base)) {
        result.innerHTML = Math.pow(base, 2);
    } else {
        result.innerHTML = "Error";
    }
};

backBtn.addEventListener("click", () => {
    scientificBtnBox.classList.toggle("active");
});

let calculate = () => {
    try {
        result.innerHTML = eval(input.value);
    } catch (error) {
        result.innerHTML = "Error";
    }
};

let backspace = () => {
    input.value = input.value.slice(0, -1);
    if (input.value === "") {
        result.innerHTML = "0";
    }
};

lightModeBtn.addEventListener("click", () => {
    container.classList.add("light");
    lightModeBtn.style.display = "none";
    darkModeBtn.style.display = "block";
});

darkModeBtn.addEventListener("click", () => {
    container.classList.remove("light");
    lightModeBtn.style.display = "block";
    darkModeBtn.style.display = "none";
});

let clearInput = () => {
    input.value = '';
    result.innerHTML = 0;
};
let productsUL = document.querySelector("#products");
let firstTab = document.querySelector("#tab-first");
let previousTab = document.querySelector("#tab-previous");
let nextTab = document.querySelector("#tab-next");
let lastTab = document.querySelector("#tab-last");
let tabsContainer = document.querySelector(".tabs-container");
let pageNumberPrint = document.querySelector("#page-number");
let userInput = document.querySelector("#user-input");
let userInputBtn = document.querySelector("#user-input-btn");

userInputBtn.onclick = addUserInput;

productsUL.style.display = "none";
tabsContainer.style.display = "none";

function addUserInput() {
    productsUL.style.display = "flex";
    tabsContainer.style.display = "flex";
    var productList = [];
    let pageNumber = 1;
    let productsPerPage = 10;
    let productsNumber = userInput.value;

    console.log(userInput.value);

    // creating an arrray of objects for the given number products
    for (i = 1; i <= productsNumber; i++) {
        let priceGenerator = Math.floor(Math.random() * 100);
        productList.push({ product: i, price: priceGenerator });
    }

    let totalPages = Math.ceil(productList.length / productsPerPage);

    // printing a page into Html
    function printProducts(pageNumber) {
        let pageStart = pageNumber * productsPerPage - productsPerPage;
        let pageEnd = pageNumber * productsPerPage;
        productsUL.innerHTML = "";
        for (i = pageStart; i < pageEnd; i++) {
            productsUL.innerHTML += `<li class="product-item"> <span> Product ${productList[i].product} </span>  <span> Price: ${productList[i].price} $</span> </li>`;
            pageNumberPrint.innerHTML = `${pageNumber} of ${totalPages} `;
        }
    }

    printProducts(pageNumber);

    // Navigation tabs
    nextTab.addEventListener("click", nextP);
    previousTab.addEventListener("click", prevP);
    firstTab.addEventListener("click", firstP);
    lastTab.addEventListener("click", lastP);

    function nextP() {
        if (pageNumber >= 1 && pageNumber < totalPages) {
            pageNumber++;
            printProducts(pageNumber);
        }
    }

    function prevP() {
        if (pageNumber > 1 && pageNumber <= totalPages) {
            pageNumber--;
            printProducts(pageNumber);
        } else {
            pageNumber = 1;
        }
    }

    function firstP() {
        pageNumber = 1;
        printProducts(pageNumber);
    }

    function lastP() {
        pageNumber = totalPages;
        printProducts(pageNumber);
    }
}
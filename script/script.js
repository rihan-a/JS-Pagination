let productsUL = document.querySelector("#products");
let firstTab = document.querySelector("#tab-first");
let previousTab = document.querySelector("#tab-previous");
let nextTab = document.querySelector("#tab-next");
let lastTab = document.querySelector("#tab-last");
let pageNumberPrint = document.querySelector("#page-number");

var productList = [];
let page = 0;
let pageNumber = 1;
let productsPerPage = 10;
let productsNumber = 125;

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
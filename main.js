
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDescription = document.getElementById("productDescription");
var products = [];
var btn = document.getElementById("btn");

var ind = '';


if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"));
    display();
}
else {
    products = [];
}


function addProduct() {

    if (btn.innerHTML == "Add") {
        var product = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            desc: productDescription.value
        }

        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        console.log(products);
        display();
        clear();
    }
    else if (btn.innerHTML == "Update") {
        products[ind].name = productName.value;
        products[ind].price = productPrice.value;
        products[ind].category = productCategory.value;
        products[ind].desc = productDescription.value;
        clear();
        localStorage.setItem("products", JSON.stringify(products));
        display();
    }
    btn.innerHTML = "Add";

}

function clear() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDescription.value = "";
}

function display() {
    var pask = '';
    for (i = 0; i < products.length; i++) {
        pask += `<tr>
        <td>${i}</td>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].category}</td>
        <td>${products[i].desc}</td>
        <td><button onclick="deleteElement(${i})" class="btn btn-danger">delete</button></td>
        <td><button onclick="updateElement(${i})" class="btn btn-warning">update</button></td>
    </tr>`
    }
    document.getElementById("demo").innerHTML = pask;
}

function deleteElement(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    display();
}

function updateElement(index) {
    productName.value = products[index].name;
    productPrice.value = products[index].price;
    productCategory.value = products[index].category;
    productDescription.value = products[index].desc;
    ind = index;
    btn.innerHTML = "Update"
}


function searchByName(sname) {

    var newprod = [];
    for (i = 0; i < products.length; i++) {
        if (products[i].name.toLowerCase().includes(sname.toLowerCase())) {
            console.log(i);
            newprod.push(products[i]);
        }

    }
    var pask = '';
    for (i = 0; i < newprod.length; i++) {
        pask += `<tr>
        <td>${i}</td>
        <td>${newprod[i].name}</td>
        <td>${newprod[i].price}</td>
        <td>${newprod[i].category}</td>
        <td>${newprod[i].desc}</td>
        <td><button onclick="deleteElement(${i})" class="btn btn-danger">delete</button></td>
        <td><button onclick="updateElement(${i})" class="btn btn-warning">update</button></td>
    </tr>`
    }
    document.getElementById("demo").innerHTML = pask;

}
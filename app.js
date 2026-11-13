fetch('https://fakestoreapi.com/products').then(response => response.json()).then(data => {
    console.log(data)
    loadData(data);

});

function loadData(data) {

    let body = "";
    data.forEach(element => {
        body += `
       <div class = "col">
            <section class="card" style="max-width: 320px">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h4 class="card-title">${element.title}</h4>
                    <p class="card-text">${element.description}</p>
                    <a href="item.html" class="btn-solid theme-primary">&&{price}Buy Now</a>
                </div>
            </section>
        </div>
        `
    });

    document.getElementById("productSection01").innerHTML = body;

}
//===============================================================================
let itemList = [];
 





function addItemOnAction() {

    console.log("Add Item");

    let txtName = document.getElementById("txtName").value;
    let txtQun = document.getElementById("txtQun").value;
    let txtPrice = document.getElementById("txtPrice").value;
    let txtmaDate = document.getElementById("txtmaDate").value;
    let txtExpdate = document.getElementById("txtExpdate").value;

    console.log(txtName);
    console.log(txtQun);
    console.log(txtPrice);
    console.log(txtmaDate);
    console.log(txtExpdate);

    //let item = {}

    itemList.push(
        {
            name:txtName,
            qun:txtQun,
            price:txtPrice,
            mdate:txtmaDate,
            edate:txtExpdate


        }
    );
    

    console.log(itemList);

    let body="";

    for(let item of itemList){
        body+= `
            <tr>
                <td>${item.name}</td>
                <td>${item.qun}</td>
                <td>${item.price}</td>
                <td>${item.mdate}</td>
                <td>${item.edate}</td>
            </tr>
        
        `
    }

    console.log(body);
    document.getElementById("tblItem").innerHTML = body;
}
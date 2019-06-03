var order = [];

//lägger till en order till kundkorgen
function addOrder(id, type) {

    var OBJ;
    //hemtar det rätta objektet i från DataList.js
    if(type == 1) OBJ = getBuffe(id);
    else if(type == 2) OBJ = getRatt(id);
    else if(type == 3) OBJ = getDryck(id);
    
    //hämtar den sparade orden i från localstorage
    orders = JSON.parse(window.localStorage.getItem("Orders")) == null ? [] : JSON.parse(window.localStorage.getItem("Orders"));

    //antal produkter i från html inputen
    var antal = document.getElementsByClassName("numberInput" + type + id)[0].value;

    //skapar en ny order
    var order = {
        id: orders.length,
        antalPers: antal,
        prise: OBJ.prisePers,
        totalPrise: (OBJ.prisePers * antal),
        name: OBJ.name
    };

    //uppdaterar localStorage
    orders.push(order);
    window.localStorage.setItem("Orders", JSON.stringify(orders));

    //medelar användaren om att den är tillagd i vagnen
    alert(OBJ.name + " added to cart");
}

//betala för allt du har i kundkorgen
function buy() {

    var kortnummer = document.getElementById("kortnummer");
    var moth = document.getElementById("moth");
    var year = document.getElementById("year");
    var cvc = document.getElementById("CVC");

    var addres = document.getElementById('add');
    var postcod = document.getElementById('post');
    var hemta = document.getElementsByName('tran')[0];
    var lev = document.getElementsByName('tran')[1];

    //testar om allt ät ifylt som man måste fylla i
    if(kortnummer.value != "" && moth.value != "" && year.value != "" && cvc.value != "" &&
        ((lev.checked == true && addres.value != "" && postcod.value != "") || hemta.checked == true)) {
        alert("tackar för dit köp");
        window.localStorage.removeItem("Orders");
    } else
        alert("du måset fylla i alla fält för att kunna betala");
}

var getActiveOrder = () => { return JSON.parse(window.localStorage.getItem("ActiveOBJ")); }
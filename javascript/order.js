var order = [];

function addOrder(id, type) {

    var antal = document.getElementsByClassName("numberInput")[id-1].value;
    var OBJ;

    if(type == 1) {
        OBJ = getBuffe(id);
    }

    orders = JSON.parse(window.localStorage.getItem("Orders")) == null ? [] : JSON.parse(window.localStorage.getItem("Orders"));

    var order = {
        id: orders.length,
        antalPers: antal,
        prise: OBJ.prisePers,
        totalPrise: (OBJ.prisePers * antal),
        name: OBJ.name
    };

    orders.push(order);
    window.localStorage.setItem("Orders", JSON.stringify(orders));

    alert(OBJ.name + " added to cart");
}

function order(id) {
    window.localStorage.setItem("ActiveOBJ", JSON.stringify(getBuffe(id)));
    window.location.href = window.location.href.substr(0, window.location.href.length-9) + "/Order.html";
}

var getActiveOrder = () => { return JSON.parse(window.localStorage.getItem("ActiveOBJ")); }
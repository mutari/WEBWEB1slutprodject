var order = [];

function addOrder(id, type) {

    var antal = document.getElementsByClassName("numberInput" + type)[id-1].value;
    var OBJ;

    if(type == 1) {
        OBJ = getBuffe(id);
    } else if(type == 2) {
        OBJ = getRatt(id);
    } else if(type == 3) {
        OBJ = getDryck(id);
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

function buy() {
    alert("tackar för dit köp")
}

var getActiveOrder = () => { return JSON.parse(window.localStorage.getItem("ActiveOBJ")); }
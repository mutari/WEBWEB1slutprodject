function order(id) {
    window.localStorage.setItem("ActiveOBJ", JSON.stringify(get(id)));
    window.location.href = window.location.href.substr(0, window.location.href.length-9) + "/Order.html";
}

var getActiveOrder = () => { return JSON.parse(window.localStorage.getItem("ActiveOBJ")); }
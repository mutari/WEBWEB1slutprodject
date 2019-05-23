var DryckList =
[ //type 1 = öl , 2 = vin , 3 = alkoholfrit 
    {
        color: "green",
        name: "coca cola",
        prisePers: 25,
        endelse: "33cl",
        id: 1,
        type: 3
    },
    {
        color: "orange",
        name: "fanta",
        prisePers: 25,
        endelse: "33cl",
        id: 2,
        type: 3
    },
    {
        color: "blue",
        name: "7-up",
        prisePers: 25,
        endelse: "33cl",
        id: 3,
        type: 3
    },
    {
        color: "orange",
        name: "eriksberg",
        prisePers: 65,
        endelse: "0.5l",
        id: 4,
        type: 1
    },
    {
        color: "red",
        name: "en flaska röt vin",
        prisePers: 185,
        endelse: "700cl",
        id: 5,
        type: 2
    },
    {
        color: "red",
        name: "en flaska vit vin",
        prisePers: 200,
        endelse: "700cl",
        id: 5,
        type: 2
    }
]

var RettList =
[//type 1 = köt , 2 = fisk , 3 = vegitariskt , 4 = salader, 5 = tillbehör
    {
        color: "green",
        name: "potatis gratäng",
        prisePers: 50,
        id: 1,
        type: 5
    },
    {
        color: "blue",
        name: "köttbullar",
        prisePers: 36,
        id: 2,
        type: 1
    },
    {
        color: "blue",
        name: "pasta",
        prisePers: 45,
        id: 3,
        type: 5
    },
    {
        color: "red",
        name: "ungsbakad lax",
        prisePers: 45,
        id: 4,
        type: 2
    },
    {
        color: "red",
        name: "vegitarisak kötbullar",
        prisePers: 45,
        id: 5,
        type: 3
    },
    {
        color: "green",
        name: "cesar salad",
        prisePers: 45,
        id: 6,
        type: 4
    },
    {
        color: "blue",
        name: "bea",
        prisePers: 45,
        id: 7,
        type: 5
    }
]

var BuffeList = 
[
    {
        color: "green",
        name: "Grill Buffe", 
        about: "Denna buffe består av blandane grillade rätter.",
        have: "kykling spätt lätt grilade<br>oxfele(väljs själv hur grilad)<br>potatis gratäng<br>bea", 
        prisePers: 220,
        id: 1
    },
    {
        color: "blue",
        name: "Vego Buffe", 
        about: "Denna buffen är perfekt för vegitarianen.",
        have: "grönsaker<br>falafel<br>bönsalad<br>vock<br>", 
        prisePers: 150,
        id: 2
    },
    {
        color: "red",
        name: "Frukost buffe", 
        about: "Denna buffen är perfekt för vegitarianen.",
        have: "grönsaker<br>falafel<br>bönsalad<br>vock<br>", 
        prisePers: 150,
        id: 3
    },
    {
        color: "orange",
        name: "Frukost buffe", 
        about: "Denna buffen är perfekt för vegitarianen.",
        have: "grönsaker<br>falafel<br>bönsalad<br>vock<br>", 
        prisePers: 150,
        id: 3
    },
    {
        color: "orange",
        name: "Frukost buffe", 
        about: "Denna buffen är perfekt för vegitarianen.",
        have: "grönsaker<br>falafel<br>bönsalad<br>vock<br>", 
        prisePers: 150,
        id: 4
    }
];

var getBuffe = (id) => { return BuffeList.filter(e => { return e.id === id; })[0]; }
var getRatt = (id) => { return RettList.filter(e => { return e.id == id; })[0]; }
var getDryck = (id) => { return DryckList.filter(e => { return e.id == id; })[0]; }
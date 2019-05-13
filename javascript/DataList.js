var DryckList =
[
    {
        color: "green",
        name: "coca cola",
        prisePers: 25,
        id: 1
    },
    {
        color: "orange",
        name: "fanta",
        prisePers: 25,
        id: 2
    },
    {
        color: "blue",
        name: "7-up",
        prisePers: 25,
        id: 3
    },
    {
        color: "orange",
        name: "öl",
        prisePers: 65,
        id: 4
    },
    {
        color: "red",
        name: "en flaska röt vin",
        prisePers: 185,
        id: 5
    }
]

var RettList =
[
    {
        color: "green",
        name: "potatis gratäng",
        prisePers: 50,
        id: 1
    },
    {
        color: "blue",
        name: "köttbullar",
        prisePers: 36,
        id: 2
    },
    {
        color: "blue",
        name: "pasta/kötfersås",
        prisePers: 45,
        id: 3
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
    }
];

var getBuffe = (id) => { return BuffeList.filter(e => { return e.id === id; })[0]; }
var getRatt = (id) => { return RettList.filter(e => { return e.id == id; })[0]; }
var getDryck = (id) => { return DryckList.filter(e => { return e.id == id; })[0]; }
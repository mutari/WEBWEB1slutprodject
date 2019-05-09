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
    }
];

var getBuffe = (id) => { return BuffeList.filter(e => { return e.id === id; })[0]; }
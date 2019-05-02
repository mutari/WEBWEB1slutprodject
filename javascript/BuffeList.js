var BuffeList = 
            [ 
                {
                    color: "green",
                    name: "Grill Buffe", 
                    about: "Denna buffe består av blandane grillade rätter.",
                    have: "kykling spätt lätt grilade<br>oxfele(väljs själv hur grilad)<br>potatis gratäng<br>bea", 
                    prisePers: 220,
                    maxPers: 25,
                    id: 1
                },
                {
                    color: "blue",
                    name: "Vego Buffe", 
                    about: "Denna buffen är perfekt för vegitarianen.",
                    have: "grönsaker<br>falafel<br>bönsalad<br>vock<br>", 
                    prisePers: 150,
                    maxPers: 40,
                    id: 2
                },
                {
                    color: "red",
                    name: "Frukost buffe", 
                    about: "Denna buffen är perfekt för vegitarianen.",
                    have: "grönsaker<br>falafel<br>bönsalad<br>vock<br>", 
                    prisePers: 150,
                    maxPers: 40,
                    id: 3
                }
            ];









var get = (id) => { return BuffeList.filter(e => { return e.id === id; })[0]; }
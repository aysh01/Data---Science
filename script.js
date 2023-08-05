// function change() {
// var letters = /^[0-9a-zA-Z]+$/;
//     let value=document.querySelector("input").value;
//     if(value.match(letters)){
//         console.log(value);
//     }
// }
// str1.charAt(i) == "A" || str1.charAt(i) == "B" || 

function change() {
    let die1 = document.getElementById("die-1");
    let die2 = document.getElementById("die-2");
    let die3 = document.getElementById("die-3");
    let die4 = document.getElementById("die-4");
    let die5 = document.getElementById("die-5");
    let die6 = document.getElementById("die-6");
    let die7 = document.getElementById("die-7");
    let die8 = document.getElementById("die-8");
    let die9 = document.getElementById("die-9");
    let die10 = document.getElementById("die-10");
    let die11 = document.getElementById("die-11");
    let die12 = document.getElementById("die-12");
    let die13 = document.getElementById("die-13");
    let die14 = document.getElementById("die-14");
    let die15 = document.getElementById("die-15");
    let die16 = document.getElementById("die-16");
    let die17 = document.getElementById("die-17");
    let die18 = document.getElementById("die-18");
    let die19 = document.getElementById("die-19");
    let die20 = document.getElementById("die-20");
    let die21 = document.getElementById("die-21");
    let die22 = document.getElementById("die-22");
    let die23 = document.getElementById("die-23");
    let die24 = document.getElementById("die-24");
    let die25 = document.getElementById("die-25");
    let die26 = document.getElementById("die-26");

    let submit = document.getElementById("submit");
    let string = document.querySelector("input").value;
    let str1 = string.toLowerCase();
    for (let i = 0; i <= str1.length; i++) {
        if (str1.charAt(i) == "A" || str1.charAt(i) == "a") {
            console.log(str1.charAt(i), i);
            var style1 = window.getComputedStyle(die1);
            console.log(style1.marginLeft);
            die1.style.display = "unset";
            die1.style.border = "1px solid red";
            setTimeout(die1_, 8000);
        }

        else if (str1.charAt(i) == "B" || str1.charAt(i) == "b") {
            console.log(str1.charAt(i), i);
            var style2 = window.getComputedStyle(die2);
            console.log(style2.marginLeft);
            die2.style.display = "unset";
            setTimeout(die2_, 8000);
        }
        else if (str1.charAt(i) == "C" || str1.charAt(i) == "c") {
            console.log(str1.charAt(i), i);
            var style3 = window.getComputedStyle(die3);
            var style20 = window.getComputedStyle(die20);
            console.log(style3.marginLeft);
            die3.style.display = "unset";
            if (style3.marginTop && style20.marginTop == "0px") {
                document.getElementById("die-3").style.marginLeft = "62vh";
            }
            setTimeout(die3_, 8000);
        }
        else if (str1.charAt(i) == "D" || str1.charAt(i) == "d") {
            console.log(str1.charAt(i), i);
            var style4 = window.getComputedStyle(die4);
            console.log(style4.marginLeft);
            die4.style.display = "unset";
            die4.style.border = "1px solid red";
            setTimeout(die4_, 8000);
        }
        else if (str1.charAt(i) == "E" || str1.charAt(i) == "e") {
            console.log(str1.charAt(i), i);
            var style5 = window.getComputedStyle(die5);
            console.log(style5.marginLeft);
            die5.style.display = "unset";
            setTimeout(die5_, 8000);
        }
        else if (str1.charAt(i) == "F" || str1.charAt(i) == "f") {
            console.log(str1.charAt(i), i);
            var style6 = window.getComputedStyle(die6);
            console.log(style6.marginLeft);
            die6.style.display = "unset";
            setTimeout(die6_, 8000);
        }
        else if (str1.charAt(i) == "G" || str1.charAt(i) == "g") {
            console.log(str1.charAt(i), i);
            var style7 = window.getComputedStyle(die7);
            console.log(style7.marginLeft);
            die7.style.display = "unset";
            setTimeout(die7_, 8000);
        }
        else if (str1.charAt(i) == "H" || str1.charAt(i) == "h") {
            console.log(str1.charAt(i), i);
            var style8 = window.getComputedStyle(die8);
            var style15 = window.getComputedStyle(die15);
            console.log(style8.marginLeft);
            die8.style.display = "unset";
            die8.style.border = "1px solid red";
            if (style8.marginTop && style15.marginTop == "0px") {
                document.getElementById("die-8").style.marginLeft = "60vw";
            }
            setTimeout(die8_, 8000);
        }

        else if (str1.charAt(i) == "I" || str1.charAt(i) == "i") {
            console.log(str1.charAt(i), i);
            var style9 = window.getComputedStyle(die9);
            console.log(style9.marginLeft);
            die9.style.display = "unset";
            die9.style.border = "1px solid red";
            setTimeout(die9_, 8000);
        }
        else if (str1.charAt(i) == "J" || str1.charAt(i) == "j") {
            console.log(str1.charAt(i), i);
            var style10 = window.getComputedStyle(die10);
            console.log(style10.marginTop);
            if (style10.marginTop == "0px") {
                document.getElementById("die-10").style.marginTop = "28vh";
            }
            die10.style.display = "unset";
            setTimeout(die10_, 8000);
        }
        else if (str1.charAt(i) == "K" || str1.charAt(i) == "k") {
            console.log(str1.charAt(i), i);
            var style11 = window.getComputedStyle(die11);
            console.log(style11.marginLeft);
            die11.style.display = "unset";
            die11.style.border = "1px solid red";
            setTimeout(die11_, 8000);
        }
        else if (str1.charAt(i) == "L" || str1.charAt(i) == "l") {
            console.log(str1.charAt(i), i);
            var style12 = window.getComputedStyle(die12);
            var style4 = window.getComputedStyle(die4);
            console.log(style12.marginLeft);
            die12.style.display = "unset";
            die12.style.border = "1px solid red";
            if (style12.marginTop && style4.marginTop == "0px") {
                document.getElementById("die-12").style.marginLeft = "20vw";
            }
            setTimeout(die12_, 8000);
        }
        else if (str1.charAt(i) == "M" || str1.charAt(i) == "m") {
            console.log(str1.charAt(i), i);
            var style13 = window.getComputedStyle(die13);
            var style11 = window.getComputedStyle(die11);
            console.log(style13.marginLeft);
            die13.style.display = "unset";
            if (style13.marginTop && style11.marginTop == "0px") {
                document.getElementById("die-11").style.marginLeft = "40vw";
            }
            setTimeout(die13_, 8000);
        }
        else if (str1.charAt(i) == "N" || str1.charAt(i) == "n") {
            console.log(str1.charAt(i), i);
            var style14 = window.getComputedStyle(die14);
            console.log(style14.marginLeft);
            die14.style.display = "unset";
            setTimeout(die14_, 8000);
        }
        else if (str1.charAt(i) == "O" || str1.charAt(i) == "o") {
            console.log(str1.charAt(i), i);
            var style15 = window.getComputedStyle(die15);
            console.log(style15.marginLeft);
            die15.style.display = "unset";
            setTimeout(die15_, 8000);
        }
        else if (str1.charAt(i) == "P" || str1.charAt(i) == "p") {
            console.log(str1.charAt(i), i);
            var style16 = window.getComputedStyle(die16);
            console.log(style16.marginLeft);
            die16.style.display = "unset";
            setTimeout(die16_, 8000);
        }
        else if (str1.charAt(i) == "Q" || str1.charAt(i) == "q") {
            console.log(str1.charAt(i), i);
            var style17 = window.getComputedStyle(die17);
            console.log(style17.marginLeft);
            die17.style.display = "unset";
            setTimeout(die17_, 8000);
        }
        else if (str1.charAt(i) == "R" || str1.charAt(i) == "r") {
            console.log(str1.charAt(i), i);
            var style18 = window.getComputedStyle(die18);
            console.log(style18.marginLeft);
            die18.style.display = "unset";
            setTimeout(die18_, 8000);
        }
        else if (str1.charAt(i) == "S" || str1.charAt(i) == "s") {
            console.log(str1.charAt(i), i);
            var style19 = window.getComputedStyle(die19);
            console.log(style19.marginLeft);
            die19.style.display = "unset";
            die19.style.border = "1px solid red";
            setTimeout(die19_, 8000);
        }
        else if (str1.charAt(i) == "T" || str1.charAt(i) == "t") {
            console.log(str1.charAt(i), i);
            var style20 = window.getComputedStyle(die20);
            var style23 = window.getComputedStyle(die23);
            console.log(style20.marginLeft);
            die20.style.display = "unset";
            if (style20.marginTop && style23.marginTop == "0px") {
                document.getElementById("die-20").style.marginLeft = "20vw";
            }
            setTimeout(die20_, 8000);
        }
        else if (str1.charAt(i) == "U" || str1.charAt(i) == "u") {
            console.log(str1.charAt(i), i);
            var style21 = window.getComputedStyle(die21);
            console.log(style21.marginLeft);
            die21.style.display = "unset";
            setTimeout(die21_, 8000);
        }
        else if (str1.charAt(i) == "V" || str1.charAt(i) == "v") {
            console.log(str1.charAt(i), i);
            var style22 = window.getComputedStyle(die22);
            console.log(style22.marginLeft);
            die22.style.display = "unset";
            setTimeout(die22_, 8000);
        }
        else if (str1.charAt(i) == "W" || str1.charAt(i) == "w") {
            console.log(str1.charAt(i), i);
            var style23 = window.getComputedStyle(die23);
            console.log(style23.marginLeft);
            die23.style.display = "unset";
            setTimeout(die23_, 8000);
        }
        else if (str1.charAt(i) == "X" || str1.charAt(i) == "x") {
            console.log(str1.charAt(i), i);
            var style24 = window.getComputedStyle(die24);
            console.log(style24.marginLeft);
            die24.style.display = "unset";
            setTimeout(die24_, 8000);
        }
        else if (str1.charAt(i) == "Y" || str1.charAt(i) == "y") {
            console.log(str1.charAt(i), i);
            var style25 = window.getComputedStyle(die25);
            console.log(style25.marginLeft);
            die25.style.display = "unset";
            setTimeout(die25_, 8000);
        }
        else if (str1.charAt(i) == "Z" || str1.charAt(i) == "z") {
            console.log(str1.charAt(i), i);
            var style26 = window.getComputedStyle(die26);
            console.log(style26.marginLeft);
            die26.style.display = "unset";
            setTimeout(die26_, 8000);
        }

    }

}

function die1_() {
    let die1 = document.getElementById("die-1");
    die1.style.display = "none";
}

function die2_() {
    let die2 = document.getElementById("die-2");
    die2.style.display = "none";
}

function die3_() {
    let die3 = document.getElementById("die-3");
    die3.style.display = "none";
}

function die4_() {
    let die4 = document.getElementById("die-4");
    die4.style.display = "none";
}

function die5_() {
    let die5 = document.getElementById("die-5");
    die5.style.display = "none";
}

function die6_() {
    let die6 = document.getElementById("die-6");
    die6.style.display = "none";
}

function die7_() {
    let die7 = document.getElementById("die-7");
    die7.style.display = "none";
}

function die8_() {
    let die8 = document.getElementById("die-8");
    die8.style.display = "none";
}

function die9_() {
    let die9 = document.getElementById("die-9");
    die9.style.display = "none";
}

function die10_() {
    let die10 = document.getElementById("die-10");
    die10.style.display = "none";
}

function die11_() {
    let die11 = document.getElementById("die-11");
    die11.style.display = "none";
}

function die12_() {
    let die12 = document.getElementById("die-12");
    die12.style.display = "none";
}

function die13_() {
    let die13 = document.getElementById("die-13");
    die13.style.display = "none";
}

function die14_() {
    let die14 = document.getElementById("die-14");
    die14.style.display = "none";
}

function die15_() {
    let die15 = document.getElementById("die-15");
    die15.style.display = "none";
}

function die16_() {
    let die16 = document.getElementById("die-16");
    die16.style.display = "none";
}

function die17_() {
    let die17 = document.getElementById("die-17");
    die17.style.display = "none";
}

function die18_() {
    let die18 = document.getElementById("die-18");
    die18.style.display = "none";
}

function die19_() {
    let die19 = document.getElementById("die-19");
    die19.style.display = "none";
}

function die20_() {
    let die20 = document.getElementById("die-20");
    die20.style.display = "none";
}

function die21_() {
    let die21 = document.getElementById("die-21");
    die21.style.display = "none";
}

function die22_() {
    let die22 = document.getElementById("die-22");
    die22.style.display = "none";
}

function die23_() {
    let die23 = document.getElementById("die-23");
    die23.style.display = "none";
}

function die24_() {
    let die24 = document.getElementById("die-24");
    die24.style.display = "none";
}

function die25_() {
    let die25 = document.getElementById("die-25");
    die25.style.display = "none";
}

function die26_() {
    let die26 = document.getElementById("die-26");
    die26.style.display = "none";
}
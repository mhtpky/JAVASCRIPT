// =======================================================
//                  GETELEMENTBYID()
// =======================================================

const paragraf = document.getElementById("par");
paragraf.style.backgroundColor = "black";
paragraf.style.color = "white";
paragraf.style.fontSize = "20px";

const buton = document.getElementById("btn");
btn.style.width = "100px";
btn.style.height = "30px";
btn.style.backgroundColor = "black";
btn.style.color = "yellow";
btn.style.fontSize = "18px";
buton.innerHTML = "ARA";
// JS yuklenir yuklenmez Tikla ismini verdigimiz buton ARA olarak degismis olur

// CSS'de ki gibi style sheets ile de ayni islem yapilabilir
// const styles = {
//     width: "150px",
//     height: "40px",
//     color: "white",
//     backgroundColor: "black",
// };

// =======================================================
//                  GETELEMENTSBYTAGNAME()
// =======================================================4
// getElementsByTagName > dizi dondurdugu icin img'yi consolda gormek istersek console.log(resim); yazdigimizda 2 elemanli dizi seklinde bir sonuc verir. 1. Resmi gormek istiyorsak indexini console.log(resim[0]); seklinde yazmaliyiz
const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";
resim[1].style.border = " 3px solid red";

// =======================================================
//                  GETELEMENTSBYCLASSNAME()
// =======================================================
const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";

// =======================================================
//                  QUERYSELECTOR()
// =======================================================
// Hem ID hem ClassName kullanabiliriz. ID icin #, Class icin . kullanmaliyiz
const baslik = document.querySelector(".title");
baslik.innerHTML = "DOM Selector 💻";
// title'in ismini guncelleyerek emoji eklemis olduk

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(black, grey";

// ======================================================
//                        EVENTS
// ======================================================

//-------------------------------------------------------
//  3.YONTEM  >> ÖRNEK-1 (Mouse Over, Mouse Out )
//-------------------------------------------------------
// const h1 = document.querySelector(".h1");
// const h1Renk = h1.style.color;
// console.log(h1Renk);

document.querySelector(".h1").onmouseover = function() {
    const h1 = document.querySelector(".h1");
    h1.style.color = "white";
    h1.style.backgroundColor = "black";
};

document.querySelector(".h1").onmouseout = function() {
    const h1 = document.querySelector(".h1");
    h1.style.color = "black";
    h1.style.backgroundColor = "white";
};

//-------------------------------------------------------
//  4.YONTEM  >>> addEventListener ()
//-------------------------------------------------------
// Modern JS ile daha kullanilir hale gelmistir
// document.querySelector("#btn").addEventListener("mouseover", function () {})
document.querySelector("#btn").addEventListener("mouseover", () => {
    document.querySelector("#btn").style.width = "150px";
});

document.querySelector("#btn").addEventListener("mouseout", () => {
    document.querySelector("#btn").style.width = "100px";
});
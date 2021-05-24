// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

// ! 1.YONTEM : FUNCTION DECLARATION (Fonksiyonun tanimlanmasi)
// Klasik yontemdir
function yazdir() {
    console.log("Ahmet");
}
yazdir(); // Fonksiyon cagirilmasi

// * ORNEK : Parametreli Fonksiyon
function yazdirAd(ad, yas) {
    console.log(`Adiniz ${ad}, Yasiniz ${yas}`);
}
yazdirAd("Mustafa", 23); // Call | Invoke
yazdirAd("John", 21); // Call | Invoke

// JS dinamik esnek bir dildir
// Java da bir fonk bir class ya da interface'e aittir ama
// JS'de fonksiyonlar bagimsiz kendi basina elemanlardir
// JS'de parametrelere veri tipi yazilmaz

// * ORNEK : Parametreli donus degerli Fonksiyon
function yasHesapla(dogum) {
    return 2021 - dogum;
}
console.log(`Yasiniz ${yasHesapla(1995)}`);
alert(`Yasiniz ${yasHesapla(1995)}`);

const yas = yasHesapla(1995);
console.log(`Yasiniz : ${yas}`);

// * ORNEK : Klavyeden girilen sayinin tek veya cift oldugunu donduren bir fonk yaziniz
const sayi = prompt("Lutfen bir sayi giriniz: ");

function tekCift(sayi) {
    if (sayi % 2 == 0) {
        console.log(`${sayi} cifttir`);
    } else {
        console.log(`${sayi} tektir`);
    }
}
tekCift(sayi);

// 2.YOL
// Function declaration yontemi ile fonksiyon tanimlamazi cagirilmasindan once veya sonra olabilir
const sayi = prompt("Lutfen bir sayi giriniz: ");
console.log(tekCIft2(sayi));

function tekCIft2(sayi) {
    const sonuc = sayi % 2 == 0 ? `${sayi} cifttir` : `${sayi} tektir`;
    return sonuc;
}

// ! 2.YONTEM : FUNCTION EXPRESSION
// Bu yontem gunumuzde daha yaygin kullanilir
// Fonksiyon bir degiskenmis gibi tanimlanir.
// Fonksiyonun bir ismi yoktur. Degiskenin ismi fonk ismi gibi kullanilir.
// Once fonk yazip sonra cagirma zorunlu kilinmistir
//* Avantajlari :
//* 1) Programciyi once fonksiyonlarin tanimlanmasi, sonra kullanilmasina zorladigi icin aslinda daha duzenli ve daha
//* anlasilir kod yazmaya olanak saglamaktadir.
//* 2) Fonksiyonlarin ve degerlerin degiskenlerde saklanmasini gerektirmektedir. Bu da daha sade bir kodlama demektir.

const tekCift3 = function(sayi) {
    return sayi % 2 == 0 ? "CIFT" : " TEK";
};
console.log(tekCift3(5)); // invoke(cagirmak)

// * ORNEK : Verilen sayilardan buyuk olani bulunuz
let buyukBul = function(x, y, z) {
    let enBuyuk;
    if (x > y && x > z) {
        enBuyuk = x;
    } else if (y > x && y > z) {
        enBuyuk = y;
    } else if (z > x && z > y) {
        enBuyuk = z;
    }
    return enBuyuk;
};
console.log("En buyuk : " + buyukBul(5, 3, 8)); // En buyuk : 8

// ! 3.YONTEM : ARROW (OK) FUNCTIONS
// Suslu parantez kullanmazsak return yazmaya gerek yoktur. Dogrudan return eder
// Lambdaya benzer burada ok => seklinde gosterilir

// * ORNEK :Iki sayiyi toplayan bir fonk yaziniz
const topla = (a, b) => a + b; // Arrow fonk. tanimlamasi
console.log(topla(5, 2)); // invoke
console.log(topla(3, 10));

// * ORNEK:
const ciftMi = (s) => (s % 2 == 0 ? "CIFT" : "TEK");
console.log(ciftMi(5));
console.log(ciftMi(2));

// * ORNEK: Us alma
const taban = prompt("taban giriniz");
const us = prompt("us giriniz");
const usAl = (t, u) => t ** u;
console.log(usAl(taban, us));

// * ORNEK: Menu
// ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmaliyiz
const menu = () => {
    console.log("=========================================");
    console.log("           JAVASCRIPT DERSI              ");
    console.log("=========================================");
};
menu();

// * ORNEK:
// const bilgiVer = (ad, soyad, dogum) => {
//   const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
//   return bilgi;
// };
//console.log(bilgiVer(“Mehmet”, “Cakmak”, 1989));

const bilgiVer = (ad, soyad, dogum) =>
    `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
console.log(bilgiVer("Mehmet", "Cakmak", 1989));

// * ORNEK: Silindirin hacmini hesaplayan bir fonksiyon yaziniz
const r = prompt("Yaricapi giriniz :");
const h = prompt("Yuksekligi giriniz : ");
const hacimHesapla = (r, h) => Math.PI * r * r * h;
console.log("Silindirin hacmi : " + Math.round(hacimHesapla(r, h))); // sonucu yuvarlamak istiyorsak >>  Math.round
console.log("Silindirin hacmi : " + hacimHesapla(r, h).toFixed(2)); // virgulden sonra kac basamak gormek istiyorsak >> toFixed

// * ORNEK:
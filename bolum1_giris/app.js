// alert("Dikkat");
// console.log("Hello JavaScript");

// console.log("JavaScript Java'dan kolay bir dildir");
// console.error("Bu bir hatadir");
// console.warn("Bu bir uyaridir");

// ? ========================== DEGISKEN TANIMLAMA ============================= //
// var keyword'u ile degisken tanimlanabilir. Ancak modern JS ile var keyword'unun kullanimi azaldi. Cunku, var global degisken gibi dusunulmektedir.

// ? const ve let yeni degisken tanimlama keywordleridir.
// const Java'da ki final degiskeni gibi sabit olarak dusunulebilir. Mumkunse ilk kullanilan const olmalidir
// let ise var'in local versiyonudur

var pi = 3.14;
console.log(pi);
console.log(typeof pi); //number

pi = "3";
console.log(pi);
console.log(typeof pi); //string

pi = true;
console.log(pi);
console.log(typeof pi); //boolean

var isim = "Ahmet"; // var yazmasak da otomatik olarak algiliyor ama en guzeli yazmaktir
console.log(isim);
console.log(typeof isim); //string

isim = 4;
console.log(isim);
console.log(typeof isim); //number

// ** ---------- CONST -------------
// ! Const : Sadece baslangicta deger atanabilir(non-primitive'ler haric). Sonradan degeri degistirilemez.(diziler objeler const da olsa bu kural gecerli degildir.const'un degeri degistirilebilir)
// Deger atamasi yapilmazsa hata mesaji verir
// const piSayisi;
// console.log(piSayisi); //Uncaught SyntaxError: Missing initializer in const declaration

const piSayisi = 3.14;
console.log(piSayisi);

// piSayisi = 3;
// console.log(piSayisi); //Uncaught TypeError: Assignment to constant variable. at app.js:43 (anonymous) @ app.js:43

// ** ---------- LET -------------
// let : hem degistirilecek hem local olacaksa kullanilir. var'in local  halidir.
// Eger ki degiskenimizin degerinin deismesi gerekiyorsa -const kullanamayiz. LET kullanabiliriz

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat); // number

// 3 sekilde String tanimlanabilir
let isim1 = "Mustafa"; // Cift tirnak
let isim2 = "Ahmet"; // Tek tirnak > prettier eklentisinden dolayi kaydedince cift tirnak yapiyor.
let isim3 = `Alican`; // Backthick > Modern JS ile gelmistir. Daha esnek bir string kalibidir

console.log(isim3);

// null atama
const dil = null;
console.log(dil);
console.log(typeof dil); // object

const sucuk = 40;
const sakiz = 2;
const kola = 5;
let toplamFiyat = sucuk + sakiz + kola;
toplamFiyat++;
toplamFiyat += 50;

// !Birden fazla degiskenin degerini yazdirmak icin virgul kullanilir
console.log(toplamFiyat, kola); // ? 98 5
console.log("TOPLAM :", toplamFiyat); // ? TOPLAM: 98

// ! + operatoru string birlestirme islemi de gerceklestirir
const ad = "Can";
const soyAd = "Canan";
console.log(ad + soyAd);
console.log(ad + " " + soyAd);

const s1 = 7;
s2 = "7";
console.log(s1 + s2);

// ?============================== TEMPLATE LITERAL ===================================== //
// ?  (String Sablonlari, ES6 ile gelmistir)
const ad1 = "Mesut";
const yas = 55;
console.log("Benim adim " + ad1 + " " + "yasim " + yas + " dir");
console.log(`Benim adim ${ad1} yasim ${yas} dir`);

const yil = 2021;
const dogumTarihi = 1980;
const yasim = yil - dogumTarihi;
console.log("YAS: " + yasim);
console.log("YAS: " + (yil - dogumTarihi));
// console.log("YAS: " + yil - dogumTarihi); >> paranteZ olmazsa > // ! HATA > NaN(Not a Number)
console.log(`Yas: ${yil - dogumTarihi}`); // Template Literal(Backthick ile kullanimi)

// ?============================== US ALMA OPERATORU (**) ===================================== //
const taban = 2;
const us = 8;
const sonuc = taban ** us;
console.log("2 ussu 8 : " + sonuc);

// ?============================== MOD ALMA % ===================================== //
const sayi = 123;
const birler = sayi % 10;
console.log("Birler: " + birler); // Birler: 3

// ! const onlar = (sayi / 10) % 10;
// console.log("Onlar: " + onlar); >> Onlar: 2.3000000000000007 > number veri tipi int ve double olabilir o yuzden istedigimiz sonucu bu sekilde alamayiz. Yuvarlama yapmak gerekir
// Math.round() > Duruma gore yuvarlama yapar
// Math.floor() > En alta yuvarlar tabana
// Math.ceil() > En uste yuvarlar tavana

const onlar = Math.floor(sayi / 10) % 10;
console.log("Onlar: " + onlar);

const yuzler = Math.floor(sayi / 100);
console.log("Yuzler: " + yuzler);

// ?=============================== KARSILASTIRMA OPERATORLERI ==================================== //
// Uclu karsilastirma operatorleri kullanildiginda hem VERI TIPI hem de ICERIK kontrolu yapilir
const sayi1 = 100;
const sayi2 = "100";
console.log("Sayi1 : " + typeof sayi1, "Sayi2 : " + typeof sayi2);
console.log(sayi1 == sayi2); // true
console.log(sayi1 === sayi2); // false

// ?=============================== MANTIKSAL OPERATORLER ==================================== //
// && degiskenlerin tamami true ise TRUE, degilse FALSE
// || degislkenlerin sadece bir tanesi bile true ise TRUE, tamami false ise FALSE
// Unlem ! değişkenin değerinin tersini döndürür. Değişken TRUE ise FALSE, FALSE ise TRUE değer döndürür.
// 0, FALSE, NULL, undefined, "" ve NaN dışındaki durumlar TRUE kabul edilir.

const x = true;
const y = true;
const z = undefined;
console.log(x && y && z); // undefined > bastakiler true ise son degeri dondurur

// ?=============================== KOSUL(TERNARY) OPERATORLER ==================================== //
// Kosul ? ifade1 : ifade2
const age = prompt("Yasinizi giriniz"); // Prompt klavyeden bilgi girisi ister
console.log("Yasiniz : " + age);
console.log(typeof age); // string
// cogu yerde default olarak veri tipini string kabul eder. HTML string tabanli bir dildir.
// +prompt seklinde yazarsak veri tipini number'a cevirir >> const age = +prompt(...)
// Number(prompt("...")) seklinde yazarsak da number a cevirir >> const age = Number(prompt(...))

// ! Girilen yaz 18'den buyukse ehliyet alabilir degilse alamaz yazdiralm
const name1 = prompt("Adinizi giriniz :");
const age1 = Number(prompt("Yasinizi giriniz:"));

//1.YONTEM
age1 >= 18 ?
    console.log(`${name1} ehliyet alabilir`) :
    console.log(`${name1} ehliyet alamaz`);

//2. YONTEM
const result =
    age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;
console.log(result);

// ?=============================== TİP DÖNÜŞÜMLERİ ==================================== //
// Konsolda String ifadeler mor, number'lar siyah gorunur
// 5 falsy degerin(0, NULL, undefined, "" ve NaN) disinda ki herseyin boolean karsiligi TRUEdur
const sayi4 = 41;
console.log(String(sayi4), sayi4);
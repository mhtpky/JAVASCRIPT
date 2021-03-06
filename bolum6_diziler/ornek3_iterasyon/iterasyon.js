const koordinatlar = [120, 100, -100, 220, 330];
let negatif = 0;
let pozitif = 0;

// FOR DONGUSU
// for (let i = 0; i < koordinatlar.length; i++) {
//     koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }

// FOR IN DONGUSU(sayac ve kosul kullanilmaz)
for (let i in koordinatlar) {
    koordinatlar[i] < 0 ? negatif++ : pozitif++;
}

console.log(
    `Negatif koordinat sayisi ${negatif} Pozitif koordinat sayisi ${pozitif}`
);

//---------------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin bir dizide
// saklandığı varsayalım.Bu hayvanları türüne göre aramamızı sağlayacak
// ve o türden kaç adet bulunduğu ana programa döndürecek fonksiyonu
// yazınız. Eğer o türden bir hayvan yok ise bulunamdığını yazdırsın.
//----------------------------------------------------------------

const hayvanlar = ["fil", "deve", "kus", "deve", "fare", "kedi", "deve"];

const ara = prompt("Aramak istenilen hayvani giriniz").toLowerCase();

const bulDondur = function(ara) {
    let hayvanSayisi = 0;
    for (let i in hayvanlar) {
        if (hayvanlar[i] == ara) {
            hayvanSayisi++;
        }
    }
    return hayvanSayisi;
};

const sayi = bulDondur(ara);
sayi == 0 ?
    console.log("Aradiginiz hayvan bulunamadi!") :
    console.log(`Aradiginiz ${ara}'den ${sayi} tane bulunmaktadir`);

// ============= FOR OF DONGUSU =============
// For in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir.
// Bu dongude dizi icerisinde ki veriye erisirken indisleme kullanmaya gerek yoktur.

// ORNEK :
let arabalar = ["BMW", "Volvo", "Mini"];
let yazi = "";
for (let i of arabalar) {
    yazi += i + " ";
    // yazi += arabalar[i] = " "; >> ayni seyi ifade eder. for of'un guzelligi buradadir direkt i kullandigimizda arabalar[i] seklinde algilar. for in'den daha gelismistir
}
console.log(yazi);

// ============= FOR EACH =============

//-------------- ÖRNEK -------------------
let ogrenciler = ["John", "Ali", "Can"];

//1.YOL
function yazdir(kisi) {
    console.log(kisi);
}
ogrenciler.forEach(yazdir);

//2.yol (ARROW FUNCTION)
ogrenciler.forEach((t) => console.log(t));
//dizinin her bir elemani bizim parametremizdir (x)

//-------------- ÖRNEK -------------------
// TOPLAMA ORNEGI
const fiyatlar = [200, 300, 125, 450, 333];
let toplam = 0;
fiyatlar.forEach((f) => (toplam += f));
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;
// Template Literal > backtick li yontemin adidir

//-------------- ÖRNEK -------------------
// forEach ile Parametre kullanım detaylari
// For each 3 parametre de alabilir > (x,y,z)
// 1. parametre > su an ki deger
// 2. parametre > indis
// 3. parametre > dizi
toplam = 0;
fiyatlar.forEach((a, i, d) => {
    console.log(`${i}.iterasyon:${toplam}`);
    toplam += a;
});

console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;

//-------------- ÖRNEK -------------------
// fiyatlar dizisinde her bir fiyata %10 zam yapalım.
let toplamFiyat = 0;
let zamliFiyatlar = [];
fiyatlar.forEach((deger, indis) => {
    zamliFiyatlar[indis] = (deger * 1.1).toFixed(2);
    toplamFiyat += Number(zamliFiyatlar[indis]);
});
console.log(zamliFiyatlar);
console.log(toplamFiyat);

// ======================================================
//                       MAP METODU
// ======================================================

//-------------- ÖRNEK -------------------
// Örnek : Dizinin herbir elemaninin 2 katını aliniz.

const rakamlar = [3, 5, 3, 2, 6, 7, 9];
const ikiKat = rakamlar.map((x) => x * 2);
console.log(ikiKat, rakamlar);

//-------------- ÖRNEK -------------------
// isimler dizisin içerisindeki her ismi büyük harf olarak
// yeni bir diziye saklayalım.
const isimler = [
    "Ahmet",
    "mehmet",
    "ismet",
    "SAFFET",
    "Can",
    "Canan",
    "Cavidan",
];

// map() metodu normal şartlarda bir dizi döndürür.
const buyuk = isimler.map((isim) => isim.toUpperCase());
buyuk.forEach((isim) => console.log(isim));

// map() metodundan sonra eğer forEach gibi bir terminal işlemi
// kullanılırsa map() metodu bir dizi döndürmez.
isimler.map((isim) => isim.toUpperCase()).forEach((isim) => console.log(isim));

//-------------- ÖRNEK -------------------
// tlFiyatlar dizisindeki ürün fiyatlarini HTLM inputlarina girilen
// Dolar ve Euro paritelerine göre dolar ve euroya çevirerek HTML de
// gösteriniz.
tlFiyatlar = [120, 340, 550, 245, 322.5, 789];

// Kur inputlarini al.
const dolarKur = document.querySelector(".dolar");
const yuroKur = document.querySelector(".yuro");

//dolar ve euro fiyatlari yazacak elemanlari al
const dolar = document.querySelector(".dolar-fiyat");
const yuro = document.querySelector(".yuro-fiyat");

// dolar kur input'unun değeri degistiginde urunlerin
// dolar fiyatlarini güncelle.
dolarKur.onchange = function() {
    dolarKur.value < 0 ?
        alert("Kur 0'dan küçük olamaz") :
        (dolar.innerHTML = tlFiyatlar.map((tl) =>
            Math.round(tl / dolarKur.value)
        ));
};

// euro kur input'unun değeri degistiginde urunlerin
// euro fiyatlarini güncelle.
yuroKur.onchange = function() {
    yuroKur.value < 0 ?
        alert("Kur 0'dan küçük olamaz") :
        (yuro.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / yuroKur.value)));
};

//-------------- ÖRNEK -------------------
// tlFiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
// %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor. Ayrıca
// zamli fiyatlar aşağıdaki formatta saklanmak isteniyor.
// 1. ürünün zamlı fiyati 110 TL gibi

const zamliTlFiyatlar = tlFiyatlar.map((deger, indis) => {
    if (deger < 250) {
        return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.1} <br>`;
    } else {
        return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.2} <br>`;
    }
});
// elemani diziye koyduktan sonra enter yapmanin yolu br etiketi koymaktir. Bu sayede sonra ki eleman alt satira iner.

const stringZamliTLFiyatlar = zamliTlFiyatlar.join("");
document.querySelector(".zamli-fiyat").innerHTML = stringZamliTLFiyatlar;
// join bir diziyi stringlestirirlken modifiye edebiliyordu ("") seklinde kullanirsak aralarna bir sey koymadan duz bir string haline getirmis olur

// ======================================================
//                       FILTER METODU
// ======================================================
// tlFiyatlar listesinde fiyatı 250 TL den az olanlari ayri
// bir diziye saklayalim.

const kucuk250 = tlFiyatlar.filter((d) => d < 250);
console.log(kucuk250);

//fiyati 350 küçük olanlari yazdiriniz.
tlFiyatlar.filter((d) => d < 350).forEach((x) => console.log(x));

// Küçükten büyüğe sıralama
console.log(tlFiyatlar.sort((a, b) => a - b));

// Büyükten küçüğe sıralama
console.log(tlFiyatlar.sort((a, b) => b - a));

// ======================================================
//                       PIPELINE
// ======================================================

//-------------- ÖRNEK -------------------
// Maasi 4000 $'dan dusuk olanlara %50 zam yapmak istiyoruz ve
// Ayri bir dizi olarak yazdirmak istiyoruz
const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaaslar = maaslar.filter((d) => d <= 4000).map((d) => d * 1.5);
console.log(zamliMaaslar);

// Maasi 4000 $'dan buyuk olanlara %25 zam yapmak istiyoruz
maaslar
    .filter((d) => d > 4000)
    .map((d) => d * 1.25)
    .forEach((d) => console.log(d));

//-------------- ÖRNEK -------------------
const adlar = [
    "Samet",
    "Hakki",
    "Duygu",
    "Emrullah",
    "Bilal",
    "Ali",
    "Ahmet",
    "Hasan",
    "Defne",
    "Serdar",
];

const isimBul = (harf) => {
    const buyukHarf = harf.toUpperCase();
    adlar.filter((x) => x.startsWith(buyukHarf)).forEach((x) => console.log(x));
};
isimBul("a");
isimBul("A");
isimBul("S");
isimBul("s");
// isimBul adinda harf parametreli bir arrow function yazdik.
// her bir x'e git harf'ine bak OR: harf = "A"

// ======================================================
//                       REDUCE
// ======================================================
// filter > suzgec
// map > degisiklik
// foreach > tek tek yazdiriyor

// reduce > toplam, carpim.. gibi degerler dondurur
// Bir dizi degil veri dondurur
// reduce'da 2 parametre zorunludur.
// reduce((x, y) =>x+y) >> x: toplam, y: su an ki deger(anlik degerler)
// ilk 2'si zorunlu olmak sarti ile 4 parametre alabilir >> (x,y,indis,dizi)

//-------------- ÖRNEK -------------------
//Maaslarin toplamini bulalim
const maaslar1 = [3000, 5000, 4000, 6000, 6500];
const maasToplam = maaslar1.reduce((x, y) => x + y, 0);
console.log("Toplam Maas : " + maasToplam);
// reduce((x, y) => (x + y),0) >> baslangicta x'e 0 degerini ver demektir. Bu degere accumulator denir
// carpma islemi yaarken 0 degil 1 verilmelidir

// INDIS kullanarak yapalim
const maasToplam1 = maaslar1.reduce((x, y, i) => {
    console.log(`${i}. iterasyon : ${x}`);
    return x + y;
});
console.log("Toplam Maas : " + maasToplam1);

//-------------- ÖRNEK -------------------
// 4000 den buyuk olan maaslarin toplamini hesaplayiniz
const yuksekMaaslar = maaslar1
    .filter((x) => x >= 4000)
    .reduce((x, y) => x + y, 0);
console.log("4000'den yuksek maaslarin toplami : " + yuksekMaaslar);

//-------------- ÖRNEK -------------------
// 3000 'den az olan maaslara %10 zam yaparak toplam ne kadar maas alacaklarini hesaplayalim

const zamliMaas = maaslar1
    .filter((x) => x <= 3000)
    .map((x) => x * 1.1)
    .reduce((x, y) => x + y, 0);
console.log("3000 den az zamli maas toplami : " + zamliMaas);

// Maasi ortalamanin altinda olanlara %20 zam yapalim
const ortalamaMaas = maaslar1.reduce((x, y) => x + y, 0) / maaslar1.length;
const yeniMaaslar = maaslar1
    .filter((x) => x >= ortalamaMaas)
    .map((x) => x * 1.1);
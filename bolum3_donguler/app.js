// ?====================== TEKRARLANAN DURUMLAR (ITERASYON) ====================== //

// ?====================== FOR DONGUSU ====================== //
// for dongusunde degiskenim icin const kullanamayiz cunku const degeri degistirilemez
const sayi = prompt("Dongu miktarini giriniz: ");

for (let i = 1; i <= sayi; i++) {
    console.log(`${i}-Mehmet`);
}

// GIRILEN SAYININ ASAL OLUP OLMADIGINI BULALIM
// Bir sayi kendisi disinda bir sayiya tam bolunuyorsa asal degildir

const number = Number(prompt("Sayiyi giriniz : "));
let asal = true;

for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        asal = false;
        break;
    }
}
const sonuc = asal ? "ASAL" : "ASAL DEGIL";
console.log(sonuc);
// asal degiskeni boolean oldugu icin ekstra bir sarta baglamadan turnary'de kullanabildik

//! browser olmaksizin nodeJS ile JS kodlarini local bilgisayarimizda calistirabiliriz. Bunun icin Terminal > new Terminal > cd bolum3_donguler > nodeJS......

// ?====================== WHILE / DO-WHILE DONGUSU ====================== //
// For ve While dongusunde sart saglanmazsa donguye girilmez.
// Do-While dongusunde sart sonradan yazildigi icin en az 1 defa dongu calismis olur sart saglanirsa devam edilir.

// WHILE
let not;
not = prompt("0-100 arasinda bir not giriniz");
while (not < 0 || sayi > 100) {
    console.log("Girilen not 0-100 arasinda olmalidir");
    not = prompt("0-100 arasinda bir not giriniz");
}
console.log("Girdginiz not 0-100 arasindadir");

// DO-WHILE
let not1;
do {
    not1 = prompt(“0 - 100 arasında bir not giriniz: “);
} while (not1 < 0 || not > 100);
console.log(“Giridiğiniz not 0 - 100 arasındadır”);

//?========================================================================
// Ogrenci notlarini yazdiralim
let ogr = 1;
do {
    not2 = prompt(ogr + ". ogrencinin notunu giriniz");
    ogr++;
} while (not2 != "Q");
console.log(`${ogr}. ogrencinin notu ${not}`);


// 2. YOL
let not3;
let i = 1;
while (true) {
    not3 = prompt(i + ".kisinin notunu giriniz");
    not3 = not3.toLowerCase //girilen karakteri kucuk harfe cevirmis olduk
    if (not3 == "q") {
        break;
    }
    i++;

    console.log(Number(not3));
}
//while ın içinde yazan true olduğu sürece döngü döner ya, true yazarak sonsuz döngü yaptı, ta ki if le not1="q" olana kadar, q girince döngü kırıldı. true yerine 1 , 1==1 gibi seyler de yazilabilir ayni seyi ifade eder. False icin de > false,0,null ifadeleri kullanilir ama false olmasi donguye hic girilmeyecegi anlamina gelir.
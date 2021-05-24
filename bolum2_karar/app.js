// ?============================ IF-ELSE IF-ELSE DEYIMI ================================= //
// * Basit bir hesap makinesi yapalim
const s1 = Number(prompt("Birinci Sayi: "));
const islem = prompt("Islemi giriniz: ");
const s2 = Number(prompt("Ikinci Sayi: "));
let sonuc = 0;
// sonuc degiskenime const atayamam cunku sonuc degisecek

if (islem == "+") {
    sonuc = s1 + s2;
} else if (islem == "-") {
    sonuc = s1 - s2;
} else if (islem == "*") {
    sonuc = s1 * s2;
} else if (islem == "/") {
    sonuc = s1 / s2;
} else {
    alert("yanlis islem yaptiniz");
}
console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
// const s1 = prompt("Birinci Sayi: ");  seklinde s1 ve s2 yi Number'a cevirmeden yapinca toplama isleminde veri girislerini otomatik olarak string kabul eder ve concatination yapar. cikarma carpma bolme islemlerini dogru algilar ve matematiksel islem yapar.

// * Basit bir hesap makinesi yapalim (2. YOL)
const sayı1 = 15,
    sayı2 = 0;
let işlem = "/",
    sonuç = 0;

if (işlem == "+") {
    sonuç = sayı1 + sayı2;
} else if (işlem == "-") {
    sonuç = sayı1 - sayı2;
} else if (işlem == "/") {
    if (!sayı2) {
        // SAYI2 SIFIR YA DA NULL ISE DEMEKTIR
        alert("Bölen Sıfır olamaz");
    } else {
        sonuç = sayı1 / sayı2;
    }
} else if (işlem == "*") {
    sonuç = sayı1 * sayı2;
} else {
    console.log("yanlış işlem");
}
console.log(sayı1 + işlem + sayı2 + "=" + sonuç);

// ?========================================================================================= //
// * Yasi 18'den buyuk olan askere gidebilir
const age = prompt("Yasinizi giriniz: ");
const healt = prompt("Saglikli misiniz E/H");

// 1.YOL(Alert olarak pop-up menude yazdirma)
alert(age > 18 && healt == "E" ? "Askere Gidebilir" : "Askere Gidemez");

// 2.YOL(Consolde yazdirma)
// const result = boolean(age >= 20 && healt == "e" ? true : false);
// console.log(result);
// alert(result); // bu sekilde de pop-up da yazdirilabilir

// ?============================ SWITCH-CASE ================================= //
// JS de cok tercik edilen bir yapi degildir
const gunNo = Number(prompt("Kacinci gunu gormek istiyorsunuz: "));
switch (gunNo) {
    case 1:
        gunAdi = "Pazartesi";
        break;
    case 2:
        gunAdi = "Salı";
        break;
    case 3:
        gunAdi = "Çarşamba";
        break;
    case 4:
        gunAdi = "Perşembe";
        break;
    case 5:
        gunAdi = "Cuma";
        break;
    case 6:
        gunAdi = "Cumartesi";
        break;
    case 7:
        gunAdi = "Pazar";
        break;
    default:
        alert("Gün 1-7 arasında olmalıdır");
        break;
}
console.log(`${gunNo}'nci gun ${gunAdi}`);

// ?============================ TERNARY DEYIMI ================================= //
// Calisma suresi 0-5 olan %10 ,6-10 olana %20, 11 olana %50 zam
const maas = prompt("Maasinizi giriniz: ");
const calismaSuresi = prompt("Calisma suresini giriniz: ");
const zamliMaas =
    calismaSuresi < 5 ? maas * 1.1 : calismaSuresi < 10 ? maas * 1.2 : maas * 1.5;
console.log(zamliMaas);

// Kredi alabilirlik durumuna bakalim
const borç = 0;
const maaş = 3000;
console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir 🤑" : "Kredi Alamaz 🥺");
// borc==0 iki sekilde de kullanilabilir !borc kisa kullanimdir
// JS' de emoji kullanilabilir. Win' de kisa yolu "windows logo tusu + nokta"dir.
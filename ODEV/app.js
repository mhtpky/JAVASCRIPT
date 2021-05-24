// • Soru-1: Girilen not değerine karşılık gelen harfli notu bildiren programı yazınız.• 0-25 arası not karşılığı FF olmalı,26-45 arası DD, 46-65 arası CC, 66- 75 arası BB, 76-90 arası BA, 91-100 arası AA olarak çevrilmelidir.• 100’den büyük veya 0‘dan küçük değerlerde hata mesajı verecektir.

const not = Number(prompt("Notunuzu giriniz : "));
let harf = "";

if (not >= 0 && not <= 25) {
    harf = "FF";
} else if (not >= 26 && not <= 45) {
    harf = "DD";
} else if (not >= 46 && not <= 65) {
    harf = "CC";
} else if (not >= 66 && not <= 75) {
    harf = "BB";
} else if (not >= 76 && not <= 90) {
    harf = "BA";
} else if (not >= 91 && not <= 100) {
    harf = "AA";
} else {
    alert("0'dan kucuk ve 100'den buyuk deger giremezsiniz..");
}
console.log(`${not} nin karsiligi ${harf}'dir`);

// Soru-2: Girilen ay ismine karşılık gelen sıra numarası veren programı switch-case yapısı kullanarak yazınız.

const ay = prompt("Ay ismi giriniz : ");
let sira = 0;

switch (ay) {
    case "OCAK":
        sira = 1;
        break;
    case "SUBAT":
        sira = 2;
        break;
    case "MART":
        sira = 3;
        break;
    case "NISAN":
        sira = 4;
        break;
    case "MAYIS":
        sira = 5;
        break;
    case "HAZIRAN":
        sira = 6;
        break;
    case "TEMMUZ":
        sira = 7;
        break;
    case "AGUSTOS":
        sira = 8;
        break;
    case "EYLUL":
        sira = 9;
        break;
    case "EKIM":
        sira = 10;
        break;
    case "KASIM":
        sira = 11;
        break;
    case "ARALIK":
        sira = 12;
        break;
    default:
        alert("Lutfen bir ay giriniz");
}
console.log(`${ay} ayi ${sira}. aydir`);

// Soru-3: Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en büyüğünü yazdıran programı yazınız.
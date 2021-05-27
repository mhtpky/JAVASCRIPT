const dogum = 1980;
const yaslar = [30, 25, 44, 77];

// dizi olusturalim
// dizimizi const olarak tanimladik normalde const'larda deger degismez demistik ama non-primitive'lerde(objelerde) istisnai bir durum vardir ve degeri degisebilir.
const isimler = [
    "ahmet",
    "mustafa",
    "can",
    "bekir",
    "ayse",
    20,
    40,
    true,
    23.4,
    2021 - dogum, // dizi icine ifade de eklenebilir
    yaslar, // dizi icine dizi eklenebilir
];
// ["ahmet", "mustafa", "can", "bekir", "ayse", 20, 40, true, 23.4, 41, Array(4)]
// JS'de data tipine bakilmaksizin bir dizide hepsi olabilir.
console.log(isimler);

// ilk elemani gorelim
console.log(isimler[0]);

// bekir yerine canan yazalim
console.log((isimler[3] = "canan"));

console.log(isimler); // ["ahmet", "mustafa", "can", "canan", "ayse", 20, 40, true, 23.4, 41, Array(4)]

// sondan bir once ki elemani alalim
console.log((isimler[isimler.length - 2] = false));

// dizi icinde ki diziye eriselim
console.log(isimler[10]); // [30, 25, 44, 77]

// dizi icinde ki dizinin bir elemanina ulasalim
console.log(isimler[10][0]); // 30

// Yeni eleman eklyelim
console.log((isimler[11] = "ipek"));

//*=================== DIZIYI DEGISTIREN METOTLAR ===================

// meyveler dizimi internet sayfamda gormek istiyorum
const h1 = document.getElementById("meyveler");
let meyveler = ["Elma", "Armut", "Muz", "Kivi"];
h1.innerHTML = meyveler;

// pop() son elemani siler ve silinen elemani dondurur
meyveler.pop();

// push() sona eleman ekleyelim ve dizinin boyutunu gorelim
const boyut = meyveler.push("Cilek", "Karpuz", "Kavun");
console.log(boyut);

//unshift() dizinin ilk indeksine eleman ekler ve eleman sayisini dondurur
const boyut1 = meyveler.unshift("Ayva");
console.log(boyut1);

// shift() ilk elemani siler
const silinen = meyveler.shift();
console.log(silinen);

// reverse() diziyi tersden yazdirir
meyveler.reverse();

//sort() alfabetik siralar
meyveler.sort();

//splice() elemanlar arasina eleman ekler
meyveler.splice(1, 0, "Erik");
// 1 > indeks 1'e eleman ekle(1.indeks baslangic noktasi)
// 0 > silmeden eklme yap demek(1 olsaydi silip uzerine yaz demek olurdu)

meyveler.splice(4, 1, "Mango");
// Karpuzu silip yerine mango ekledik

h1.innerHTML = meyveler;
console.log(meyveler);

//*=================== DIZI ERISIM METOTLARI ===================

// includes() dizi icinde var mi
const sayilar = [3, 5, 2, "2", "üc", 2, "bes", 5];
console.log(sayilar.includes("5")); // false
console.log(sayilar.includes(5)); // true

// indexOf() ilk eslesen indeksi dondurur
const ikiIndex = sayilar.indexOf(2);
console.log(ikiIndex); // 2

// Eger aranan eleman bulunamaz ise fonksiyon -1 dondurur
const ucIndex = sayilar.indexOf("uc");
ucIndex < 0 ?
    alert("Aranilan nesne bulunamadi") :
    alert("Aranilan nesnenin indeksi:" + ucIndex);

// lastIndexOf() son eslesen indeksi dondurur
console.log("2'nin son indeksi: " + sayilar.lastIndexOf(2)); //2'nin son indeksi: 5

// join() elemanlari birlestirp string yapar. Elemanlar arasina istedigimz karakteri koyabiliriz
const sayilar1 = sayilar.join();
console.log(sayilar1); // 3,5,2,2,uc,2,bes,5

const sayilar2 = sayilar.join("");
console.log(sayilar2); //3522uc2bes5

const sayilar3 = sayilar.join("-");
console.log(sayilar3); //3-5-2-2-uc-2-bes-5

// toString() elemanlari birlestirp string yapar. Parametreye gore ceviri yapmaz sadece aralarina virgul koyarak oldugu gibi birlestirir.
const sayilar4 = sayilar.toString();
console.log(sayilar4); //3,5,2,2,uc,2,bes,5

// slice() belirli index'den sonrasini alir
const arabalar = ["BMW", "Mercedes", "Audi", "Ferrari", "Anadol"];

const arabalar1 = arabalar.slice(2); // Tek rakam baslangic indeksini gosterir
arabalar1.push("Fiat"); // arabalar1 sonuna Fiat ekledik
console.log(arabalar1); //["Audi", "Ferrari", "Anadol", "Fiat"]

const arabalar2 = arabalar.slice(1, 3); // 1. ve 2. indeksi gosterir
console.log(arabalar2); //["Mercedes", "Audi"]

// concat() dizilerde birlestirme yapar
const yazilar = ["a", "b", "ad", "soyad", "yas"];
const rakamlar = [3, 5, 1, 4, 7];

const birlesik = yazilar.concat(rakamlar, true, true, false, [4, 7, 9]);
console.log(birlesik); //["a", "b", "ad", "soyad", "yas", 3, 5, 1, 4, 7, true, true, false, 4, 7, 9]
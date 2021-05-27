// * Ac butonuna her tiklandiginda lamba_on resmini goster.
document.querySelector(".on").onclick = function() {
    document.querySelector(".resim").src = "./img/lamba_on.gif";
};

// * Kapa butonuna her tiklandiginda lamba_off resmini goster.
document.querySelector(".off").onclick = function() {
    document.querySelector(".resim").src = "./img/lamba_off.gif";
};

// * resmin uzerine mouse her geldiginde lamba_on resmini goster.(4.YONTEM)
// 4.yontemde eventleri kullanirken bas kismina on yazilmaz orn onmouseover yerine mouseover yazdik
document.querySelector(".resim").addEventListener("mouseover", () => {
    document.querySelector(".resim").src = "./img/lamba_on.gif";
});

// *resmin uzerinden mouse her ayrıldiginda lamba_off resmini goster.
document.querySelector(".resim").addEventListener("mouseout", function() {
    document.querySelector(".resim").src = "img/lamba_off.gif";
});

// * inputa yazili metni checkbox tikli ise buyuk harfe cevir.(3.YONTEM)
document.querySelector(".textbox").onkeyup = function() {
    const checkbox = document.querySelector(".checkbox");
    const textbox = document.querySelector(".textbox");

    if (checkbox.checked == true) {
        textbox.value = textbox.value.toUpperCase();
        // checkbox secili ise value'sunu yani icine yazilanlari byk harf yap.
        // Bir degiskene atamazsak hedefe atmazsak islemi gerceklestirmez
    } else {
        textbox.value = textbox.value.toLowerCase();
    }
};

// * YENI BIR HTML ELEMENTI OLUSTURALIM
// olusturulan etiketin yerini insert before after ile ayarlayabiliriz h1 elementini input-div in sonrasina ekleyelim
// olusturdugumz etikete className vererek style.css icinde stillendirme yapabiliriz
const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programlama Dilleri");
h1.appendChild(yazi);
sonDiv.after(h1); // h1 i input-div in sonrasina ekledik
h1.className = "yeni=h1";
//Stillendirmeyi css'de yapacagiz. bu yüzden className atadik

// * CREATETEXTNODE()
// * input-dil icine yazdigimiz dili ekleye tiklandiginda listeye ekleyelim
document.querySelector(".ekle").onclick = function() {
    // Ekleme yapilacak listeyi al
    const liste = document.querySelector(".liste");

    // Input elemanina girilen yeni satirin degerini al
    const satir = document.querySelector(".dil").value;

    // Yeni girilen satiri saklamak icin bir li olustur
    const yeniLi = document.createElement("li");

    // Satira yazilan value'yu yeniLi'ye ekle
    // const textNode = document.createTextNode(satir);
    // yeniLi.appendChild(textNode);
    yeniLi.appendChild(document.createTextNode(satir)); // tek satirda ustte ki 2 satirlik islemi yapms oldk

    // Yeni eklenen satiri var olan listeye bagla
    liste.appendChild(yeniLi);
};

// REMOVECHILD()
// * Sil butonu ile eleman silme
document.querySelector(".sil").onclick = function() {
    const liste = document.querySelector(".liste");
    //liste.removeChild(liste.firstElementChild); // Ilk elemani sil
    liste.removeChild(liste.lastElementChild); // Son elemani sil
};

Math.random(); // 0-1 arasi bir sayi tutar
Math.random() * 20; // 0-20 arasi

const rastgeleSayi = Math.floor(math.random() * 20);
console.log(rastgeleSayi);
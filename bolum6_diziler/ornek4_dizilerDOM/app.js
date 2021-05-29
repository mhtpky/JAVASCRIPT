const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];

const liste = document.createElement("ul"); // ul yani sirasir bir liste olusturduk
liste.className = "liste"; // class verdik liste adinda
document.querySelector(".liste-div").appendChild(liste); // liste-div'e listeyi baglamis olduk

const listeyeEkle = function(satir) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(satir));
    liste.appendChild(li);
    // listeyeEkle adinda bir fonksiyon yazdik
    // listenin satirlarini olusturduk ve her gelen satiri(input-liste) li'ye ekledik
    // li'yi listeye ekledik
}; // * Bu fonk sayesinde inputtan ve diziden gelen degeri otomatik eklemis olduk listeye

const diziyiListeyeEkle = function() {
    for (let i in maaslar) {
        listeyeEkle(maaslar[i]);
    }
    // maaslar dizisine git her bir elemani listeye ekle
    // listeyeEkle fonksiyonu bu isi yapiyor zaten. o yuzden fonksiyuonu cagirdik
};

const aciklamaGuncelle = function(dizi) {
    const aciklama = document.querySelector(".aciklama");
    const yeniMaaslar = dizi.join(" - "); // yeni maaslar isminde bir dizi olusturmus olduk
    aciklama.innerHTML = `Maaslar : ${yeniMaaslar} <br> 
    Toplam Maas : ${dizi.reduce((x, y) => x + y, 0)}`;
    // bu methodda maaslar dizisi aciklama kismina string olarak atanmis oldu
    // method, cagiracagimiz yerden once yazilmis olmasi lazim yoksa before initializing hatasi verir
};

diziyiListeyeEkle();
aciklamaGuncelle(maaslar);

document.querySelector(".ekle").onclick = function() {
    const satir = document.querySelector(".input-liste");
    if (!satir.value) {
        //satirin value'su yoksa demektir
        alert("Lutfen veri girisi yapiniz");
    } else {
        maaslar.push(Number(satir.value)); // input'tan gelen veriyi diziye  ekle
        listeyeEkle(satir.value); // input'tan gelen veriyi listeye yazdir
        satir.value = ""; // islemler bittikten sonra inpiutta yazan veriyi sil
        aciklamaGuncelle(maaslar);
    }
};

document.querySelector(".sil").onclick = function() {
    if (maaslar.length == 0) {
        alert("Silinecek eleman kalmadi");
    } else {
        maaslar.pop(); // maaslar dizisinden son veriyi sil
        document.querySelector(".liste").removeChild(liste.lastElementChild); // listenin on elemanini sil
        aciklamaGuncelle(maaslar);
    }
};

// ara butonuna basinca girdigimiz miktardan az olan maaslari gostersin
document.querySelector(".ara").onclick = function() {
    const satir = document.querySelector(".input-liste");
    if (!satir.value) {
        //satirin value'su yoksa demektir
        alert("Aranacak maas limitini giriniz");
    } else {
        const filtreli = maaslar.filter((x) => x <= satir.value);
        if (filtreli.length == 0) {
            alert("Aradiginiz kriterlerde maas bulunamadi");
        } else {
            aciklamaGuncelle(filtreli);
        }
    }
    satir.value = "";
};

// ENTER'a basinca ekle butonu gibi ekleme yapsin
document.querySelector(".input-liste").onkeydown = function(e) {
    if (e.keyCode === 13) {
        // (e.key === "Enter") seklinde de yazilaabilir
        // ENTER tusuna basildiysa demektir(ascii degeri 13)
        document.querySelector(".ekle").onclick();
        // ekle fonksiyonunu cagirmis olduk
        // ekle elemaninin onclick ozelligini calistir
    } else if (e.keyCode === 46) {
        document.querySelector(".sil").onclick();
    }
};
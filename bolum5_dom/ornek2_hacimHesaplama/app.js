function hesapla() {
    const r = document.getElementById("r").value;

    // ! Class'lara erişim için .class_adı
    // ! id'li bir HTML elemanına erisim için ise #id
    const h = document.querySelector(".h").value;

    const sonuc = Math.PI * r * r * h;
    console.log(sonuc, r, h);
    document.querySelector(".hacim").innerHTML = sonuc;
    // hacim.innerHTML >> hacimin icinde ki veri demektir
    // inputlarin value'su paragrflarin text ya da innerHTML'li olur
}

const buton = document.querySelector(".btn");
buton.style.color = "black";
buton.style.backgroundColor = "pink";
buton.style.width = "100px";
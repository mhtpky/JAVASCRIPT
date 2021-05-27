let rastgeleSayi = Math.floor(Math.random() * 20);
let puan = 10;
let max = 0;

document.querySelector(".max").textContent = "🥇 En Yuksek Puan :" + max;
do {
    document.querySelector(".puan").textContent = "💯 Puan :" + puan;
    document.querySelector("body").style.backgroundColor = "#2d3436";

    document.querySelector(".check").onclick = function() {
        const input = document.querySelector(".input").value;
        const ilkMsj = document.querySelector(".ilkMsj");
        if (input == rastgeleSayi) {
            ilkMsj.textContent = "🎉 Tebrikler Bildiniz 👏";
            document.querySelector(".div").textContent = rastgeleSayi;
            document.querySelector("body").style.backgroundColor = "green";
            document.querySelector(".max").textContent = "🥇 En Yuksek Puan :" + puan;
            if (puan > max) {
                max += puan;
            }
            return;
        } else if (input < rastgeleSayi) {
            ilkMsj.textContent = "📈 Arttir ";
            puan--;
            document.querySelector(".puan").textContent = "💯 Puan :" + puan;
        } else {
            ilkMsj.innerHTML = "📉 Azalt ";
            puan--;
            document.querySelector(".puan").textContent = "💯 Puan :" + puan;
        }

        if (puan == 0) {
            ilkMsj.textContent = " Oyunu Kaybettiniz 😔";
            document.querySelector(".div").textContent = rastgeleSayi;
        }
    };
} while (document.querySelector(".tekrar").onclick);
document.addEventListener("DOMContentLoaded", function () {
    const evetBtn = document.getElementById("evet-btn");
    const hayirBtn = document.getElementById("hayir-btn");
    const icerik = document.getElementById("icerik");

    let hayirTiklamaSayisi = 0;

    evetBtn.onclick = function () {
        if (hayirTiklamaSayisi === 0) {
            // Hiç "Hayır" demeden "Evet" seçerse gösterilecek mesaj
            icerik.innerHTML = `
                <h2>Güzel! Doğru cevabı verdin. 🥳</h2>
                <p>Eğer 'Hayır' deseydin gerçekten üzülür, hatta belki biraz da sinirlenirdim 😒 Neyse ki bunu yapmadın, aferin sana! 😘</p>
                <button id="puzzle-baslat-btn">Puzzle'ları Başlat 🚀</button>
            `;
            document.getElementById("puzzle-baslat-btn").onclick = baslatPuzzle;
        } else {
            evetTiklandi();
        }
    };

    hayirBtn.onclick = function () {
        hayirTiklamaSayisi++;

        if (hayirTiklamaSayisi < 4) {
            // Butonların yerlerini rastgele değiştir.
            let randomX = Math.floor(Math.random() * 200) - 100;
            let randomY = Math.floor(Math.random() * 200) - 100;
            hayirBtn.style.position = "relative";
            hayirBtn.style.top = randomY + "px";
            hayirBtn.style.left = randomX + "px";
        } else {
            // 4 kez hayıra basınca özel ekran
            icerik.innerHTML = `
                <h2>😒 Gerçekten bunu istemiyor musun?</h2>
                <p>O zaman şöyle diyeyim...</p>
                <button id="buyuk-evet-btn" style="font-size: 2rem; background-color: green;">EVET 🎉</button><br><br>
                <button id="kucuk-hayir-btn" style="font-size: 0.7rem; background-color: red; opacity:0.3;">hayır 😅</button>
            `;
            document.getElementById("buyuk-evet-btn").onclick = baslatPuzzle;
            document.getElementById("kucuk-hayir-btn").onclick = function () {
                alert("Cidden mi? 😂 Neyse, ben seni puzzle'lara gönderiyorum...");
                baslatPuzzle();
            };
        }
    };
});

function baslatPuzzle() {
    document.getElementById("icerik").innerHTML = `
        <h2>🔤 Kelime Bulmacası 🔤</h2>
        <p>Aşağıdaki karışık harflerden anlamlı bir cümle oluştur!</p>

        <h3 id="karisik-kelime">y e h i d e m &nbsp;&nbsp; v r a 🎁</h3>

        <input type="text" id="cevap" placeholder="Cevabını buraya yaz">
        <br>
        <button id="kontrol-et">Kontrol Et ✅</button>

        <p id="sonuc"></p>
    `;

    document.getElementById("kontrol-et").onclick = kontrolEt;
}

function kontrolEt() {
    const cevap = document.getElementById("cevap").value.toLowerCase().trim();
    const sonuc = document.getElementById("sonuc");

    if (cevap === "hediyem var") {
        sonuc.innerHTML = "🎉 Doğru cevap! Tebrikler!";
        setTimeout(ikinciPuzzleHazirla, 2000);
    } else {
        sonuc.innerHTML = "❌ Yanlış oldu, tekrar dene!";
    }
}

function ikinciPuzzleHazirla(){
    document.getElementById("icerik").innerHTML = `
        <h2>🎁 Harikasın, ilk puzzle'ı çözdün!</h2>
        <p>"<strong>Hediyem var</strong>" kelimesi tanıdık geldi mi? 🤭 Evet, evet o video:<br>
        <em>"Sana bir hediyem var..."</em><br><br>
        İşte şimdi, benim de sana bir hediyem var. 🎈<br>
        Ama hediyeni alman için önce ikinci puzzle'ı çözmelisin.<br><br>
        Hazır olduğunda devam et!
        </p>
        <button onclick="ikinciPuzzle()">2. Puzzle'a Git 🚀</button>
    `;
}

function ikinciPuzzle(){
    document.getElementById("icerik").innerHTML = `
        <h2>🔑 Şifreyi Çöz 🔑</h2>
        <p>Aşağıdaki sayıların her biri alfabede bir harfe denk geliyor (A=1, B=2...). Şifreyi çöz ve kelimeyi bul!</p>

        <h3 id="sifre-kod">1 - 4 - 5 - 18 - 9 - 13 - 15 🔐</h3>

        <input type="text" id="cevap-sifre" placeholder="Cevabı yaz">
        <br>
        <button id="kontrol-et-sifre">Kontrol Et ✅</button>

        <p id="sonuc-sifre"></p>
    `;

    document.getElementById("kontrol-et-sifre").onclick = kontrolEtSifre;
}

function kontrolEtSifre(){
    const cevap = document.getElementById("cevap-sifre").value.toLowerCase().trim();
    const sonuc = document.getElementById("sonuc-sifre");

    if (cevap === "aderimo") {
        sonuc.innerHTML = "🎉 Tabii ki cevap benim adım: ADERIMO! Bunu bilemezsen çok üzülürdüm. 😋";
        setTimeout(ucuncuPuzzleHazirla, 2500);
    } else {
        sonuc.innerHTML = "❌ Bu olmadı, tekrar denemelisin!";
    }
}

function ucuncuPuzzleHazirla(){
    document.getElementById("icerik").innerHTML = `
        <h2>🚀 Mükemmelsin, ikinci puzzle da tamam!</h2>
        <p>Şimdi son puzzle zamanı! Bunu da çözersen finale çok yaklaşacaksın. 🎯</p>
        <button onclick="ucuncuPuzzle()">3. Puzzle'a Git 🚀</button>
    `;
}

function ucuncuPuzzle() {
    document.getElementById("icerik").innerHTML = `
        <h2>🎁 Son Puzzle: Gizli Mesaj 🎁</h2>
        <p>Aşağıdaki kutulardan birinde senin için özel bir mesaj gizli. Doğru kutuyu bulabilir misin?</p>

        <div id="kutular">
            <button class="kutu" onclick="kutuyuAc(1)">🎁 Kutu 1</button>
            <button class="kutu" onclick="kutuyuAc(2)">🎁 Kutu 2</button>
            <button class="kutu" onclick="kutuyuAc(3)">🎁 Kutu 3</button>
            <button class="kutu" onclick="kutuyuAc(4)">🎁 Kutu 4</button>
        </div>

        <p id="sonuc-kutu"></p>
    `;
}

function kutuyuAc(numara) {
    const sonuc = document.getElementById("sonuc-kutu");
    
    if (numara === 3) { // doğru kutu (örneğin 3 numara)
        sonuc.innerHTML = "🎉 Hayatının en güzel hediyelerinden biri de Emre'dir, değil mi? 🥰 Onun kıymetini bil ve hep mutlu olun!";
        setTimeout(finalHazirla, 7000);
    } else {
        const espiriler = [
            "Burada değil 😅 Tekrar dene!",
            "Hayır, bu kutuda sadece ördek var 🦆",
            "Üzgünüm, burası boş çıktı! 🤪"
        ];
        sonuc.innerHTML = espiriler[Math.floor(Math.random() * espiriler.length)];
    }
}

function finalHazirla(){
    document.getElementById("icerik").innerHTML = `
        <h2>✨ Tüm puzzle'ları başarıyla çözdün! ✨</h2>
        <p>Artık finalde seni bekleyen özel bir mesaj var. Hadi, devam edelim!</p>
        <button onclick="finalGoster()">Finale Git 🌌</button>
    `;
}

function finalGoster() {
    document.body.classList.add("body-final");

    document.getElementById("icerik").innerHTML = `
        <div class="mektup-container">
            
            <div class="zarf" onclick="mektubuAc()">
                📩 Mektubu Açmak İçin Tıkla
            </div>

            <div id="mektup" style="display:none;">
                <div class="mektup-icerik">
                    <p>
                        Sevgili Dostum,<br><br>
                        Bu puzzle’ları hazırlarken amacım seni birazcık olsun gülümsetebilmek ve sana özel olduğunu hatırlatmaktı. Umarım bunu başarabilmişimdir.<br><br>
                        Hayat bazen gerçekten zor olabilir, bunu sen de çok iyi biliyorsun. Birçok insan karşılaştığı zorluklara yenik düşerken sen, karşına çıkan her şeyin üstesinden geliyorsun.<br><br>
                        Bu yolculuğun içinde seni mutlu eden biri var: Emre.<br>
                        Umarım birbirinizin kıymetini bilirsiniz ve birlikte nice güzel anılar biriktirirsiniz.<br><br>
                        Ayrıca sosyal medyada ve YouTube’da hayallerin gerçekleşsin ve her daim emeklerinin karşılığını al. Seni destekleyen insanların olduğunu unutma; biz seni seviyoruz ve her zaman yanında olacağız.<br><br>
                        Sizlerle çok önceden tanışmış olsak da pek konuşmadık, ama bu demek değildir ki sizlerden nefret ediyorum veya sizi unutuyorum. Tam aksine, sizlerle geçireceğim her an benim için büyük mutluluk ve hediye olacaktır. Umarım ben de size aynı mutluluğu yaşatabilirim.<br><br>
                        Doğum günün kutlu olsun! İyi ki varsın, iyi ki hayatımdasın! 🎂✨<br><br>
                        <span class="imza">Sevgilerimle,<br>Aderimo ❤️</span>
                    </p>
                </div>
            </div>

            <audio autoplay loop>
                <source src="final-muzik.mp3" type="audio/mp3">
                Tarayıcın ses dosyasını desteklemiyor.
            </audio>
        `;
}

function mektubuAc() {
    document.querySelector('.zarf').style.display = 'none';
    document.getElementById('mektup').style.display = 'block';
}

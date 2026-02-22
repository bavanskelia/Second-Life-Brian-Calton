const sceneText = document.getElementById("sceneText");
const choicesDiv = document.getElementById("choices");
const sceneImg = document.getElementById("sceneImg");

let state = "start";

const scenes = {
start: {
    text: "Marcus tam adını söylüyor: 'Brian Calton'. Brian irkildi ve cevabı düşünmeli:",
    img: "images/bg_start.png",
    choices: [
        { text: "Bobby'e söyle", next: "badEnding", img: "images/ending_bad.png" },
        { text: "Marcus'a 'MARCUS, HOKUS POKUS'", next: "goodEnding", img: "images/ending_good.png" },
        { text: "Görmezden Gel", next: "ashamedEnding", img: "images/ending_ashamed.png" }
    ]
},
goodEnding: {
    text: "Brian Hokus Pokus dedi, Marcus etkilendi ve seni işe aldı!İşler yolunda. İYİ SON!",
    img: "images/ending_good.png",
    choices: [
        { text: "Tekrar Oyna", next: "start", img: "images/bg_start.png" }
    ]
},
badEnding: {
    text: "Bobby senin kafayı yediğini düşünüp hastaneye götürdü. Taburcu olduğunda Bobby’i bulamadın ve kafayı yedin. KÖTÜ SON!",
    img: "images/ending_bad.png",
    choices: [
        { text: "Tekrar Oyna", next: "start", img: "images/bg_start.png" }
    ]
},
ashamedEnding: {
    text: "Marcus: 'Ağaç gibi sessiz kalmaya devam et, çömez.' Utançtan yere yattın. UTANÇLIK SONU!",
    img: "images/ending_ashamed.png",
    choices: [
        { text: "Tekrar Oyna", next: "start", img: "images/bg_start.png" }
    ]
}
};

// ---- Sahneyi Render Et ----
function renderScene(){
    const currentScene = scenes[state];

    // Görsel
    if(currentScene.img){
        sceneImg.src = currentScene.img;
        sceneImg.style.display = "block";
    } else {
        sceneImg.style.display = "none";
    }

    // Metin anında çıkacak
    sceneText.innerText = currentScene.text;

    // Seçimler
    choicesDiv.innerHTML = "";
    currentScene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = ()=>{ state = choice.next; renderScene(); };
        choicesDiv.appendChild(btn);
    });
}

// ---- Oyunu Başlat ----
renderScene();

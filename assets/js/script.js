function bukaUndangan() {
    const h1 = document.querySelector('#hero');
    const n1 = document.querySelector('#navbar_wrapper');
    const q1 = document.querySelector('#quotes');
    const p1 = document.querySelector('#profil');
    const a1 = document.querySelector('#acara');
    const m1 = document.querySelector('#gallery');
    const k1 = document.querySelector('#tamu');
    const r1 = document.querySelector('#RSVP');
    const s1 = document.querySelector('#story');
    const g1 = document.querySelector('#gift');
    const d1 = document.querySelector('#ucapan');
    const t1 = document.querySelector('#thanks');

const tombolBuka = document.querySelector('#tombolBukaUndangan'); 
tombolBuka.addEventListener('click', function() {
    console.log('Tombol ditekan!');
    bukaUndangan();
});

    
    h1.style.setProperty('display', 'none', 'important');
    n1.style.setProperty('display', 'block', 'important');
    q1.style.setProperty('display', 'block', 'important');
    p1.style.setProperty('display', 'block', 'important');
    a1.style.setProperty('display', 'block', 'important');
    m1.style.setProperty('display', 'block', 'important');
    k1.style.setProperty('display', 'block', 'important');
    r1.style.setProperty('display', 'block', 'important');
    s1.style.setProperty('display', 'block', 'important');
    g1.style.setProperty('display', 'block', 'important');
    d1.style.setProperty('display', 'block', 'important');
    t1.style.setProperty('display', 'block', 'important');

    

   const musik = document.querySelector('#kotak-musik');
        musik.style.display = 'block';

    const lagu = document.querySelector('#lagu');
        lagu.play();
}

function putarLagu (){
    const lagu = document.querySelector('#lagu');
    const tombol = document.querySelector('#kontrol');

    if(lagu.paused){
    lagu.play();
    tombol.src = 'assets/img/on-audio.png';

    }else{
    lagu.pause();
    tombol.src = 'assets/img/off-audio.png';
}
}

function copyToClipboard() {
    const input = document.getElementById('rekening');
    input.select();
    document.execCommand('copy');
    alert('Nomor rekening disalin: ' + input.value);
}


const musik = document.querySelector('#kotak-musik');
        musik.style.display = 'inline-block';

const lagu = document.querySelector('#lagu');
        lagu.play();

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


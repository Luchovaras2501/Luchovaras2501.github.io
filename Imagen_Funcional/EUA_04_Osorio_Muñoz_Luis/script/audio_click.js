const playSound = function () {
    let element = document.createElement('div');
    element.setAttribute('style', 'display: none');
    element.innerHTML = `
    <audio controls autoplay loop id="sound">
        <source src="audio/Wednesday_Addams_Title_Sequence_Netflix_(128_kbps).mp3" type="audio/mp3">
    </audio>`;
    document.body.appendChild(element);
    document.removeEventListener('click', playSound);
}

document.addEventListener('click', playSound);
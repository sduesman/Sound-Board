const sounds = ['Excuse me', 'My name is...', 'What is your name?', 'Nice to meet you!', 'What do you reccomend?', 'How much?', 'Help!', 'Where is the bathroom?', '...How do you say in Thai?', 'Please', 'Im sorry','Goodbye'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
}); 

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);

        song.pause();
        song.currentTime = 0;
    });
};
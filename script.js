window.onload = function() {
    const rose = document.getElementById('rose');
    const message1 = document.getElementById('message1');
    const message2 = document.getElementById('message2');
    
    rose.classList.remove('hidden');
    
    setTimeout(() => {
        message1.classList.remove('hidden');
    }, 2000); // first message will appear 2 seconds after the rose pops up
    
    setTimeout(() => {
        message2.classList.remove('hidden');
    }, 5000); // second message will appear 3 seconds after the first message
}

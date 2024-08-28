const text = 'программирования';
let index = 0;
let speed = 100;

const typeWriter = () => {
    if (index < text.length) {
        document.getElementById('typingEffect').innerHTML += text[index];
        index++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

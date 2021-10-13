function global() {
    
    function createTimeOfSeconds(second) {
        const data = new Date(second * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer

    function startClock() {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = createTimeOfSeconds(seconds);
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const element = e.target;

        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('paused')
            clearInterval(timer)
            startClock()
        }
        if (element.classList.contains('pausar')) {
            relogio.classList.add('paused')
            clearInterval(timer)
        }
        if (element.classList.contains('zerar')) {
            relogio.classList.remove('paused')
            clearInterval(timer)
            seconds = 0;
            relogio.innerHTML = '00:00:00';
        }
    })

}
global()
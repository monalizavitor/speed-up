const interval = setInterval(() => {
    const header = document.querySelector('._1QUKR')
    if (header) {
        console.log('SpeedUp its working!')
        clearInterval(interval)

        const button = document.createElement('button')
        button.innerHTML = '2x'
        button.classList.add('whatsButton')

        button.addEventListener('click', () => {
            const audios = document.querySelectorAll('audio')
            audios.forEach((audio) => {
                console.log(audio)
                audio.playbackRate = 2
            })

        })
    

        header.appendChild(button)
    }

}, 1000)




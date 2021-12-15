const btn = document.querySelector('.btn')
const input = document.querySelector('textarea')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const loadStatus = document.querySelector('.status')

const answers = ['Nie mogę Ci tego zdradzić...', 'Toż to nie możliwe!', 'No a jak!', 'A weź się w łeb pier%#@!nij!', 'Gwiazdy mówią że: chyba nie wiem... ale może.', 'Prawdopodobnie jak najbardziej.', 'Po ciemnku to i oświecony w ściane wejdzie', 'Oczywiście!', 'Nieee.... nieee.. po prostu, nie.', 'Ja yhy...', 'Letko panie!', 'Zapomnij... odwróć się i wyjdź... będę udawać, że nie było tematu.', 'A gdyby tak...?', 'Wiadomo!']

const showAnswer = () => {
    let random = Math.floor(Math.random() * answers.length)
    answer.textContent = answers[random]
    error.textContent = ''
}
const clearAnswer = () => {
    answer.textContent = ''
}
const checkInput = () => {
    const questionLength = input.value.length
    const askMark = input.value.indexOf('?')
    if (input.value !== '' && askMark !== (questionLength - 1)) {
        answer.textContent = ''
        error.textContent = 'Pytanie powinno być zakończone znakiem "?"'
    } else if (input.value === '') {
        error.textContent = 'Musisz zadać jakieś pytanie'
    } else {
        showAnswer()
    }
    loadStatus.classList.remove('loading')
}

btn.addEventListener('click', () => {
    loadStatus.classList.add('loading')
    setTimeout(checkInput, 2000)
})

input.addEventListener('click', clearAnswer)
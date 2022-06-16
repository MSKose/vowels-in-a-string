const input = document.getElementById('inputText');
const text = document.getElementById('text');
const button = document.getElementById('btn')

console.log(text);



button.addEventListener('click', () => {
    if (!input.value) alert('please type something')

    let count;
    if (input.value.match(/[aeiou]/gi)) {
        count = input.value.match(/[aeiou]/gi).length
    }else {
        count = 0
    }

    let red = `<span style="color:red; font-weight: 800;">${input.value}</span>`

    if (count === 0){
        text.innerHTML = `There is no vowel in ${red}`
        input.value = ''
    } else if (count == 1){
        text.innerHTML = `There is ${count} vowel in ${red}`
        input.value = ''
    } else {
        text.innerHTML = `There are ${count} vowels in ${red}`
        input.value = ''
    }
})


input.addEventListener('keydown', e => {
    if (e.key === 'Enter'){
        button.click()
    }
})
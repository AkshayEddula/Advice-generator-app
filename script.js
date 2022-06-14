const api_url = 'https://api.adviceslip.com/advice'

const refresh = document.querySelector('.dice');


async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    id_advice = data.slip.id;
    advice = data.slip.advice;
    document.getElementById('advice_id').innerHTML = id_advice;
    document.getElementById('advice').innerHTML = advice;
};
getData();

refresh.addEventListener('click', e => {
    getData();
})
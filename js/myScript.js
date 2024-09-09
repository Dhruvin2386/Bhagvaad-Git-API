const url = 'https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '7948a12263msh783bb1ff0796877p163c58jsn6583ff550662',
        'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com'
    }
};
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        result.forEach((data) => {
            document.getElementById('show').innerHTML += `<a href="chapter/ch-${data.chapter_number}.html" class="fs-4">ch-${data.chapter_number} - ${data.name}</a>`
            console.log(data.name);
        });
    } catch (error) {
        console.error(error);
    }
}

fetchData();
let onGoing = null
async function getTestStuff() {
    const url = 'https://myanimelist.p.rapidapi.com/v2/anime/seasonal?year=2023';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6aa7a05183msh67461e78d957930p1dfb42jsna7362882dcbe',
            'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const res = await response.json();
        console.log(res['TV (Continuing)']);
        onGoing = res['TV (Continuing)']
        return res['TV (Continuing)'];
    } catch (error) {
        console.error(error);
    }
}


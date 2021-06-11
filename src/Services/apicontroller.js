
const api_key = '2dc9a9ee49a9191b5b1a629fa423fe71';
const baseUrl = "https://api.themoviedb.org/3"

async function makeGetRequest(url) {
    const requestConfig = { method: 'get' }
    var response = await fetch(url, requestConfig)
    return response;
}

export function GetVideos(movie_id = 8392) {
    const url = `${baseUrl}/movie/${movie_id}/videos?api_key=${api_key}`
    var result = fetch(url, { method: 'get' })
        .then(response => response.json())
        .catch(error => console.error(error))
    return result;
}

export async function GetDetails(movie_id = 8392) {
    try {
        const endpoint = `${baseUrl}/movie/${movie_id}?api_key=${api_key}`;
        return await makeGetRequest(endpoint)
    } catch (error) { console.warn(error) }
}
export async function GetManyDetails(movies_ids) {
    try {
        var responses;
        if (movies_ids.length > 1) {
            responses = await Promise.all(movies_ids.map(async movie => {
                const result = await GetDetails(movie.id)
                return result
            }))
        } else {
            const result = await GetDetails(movies_ids.id)

            return result
        }
        return responses
    } catch (err) { console.log(err) }
}


export async function GetUpcomming() {
    try {
        const endpoint = `${baseUrl}movie/upcoming?api_key=${api_key}`;
        return await makeGetRequest(endpoint)
    } catch (error) { console.warn(error) }
}
export async function GetCredits(movie_id = 8392) {
    try {
        const endpoint = `${baseUrl}/movie/${movie_id}/credits?api_key=${api_key}`
        return await makeGetRequest(endpoint)
    } catch (error) { console.warn(error) }
}

export async function GetTrending(time_window = 'week', type = 'movie') {
    try {
        const url = `${baseUrl}/trending/${type}/${time_window}?api_key=${api_key}`
        return await makeGetRequest(url)
    } catch (error) { console.warn(error) }
}
export async function FindMovie(searchQuery) {
    try {
        const url = `${baseUrl}/search/movie?query=${searchQuery}&api_key=${api_key}`
        return await makeGetRequest(url)
        // fetch(`https://api.themoviedb.org/3/search/movie?api_key=7c5d0c6f8811332e3ae2562e7ad9e6ad&query=${txtSearch}`)
        // .then(respuesta => respuesta.json())
        // .then(data => setmovies([...data.results]));
    } catch (error) { console.warn(error) }
}
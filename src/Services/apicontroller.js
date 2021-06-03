
const api_key = '2dc9a9ee49a9191b5b1a629fa423fe71';
const baseUrl = "https://api.themoviedb.org/3/"

async function makeGetRequest(url) {
    const requestConfig = { method: 'get' }
    var response = await fetch(url, requestConfig)
    return response;
}

export function GetVideos(movie_id = 8392) {
    const url = `${baseUrl}movie/${movie_id}/videos?api_key=${api_key}`
    var result = fetch(url, { method: 'get' })
        .then(response => response.json())
        .catch(error => console.error(error))
    return result;
}

export async function GetDetails(movie_id = 8392) {
    try {
        const endpoint = `${baseUrl}movie/${movie_id}?api_key=${api_key}`;
        return await makeGetRequest(endpoint)
    } catch (error) { console.warn(error) }
}

export async function GetCredits(movie_id = 8392) {
    try {
        const endpoint = `${baseUrl}movie/${movie_id}/credits?api_key=${api_key}`
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
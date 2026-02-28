const apikey = import.meta.env.VITE_API_KEY;
const headers = { 'api-key': apikey };

export function getTrack(trackID: string) {
    return fetch(
        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackID,
        // "http://localhost:5000/playlist",
        {
            headers: headers,
        },
    ).then((res) => res.json());
}

export function getTracks() {
    return fetch(
        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5&pageNumber=2',
        // "http://localhost:5000/playlist",
        {
            headers: headers,
        },
    ).then((res) => res.json());
}

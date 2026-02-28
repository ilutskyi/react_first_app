const apikey = '0f9678e2-659a-44cc-9e78-8e90384a65dd';
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

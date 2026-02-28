import { useEffect, useState } from "react";
import type { Track } from "../dal/types.ts";
import { getTracks } from "../dal/api.ts";

export function useTracks() {
    const [tracks, setTracks] = useState<Track[] | null>(null);

    useEffect(() => {
        // fetch("http://localhost:5000/playlist").then(console.log)
        getTracks()
            // .then(json => json.json())
            .then((json) => setTracks(json.data))
            .catch((err: Error) => console.table(err.message));
    }, []);

    return {
        tracks,
    };
}

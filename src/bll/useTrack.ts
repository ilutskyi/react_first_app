import { useEffect, useState } from "react";
import type { TrackDetailsResource } from "../dal/types.ts";
import { getTrack } from "../dal/api.ts";

export function useTrack(selectedTrackID: string | null) {
    const [selectedTrack, setSelectedTrack] =
        useState<TrackDetailsResource | null>(null);

    useEffect(() => {
        if (!selectedTrackID) {
            return;
        }

        getTrack(selectedTrackID)
            .then((json) => setSelectedTrack(json.data))
            .catch((err) => console.log("error fetching details"));
    }, [selectedTrackID]);

    return {
        selectedTrack
    }
}
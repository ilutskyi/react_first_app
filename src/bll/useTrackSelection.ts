import { useState } from "react";

export function useTrackSelection() {
    const [selectedTrackID, setSelectedTrackID] = useState<string | null>(null);

    const handleTrackSelect = (trackID: string) => {
        setSelectedTrackID(trackID);
    };

    return {
        selectedTrackID,
        handleTrackSelect
    }
}

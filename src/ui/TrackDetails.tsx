import { useTrack } from "../bll/useTrack.ts";
import styles from "./TrackDetails.module.css";

type Props = {
    selectedTrackID: string | null;
};


export function TrackDetails(props: Props) {
    const {selectedTrack} = useTrack(props.selectedTrackID);
    
    return (
        <div className={styles.track}>
            <h2>Track Deatails</h2>
            {!props.selectedTrackID && <span>No selected track</span>}
            {props.selectedTrackID && !selectedTrack && <span>Loading...</span>}
            {selectedTrack && (
                <div>
                    <h4>{selectedTrack.attributes.title}</h4>
                    <p>{selectedTrack.attributes.lyrics}</p>
                </div>
            )}
            {props.selectedTrackID &&
                selectedTrack &&
                selectedTrack.id !== props.selectedTrackID && (
                    <span>Loading...</span>
                )}
        </div>
    );
}

import { useTracks } from '../bll/useTracks.ts';
import { TrackItem } from './TrackItem.tsx';
import styles from './Playlist.module.css'

type Props = {
    selectedTrackID: string | null;
    onTrackSelect: (trackID: string) => void;
};

export function Playlist(props: Props) {
    const { tracks } = useTracks();

    return (
        <div>
            {tracks === null && <span>Loading...</span>}
            {tracks?.length === 0 && <span>No tracks</span>}
            <ul className={styles.tracks}>
                {tracks?.map((track) => (
                    <TrackItem
                        key={track.id}
                        track={track}
                        isSelected={track.id === props.selectedTrackID}
                        onTrackSelect={props.onTrackSelect}
                    />
                ))}
            </ul>
        </div>
    );
}

import type { Track } from '../dal/types';
import styles from './TrackItem.module.css';
import clsx from 'clsx';

type TrackItemProps = {
    track: Track;
    isSelected: boolean;
    onTrackSelect: (trackID: string) => void;
};

export function TrackItem(props: TrackItemProps) {
    const classNames = clsx({
        [styles.track]: true,
        [styles.selected]: props.isSelected,
    });
    const handleClick = () => {
        props.onTrackSelect(props.track.id);
    };
    return (
        <li className={classNames}>
            <div onClick={handleClick}>
                {props.track.attributes.title.substring(0, 33)}
            </div>
            <audio
                controls
                src={props.track.attributes.attachments[0].url}
            ></audio>
        </li>
    );
}

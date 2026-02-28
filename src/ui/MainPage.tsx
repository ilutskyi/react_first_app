import { PageTitle } from './PageTitle.tsx';
import { Playlist } from './Playlist.tsx';
import { TrackDetails } from './TrackDetails.tsx';
import { useTrackSelection } from '../bll/useTrackSelection.ts';

export function MainPage() {
    const {selectedTrackID, handleTrackSelect} = useTrackSelection()
    
    return (
        <div>
            <PageTitle value={'Musicfun Player'} />
            <Playlist
                selectedTrackID={selectedTrackID}
                onTrackSelect={handleTrackSelect}
            />
            <hr />
            <TrackDetails selectedTrackID={selectedTrackID} />
        </div>
    );
}

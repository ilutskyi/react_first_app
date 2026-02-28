type TrackAttachment = {
    url: string;
};

type TrackAttributes = {
    title: string;
    attachments: TrackAttachment[];
};

export type Track = {
    id: string;
    attributes: TrackAttributes;
};

type Attachment = {
    url: string;
};

type TrackDetailsAttributes = {
    title: string;
    lyrics: string;
    attachments: Attachment[];
};

export type TrackDetailsResource = {
    id: string;
    attributes: TrackDetailsAttributes;
};

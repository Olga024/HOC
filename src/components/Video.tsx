import type { TVideoDateListElement } from "../mock/video-date";
import { DateTimePretty } from "./DateTimePretty";

export function Video(props: TVideoDateListElement) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}
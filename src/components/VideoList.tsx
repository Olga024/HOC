import type { TVideoDateListElement } from "../mock/video-date";
import { Video } from "./Video";

export function VideoList(props: { list: TVideoDateListElement[] }) {
    return props.list.map((item) => <Video url={item.url} date={item.date} />);
}

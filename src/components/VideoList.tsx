import type { TVideoDateListElement } from "../mock/video-date";
import { Video } from "./Video";

export function VideoList(props: { list: TVideoDateListElement[] }) {
    return props.list.map((item,i) => <Video url={item.url} date={item.date} key={`video-${i}`}/>);
}

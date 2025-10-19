import type { TVideoViewListElement } from "../mock/video-view";
import { Article } from "./Article";
import { New } from "./New";
import { Popular } from "./Popular";
import { VideoWithView } from "./VideoWithView";

export function VideoArticleList(props: { list: TVideoViewListElement[] }) {
    return props.list.map((item) => {
        let Component: any = <></>;
        switch (item.type) {
            case 'video':
                Component = VideoWithView;
                break;
            case 'article':
                Component = Article;
                break;
        }

        if (item.views < 100) {
            return (<New children={<Component {...item} />} />);
        } else if (item.views > 1000) {
            return (<Popular children={<Component {...item} />} />);
        }
        else {
            return (<Component {...item} />);
        }
    });
}
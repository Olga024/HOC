import { useEffect, useState } from 'react';
import { VideoList } from './components';
import { videoDateList } from './mock/video-date';
import { VideoArticleList } from './components/VideoArticleList';
import { videoView } from './mock/video-view';

export default function App() {
  const [list, setList] = useState<typeof videoDateList>();
  const [list2, setList2] = useState(videoView);

  useEffect(() => {
    setList(videoDateList.map(({ url, date }) => {
      return { url, date: date.replace(/^(\d{4}-\d{2})/g, '2025-10') };
    }));
  }, []);

  return <div style={{display:'flex'}}>
    <div><VideoList list={list || []} /></div>
    <div><VideoArticleList list={list2 || []} /></div>
  </div>;
}

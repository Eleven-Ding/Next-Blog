import IntroduceSelf from "../components/home/self-introduce";
import PostList from "../components/home/post-list/post-list";
import BaseHead from "../components/share/base-head";
export default function Home() {
  return (
    <div>
      <BaseHead title="ElevenDing's Blog"></BaseHead>
      <IntroduceSelf></IntroduceSelf>
      <PostList></PostList>
    </div>
  );
}

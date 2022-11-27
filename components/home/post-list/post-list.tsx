import Link from "next/link";
import PostItem from "../post-item/post-item";
import styles from "./post-list.module.scss";
const posts = [1, 2, 3, 4, 5];
export default function PostList() {
  return (
    <div className={styles["post-list-container"]}>
      {posts.map((item) => {
        return <PostItem postId={item} key={item}></PostItem>;
      })}
    </div>
  );
}

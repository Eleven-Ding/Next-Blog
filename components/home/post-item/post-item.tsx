import styles from "./post-item.module.scss";
import Link from "next/link";
export default function PostItem({ postId }: { postId: number }) {
  return (
    <div className={styles["post-item-container"]}>
      <Link href={`/detail?id=${postId}`}>
        <h2>Titile</h2>
      </Link>
      <section>Description</section>
      <span>Tags</span>
      <span>Wed Feb 02 2022</span>
    </div>
  );
}

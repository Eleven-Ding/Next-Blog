/**
 * @description 整个 app 公共的 header，放置与 layout 中
 */
import styles from "./header.module.scss";
import Link from "next/link";
export default function Header() {
  return (
    <div className={styles["header-container"]}>
      <Link className={styles["header-link"]} href={"/"}>
        Home
      </Link>
      <Link className={styles["header-link"]} href={"/friends"}>
        Friends
      </Link>
      <Link className={styles["header-link"]} href={"/about"}>
        About
      </Link>
    </div>
  );
}

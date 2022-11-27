import styles from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
  return (
    <div className={styles["footer-container"]}>
      <p>
        Powered by <Link href="https://www.nextjs.cn/">Next.js</Link> &
        <Link href="https://www.nestjs.com.cn/"> Nest.js </Link>
      </p>
      
      <p>
        Copyright©
        <a href="https://github.com/Eleven-Ding">Shi Yi</a>
      </p>
    </div>
  );
}

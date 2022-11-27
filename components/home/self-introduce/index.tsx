import styles from "./index.module.scss";
import CustomImage from "../../share/image/image";
export const CONNECT_ICON_SIZE = 22;
export default function IntroduceSelf() {
  return (
    <div className={styles["self-introduce-container"]}>
      <h1>ElevenDing</h1>
      <p>热爱游戏和编程，喜欢创造新的东西</p>
      <p>提升自己一直是我努力的方向，不断学习，迎接新的挑战</p>
      <p>
        在探索中进步，我希望有一天能成为一名全栈工程师，努力把自己的梦想变成现实
      </p>
      <section className={styles.connections}>
        <CustomImage
          width={CONNECT_ICON_SIZE}
          height={CONNECT_ICON_SIZE}
          src="/imgs/github.jpg"
          alt="Github"
        ></CustomImage>
        <CustomImage
          width={CONNECT_ICON_SIZE}
          height={CONNECT_ICON_SIZE}
          src="/imgs/wechat.jpg"
          alt="Wechat"
        ></CustomImage>
        <CustomImage
          width={CONNECT_ICON_SIZE}
          height={CONNECT_ICON_SIZE}
          src="/imgs/email.jpg"
          alt="Email"
        ></CustomImage>
      </section>
      <hr />
    </div>
  );
}

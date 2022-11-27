export default function About() {
  return <h1>About</h1>;
}

export async function getStaticProps() {
  const data = await fetch(`http://hsslive.cn/prodapi/tag/list`);
  const res = await data.json();

  return {
    props: {
      title: "233",
      content: res,
    },
  };
}

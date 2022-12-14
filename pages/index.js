import Head from "next/head";
import Image from "next/image";
import Exprience from "./exprience";

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div>
            <img
              src={data.avatar_url}
              alt="github avatar"
              width="100"
              heigth="100"
              style={{ borderRadius: "50%" }}
            />
            <h3>{data.name}</h3>
            <h6>{data.login}</h6>
            <p>{data.bio}</p>
            <h5>HTML|CSS|JAVASCRIPT|REACT|NEXT|</h5>
            <button>Resume</button>
            <div style={{ marginTop: "10px" }}>
              <Exprience />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  let res = await fetch("https://api.github.com/users/sunilkumar93");
  let data = await res.json();
  return {
    props: {
      data: data,
    }, // will be passed to the page component as props
  };
}

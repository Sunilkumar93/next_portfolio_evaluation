import React from "react";
import Link from "next/link";
const Page = ({ repos }) => {
  return (
    <div>
      <h3>Total:{repos.total_count}</h3>
      <div
        style={{
          display: "grid",
          gap: "15px",
          gridTemplateColumns: "repeat(3,1fr)",
        }}
      >
        {repos.items.map((item) => {
          return (
            <div key={item.id} style={{ cursor: "pointer",border:"1px solid white",padding:"5px" }}>
              <Link href={item.html_url} target="_blank">
              <h4>{item.name}</h4>
              <p>{item.full_name}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between",gap:"8px" }}
                >
                  <h5>star:{item.stargazers_count}</h5>
                  <h5>frok:{item.forks}</h5>
                </div>
                <div>
                  <h5>language:{item.language}</h5>
                </div>
              </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

export async function getStaticProps(context) {
  let res = await fetch("https://api.github.com/search/repositories?q=user:sunilkumar93+fork:true&sort=updated&per_page=10&type=Repositories");
  let data = await res.json();

  return {
    props: { repos: data },
  };
}

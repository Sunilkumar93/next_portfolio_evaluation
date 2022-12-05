import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav>
        <div style={{display:"flex", justifyContent:"space-around",margin:"20px"}}>
          <Link href="/">Home</Link>
          <Link href="/exprience">Exprience</Link>
          <Link href="/projects">Project</Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

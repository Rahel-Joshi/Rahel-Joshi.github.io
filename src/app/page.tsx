import Image from "next/image";
import {Header} from "./components/Header"
import {Body} from "./components/Body"
import {Projects} from "./components/Projects"

export default function Home() {
  return (
      <div>
        <link rel="icon" href="/favicon.ico" sizes="any" /> 
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <Body/>
      </div>
  );
}
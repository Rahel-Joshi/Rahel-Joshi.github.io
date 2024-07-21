import Image from "next/image";
import {Header} from "./components/Header"
import {Body} from "./components/Body"

export default function Home() {
  return (
      <div>

        <div>
          <Header/>
        </div>

        <div>
          <Body/>
        </div>

      </div>

  );
}
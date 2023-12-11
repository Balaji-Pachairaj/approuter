import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
     return (
          <>
               <div className=" text-[28px]">sadfjaslk</div>

               <p>
                    <a href="/about">about us</a>
                    <Link href="/about">ABOUT US WITH LINK COMPONENT</Link>
               </p>

               <Header />
          </>
     );
}

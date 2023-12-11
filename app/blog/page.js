import Link from "next/link";
import React from "react";

const page = (props) => {
 

     return (
          <div>
               this is blog page
               <Link href="/blog/blog-1">Blog -1 </Link>
               <Link href="/blog/blog-2">Blog -2 </Link>
               <Link href="/blog/blog-3">Blog -3 </Link>
          </div>
     );
};

export default page;

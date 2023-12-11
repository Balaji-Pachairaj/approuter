import React from "react";

const page = (props) => {
     const { params } = props;

     console.log(params.blogid);
     return <div>one blog page {params.blogid}</div>;
};

export default page;

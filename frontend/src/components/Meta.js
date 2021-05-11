import { Helmet } from "react-helmet";

import React from "react";

const Meta = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keyword} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to ProShop",
  keyword: "electronics, buy electronic, cheap electronics",
  description: "Newest electronic products for sale",
};

export default Meta;

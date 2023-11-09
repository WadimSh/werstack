import React from "react";

import LayoutFlex from "../../ui/layout/layout-flex";

const Cover = () => {

  return (
    <LayoutFlex
      container
      nameTag='header'
      gap={6}
    >
      <LayoutFlex
        item
        md={1}
      ></LayoutFlex>
      <LayoutFlex
        item
        sm={8}
        md={6}
      ></LayoutFlex>
      <LayoutFlex
        item
        md={12}
      ></LayoutFlex>
    </LayoutFlex>
  );
};

export default Cover;
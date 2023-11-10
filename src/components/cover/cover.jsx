import React from "react";

import LayoutFlex from "../../ui/layout/layout-flex";
import InputField from "../../ui/input/input-field";

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
      >
        <InputField 
          type="text"
          name="text"
          placeholder="Укажите свое имя"
        />
      </LayoutFlex>
      <LayoutFlex
        item
        sm={8}
        md={6}
      >
        text
      </LayoutFlex>
      <LayoutFlex
        item
        md={12}
      >
        text
      </LayoutFlex>
    </LayoutFlex>
  );
};

export default Cover;
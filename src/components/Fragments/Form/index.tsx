import Button from "@/components/Button";
import React from "react";

type formType = {
  children: React.ReactNode;
  onsub: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({children, onsub} : formType) => {

  return (
    <form onSubmit={onsub}>
      {children}
    </form>
  );
};

export default Form;

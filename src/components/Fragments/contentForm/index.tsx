import React from "react";
import { ValidationError } from "@formspree/react";

type contentFormType = {
  errors: any;
  labelContent: string;
  type: string;
  nameId: string;
}

const ContentForm = ({labelContent, type, nameId, errors}: contentFormType) => {
  return (
    <div className=" flex flex-col gap-3 pb-5">
      <label htmlFor="name" className="text-base text-grey">
        {labelContent}
      </label>
      <input
        type={type}
        name={nameId}
        id={nameId}
        className=" max-w-2xl text-dark bg-light opacity-80 py-1 px-2 outline-semiDark rounded"
      />
      <ValidationError prefix={nameId} field={nameId} errors={errors} />
    </div>
  );
};

export default ContentForm;

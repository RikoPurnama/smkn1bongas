import React from "react";

const ContentForm = ({labelContent, type, nameId}: any) => {
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
    </div>
  );
};

export default ContentForm;

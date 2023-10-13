import React from "react";

const Textarea = () => {
  return (
    <div className=" flex flex-col gap-3 pb-5">
      <label htmlFor="pertanyaan" className="text-base text-grey">
        Pertanyaan
      </label>
      <textarea
        name="pertanyaan"
        id="pertanyaan"
        rows={5}
        className=" max-w-2xl text-dark bg-light opacity-80 py-1 px-2 outline-semiDark rounded"
      ></textarea>
    </div>
  );
};

export default Textarea;

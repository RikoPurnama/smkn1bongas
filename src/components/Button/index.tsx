type buttonType = {
  buttonText: string;
  coloring: string;
};

const Button = ({ buttonText, coloring }: buttonType) => {
  return (
    <>
      <button
        className={`text-base text-white py-2 px-6 ${coloring} rounded-md`}
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;

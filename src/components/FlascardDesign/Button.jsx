/* eslint-disable react/prop-types */
const Button = ({ text, btnclass, fn, type }) => {
  return (
    <button onClick={fn} type={type} className={btnclass}>
      {text}
    </button>
  );
};

export default Button;

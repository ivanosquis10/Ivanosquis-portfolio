const Button = ({ src, text }) => {
  return (
    <button>
      <a
        href={src}
        target="_blank"
        className="font-bold cursor-pointer invisible"
        rel="noopener noreferrer"
      >
        {text}
      </a>
    </button>
  );
};

export default Button;

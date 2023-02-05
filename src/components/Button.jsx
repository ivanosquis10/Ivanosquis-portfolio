const Button = ({ src, text }) => {
  return (
    <button>
      <a
        href={src}
        target="_blank"
        className="font-bold cursor-pointer"
        rel="noopener noreferrer"
        title="boton para ver el CV"
      >
        {text}
      </a>
    </button>
  );
};

export default Button;

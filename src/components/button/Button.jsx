// import "./button.css";

function Button(props) {
  const { onClick, children } = props;
  const style = {
    borderRadius: "200px",
    border: "1px solid transparent",
    fontWeight: "bold",
    width: "10%",
    backgroundColor: "rgb(194, 191, 184)",
  };

  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

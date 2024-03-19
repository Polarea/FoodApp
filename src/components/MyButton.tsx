interface Props {
  style?: string;
  children: string;
  handleClick: () => void;
}

const MyButton = ({ style = "primary", children, handleClick }: Props) => {
  return (
    <button className={`btn btn-outline-${style}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default MyButton;

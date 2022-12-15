import preloader from "./../../assets/preloader.svg";
const Preloader = (props) => {
  return <div>{props.preloader ? <img src={preloader} /> : null}</div>;
};

export default Preloader;

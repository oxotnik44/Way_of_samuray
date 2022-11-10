import preloader from "./../../assets/images/preloader.svg";
const Preloader = (props) => {
  return <div>{props.preloader ? <img src={preloader} /> : null}</div>;
};

export default Preloader;

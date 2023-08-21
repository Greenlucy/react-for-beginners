import PropTypes from "prop-types";
import styles from "./Button.module.css";   // create-react-app이 CSS코드를 javascript 오브젝트로 변환시켜줌. 

function Button({text}){
    // javascript 오브젝트가 btn을 내부에 가지고 있음. 
    // create-react-app은 무작위적인 랜덤 class를 가짐. ->  웹 개발자모드(f12)에서 확인 가능.
    return <button className={styles.btn}>{text}</button>; // return (); 인데 () 없이 한 줄에 적어주니까 <button></button> 끝에 ; 표시하기 
}

Button.propTypes = {
    text: PropTypes.string.isRequired, // PropTypes. 점 뒤에서 자동완성을 확인할 수 있음. 
}

export default Button;  // App.js에서 Button import 하기 위해


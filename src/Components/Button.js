import "./Button.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


const Button = ({ symbol , color , handelClick }) => {
    return  (
        <div 
        onClick={() => handelClick(symbol)}
        
        className="button-wrapper" style={{backgroundColor: color}}>
            {symbol}
        </div>

    );
} 

export default Button
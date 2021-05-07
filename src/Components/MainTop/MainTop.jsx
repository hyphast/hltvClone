import TopLogo from './../../common/images/TopSmallLogo.png';
import {NavLink} from "react-router-dom";

const MainTop = () => {
    return <div>
        <NavLink to={'/news'}><img style={{
            width: '173px',
            height: '60px'
        }} src={TopLogo} alt="HltvLogo"/></NavLink>
    </div>
}

export default MainTop;
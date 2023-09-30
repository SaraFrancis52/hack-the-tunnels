import { Page } from "../../components";
import "./Error.style.scss";
import gif from "../../../public/error.gif"

function Error(){
    return(
        <Page>
            <center className="error">404: Not Found</center>
            <div className="photo">
            <center><img src={gif} alt="gif"/></center>
            </div>
        </Page>
    )
}

export default Error;
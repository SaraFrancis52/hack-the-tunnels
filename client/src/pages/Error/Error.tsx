import { Page } from "../../components";
import "./Error.style.scss";
import gif from "../../../public/error.gif"

function Error(){
    return(
        <Page>
            <center className="error">404: Not Found</center>
            <center><img src={gif} alt="gif"/></center>
        </Page>
    )
}

export default Error;
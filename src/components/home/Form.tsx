import { useState } from "react";
import IconButton from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import UploadFileButton from "../common/buttons/UploadFileButton";
import useMediaQuery from "@mui/material/useMediaQuery";


interface FormProps {
    onChange: (email: string, e: any) => void;
    onSearch: (email: string, e: any) => void;
}


const Form = (props: FormProps) => {
    const [email, setEmail] = useState<string>("");
    const [validEmail, setValidEmail] = useState(false);
    const smallScreen = useMediaQuery('(max-width:520px)');

    const changeEmail = (e: any) => {
        setEmail(e.target.value);
        setValidEmail(e.target.validationMessage === "");
    };


    return (
    <div style={{backgroundColor: "black", padding: "10px", display: "grid", justifyContent: "center"}}>
        <div style={smallScreen ? {display: "flex", flexDirection: "column", gap: "10px"} : {display: "flex", height: "32px", gap: "10px"}}>
            <div style={{display: "grid", gridTemplateColumns: "66px auto 64px"}}>
                <label style={{
                    backgroundColor: "white", 
                    padding: "5px 10px", 
                    borderRadius: "5px 0 0 5px", 
                    border: "1px solid #1976d2",
                    fontWeight: "bold",
                    borderRight: "none"}}>Email:</label>
                <input name="email" type="email" value={email} 
                    style={{lineHeight: "32px", minWidth: "200px"}}
                    onChange={changeEmail}/>
                <IconButton variant="outlined" disabled={!validEmail}
                    onClick={(e) => props.onSearch(email, e)} aria-label="search"
                    style={{borderRadius: "0 5px 5px 0", backgroundColor: "white"}}>
                    <SearchIcon/>
                </IconButton>
            </div>
            {validEmail && <UploadFileButton style={{minHeight: "38px"}} onFiles={(e) => props.onChange(email, e)}/>}
        </div>
    </div>);
}

export default Form;
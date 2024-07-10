import { useState } from "react";
import env from "react-dotenv";

import axios from "axios";
import Data, { DataProps } from "../components/home/Data";
import Form from "../components/home/Form";


const Home = () => {
    const [data, setData] = useState<DataProps>({nouns: [], verbs: []});

    const load = async (email: string, e: any) => {
        let formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("email", email as string);
        const res = await axios.post(`${env.API_URL}/info/`, formData, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        });
        setData(res.data);
    };

    const search = async (email: string) => {
        try {
            const res = await axios.post(`${env.API_URL}/info/search/`, {email: email});
            setData(res.data);
        } catch {}
    };
    
    return(
        <div style={{height: "100%"}}>
            <Form onChange={load} onSearch={search}/>
            <Data nouns={data.nouns} verbs={data.verbs}/>
        </div>
    )
};

export default Home;
import { useMemo } from "react";


export interface DataProps {
    verbs: string[];
    nouns: string[];
};

interface DataItem {
    verb: string;
    noun: string;
}

const Data  = (props: DataProps) => {
    const data = useMemo<DataItem[]>(() => {
        const len = props.nouns.length > props.verbs.length ? props.nouns.length : props.verbs.length;
        const [nouns, verbs] = [[...props.nouns].sort(), [...props.verbs].sort()];
        return [...new Array(len)].map((_, idx) => {
            return {noun: nouns[idx], verb: verbs[idx]};
        });
    }, [props.nouns, props.verbs]);

    if (data.length === 0) return (
    <div style={{display: "grid", height: "100%", justifyContent: "center", alignContent: "center"}}>
        <strong>NO DATA FOUND</strong>
    </div>);

    return (
        <div style={{display: "grid", height: "100%", justifyContent: "center"}}>
            <table>
                <thead>
                    <tr style={{backgroundColor: "#eee"}}>
                        <th>Nouns</th>
                        <th>Verbs</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                        <tr key={index} style={{backgroundColor: index % 2 == 0 ? "white" : "#eee"}}>
                            <td>{item.noun}</td>
                            <td>{item.verb}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Data;
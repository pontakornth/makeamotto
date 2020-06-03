import { FunctionComponent, h } from "preact";
import { useState } from "preact/hooks";

const Generator: FunctionComponent = () => {
    const [acronym, setAcronym] = useState("");

    // TODO: Insert actual type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setAcronymCap = (e: any): void => {
        setAcronym(e?.target.value.toUpperCase());
    };
    return (
        <form>
            <label htmlFor="acronym">ใส่ตัวย่อตรงนี้</label>
            <input
                type="text"
                onChange={setAcronymCap}
                placeholder="COVID"
                name="acronym"
                value={acronym}
                style={`
                  text-transform: uppercase;
                `}
            />
            <input type="submit" value="สร้างเลย" />
        </form>
    );
};

export default Generator;

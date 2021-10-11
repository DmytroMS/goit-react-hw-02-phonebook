import shortid from "shortid";

export default function Filter({ value, onChange }) {
    const filteredID = shortid.generate();
    return (
        <>
            <label htmlFor={filteredID}>Find contacts by name
                <input type="text"
                    id={filteredID}
                    value={value}
                    onChange={onChange}
                
                />
            
            </label>
        </>
    );
};
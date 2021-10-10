

export default function ContactItem({id, name, number}) {
    return (
        <>
        <li>
            <span>{name}</span>
            <span>{number}</span>       
            </li>
        </>
        )
};
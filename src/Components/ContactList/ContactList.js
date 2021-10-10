
import ContactItem from './ContactTemplate'


export default function ContactList({ contacts }) {
    return (
        <ul> {
            contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                />
            ))
        }
            </ul> 
    );
};


 
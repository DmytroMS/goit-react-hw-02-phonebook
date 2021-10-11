
import ContactItem from './ContactTemplate'

// ({ contacts, onDeleteContact })
export default function ContactList({ contacts , onDeleteContact }) {
    return (
        <ul> {
            contacts.map(({ id, name, number }) => (
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                />
            ))
        }
       
            </ul> 
    );
};


 
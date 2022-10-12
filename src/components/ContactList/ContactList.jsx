import PropTypes from 'prop-types';
import { Item, Name, Link } from "./ContactList.styled";
import Button from 'components/Button';

const ContactList = ({ contacts, deleteContact }) => (
    <>
        <ul>
            {contacts.map(({ id, name, number }) =>
                <Item key={id}>
                    <Name>{name}:
                        <Link
                            href={"tel: " + number}>
                            {number}
                        </Link>
                    </Name>
                    <Button
                        type="button"
                        onClick={() => deleteContact(id)}
                        value="Delete">
                    </Button>
                </Item>)
            }
        </ul>
    </>

)

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteContact: PropTypes.func.isRequired,
}

export default ContactList;
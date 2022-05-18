import PropTypes from 'prop-types';
import style from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, deleteCont }) => {
  const deleteContact = () => deleteCont(id);
  return (
    <li className={style.list} key={id}>
      <span className={style.contactName}>{name} : </span>
      <span>{number} </span>
      <button className={style.btn} type="button" onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteCont: PropTypes.func.isRequired,
};

export default ContactListItem;

import PropTypes from 'prop-types';
import style from './ContactListItem.css';

const ContactListItem = ({ name, number, id, deleteCont }) => {
  const deleteContact = () => deleteCont(id);
  return (
    <div>
      <ul className={style.listBlock}>
        <li className={style.list} key={id}>
          <p>
            {name} : {number}
          </p>
          <button
            type="button"
            className={style.button}
            onClick={deleteContact}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteCont: PropTypes.func.isRequired,
};

export default ContactListItem;

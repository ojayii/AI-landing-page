import "../styles/Dropdown.css";
import chevron from "../images/chevron.svg";

const Dropdown = ({ title, content }) => {
  return (
    <label className='dropdown-wrapper'>
      <input
        type='checkbox'
        name='menu'
        id=''
      />
      <p>{title}</p>
      <img
        class='arrowimg'
        src={chevron}
      />
      <ul class='menu'>
        {content.map((item) => {
          return (
            <li key={1}>
              <a href={item.href}>
                {/* <img src="images/icon-todo.svg" alt="todo icon"/> */}
                <p>{item.title}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </label>
  );
};

export default Dropdown;

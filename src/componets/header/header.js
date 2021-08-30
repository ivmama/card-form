import "./header.scss"

const Header = ({ onShowForm, showForm }) => {
  return (
    <header>
      <input
        type="checkbox"
        name="formTrigger"
        checked={showForm}
        onChange={() => onShowForm(!showForm)}
      ></input>
      <label htmlFor="formTrigger">
        {showForm ? "SOME MORE TEXT" : "SOME TEXT" }
      </label>
    </header>
  );
};

export default Header;

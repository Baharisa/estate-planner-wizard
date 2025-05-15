
import { useFormContext } from './FormContext';


function NameForm() {
    const { name, setName } = useFormContext();

  return (
    <div>
      <label htmlFor="nameInput">Your Name:</label>
      <input
        type="text"
        id="nameInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello {name}!</p>
    </div>
  );
}

export default NameForm;

import { useState } from 'react';

import { useFormContext } from './FormContext';


function BeneficiaryForm() {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const { beneficiaries, setBeneficiaries } = useFormContext();


  const handleAddBeneficiary = () => {
    if (name.trim() !== '' && relationship.trim() !== '') {
      setBeneficiaries([...beneficiaries, { name, relationship }]);
      setName('');
      setRelationship('');
    }
  };

  return (
    <div>
      <h2>Add a Beneficiary</h2>
      <label htmlFor="beneficiaryName">Name:</label>
      <input
        type="text"
        id="beneficiaryName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="relationship">Relationship:</label>
      <input
        type="text"
        id="relationship"
        value={relationship}
        onChange={(e) => setRelationship(e.target.value)}
      />

      <button onClick={handleAddBeneficiary}>Add Beneficiary</button>

      <ul>
        {beneficiaries.map((person, index) => (
          <li key={index}>
            {person.name} ({person.relationship})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BeneficiaryForm;

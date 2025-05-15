import { useState } from 'react';

import { useFormContext } from './FormContext';

function ReviewStep() {
  const { name, assets, beneficiaries } = useFormContext();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Review Your Estate Plan</h2>

      {submitted ? (
        <div>
          <h3 style={{ color: 'green' }}>🎉 Submission Successful!</h3>
          <p>Thank you, {name}. Your estate plan has been saved.</p>
        </div>
      ) : (
        <>
          <h3>Name:</h3>
          <p>{name}</p>

          <h3>Assets:</h3>
          <ul>
            {assets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Beneficiaries:</h3>
          <ul>
            {beneficiaries.map((person, index) => (
              <li key={index}>
                {person.name} ({person.relationship})
              </li>
            ))}
          </ul>

          <button onClick={handleSubmit}>Submit</button>
        </>
      )}
    </div>
  );
}

export default ReviewStep;

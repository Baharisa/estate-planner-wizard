import { useState } from 'react';
import './App.css';
import NameForm from './NameForm';
import AssetForm from './AssetForm';
import BeneficiaryForm from './BeneficiaryForm';
import ReviewStep from './ReviewStep';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [step, setStep] = useState(1);

  return (
    <>
      <h1>Hello there! I am Mahani, your Estate Manager</h1>

      {/* Step Tracker */}
      <p style={{ fontWeight: 'bold', color: '#007bff' }}>
        Step {step} of 4:{' '}
        {step === 1 && ' Name'}
        {step === 2 && ' Assets'}
        {step === 3 && ' Beneficiaries'}
        {step === 4 && ' Review'}
      </p>

      {/* Wizard step logic with transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {step === 1 && <NameForm />}
          {step === 2 && <AssetForm />}
          {step === 3 && <BeneficiaryForm />}
          {step === 4 && <ReviewStep />}
        </motion.div>
      </AnimatePresence>

      {/* Navigation buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        {step > 1 && (
          <button onClick={() => setStep(step - 1)}>Back</button>
        )}
        {step < 4 && (
          <button onClick={() => setStep(step + 1)}>Next</button>
        )}
      </div>
    </>
  );
}

export default App;

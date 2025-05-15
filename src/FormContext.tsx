import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';


type FormData = {
  name: string;
  setName: (name: string) => void;
  assets: string[];
  setAssets: (assets: string[]) => void;
  beneficiaries: { name: string; relationship: string }[];
  setBeneficiaries: (list: { name: string; relationship: string }[]) => void;
};

const FormContext = createContext<FormData | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState('');
  const [assets, setAssets] = useState<string[]>([]);
  const [beneficiaries, setBeneficiaries] = useState<{ name: string; relationship: string }[]>([]);

  return (
    <FormContext.Provider value={{ name, setName, assets, setAssets, beneficiaries, setBeneficiaries }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

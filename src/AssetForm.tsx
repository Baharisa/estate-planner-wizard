import { useState } from 'react';

import { useFormContext } from './FormContext';


function AssetForm() {
  const [asset, setAsset] = useState('');
  const { assets, setAssets } = useFormContext();

  const handleAddAsset = () => {
    if (asset.trim() !== '') {
   
      setAssets([...assets, asset]);

      setAsset('');
    }
  };

  return (
    <div>
      <label htmlFor="assetInput">Add an Asset:</label>
      <input
        type="text"
        id="assetInput"
        value={asset}
        onChange={(e) => setAsset(e.target.value)}
      />
      <button onClick={handleAddAsset}>Add</button>

      <ul>
        {assets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AssetForm;

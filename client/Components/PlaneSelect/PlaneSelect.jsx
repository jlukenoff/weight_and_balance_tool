import React from 'react';
import styles from './PlaneSelect.css';

const PlaneSelect = (props) => {
  const { 
    allPlanesByMake,
    currentMake,
    currentModel,
    currentTailNumber,
    handleSelect,
  } = props;
  return (
    <div className={styles.selectContainer}>
      <select name="Select Make" id="make-select" value={currentMake} onChange={e => handleSelect(e, 'currentMake')} selected={currentMake}>
        <option value="">Select a Make</option>
        {Object.keys(allPlanesByMake).map(make => (
          <option value={make}>
            {make}
          </option>
        ))}
      </select>
      <select name="Select Model" id="model-select" value={currentModel} onChange={e => handleSelect(e, 'currentModel')} selected={currentModel}>
        <option value="">Select a Model</option>
        {currentMake === '' || allPlanesByMake[currentMake].map(plane => (
          <option value={plane.model}>
            {plane.model}
          </option>
        ))}
      </select>
      <select name="Select Tail Number" id="tail-number-select" value={currentTailNumber} onChange={e => handleSelect(e, 'currentTailNumber')} selected={currentTailNumber}>
        <option value="">Select a Tail Number</option>
        {currentModel === '' || allPlanesByMake[currentMake].filter(plane => plane.model === currentModel).map(plane => (
          <option value={plane.tailNumber}>
            {plane.tailNumber}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PlaneSelect;

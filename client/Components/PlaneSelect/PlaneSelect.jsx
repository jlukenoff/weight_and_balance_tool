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
      <select name="Select Make" id="make-select" value={currentMake} onChange={e => handleSelect(e, 'currentMake')}>
        <option value="">Select a Make</option>
        {Object.keys(allPlanesByMake).map(make => (
          <option value={make} selected={currentMake === make}>
            {make}
          </option>
        ))}
      </select>
      <select name="Select Model" id="model-select" value={currentModel} onChange={e => handleSelect(e, 'currentModel')}>
        <option value="">Select a Model</option>
        {currentModel === '' || allPlanesByMake[currentModel].map(make => (
          <option value={make} selected={currentMake === make}>
            {make}
          </option>
        ))}
      </select>
      <select name="Select Make" id="make-select" value={currentMake} onChange={e => handleSelect(e, 'currentTailNumber')}>
        <option value="">Select a Make</option>
        {Object.keys(allPlanesByMake).map(make => (
          <option value={make} selected={currentMake === make}>
            {make}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default PlaneSelect;

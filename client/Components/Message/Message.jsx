import React from 'react';
import styles from './Message.css';

const Message = (props) => {
  const { exceedsBoundary } = props;
  return (
    <div className={styles.msgContainer}>
      {exceedsBoundary ? (
        <div style={{ backgroundColor: 'red', color: 'white' }}>
          Warning: maximum center of gravity exceeded
        </div>
      ) : (
        <div style={{ backgroundColor: 'rgb(35, 209, 35)' }}>
          Center of Gravity within valid range.
        </div>
      )
      }
    </div>
  );
};

export default Message;

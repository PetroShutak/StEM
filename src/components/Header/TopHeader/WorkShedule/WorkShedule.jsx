import React from 'react';
import { MdAccessTimeFilled } from 'react-icons/md';
import { WorkSheduleWrapper, SheduleHead } from './WorkShedule.styled';

const WorkShedule = () => {
  return (
    <WorkSheduleWrapper>
      <SheduleHead>
        <MdAccessTimeFilled size={26} />
        <span>Графік роботи:</span>
      </SheduleHead>
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
    <p>
        Будні:
      </p>
      <span> 9:00-17:00</span>
    </div>
    <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>

      <p>
        Сб:
      </p>
      <span> 9:00-15:00</span>
    </div>
    </WorkSheduleWrapper>
  );
};

export default WorkShedule;

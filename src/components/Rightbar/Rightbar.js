
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CheckCircle, Cancel } from '@mui/icons-material';
import './Rightbar.css';


const Rightbar = () => {
  const attendanceData = [
    { date: new Date('2024-03-01'), status: 'present' },
    { date: new Date('2024-03-02'), status: 'absent' },
    { date: new Date('2024-03-03'), status: 'present' },
    { date: new Date('2024-03-22'), status: 'present' },
    { date: new Date('2022-03-05'), status: 'present' },
    { date: new Date('2024-03-29'), status: 'present' },
    // Add more attendance data as needed
  ];

  const getStatusBadge = (date) => {
    const attendanceRecord = attendanceData.find((record) => record.date.toDateString() === date.toDateString());

    if (attendanceRecord) {
      return attendanceRecord.status === 'present' ? <CheckCircle color="primary" /> : <Cancel color="error" />;
    }

    return null;
  };

  const [value, onChange] = useState(new Date());

  return (
    <div className='calendar-card'>
    <div className='calendar'>

      <h1>Attendance</h1>
      
      <Calendar
        value={value}
        onChange={onChange}
        tileContent={({ date }) => getStatusBadge(date)}
      />
      </div>
      <p>total no of days present : 34</p>
      <p>total no of working days: 50</p>
    </div>
  );
};

export default Rightbar;

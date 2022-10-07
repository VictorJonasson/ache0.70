import {Layout} from '@ui-kitten/components';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';

const DateSelector = () => {
  const [date, setDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());

  return (
    <Layout
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DatePicker
        date={date}
        onDateChange={setDate}
        fadeToColor={'#222B44'}
        maximumDate={maxDate}
      />
    </Layout>
  );
};

export default DateSelector;

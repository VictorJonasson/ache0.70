import {Layout} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';

const DateSelector = (props) => {
    const [date, setDate] = useState(new Date());
    //Convert selected date to string.
    const dateToString = date.toString();
    const [maxDate, setMaxDate] = useState(new Date());

    //Pass date to parentView
    useEffect((date) => {
        props.passToParent(dateToString);
    })

    return (
        <Layout
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 0,
                marginTop: 50,
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

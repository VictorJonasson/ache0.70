import {Layout} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import DatePicker from 'react-native-date-picker';

const DateSelector = (props) => {
    const [date, setDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());

    //Convert selected date to string.
    //Pass date to parentView
    const dateToString = date.toString();
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
                mode="datetime"
                is24hourSource="locale"
                locale='sv'
                onDateChange={setDate}
                maximumDate={maxDate}
                fadeToColor={'#222B44'}
            />
        </Layout>
    );
};

export default DateSelector;

import {Layout} from '@ui-kitten/components';
import React from 'react';
import DateSelector from '../components/home-components/date-selector';
import {AcheSlider} from '../components/home-components/ache-slider';

const PullDate = (data) => {
    console.log("Ache date " +data);
};
const PullAcheData = (data) => {
    console.log("Ache data " +data);
};


const DailyAcheScreen = (props) => (

    <Layout
        style={{
            flex: 1,
        }}>
        <AcheSlider
            passToParent={PullAcheData}
        />
        <Layout
            style={{
                flex: 0,
                height: 250,
                marginTop: 50,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <DateSelector
                passToParent={PullDate}
            />
        </Layout>
    </Layout>
);

export default DailyAcheScreen;

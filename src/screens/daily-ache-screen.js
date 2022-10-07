import {Layout} from '@ui-kitten/components';
import React from 'react';
import DateSelector from '../components/home-components/date-selector';
import {AcheSlider} from '../components/home-components/ache-slider';

const DailyAcheScreen = () => (
  <Layout
    style={{
      flex: 1,
    }}>
    <AcheSlider />
    <Layout
      style={{
        flex: 0,
        height: 250,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <DateSelector />
    </Layout>
  </Layout>
);

export default DailyAcheScreen;

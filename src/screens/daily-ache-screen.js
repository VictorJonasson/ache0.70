import React, {useState} from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import DateSelector from '../components/home-components/date-selector';
import {AcheSlider} from '../components/home-components/ache-slider';
import {StyleSheet} from "react-native";
import {Intensity} from "../components/home-components/intensity";
import {addData} from "../helper functions/acheHelper";
import {getCollection} from "../helper functions/acheHelper";


export const DailyAcheScreen = (props) => {

    const [date, setDate] = useState('');
    const [ache, setAche] = useState('');
    const [intensity, setIntensity] = useState('');

    const PullDate = (data) => {
        setDate(JSON.stringify(data));
        console.log("Ache date " + data);
    };
    const PullAcheData = (data) => {
        setAche(data);
        console.log("Ache data " + data);
    };
    const PullIntensityData = (data) => {
        setIntensity(data);
        console.log("Ache intansity " + data);
    };

    return (
        <>
            <Layout
                style={styles.LayoutWrapper}
            >
                <AcheSlider
                    passToParent={PullAcheData}
                />
                <Intensity
                    passToParent={PullIntensityData}
                />
                <DateSelector
                    passToParent={PullDate}
                />
                <Button
                    style={styles.AddButton}
                    onPress={() => {
                       addData(ache,intensity, date)
                    }}
                >
                    <Text> Lägg till </Text>
                </Button>

            </Layout>
        </>
    );
};
const styles = StyleSheet.create({
    LayoutWrapper: {
        height: '100%',
        alignItems: 'center',
    },
    AddButton: {
        width: 100,
        marginTop: 30
    },
});

import React from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';
import DateSelector from '../components/home-components/date-selector';
import {AcheSlider} from '../components/home-components/ache-slider';
import {StyleSheet} from "react-native";
import {Intensity} from "../components/home-components/intensity";

const PullDate = (data) => {
    console.log("Ache date " + data);
};
const PullAcheData = (data) => {
    console.log("Ache data " + data);
};
const PullIntensityData = (data) => {
    console.log("Ache intansity " + data);
};

export const DailyAcheScreen = (props) => {
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

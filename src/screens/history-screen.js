import {Layout, Text, useTheme} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import HistoryCard from '../components/history-components/history-card';
import {ScrollView, StyleSheet} from 'react-native';
import {getCollection} from "../helper functions/acheHelper";

export const HistoryScreen = () => {
    //Get data from helper function


    return (
        <Layout style={styles.layoutStyle}>
            <HistoryCard/>
        </Layout>
    );
};


const styles = StyleSheet.create({
    layoutStyle: {
        flex: 1,
        alignItems: 'center',
    },
});

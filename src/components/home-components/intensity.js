import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {Layout, Text, ViewPager, useTheme} from '@ui-kitten/components';
import Slider from "@react-native-community/slider";


export const Intensity = (props) => {
    const [sliderValue, setSliderValue] = React.useState(0);
    const theme = useTheme();


    const intensity = sliderValue;
    useEffect((sliderValue) => {
        props.passToParent(intensity);
    });
    return (<>
            <Text
                status="primary"
                category={'h6'}
                appearance={'default'}
                style={{
                    alignSelf: 'center', fontFamily: 'AdventPro-Regular',
                }}>
                Intensitet
            </Text>

        <Slider
            style={styles.intensitySlider}
            maximumValue={10}
            minimumValue={0}
            minimumTrackTintColor={theme['color-primary-600']}
            maximumTrackTintColor={theme['color-primary-500']}
            step={1}
            value={sliderValue}
            onValueChange={sliderValue => setSliderValue(sliderValue)}
        />

        <Text
            status="primary"
            category={'h6'}
            appearance={'default'}
            style={{
                alignSelf: 'center', fontFamily: 'AdventPro-Regular',
            }}>
            {sliderValue}
        </Text>
        </>);
};

const styles = StyleSheet.create({
    intensitySlider: {
        width: 250
    }
});

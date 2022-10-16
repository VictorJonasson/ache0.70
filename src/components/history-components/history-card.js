import React, {useEffect, useState} from 'react';
import {Avatar, Card, Text} from '@ui-kitten/components';
import {StyleSheet, View,ActivityIndicator, FlatList,} from 'react-native';
import {getCollection} from "../../helper functions/acheHelper";
import firestore from "@react-native-firebase/firestore";

const HistoryCard = () => {
    const [loading, setLoading] = useState(true);
    const [aches, setAches] = useState([]);

    useEffect(() => {
        console.log("Kör history-effekt")
        const subscriber = firestore()
            .collection('666')
            .onSnapshot(querySnapshot => {
                const ache = [];
                querySnapshot.forEach(documentSnapshot => {
                    ache.push({
                        ...documentSnapshot.data(),
                        key: documentSnapshot.id,
                    });
                });
                setAches(ache);
                setLoading(false);
            });
        // Unsubscribe from events when no longer in use
        return () => subscriber();
    }, []);

    if (loading) {
        return <ActivityIndicator size={"large"} color={'#D76885'} style={styles.activityLoader}/>;
    }
    return (
        <FlatList
            style={{width:'90%', height:'20%'}}
            data={aches}
            renderItem={({ item }) => (
                <View>
                    <Card style={styles.card}>
                        <View style={styles.cardContent}>
                            <Avatar source={require('../../assets/images/aches/Migrän.png')}/>
                            <Text>{item.ache}</Text>
                            <Text>{item.intensity}</Text>
                        </View>
                    </Card>
                </View>
            )}
        />
    );
};
export default HistoryCard;

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: '#18203B',
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        backgroundColor: '#18203B',
    },
    activityLoader:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});

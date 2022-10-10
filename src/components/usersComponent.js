import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import firestore from '@react-native-firebase/firestore';


class UsersComponent extends Component {

    constructor(props) {
        super(props);
        this.addUser(15,'Conny');
    }

    getUser = async () => {
        const users = await firestore().collection('users').doc('BfJvXPMD7ffEtQnM2TVA').get();
        console.log("TEST")
        console.log(users.data().name + users.data().age);
    };

    addUser = async (age, name) =>{
        firestore().collection('users')
            .add({
                name: name,
                age: age,
        })
            .then(() => {
                console.log('User added!');
            });
    }

render(){
    return (
        <View>
            <Text>komponent</Text>
        </View>
    );
}
}

export default UsersComponent;

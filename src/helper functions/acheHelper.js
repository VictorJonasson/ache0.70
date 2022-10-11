import React from "react";
import firestore from "@react-native-firebase/firestore";


export async function getData(collection, docPathID) {
    //collection STRING users docPath ID för användare
    const users = await firestore().collection(collection).get();
    console.log("Get user:  " + users.size);
}

export async function addData(userId, ache, intensity, acheDate) {
    await firestore().collection('users')
        .add({
            userId: userId,
            ache: ache,
            intensity: intensity,
            acheDate: acheDate,
        })
        .then(() => {
            console.log("added!");
        });
}

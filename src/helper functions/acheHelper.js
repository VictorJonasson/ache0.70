import React from "react";
import firestore from "@react-native-firebase/firestore";

// export async function getData() {
//     //collection STRING users docPath ID för användare
//     const users = await firestore().collection('666').get();
//     console.log(JSON.stringify(users.data))
//
// }


// ID HÄMTAS NÄR USER DB ÄR PÅ PLATS
const TEMPORARYUSERID = '666'

export async function getCollection() {
    const now = new Date()
    console.log("Kör getGollection : " + now)
    const collPath = firestore().collection('666');
    return await collPath.get()
}

export async function addData(ache, intensity, date) {
    console.log("Kör addData")
    await firestore().collection('666')
        .add({
            ache: ache,
            intensity: intensity,
            date:date
        })
        .then(() => {
            console.log("added!");
        });
}

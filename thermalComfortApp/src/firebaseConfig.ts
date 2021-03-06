import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyArNZ22gj3Uhdd5h0TZ5ojDgu7LWLpmWKs",
    authDomain: "thermalcomfortdataapp.firebaseapp.com",
    databaseURL: "https://thermalcomfortdataapp.firebaseio.com",
    projectId: "thermalcomfortdataapp",
    storageBucket: "thermalcomfortdataapp.appspot.com",
    messagingSenderId: "683582280356",
    appId: "1:683582280356:web:39f0e8e22efe1d57d18c31"
}

firebase.initializeApp(config);

export async function pushData(data: any, userEmail: string) {
    firebase.firestore().collection('users').doc(userEmail).collection('surveys').add({
        buildingNumber: data.buildingNumber,
        roomNumber: data.roomNumber,
        thermalSensation: data.thermalSensation,
        thermalPreference: data.thermalPreference,
        breezy: data.breezy,
        humiditySensation: data.humiditySensation,
        clothing: data.clothing,
        recentAction: data.recentAction,
    });
}

export async function pushNotifs(data: any, userEmail: string) {
    const ref = firebase.firestore().collection('users').doc(userEmail).collection('notifications').doc('notifications');
    await ref.set({
        "8:00 AM": data.eightAm,
        "9:00 AM": data.nineAm,
        "10:00 AM": data.tenAm,
        "11:00 AM": data.elevenAm,
        "12:00 PM": data.twelvePm,
        "1:00 PM": data.onePm,
        "2:00 PM": data.twoPm,
        "3:00 PM": data.threePm,
        "4:00 PM": data.fourPm,
        "5:00 PM": data.fivePm,
        "6:00 PM": data.sixPm,
        "7:00 PM": data.sevenPm,
        "8:00 PM": data.eightPm,
    });
}

export async function getProfile(userEmail: string) {
    return firebase.firestore()
        .collection('users')
        .doc(userEmail)
        .collection('profile')
        .doc('profile')
        .get();
}

export async function pushProfile(data: any, userEmail: string) {
    const ref = firebase.firestore().collection('users').doc(userEmail).collection('profile').doc('profile');
    await ref.set({
        "age": data.age,
        "gender": data.gender,
        "zipCode": data.zipCode,
        "nativeConditions": data.nativeConditions,
        "prefConditions": data.preferredConditions
    });
}

export const auth = firebase.auth();

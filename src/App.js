import './App.css'
import React, { useState, useEffect, Fragment } from 'react'
import { db } from './firebase'
import { collection, getDoc, getDocs, doc } from 'firebase/firestore'
import DataCard from './Components/dataCard'
import UserCard from './Components/userCard'
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";
import base64 from 'react-native-base64'


//import Home from "./index";

function App() {
  let { deviceID } = useParams();
  const [data, setData] = useState([])

  const getFirestoreData = async () => {
    console.log("Run firestore");
    const decodedDeviceID = atob(deviceID);

    console.log('Fetching data for id', decodedDeviceID);
    const docRef = doc(db, "newest_data", decodedDeviceID);
    const docSnap = await getDoc(docRef);

    console.log('found document', docSnap.data());
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return setData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  // fetch the data at initial render
  useEffect(() => {
    const interval = setInterval(() => {
      // Only fetch the data from firebase if the deviceID is not empty
      if(deviceID) {
        getFirestoreData();
      }
    }, 3000);
    return () => clearInterval(interval);

  }, [])

  console.log(data, 'data')


  return (


    <div className='App py-3 '>

      <div class="row">
        <div class="col-sm">
          {deviceID && <UserCard deviceID={deviceID} />}
          {!deviceID && <p>No user is specified</p>}
        </div>
        <div class="col-sm">
        </div>
        <div class="col-sm" styles="float:left">
          <img src={require('../src/logo.png')} styles="height:50px" />
        </div>
      </div>


      {data && <DataCard
        heartRate={data?.pulserate}
        temp={data?.bodytemp}
        spo={data?.spo}
        movement={data?.movement}
      />}

    </div>

  )

}

export default App

/*

  //var decodedStringAtoB = Buffer.from(deviceID, 'base64').toString('ascii')
  //let decodedStringAtoB = base64.decode(deviceID);
  let decodedStringAtoB = base64.decode(deviceID);


  // // collection ref- replace 'users' with 'your firebase collection'
  // const dataRef = collection(db, 'Sensor')

  // // get data from firestore
  // const getNotes = async () => {
  //   const dataSnapshot = await getDocs(dataRef)
  //   const dataList = dataSnapshot.docs.map(doc => doc.data())
  //   // if the user preset pass auth i data id here
  //   return setData(dataList[1])
  // }




*/
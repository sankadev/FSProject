import './App.css'
import React, { useState, useEffect, Fragment } from 'react'
import { db } from './firebase'
import { collection, getDoc, getDocs, doc } from 'firebase/firestore'
import DataCard from './Components/dataCard'
import UserCard from './Components/userCard'
import axios from "axios";
import {
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";



//import Home from "./index";

function App() {
  let { deviceID } = useParams();
  // const { id } = props.match.params;
  const [data, setData] = useState([])

  var decodedStringAtoB = atob(deviceID);


  // collection ref- replace 'users' with 'your firebase collection'
  const dataRef = collection(db, 'Sensor')

  // get data from firestore
  const getNotes = async () => {
    const dataSnapshot = await getDocs(dataRef)
    const dataList = dataSnapshot.docs.map(doc => doc.data())
    // if the user preset pass auth i data id here
    return setData(dataList[1])
  }

  const getfirestoreData = async () => {
    console.log("Run firestore")
    const docRef = doc(db, "newest_data", decodedStringAtoB);
    const docSnap = await getDoc(docRef);


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

    //getNotes()
    getfirestoreData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(data, 'data')




  return (


    <div className='App py-3 '>

      <div class="row">
        <div class="col-sm">
          <UserCard device={decodedStringAtoB} />
        </div>
        <div class="col-sm">
        </div>
        <div class="col-sm" styles="float:left">
          <img src={require('../src/logo.png')} styles="height:50px" />
        </div>
      </div>


      <DataCard
        heartRate={data.pulserate}
        temp={data.bodytemp}
        spo={data.spo}
        movement={data.movement}
      />

    </div>

  )

}

export default App

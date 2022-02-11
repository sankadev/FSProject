import './App.css'
import React, { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, getDoc, getDocs, doc } from 'firebase/firestore'
import DataCard from './Components/dataCard'
import UserCard from './Components/userCard'

function App () {
  const [data, setData] = useState([])

  // collection ref- replace 'users' with 'your firebase collection'
  const dataRef = collection(db, 'Sensor')

  // get data from firestore
  const getNotes = async () => {
    const dataSnapshot = await getDocs(dataRef)
    const dataList = dataSnapshot.docs.map(doc => doc.data())
    // if the user preset pass auth i data id here
    return setData(dataList[1])
  }

  const getfirestoreData = async() => {
    console.log("Run firestore")
    const docRef = doc(db, "newest_data", "7C:9E:BD:4B:37:F0");
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
      {/* if u have firebase user pass it to this 'user' prop */}
      <UserCard user='' />
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

import React, { useEffect, useState } from 'react';
import Mycontext from './Mycontext';
import {onAuthStateChanged } from "firebase/auth";
import { auth } from './Firebase';
import { doc, getDoc } from "firebase/firestore";
import { db } from './Firebase';

const Myprovider = ({children})=>{

    const [isauthed,setauthed]=useState({
        islogged:false,
        uid:null,
        person:null,
        isAdmin:false
    });

    const [usr,setusr]=useState({
      profile:{
        name:'',
        email:'',
        phone:'91',
        Address:'xxx xxx'
      }
    });

    const sharedvalue={
      isauthed:isauthed,
      usr:usr
    }

    // handling the usear admin 
   
    useEffect(()=>{
      let tempuid=null;
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          tempuid=uid;
          setauthed(prevstate =>({
            ...prevstate,
            person:user,
            uid:uid,
            islogged:true
          }));

          const usrdocref = doc(db, 'users', uid);
        const userfetchdata = async() =>{
          try{
            const usrdocSnap = await getDoc(usrdocref);
            if (usrdocSnap.exists()) {
              const usrdata=usrdocSnap.data();
              setusr(usrdata);
              
            } else {
              console.log('No such user document!');
            }
  
          }catch(e){
            console.error('you got error while fetching the user data',e);
          }
        }
  
        userfetchdata();
          

        } else {
            setauthed({
                person:null,
                uid:null,
                islogged:false
              })
        }
      });

      const docRef = doc(db, 'isAdmin', 'mv7cYzQicUtst9sG1as0');

      const fetchData = async () => {
        try {
          const docSnap = await getDoc(docRef);
  
          if (docSnap.exists()) {
            const data=docSnap.data();
            for(let i=0;i<data.adminId.length;i++){
              if(data.adminId[i]===tempuid){
                setauthed(prevstate =>({
                  ...prevstate,
                  isAdmin:true
                }));
              }
            }
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching document:', error);
        }
      };
      fetchData();

      // fetching the users DATA  from storage
      

      
    },[])
    
      

    return <Mycontext.Provider value={sharedvalue}>
        {children}
    </Mycontext.Provider>
}
export default Myprovider;
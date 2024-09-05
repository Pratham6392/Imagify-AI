import React, { use } from 'react'
import {transformationTypes} from "@/constants/index"
import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { auth } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/actions/user.actions';



const TransformationsPage= ({params:{type}}:SearchParamProps) => {
     
   const {userId}= auth();


    if(userId===null) return null;


   const user= getUserById(userId);
    if(!user) return null;
   //@ts-ignore
   
   

    const transformationType = transformationTypes[type];
    
   
  return (
    <>
    <Header title={transformationType.title} subtitle={transformationType.subTitle} />
    <section className="mt-10">
        
        <TransformationForm 
          action="Add"
          userId={userId}
          type={transformationType.type as TransformationTypeKey} creditBalance={user?.creditBalance}             
        />
      </section>
    </>
  )
}

export default TransformationsPage;


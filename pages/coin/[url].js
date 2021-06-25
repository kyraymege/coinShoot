import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { db } from '../../components/firebase/firebase';


const Page = () =>{
    
    
    const [coinInf , setCoinInf] = useState([{
        coin_name : "",
        coin_symbol: "doc.data().coin_symbol",
        coin_marketcap: "doc.data().coin_marketcap",
        coin_chain: "doc.data().coin_chain",
        coin_age: "doc.data().coin_age",
        coin_votes: "doc.data().coin_votes",
        coin_imageUri: "doc.data().coin_imageUri",
    }]);
    const router = useRouter();
    const { url } = router.query;
    
   
          var query = url ;
          var docRef = db.collection("coins").doc(query)
          
          docRef.get().then((doc) =>{
            setCoinInf({
          coin_name: doc.data().coin_name,
          coin_symbol: doc.data().coin_symbol,
          coin_marketcap: doc.data().coin_marketcap,
          coin_chain: doc.data().coin_chain,
          coin_age: doc.data().coin_age,
          coin_votes: doc.data().coin_votes,
          coin_imageUri: doc.data().coin_imageUri,
       })}
           
       )
      
    

    return (
        <>
         <p>Bu sayfa {coinInf.coin_name} adlı kullanıcının</p>
         <p>Coin symbol {coinInf.coin_symbol}</p>
         <p>coin_marketcap {coinInf.coin_marketcap}</p>
         <div className="flex items-center">
                        <div className="flex-shrink-0 ">
                          <img
                            className="rounded-full"
                            src={coinInf.coin_imageUri}
                            height={100}
                            width={100}
                            alt={coinInf.coin_name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-lm font-medium text-gray-900">
                            {coinInf.coin_name}
                          </div>
                        </div>
                      </div>
        </>
   
    
    
    
    )
}



export default Page


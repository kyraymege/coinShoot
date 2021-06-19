import React from 'react'

export default function Home( { coninInf } ) {
    return (
        <div>
            
        </div>
    )
}
export async function getServerSideProps(){
 
    const coninInf = 0;

    return  {
      props : {
    
         coinInf
  
      }
    } 
  

}

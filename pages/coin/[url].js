import React from 'react'
import { useRouter } from "next/router"

const Page = () =>{
    const router = useRouter();
    const { url } = router.query;
 
    
    return <p>Bu sayfa {url} adlı kullanıcının</p>
}



export default Page
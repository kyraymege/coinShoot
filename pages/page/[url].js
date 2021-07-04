import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { db } from "../../components/firebase/firebase";
import moment from "moment";
import Table from "../../components/table";
import Promotedcoins from "../../components/promotedcoins";

const Pag = () =>{
    
    const router = useRouter();
    const { url } = router.query;
    var query = parseInt(url);
    
    


    return (
        <div>
            <Promotedcoins></Promotedcoins>
            <Table url = {query} status = "listed"/>
        </div>
    )

}
export default Pag;
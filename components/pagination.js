import { ChevronLeftIcon, ChevronRightIcon, ViewBoardsIcon } from '@heroicons/react/solid'
import { db } from "../components/firebase/firebase";
import { useState, useEffect } from "react";

function pagination( url ) {
  const [coins, setCoins] = useState([]);
  var currentPage = 0;
  const [pag , setPag] = useState([0]);
  useEffect(() => {
    db.collection("coins").orderBy("coin_votes", "desc").onSnapshot((snapshot) => {
      
        
      setCoins(
        snapshot.docs.map((doc) => ({
          coin_name: doc.data().coin_name,
          coin_symbol: doc.data().coin_symbol,
          coin_marketcap: doc.data().coin_marketcap,
          coin_chain: doc.data().coin_chain,
          coin_age: doc.data().coin_age,
          coin_votes: doc.data().coin_votes,
          coin_imageUri: doc.data().coin_imageUri,
          coin_status: doc.data().coin_status
        }))
      )
    }
    );
     var a = 0;
    for(let i = 1; i<50;i++){
     
      console.log(a)
      
       if(i%20===0){
        
         a+=1;
         console.log(a);
         pag.push(a);
       }
       
    }
  }, []);

  return (
    <div className="bg-white px-4 py-3 flex items-center  border-t border-gray-200 sm:px-6 max-w-screen-2xl mx-auto rounded-full">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{Math.floor(coins.length / 20) + 1}</span> of{' '}
            <span className="font-medium">{coins.length}</span> results
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
    {        pag.map((a)=>(  <a
              href={"-" + (a+1)}
              onClick={()=> {currentPage =a+1}}
              key={a+1}
              aria-current="page"
              className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
            >
              {a+1}
            </a>)
    
              

    )  }
            
            <a
              onClick={()=>{currentPage = pag+1}}
              href={currentPage + 1}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default pagination
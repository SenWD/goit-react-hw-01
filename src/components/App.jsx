

import Prof from "./SocialProfile/Prof";
import Status from "./SocialProfile/Status";


import Stats2 from "./Friends/Stats2";

import  Tables from "./TransactionHistory/Tables";



const userData = [ {

  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
        }
 },
];






 const  Profile = ({dlist}) => {
 
    return (
      <>
      
        {dlist.map(lis => {
            return( 
  
            <>
          
        
               <Prof>  
              
              <div>
  
             <picture>
                 <img src={lis.avatar}  alt="User avatar" width="150"/>  
                 </picture>
                
                <p key={lis.id}><b>{lis.username}</b></p>
                <p><span>@</span>{lis.tag}</p>
                <p>{lis.location}</p>
              
            
         
              <Status>
              <div>
      
      <li>
        <span>Followers</span>
        <br></br>
        <b><span>{lis.stats.followers}</span></b>
        </li>
                  </div> 
              </Status>    
                     
                 
                    <Status>
                  <div>
                    <li>
                      
                      
                        <span>Views</span>
                        <br></br>
                        <b><span>{lis.stats.views}</span></b>
                    </li>
                    </div>  
                      </Status>
                      <Status>
                    <div>
                  
                      <li>
                        <span>Likes</span>
                        <br></br>
                        <b><span>{lis.stats.likes}</span></b>
                      </li>
                    </div>
                      </Status>
                      </div>
                
                
                </Prof>   
                    
                    
            </>
  
                );
     
                }
              )
            }
           
       </>
      )
  
  }
  






const friends = [ {
  avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
  name: "Mango",
  isOnline: true,
  id: 1812
},
{
  avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
  name: "Kiwi",
  isOnline: false,
  id: 1137
},
{
  avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
  name: "Ajax",
  isOnline: true,
  id: 1213
},
{
  avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
  name: "Jay",
  isOnline: true,
  id: 1714
},
{
  avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
  name: "Poly",
  isOnline: false,
  id: 1284
}

];




export const FriendList = ({friends}) => {

  return (
  <> 
      {friends.map(lis => {
              return( 
              <>

<Stats2>
        <div>
       
       
                <picture>
                    <img src={lis.avatar}  alt="User avatar" width="50"/>  
                </picture>
            
                <p key={lis.id}><b>{lis.name}</b></p>
                
                { lis.isOnline  ?  <p style={{color : "green"}}>Online</p> : <p style={{color : "red"}}>Offline</p>  }
           
             
       
        </div> 
</Stats2> 
</>
                );
  
            }  )}                           
 </>
  )}

  

  const transactions = [
    {
      id: "1e0700a2-5183-4291-85cc-2065a036a683",
      type: "invoice",
      amount: "964.82",
      currency: "LRD",
    },
    {
      id: "a30f821b-4d25-4ff0-abdd-e340b3f0dd2b",
      type: "payment",
      amount: "686.50",
      currency: "WST",
    },
    {
      id: "44dca67a-8e5a-4798-bf8e-b15efd4e1abd",
      type: "invoice",
      amount: "828.62",
      currency: "UGX",
    },
    {
      id: "ea8ed3dc-2b68-4a53-905a-53ecb0adef33",
      type: "withdrawal",
      amount: "527.80",
      currency: "ALL",
    },
    {
      id: "63ca02f9-d637-46b5-9237-f3b24425e029",
      type: "payment",
      amount: "862.44",
      currency: "AUD",
    },
    {
      id: "ed0263e8-59a5-4bf1-87e0-2bb88e53dc34",
      type: "withdrawal",
      amount: "907.00",
      currency: "GEL",
    },
    {
      id: "4eaab41b-b967-40ac-82ed-85fc66f646f1",
      type: "deposit",
      amount: "103.10",
      currency: "BWP",
    },
    {
      id: "9648a350-8469-42d5-8bf3-18090de5fe67",
      type: "withdrawal",
      amount: "322.32",
      currency: "MRO",
    },
    {
      id: "9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc",
      type: "invoice",
      amount: "14.79",
      currency: "PYG",
    }
  ];





  export const TransactionHistory = ({items}) => {
    
    return (
      <> 
 
<Tables>
  <table>

  <thead >
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
                    
  <tbody>
   {items.map((lis) => {
     return( 
    <>
 
   <tr>

      <td>{lis.type}</td>
      <td>{lis.amount}</td>
      <td>{lis.currency}</td>
  </tr>
  
   </>
     )})}
  </tbody>
  
  </table>
  </Tables>
  </>                   
   ) }   
                  


  export  default  function App() {
 

    return (
      <>
      
    
        <Profile dlist={userData} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} /> 
      </>
    );
  }










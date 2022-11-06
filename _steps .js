/* node mongo client CRUD
1.
2.npm i react-router-dom
3.gsearch-react router dom
4.reacrouter.com er react rrouter:Home v6.4.1-click
5.tutorial-
6.


*/

/* node-mongo-crud-client a clint side theke server hoya database data pathano suru hoiuce 65-4 er 1 minite theke
1.gsearch-fetch post example-developer.mozila.org thekeUsing the Fetch API-MDN Web Docs a duka
2.Uploading Json Data
3.server er localhost er jagay-slash / dia j route a post korbo seta likhe full url ta copy
4.client side er component er modde submithandler function er modde fetch likhe parenthesis er modde single cote dia copykrito url ti paste kore koma dia space dia curly braket dia enter{} 
client side theke pathanor kaj start
fetch('http://localhost:5000/users', {
5. .then(res => res.json())
    .then(data => console.log(data))

  fetch('http://localhost:5000/users', {
6.  method: 'POST',
7.  headers: {
      'content-type': 'application/json'
    },
8.  body: JSON.stringify(user)
  })
9. .then(res => res.json())
    .then(data => {
        console.log(data) console.log ta ka select kore {} curly dia enter dia multiline kora
    })       
10.servser side a gia receive kora


server side er 7 no porjonto databasr er data load mane read kora hoicilo seta ekhane clint side a home a dekhanor kaj kora hocce 
2 vave dat ekhane load kora jay, 1st-useeffect er sathe fetch dia, 2nd loader dia 
*home cpmponent er element er nice loader dia anonymus arrow function er pore fetch parenthgisis er modde single cote a backend er maddome get kora backend route soho url ta paste 
{
      path: '/',
      element: <Home></Home>,
1.    loader: () => fetch('http://localhost:5000/users')
    },
next go home component and 1 er load adata 2 no step a receive
2.   const users = useLoaderData();


return (
        <div>
3.        <h2>Users: {users.length}</h2>
        <div>
    );
};

export default Home;

4.client side a ui te user: 4[any number]check users k pawa jai kina
 Home = () => {
    const users = useLoaderData();
38, const [displayUsers, setDisplayUsers] = useState(users);

12.    const handleDelete = user => {  // clickhandler function with _id parameter
15. console.log('r with id:', _id)        
16. localhost300 a jekhane home componenet er maddome data database vtheke direct ene dekhano hocce sekhane name omail er por x button click korle console a deleting user with id: 635-------------- erokom console hobe  

17.const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);

18.[65-5 end] 19.no backend a if (agree) {
            // console.log('deleting user with id: ', user._id)
sever side theke asce 23 no
             
23,            fetch(`http://localhost:5000/users/${user._id}`, {
24,                method: 'DELETE'
            })
25,               .then(res => res.json())
26,             .then(data => {
27,                 // console.log(data)
28, localhost300 a jekhane home componenet er maddome data database vtheke direct ene dekhano hocce sekhane x btn a click korle confirm delete dialog a ok dile nodemon a [trying to delete 63599--] eta asbe
37,                   if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
 41,                       const remainingUsers = displayUsers
 42,                       .filter(usr => usr._id !== user._id);
 43,                    setDisplayUsers(remainingUsers);
                    }
                });
        }
    }
 return (
        <div>
44,check 28, localhost300 a jekhane home componenet er maddome data database vtheke direct ene dekhano hocce sekhane x btn a click korle confirm delete dialog a ok dile ekhan theke o database theke delete
65-6 end
40, [users er jagay replace] <h2>Users: {displayUsers.length}</h2>
            <div>
                {
5, [no a map kora hoice,o 39 a users er jagay replace displayUsers]  displayUsers.map(user => <p key={user._id}>
6.                     {user.name} {user.email}
                        <Link to={`/update/${user._id}`}>
                            <button>
                                update
                            </button>
                        </Link>
10.                        <button  //only btn x nea
11.,13,14.                  onClick={() => handleDelete(user)}  //11.only btn a onclick nea, 13.handle delete er age ()=> eta dia arrow function a rapping, 14.handleDelete er por () eta dia er modde each user er _id(user._id) evvave patano-tahole se _id dia clik handling kore delete ba add korbe
                        >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;
6.check clinet side ui te name email show kore kinaa
7.check clinet side ui te url a localhost er por /home a gia 1 user add kore sekhane console and alert dey kina ta dekhe 
8.localhost 3000 a amne home a notun inputkrito user show hoice kina o console hoice kina dekha
mainly simple read specific kawkw na dekhe sokol k dekha hoice ekhane  o pasapasi post er kaj ekhane ses er kaj mane direct database theke 

9.delete er kaj start
29, no line backend a
37, no backend theke nea

65-7 start
1.component create-[Update.js]-
2.app.js a route set
3.home component a link set

mport React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);

        if (agree) {
            // console.log('deleting user with id: ', user._id)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        const remainingUsers = displayUsers
                            .filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }
                });
        }
    }

    return (
        <div>
            <h2>Users: {displayUsers.length}</h2>
            <div>
                {
                    displayUsers.map(user => <p key={user._id}>
                        {user.name} {user.email}
3.[home component a link set o er to ajbe update route a dynamic vave user_id te] <Link to={`/update/${user._id}`}>
4.no backend a                            <button>
                                update
                            </button>
                        </Link>
                        <button
                            onClick={() => handleDelete(user)}
                        >X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Home;

5. no server side theke
5.go app.js-update/id route a loader dea params soho o paramsid dynamicvavae soho
loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)


import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
 7.   const storedUser = useLoaderData();
7.go update route- useloaderdata diya user ta nea
    
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event =>{
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('user updated')
                console.log(data);
            }
            
        })
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div>
            <h2>Please Update: {storedUser.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name='name' placeholder='name' required />
                <br />
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.address} name='address' placeholder='address' required />
                <br />
                <input onChange={handleInputChange} type="email" defaultValue={storedUser.email} name="email" id="" placeholder='email' required />
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default Update;

8.adduser component theke full form ta copy kore return er nice div er modde h2 er nice paste
9.ar return er opor theke state porjonto nea
10.usestate a e komia import
11.onsubmithanler name f2 dia chage
12.onsubmit handler er  console.log rekhe baki delete
13.blur handler ta blur er jagay replace change
14.onblur a select kore ctrl d dia repalce onchange
14.1, add user btn er name update user kora
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    
18.    const [user, setUser] = useState(storedUser);
18.usestate a parameter stateuser set
    const handleUpdateUser = event =>{
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('user updated')
                console.log(data);
            }
            
        })
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }
return (
        <div>
            <h2>Please Update: {storedUser.name}</h2>
            <form onSubmit={handleUpdateUser}>
15.                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" name='name' placeholder='name' required />
15. no a //defaultValue={storedUser.name}                
                <br />
16.               <input onChange={handleInputChange} type="text" defaultValue={storedUser.address} name='address' placeholder='address' required />
16. no a // defaultValue={storedUser.address}               
                <br />
17.                <input onChange={handleInputChange} type="email" defaultValue={storedUser.email} name="email" id="" placeholder='email' required />
17. no a // defaultValue={storedUser.email}                
                <br />
                <button type="submit">Update User</button>
            </form>
        </div>
    );

19.check ,update user aclick korle console a ta pabo o field a name, mail rename korle tao pabo
 65-7 end

 








































































































*/
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
28.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.
11.













































































































*/
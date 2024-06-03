import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([{name:"aman",email:'ak@ha',image:'https://images.unsplash.com/photo-1715868158574-d83d274384f7?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}]);
  const handleFormData=(data)=>{
    setUsers([...users,data])
    console.log(users)
  }
  const handleRemove=(id)=>{
    setUsers(users.filter((user,indx)=>indx!=id))
  }
  return (
    <>
      <div className="h-screen w-full bg-zinc-100 p-4">
        <Form handleFormData={handleFormData} />
        <Cards users={users} handleRemove={handleRemove}/>
      </div>
    </>
  );
}

export default App;

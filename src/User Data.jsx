import { useState, useMemo, useEffect } from 'react'
import Address from './Address';
import './css/User Data.css'

const UserData = ({user, onDelete, onUserClick, isActive }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [todos, setTodos] = useState(user.todos);
    const [address, setAddress] = useState(user.address);
    const [isDataClicked, setIsDataClicked] = useState(false);

    // Load user data from sessionStorage if it exists
    useEffect(() => {
      const savedUser = JSON.parse(sessionStorage.getItem(`user-${user.id}`));
      if (savedUser) {
        setName(savedUser.name);
        setEmail(savedUser.email);
        setAddress(savedUser.address);
      }
    }, [user.id]);

    const borderColor = useMemo(() => {
      const storedTodos = JSON.parse(sessionStorage.getItem("todos")) || [];
      const userTodos = storedTodos.filter(todo => todo.userId === user.id);
    
      const hasIncompleteTodos = userTodos.some(todo => !todo.completed);
      return hasIncompleteTodos ? "red" : "green";
    }, [todos]);

    const handleUpdate = () => {
      const updatedUser = {
        id: user.id,
        name,
        email,
        todos,
        address
      };
      sessionStorage.setItem(`user-${user.id}`, JSON.stringify(updatedUser));
      alert("User data updated!");
    };

    const handleDelete = () => {
      sessionStorage.removeItem(`user-${user.id}`);  
      alert("User data deleted!");
      onDelete(user.id); // Notify parent to remove user
    };

    const handleUserClick = () => {
      onUserClick(user.id);
    };

    return (
      <>
      <div className='main-container'>
        <div className='user-card' style={{ border: `2px solid ${borderColor}`, backgroundColor: isActive? "	#ffdb99" :" #f9f9f9"}}>
          <div className='input-id-group' onClick={handleUserClick}>
            <label>ID:</label>{user.id}<br />
          </div>
          <div className={`input-group ${isActive ? 'orange' : ''}`}>
            <label>Name:</label>
            <input value={name} onChange={(e) => setName(e.target.value)} /><br />
          </div>
          <div className={`input-group ${isActive ? 'orange' : ''}`}>
            <label>Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          </div>
          <div className={`button-group ${isDataClicked ? 'expanded' : ''}`}>
            <div className='other'>
              <button onClick={() => setIsDataClicked(!isDataClicked)}>Other Data</button>
            </div>
    
            {isDataClicked && (
              <div className='address'>
                <Address address={address} setAddress={setAddress} />
              </div>
            )}
    
            <div className='crud'>
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  export default UserData;
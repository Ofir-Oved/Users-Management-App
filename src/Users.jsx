import { useEffect, useState, useMemo } from 'react';
import { getAll } from './utils';
import UserData from './User Data';
import './css/Users.css';
import Posts from './Posts';
import Todos from './Todos';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [activeUserId, setActiveUserId] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const { data: usersData } = await getAll(USERS_URL);
        const { data: todosData } = await getAll(TODOS_URL);
        const { data: postsData } = await getAll(POSTS_URL);

        // // Add initial isUserClicked to each user
        // const initialUsers = usersData.map(user => ({ ...user, isUserClicked: false }));

        // Exclude deleted users stored in sessionStorage
        const deletedUsers = JSON.parse(sessionStorage.getItem("deletedUsers") || "[]");
        const filteredUsers = usersData.filter(user => !deletedUsers.includes(user.id));

        setUsers(filteredUsers);
        setTodos(todosData);
        setPosts(postsData);
      };
      fetchData();
    }, []);

    const handleDeleteUser = (userId) => {
      // Add the user ID to deletedUsers in sessionStorage
      const deletedUsers = JSON.parse(sessionStorage.getItem("deletedUsers") || "[]");
      sessionStorage.setItem("deletedUsers", JSON.stringify([...deletedUsers, userId]));

      // Remove the user from the current users state
      setUsers(users.filter(user => user.id !== userId));
    };

    const handleUserClick = (userId) => {
      setActiveUserId(prevId => (prevId === userId ? null : userId));
    };

    const usersData = useMemo(() => {
      return users.map((user) => ({
        ...user,
        todos: todos.filter((todo) => todo.userId === user.id),
        posts: posts.filter((post) => post.userId === user.id),
      }));
    }, [users, todos, posts]);

    const filteredUsers = useMemo(() => {
      if (!search) {
          return usersData; // Show all users when no search term is provided
      }
  
      return usersData.filter((user) => {
          return (
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.email.toLowerCase().includes(search.toLowerCase())
          );
      });
    }, [search, usersData]);

  return (
    <>
        <div className="search-bar">
            <label>Search{'  '}</label><input type="text" onChange={(e) => setSearch(e.target.value)}></input>
            <button>{' '}Add</button>
        </div>
        <div className="center-container">
            <div className={`user-list ${activeUserId ? 'mini' : ''}`}>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <UserData key={user.id} user={user} onDelete={handleDeleteUser} onUserClick={handleUserClick} isActive={user.id === activeUserId}/>
                    ))
                    ) : (
                    <p>No users available</p>
                )}
            </div>
            {activeUserId &&
              filteredUsers.map(user => (
                user.id === activeUserId && (
                  <div className='user-lists' key={user.id}>
                    <Todos name={user.name} todos={user.todos}/>
                    <Posts name={user.name} posts={user.posts}/>
                  </div>  
                )
              ))
            }
        </div>
    </>
  );
};

export default Users;

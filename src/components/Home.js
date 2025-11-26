import Navbar from "./Navbar";
import '../assets/Home.css';
import { useState } from "react";

function Home() {

    const [task, setTask] = useState("");
    const [tasklist, setTasklist] = useState([]);

    const addTask = () => {
        if (task.trim() === "") {
            alert("Please enter a task");
            return;
        }

        const newTask = {
            id: Date.now(),  
            name: task
            
        };
        
        setTasklist([...tasklist, newTask]);
        setTask(""); 
        
        
    };

    const deleteTask = (deleteId) => {
        const updatedTasks = tasklist.filter(item => item.id !== deleteId);
        setTasklist(updatedTasks);
    };

    return (
        <>
            <Navbar />

            <div className="home-container">

                <div className="welcome-box">
                    <h2>Welcome to your Dashboard 👋</h2>
                    <p>Todo app</p>
                </div>

                <div className="todo-box">
                    <input 
                        type="text" 
                        placeholder="Enter a Task" 
                        value={task} 
                        onChange={e => setTask(e.target.value)} 
                    />

                    <button onClick={addTask}>Add Task</button>

                    <ul>
                        {tasklist.map((item) => (
                            <li key={item.id}>
                                {item.name}
                                <button 
                                    onClick={() => deleteTask(item.id)} 
                                    style={{ marginLeft: "10px" }}
                                >
                                    Delete
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Home;

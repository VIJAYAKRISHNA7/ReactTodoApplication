import Navbar from "../Navbar";
import '../../assets/Updates.css';


function Update(){
    
 return(
  <>
  <Navbar/>
    <div className="updates-container">
      <h2>🚀 App Updates</h2>
      <p className="intro-text">
        Welcome! Here are the latest improvements made in our simple Todo App.
      </p>

      <section>
        <h3>🔹 Recent Updates</h3>
        <ul>
          <li>Added feature to add new tasks easily.</li>
          <li>Delete button added to remove unwanted tasks.</li>
          <li>Improved UI spacing and alignment.</li>
          <li>Tasks appear instantly after adding.</li>
        </ul>
      </section>

      <section>
        <h3>🎨 UI Improvements</h3>
        <ul>
          <li>Soft colors for a smooth sky-look design.</li>
          <li>Better button colors for clarity.</li>
          <li>Cleaner layout for better readability.</li>
        </ul>
      </section>

      <section>
        <h3>🛠 Fixes</h3>
        <ul>
          <li>Fixed issue where empty tasks were allowed.</li>
          <li>Fixed spacing issues on smaller screens.</li>
          <li>Smoother button click animations.</li>
        </ul>
      </section>

      <section>
        <h3>✨ Coming Soon</h3>
        <ul>
          <li>✔ Mark task as completed.</li>
          <li>✏ Edit task option.</li>
          <li>📦 Save tasks in local storage.</li>
        </ul>
      </section>

      <p className="thank-you">Thank you for using our Todo App! 💙</p>
    </div>
  </>
  
  );

}

export default Update;
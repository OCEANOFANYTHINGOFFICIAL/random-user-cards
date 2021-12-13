import React from "react";
import './App.css';
function App() {
  // usstate Hook For Storing users
  const [users, setUsers] = React.useState([]);
  // usstate Hook For Fetch data from API - https://randomuser.me/api/
  React.useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div className="App">
      {/* map users in a card */}
      {users.map((user) => (
        <div key={user.login.password} className="card">
          <img src={user.picture.medium} alt="{user.name.first}" />
          <h3 className="title">{user.name.title} {user.name.first} {user.name.last}</h3>
          <h3 className="age">{user.dob.age}</h3>
          <p className="location">{user.location.city}</p>
          <p className="country">{user.location.country}</p>
          <p className="state">{user.location.state}</p>
          <p className="email">{user.email}</p>
          <p className="phone">{user.phone}</p>
          <p className="street">{user.location.street.number} {user.location.street.name}</p>
        </div>
      ))}
      {/* make a footer */}
      <footer>
        <p>
          Made with <span role="img" aria-label="heart">❤️</span> by
          <a href="https://oceanofanythingofficial.github.io" target="_blank" rel="noopener noreferrer">
            {" OCEAN OF ANYTHING"}
          </a>
        </p>
      </footer>
    </div>
  );
}
// clear the console periodically
setInterval(() => {
  if (console._commandLineAPI && console._commandLineAPI.clear) {
    console._commandLineAPI.clear();//clear in some safari versions
    console.log('\n'.repeat('50'));
  } else if (console._inspectorCommandLineAPI && console._inspectorCommandLineAPI.clear) {
    console._inspectorCommandLineAPI.clear();//clear in some chrome versions
    console.log('\n'.repeat('50'));
  } else if (console.clear) {
    console.clear();//clear in other chrome versions (maybe more browsers?)
    console.log('\n'.repeat('50'));
  } else {
    console.log(Array(100).join("\n"));//print 100 newlines if nothing else works
    console.log('\n'.repeat('50'));
  }
});


export default App;

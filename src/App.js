
import './App.css';

const Person = (props)=> {
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastname}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = ()=> {
  const name = 'Dssn';
  const isNameShowing = true;
  const isUserLoggedIn = true;
  return (
    <div className="App">
      <h1> Hello {isNameShowing ? name : 'someone'}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
        <h2> test </h2>
        <h3> There is no name </h3>
        </>
      )}

      <Person name={'John'} lastname={'Doe'} age={23}/>
      <Person name={'Jane'} lastname={'Don'} age={23}/>
      <Person name={'Josh'} lastname={'Doe'} age={23}/>
      <Person name={'Jack'} lastname={'Doe'} age={23}/>
      <Person name={'Jacklyn'} lastname={'Doe'} age={23}/>
    </div>
  );
}

export default App;

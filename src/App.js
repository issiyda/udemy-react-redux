import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

    let message = 'test';

    const profiles = [
        {name: "Taro", age: 10},
        {name: "Hanako", age: 20},
    ];
    return (
        <div className="App">
            {
                profiles.map((profile,index) => {
                    return <User name={profile.name} age={profile.age} key={index}/>
                })
            }
            <header className="App-header">
                <p>{message}</p>
                <button onClick={() => {
                }}>クリック
                </button>
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*<p>*/}
                {/*  Edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                {/*<a*/}
                {/*  className="App-link"*/}
                {/*  href="https://reactjs.org"*/}
                {/*  target="_blank"*/}
                {/*  rel="noopener noreferrer"*/}
                {/*>*/}
                {/*  Learn React*/}
                {/*</a>*/}
                <User name={"Taro"} age={10}></User>
                <User name={"Hanako"} age={20}></User>
            </header>
        </div>
    );
}

const User = (props) => {
    return (
        <div>
            Hi Iam {props.name} and {props.age} years old.
        </div>
    )
}

export default App;

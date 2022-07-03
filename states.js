import React from 'react';

// Stateful

const Button = () => {

    return (
        <dvi>
            <h1></h1>
        </dvi>
    )
}



// Stateless

const Button2 = ({ text }) => <ButtonRed text={text}/>;

// Stateless. Another way
const Button3 = () => (
    <div>
        <h1>Hola mundo!</h1>
    </div>
);


// A little obsole but a lot of systems are buided this way

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}


// Another way to do the same

import React , { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}


// Constructors

import React , { Component } from 'react';

class App extends Component {

    constructor() {
        super();
        this.sate = {
            count: 0
        };
    }

    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}


// HOCs (High order components)
// Tienen una funcionalidad particular, pues reciben un componente, extienden su funcionalidad con lo que esté dentro del componente y retornan un componente compuesto. Así podemos tener funcionalidades muy específicas con las que podemos trabajar según nuestras necesidades


import React , { Component } from 'react';

function ComponentWrapper(WrapperComponent) {
    class Wrapper extends Component {
        render () {
            return <WrapperComponent {...this.props} />;
        }
    }

    return Wrapper;
}


import React from 'react';
import './Theoretical.css'

const Theoretical = () => {
    return (
        <div className='theory-ans'>
            <h2>Props vs State</h2>
            <p>In a React JS, props are arguments passed as parameter to  its parent component. Props are immutable, which means only readable, props can't be modified. We can pass function, array, orbject, properties or any value through the props.<br></br>
                In react JS, state is something that holds the value that can be change. We can initialize a state in a component itself. State are mutable, they can be modified using this.setState. But states are asyncronus, which mean they are executed in last.
            </p>
            <h2>How useState works</h2>
            <p>useState is a concept of react Hook. Which allows us to handle the value that can be changed. useState returns an array with two elements. One is variable which is assigned the current value in a functional component. There is another element which is a function to update the value of the variable. Every value is assigned to the first element, must assigned by the second element which is the set function.
            </p>

        </div>
    );
};

export default Theoretical;
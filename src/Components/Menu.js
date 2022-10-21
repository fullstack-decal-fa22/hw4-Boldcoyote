import React from 'react';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 
    return (
      <div className="colorOptions">
            <Color handleClick={props.handleClick} color="red"/>
            <Color handleClick={props.handleClick} color="blue"/>
            <Color handleClick={props.handleClick} color="yellow"/>
            <Color handleClick={props.handleClick} color="green"/>
      </div>
    );
}

export default Menu;
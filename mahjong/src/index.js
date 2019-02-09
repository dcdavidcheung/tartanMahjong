import ReactDOM from 'react-dom';
import React from 'react';
import bamboo1 from './tileImages/1bamboo.png';
import bamboo2 from './tileImages/2bamboo.png';
import bamboo3 from './tileImages/3bamboo.png';
import bamboo4 from './tileImages/4bamboo.png';
import bamboo5 from './tileImages/5bamboo.png';
import bamboo6 from './tileImages/6bamboo.png';
import bamboo7 from './tileImages/7bamboo.png';
import bamboo8 from './tileImages/8bamboo.png';
import bamboo9 from './tileImages/9bamboo.png';
import dot1 from './tileImages/1dot.png';
import dot2 from './tileImages/2dot.png';
import dot3 from './tileImages/3dot.png';
import dot4 from './tileImages/4dot.png';
import dot5 from './tileImages/5dot.png';
import dot6 from './tileImages/6dot.png';
import dot7 from './tileImages/7dot.png';
import dot8 from './tileImages/8dot.png';
import dot9 from './tileImages/9dot.png';
import character1 from './tileImages/1character.png';
import character2 from './tileImages/2character.png';
import character3 from './tileImages/3character.png';
import character4 from './tileImages/4character.png';
import character5 from './tileImages/5character.png';
import character6 from './tileImages/6character.png';
import character7 from './tileImages/7character.png';
import character8 from './tileImages/8character.png';
import character9 from './tileImages/9character.png';
import greend from './tileImages/dgreen.png';
import redd from './tileImages/dred.png';
import whited from './tileImages/dwhite.png';
import eastw from './tileImages/weast.png';
import northw from './tileImages/wnorth.png';
import southw from './tileImages/wsouth.png';
import westw from './tileImages/wwest.png';
import f1 from './miscImages/f1.png';
import f2 from './miscImages/f2.png';
import f3 from './miscImages/f3.png';
import f4 from './miscImages/f4.png';
import s1 from './miscImages/s1.png';
import s2 from './miscImages/s2.png';
import s3 from './miscImages/s3.png';
import s4 from './miscImages/s4.png';
import './index.css';

var randy = Math.floor(Math.random() * 42);
var randy1 = Math.floor(Math.random() * 42);
var randy2 = Math.floor(Math.random() * 42);
var randy3 = Math.floor(Math.random() * 42);
var randy4 = Math.floor(Math.random() * 42);
var randy5 = Math.floor(Math.random() * 42);
var randy6 = Math.floor(Math.random() * 42);
var randy7 = Math.floor(Math.random() * 42);
var randy8 = Math.floor(Math.random() * 42);
var randy9 = Math.floor(Math.random() * 42);
var randy10 = Math.floor(Math.random() * 42);
var randy11 = Math.floor(Math.random() * 42);
var randy12 = Math.floor(Math.random() * 42);
var imgs = [bamboo1,bamboo2,bamboo3,bamboo4,bamboo5,bamboo6,bamboo7,bamboo8,bamboo9,
            dot1,dot2,dot3,dot4,dot5,dot6,dot7,dot8,dot9,
            character1,character2,character3,character4,character5,character6,character7,
            character8,character9,
            greend,redd,whited,eastw,northw,southw,westw,
            f1,f2,f3,f4,s1,s2,s3,s4];

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(169).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
        {this.renderSquare(0)}
        <div className="logo">
          <img src={imgs[randy]} width="40" height="60" />
        </div>
                  {this.renderSquare(1)}
         <div className="logo">
          <img src={imgs[randy1]} width="40" height="60" />
        </div>
                  {this.renderSquare(2)}
          <div className="logo">
          <img src={imgs[randy2]} width="40" height="60" />
        </div>
                  {this.renderSquare(3)}
          <div className="logo">
          <img src={imgs[randy3]} width="40" height="60" />
        </div>
                  {this.renderSquare(4)}
          <div className="logo">
          <img src={imgs[randy4]} width="40" height="60" />
        </div>
                  {this.renderSquare(5)}
          <div className="logo">
          <img src={imgs[randy5]} width="40" height="60" />
        </div>
                  {this.renderSquare(6)}
          <div className="logo">
          <img src={imgs[randy6]} width="40" height="60" />
        </div>
                  {this.renderSquare(7)}
          <div className="logo">
          <img src={imgs[randy7]} width="40" height="60" />
        </div>
                  {this.renderSquare(8)}
          <div className="logo">
          <img src={imgs[randy8]} width="40" height="60" />
        </div>
                  {this.renderSquare(9)}
          <div className="logo">
          <img src={imgs[randy9]} width="40" height="60" />
        </div>
      	  {this.renderSquare(10)}
          <div className="logo">
          <img src={imgs[randy10]} width="40" height="60" />
        </div>
      	  {this.renderSquare(11)}
          <div className="logo">
          <img src={imgs[randy11]} width="40" height="60" />
        </div>
      	  {this.renderSquare(12)} 
          <div className="logo">
          <img src={imgs[randy12]} width="40" height="60" />
        </div> 
        </div>
        <div className="board-row">
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
      	  {this.renderSquare(16)}
      	  {this.renderSquare(17)}
      	  {this.renderSquare(18)}
      	  {this.renderSquare(19)}
      	  {this.renderSquare(20)}
      	  {this.renderSquare(21)}
      	  {this.renderSquare(22)}
      	  {this.renderSquare(23)}
      	  {this.renderSquare(24)}
      	  {this.renderSquare(25)}
        </div>
        <div className="board-row">
          {this.renderSquare(26)}
          {this.renderSquare(27)}
          {this.renderSquare(28)}
      	  {this.renderSquare(29)}
      	  {this.renderSquare(30)}
      	  {this.renderSquare(31)}
      	  {this.renderSquare(32)}
      	  {this.renderSquare(33)}
      	  {this.renderSquare(34)}
      	  {this.renderSquare(35)}
      	  {this.renderSquare(36)}
      	  {this.renderSquare(37)}
      	  {this.renderSquare(38)}
        </div>
	<div className="board-row">
          {this.renderSquare(39)}
          {this.renderSquare(40)}
          {this.renderSquare(41)}
      	  {this.renderSquare(42)}
      	  {this.renderSquare(43)}
      	  {this.renderSquare(44)}
      	  {this.renderSquare(45)}
      	  {this.renderSquare(46)}
      	  {this.renderSquare(47)}
      	  {this.renderSquare(48)}
      	  {this.renderSquare(49)}
      	  {this.renderSquare(50)}
      	  {this.renderSquare(51)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


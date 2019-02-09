import React from 'react';
import ReactDOM from 'react-dom';


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
          {this.renderSquare(1)}
          {this.renderSquare(2)}
      	  {this.renderSquare(3)}
      	  {this.renderSquare(4)}
      	  {this.renderSquare(5)}
      	  {this.renderSquare(6)}
      	  {this.renderSquare(7)}
      	  {this.renderSquare(8)}
      	  {this.renderSquare(9)}
      	  {this.renderSquare(10)}
      	  {this.renderSquare(11)}
      	  {this.renderSquare(12)}  
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


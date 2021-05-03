import React, { Component } from 'react'
// We include our square component
import Square from './Square'

// We create a react class component
export default class Board extends Component {
    renderSquare(i) {
        return <Square value={this.props.Square[i]}
            onClick={() => this.props.onClick(i)}
        />
    }
    render() {
        return (
            <div>
                {/* The boxes that create the tic tac toe game UI */}
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}
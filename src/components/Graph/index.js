import React from 'react';
import Bar from '../Bar/Bar.js';
import './Graph.css';

class Graph extends React.Component {
    render() {
        return (
            <div className="graph-container">
                {this.props.array.map((value, index) => {
                    const isHighlighted = this.props.highlight.includes(value);
                    return <Bar key={index}
                        value={value} 
                        highlight={isHighlighted}
                        totalElements={this.props.array.length} />
                })}
            </div>
        );
    }
}

export default Graph;
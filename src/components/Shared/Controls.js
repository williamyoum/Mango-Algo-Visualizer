import React from 'react';
import Dropdown from './Dropdown.js';

class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSort: "quickSort"
        };
    }
    render() {
        return (
            <div style={{
                display: "flex",
                paddingTop: 10,
                paddingBottom: 10
            }}>
                <Dropdown
                    onChange={(e) => this.setState({selectedSort: e.target.value})}
                    selected={this.state.selectedSort}
                    options={["bubbleSort", "quickSort", "mergeSort", "Graph1"]} />
                
                <button onClick={() => this.props.handleSort(this.state.selectedSort)}>Sort</button>
                <button onClick={this.props.handleShuffle}>Shuffle!</button>
                <button onClick="abort = true">Pause</button>
            </div>
        );
    }
}

export default Controls;
import React, { Component } from 'react';
import Controls from '../components/Shared/Controls';
import BarGraph from '../components/BarGraph';
import { createArrayWithRange, sorts } from '../helper.js';

class SortPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            comparingIndexes: [],
            selectedArraySize: 100
        }
        // bindings
        this.handleShuffle = this.handleShuffle.bind(this);
    }
    componentDidMount() {
        this.setState({
            array: this.handleShuffle(createArrayWithRange(this.state.selectedArraySize))
        });
    }
    handleShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            this.setState({array : array});
        }
        return array;
    }
    handleSort(sortName) {
        switch(sortName) {
            case "bubbleSort":
                sorts.bubble(this.state.array, (array) => this.setState({array: array}));
                break;
            case "quickSort":
                sorts.quick(this.state.array, (array) => this.setState({array: array}));
                break;
            case "mergeSort":
                sorts.merge(this.state.array, (array) => this.setState({array: array}));
                break;
            
            default:
                break;
        }
    }
    render() {
        return (
            <div>
                <section>
                    <Controls 
                        handleSort = {this.handleSort.bind(this)}
                        handleShuffle = {() => this.setState({array: this.handleShuffle(this.state.array)})} />
                    <BarGraph
                        highlight={this.state.comparingIndexes}
                        array={this.state.array} />
                </section>
            </div>
        )
    }
}

export default SortPage
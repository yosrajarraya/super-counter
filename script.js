class App extends React.Component {
    render() {
        return (
            <div class="app">
                <Counter />
            </div>
        )
    }
}

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            taps: 0
        }
    }
    handleIncrement = () => {
        this.setState(prevState => ({
            count: prevState.count + 1,
            taps: prevState.taps + 1
        }))
    }
    handleDecrement = () => {
        this.setState(prevState => ({
            count: (prevState.count === 0) ? (prevState.count) : (prevState.count - 1),
            taps: prevState.taps + 1
        }))
    }
    handleResetCount = () => {
        this.setState({ count: 0 })
    }
    handleResetAll = () => {
        this.setState({ count: 0, taps: 0 })
    }
    render() {
        return (
            <div class="counter">
                <h1 style={{color: 'red'}}>Counter</h1>
                <h2 class="count">{this.state.count}</h2>
                <h4 class="taps">Total taps: {this.state.taps}</h4>
                <div>
                    <button onClick={this.handleDecrement}>Decrement -</button>
                    <button onClick={this.handleIncrement}>Increment +</button>
                </div>
                <div>
                    <button class="reset-count" onClick={this.handleResetCount}>Reset Count</button>
                    <button class="reset-all" onClick={this.handleResetAll}>Reset All</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))

// const initialState ={
//     counterValue :0,
//     LastAction :null
// }

// const counterReducer = (state ,action) =>{
//     switch(action.type){
//         case 'increment':
//             return {
//                 counterValue :state.counterValue +1,
//                 LastAction :'increment'

//             }
//             case 'decrement':
//                 return {
//                     counterValue:state.counterValue -1,
//                     LastAction:'decrement'
//                 }
//                 case 'incrementByRandom':
//                     return {
//                         counterValue :state.counterValue +action.Value,
//                         LastAction :'ncrementByRandom'
//                     }

    
// } 
// render() {
//     return (
//         <div class="counter">
//             <h1>Counter</h1>
//             <h2 class="count">{this.state.count}</h2>
//             <h4 class="taps">Total taps: {this.state.taps}</h4>
//             <div>
//                 <button onClick={this.handleDecrement}>Decrement -</button>
//                 <button onClick={this.handleIncrement}>Increment +</button>
//             </div>
//             <div>
//                 <button class="reset-count" onClick={this.handleResetCount}>Reset Count</button>
//                 <button class="reset-all" onClick={this.handleResetAll}>Reset All</button>
//             </div>
//         </div>
//     )
// }
// }

// ReactDOM.render(<App />, document.getElementById('root'))
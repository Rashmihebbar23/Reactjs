import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Action from './Action'




class ReduxApp extends Component {
    render() {
        return (
            <React.Fragment>
                <strong>Counter:{this.props.counter}</strong>
                <button className="btn btn-primary" onClick={() => this.props.increment()}>inc</button>
                <button className="btn btn-primary" onClick={() => this.props.increment2()}>inc2</button>
                <button className="btn btn-primary" onClick={() => this.props.addAsync()}>Async</button>
                <button className="btn btn-primary" onClick={() => this.props.decrement()}>decrement</button>
               
            </React.Fragment>)

    }

}

const mapStateToProps = (State) => {
    return { counter: State.counter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'increment' }),
        increment2: () => dispatch({ type: 'increment2', payload: 2 }),
        decrement:()=>dispatch({type:'decrement'}),
        addAsync: () => dispatch(Action.addAsync('increment2',10))

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
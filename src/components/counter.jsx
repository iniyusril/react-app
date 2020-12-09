import React, {Component} from 'react'

class Counter extends Component {
    state = {
        count: 12,
        imgeUrl: 'https://picsum.photos/200'
    };
    styles = {
        fontSize: 30
    }

    render(){
        return (
            <React.Fragment>
                <span style={this.styles} className={this.GetClass()}> { this.Change() } </span>
                <button className="btn btn-primary" onClick={this.AddCount()}>Increment</button>
            </React.Fragment>
        
        )
    }
    GetClass(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    Change(){
        return this.state.count == 0 ? 'Zero' : this.state.count
    }
    AddCount(){
         this.state.count += 1 ;
    }
}
export default Counter;

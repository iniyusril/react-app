import React, {Component} from 'react'

class Counter extends Component {
    state = {
        count: this.props.value,
        imgeUrl: 'https://picsum.photos/200',
        tags: ['tag1','tag2','tag3']
    };
    componentDidUpdate(prevProps, prevState){
        console.log('prevState',prevState)
        console.log('prevProps',prevProps)
      }
    componentWillUnmount(){
        console.log('Counter Unmount')
    }
    styles = {
        fontSize: 30 
    }

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this) 
    //     console.log('Increment Clicked!',this)
    // }
    handleIncrement = () =>{
 
        this.setState({
            count : this.state.count+1
        })
        console.log('count', this.state.count)
    }
    render(){
        console.log('props',this.props)
        return (
            <React.Fragment>
                {this.props.children} @ {this.props.CounId}
                <span style={this.styles} className={this.GetClass()}> { this.Change() } </span>
                <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
                <button onClick={() => this.props.OnDelete(this.props.CounId)} className="btn btn-danger btn-sm m-2">Delete</button>
                {this.RenderTags()}
            </React.Fragment>
        
        )
    }
    RenderTags(){
        if(this.state.tags.length === 0){
            return '<p>they are no tags</p>'
        }
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
    }
    GetClass(){
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    Change(){
        return this.state.count === 0 ? 'Zero' : this.state.count
    }

}
export default Counter;

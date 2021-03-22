import { Component } from 'react'; 

class Subject extends Component {
    render() { 
        return (
            <header> {/* 리팩토링 했다.*/}
                <h1>{this.props.title}</h1> 
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;
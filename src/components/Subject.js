import { Component } from 'react'; 

class Subject extends Component {
    render() { 
        return (
            <header> {/* 리팩토링 했다.*/}
                <h1><a href="/" onClick={function(e) {
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h1> 
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;
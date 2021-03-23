import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import { Component } from 'react';

//컴포넌트를 만드는 것 -template (현재 4개의 컴포넌트..)
class App extends Component {
    constructor(props) { //컴포넌트 실행될때 render함수보다 먼저 실행되면서 컴포넌트를 초기화시켜주는 함수는 constructor.
        super(props);
        this.state = {
            subject:{title:'WEB', sub:'world wide web!'},
            contents:[
                { id:1, title:'HTML', desc:'HTML is HyperText Markup Launguage.'},
                { id:2, title:'CSS', desc:'CSS is for design.'},
                { id:3, title:'JavaScript', desc:'JavaScript is for interactive.'}
            ]
        }
    }
    render() { 
        return ( //속성=props, subject(하위컨포넌트) props의 값(title, sub)들이 하드코딩되어있어서 state로 만들어야함. 
            <div className="App">
            <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> 
            <Subject title="React" sub="호로롤ㄹㄹ!"></Subject> {/**주석작성 */}
            <TOC data={this.state.contents}></TOC>
            <Content title="HTML" desc="HTML is HyperText Markup Launguage."></Content>
            </div>
        );
    }
}


export default App;

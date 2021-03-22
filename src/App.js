import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';
import { Component } from 'react';

//컴포넌트를 만드는 것 -template (현재 4개의 컴포넌트..)
class App extends Component {
    render() { 
        return (
            <div className="App">
            <Subject title="web" sub="world wide web!"></Subject> {/* 속성을 props라고 함*/}
            <Subject title="React" sub="호로롤ㄹㄹ!"></Subject> 
            <TOC></TOC>
            <Content title="HTML" desc="HTML is HyperText Markup Launguage."></Content>
            </div>
        );
    }
}


export default App;

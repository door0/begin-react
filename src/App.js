import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control';
import { Component } from 'react';

//컴포넌트를 만드는 것 -template (현재 4개의 컴포넌트..)
class App extends Component {
    constructor(props) { //컴포넌트 실행될때 render함수보다 먼저 실행되면서 컴포넌트를 초기화시켜주는 함수는 constructor.
        super(props);
        this.max_content_id = 3; //마지막 contents의 id와 같아야됨, state값으로 설정x->불필요한 렌더링생기기때문
        this.state = {
            mode:'read', //이부분을 read로 바꾸면 render()도 바뀜
            selected_content_id:0,
            subject:{title:'WEB', sub:'world wide web!'},
            welcome:{title:'welcome', desc:'Hello, React~!'}, 
            contents:[
                { id:1, title:'HTML', desc:'HTML is for information.'},
                { id:2, title:'CSS', desc:'CSS is for design.'},
                { id:3, title:'JavaScript', desc:'JavaScript is for interactive.'}
            ]
        }
    }
    render() { 
        var _title, _desc, _article = null;
        if(this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'read') {
            var i = 0;
            while(i < this.state.contents.length) {
                var data = this.state.contents[i];
                if ( data.id === this.state.selected_content_id ) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                } 
                i = i + 1;
            }
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if(this.state.mode === 'create') {
            _article = <CreateContent onSubmit={function(_title, _desc) {
                // send content to this.state.contents
                this.max_content_id = this.max_content_id + 1;

                //50~56 : 원본을 유지하면서 데이터를 바꾸는 방법을 사용해야함. push보다 concat
                // 수정시 원본x, 원본의 복제본을 이용해서 수정해야함.
                //this.state.contents.push({id: this.max_content_id, title:_title, desc:_desc});
                //또는 
                /*var newContents = Array.from(this.state.contents);
                newContents.push({id: this.max_content_id, title:_title, desc:_desc});
                this.setState({ 
                    contents:newContents
                });
                */
                var _contents = this.state.contents.concat({
                    id: this.max_content_id, title:_title, desc:_desc
                })
                this.setState({ 
                    contents:_contents
                });

                console.log(_title, _desc)
            }.bind(this)}></CreateContent>
        }
        return ( //속성=props, subject(하위컨포넌트) props의 값(title, sub)들이 하드코딩되어있어서 state로 만들어야함. 
            <div className="App">
            <Subject title={this.state.subject.title} sub={this.state.subject.sub}
                onChangePage={function() { //내가 만든 함수,onChangePage
                    this.setState({mode:'welcome'}); //원본을 교체
                }.bind(this)}
            ></Subject> 
            {/* subject의 과도기적 코드
            <header>
                <h1><a href="/" onClick={function(e) {
                    console.log(e);
                    e.preventDefault();
                    //this.state.mode = 'welcome';
                    this.setState({
                        mode:'welcome'
                    });
                }.bind(this)}>{this.state.subject.title}</a></h1> 
                {this.state.subject.sub} 
            </header>
            */}
            <TOC onChangePage={function(id) {
                    this.setState({
                        mode:'read',
                        selected_content_id:Number(id)
                    })
                }.bind(this)} 
                data={this.state.contents}
            ></TOC>
            <Control onChangeMode={function(_mode) {
                this.setState({
                    mode:_mode
                });
            }.bind(this)}></Control>
            {_article} {/* 변수로 처리*/}  
            </div>
        );
    }
}


export default App;

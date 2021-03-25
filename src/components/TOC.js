import { Component } from 'react'; 

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        console.log('===>TOC render shouldComponentUpdate'
            ,newProps.data, this.props.data
        )
        if(this.props.data === newProps.data) {
            return false;
        }
        return true; //true면 render()호출, false면 render()호출 x,  첫째 바뀐값 둘째 이전값
    }
    render() { //복수의 엘리먼트를 생성할때는 key라는 특수한 props를 사용해야함.
        console.log('====>TOC render')
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while( i < data.length ) {
            lists.push(
            <li key={data[i].id}>
                <a href={"/contents/"+data[i].id}
                    data-id = {data[i].id}
                    onClick={function(e) {
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id); 
                    }.bind(this)}
                >{data[i].title}
                </a>
            </li>);
            i= i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}
// TOC를 가져다 쓸 수 있음 
export default TOC;
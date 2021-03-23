import { Component } from 'react'; 

class TOC extends Component {
    render() { //복수의 엘리먼트를 생성할때는 key라는 특수한 props를 사용해야함.
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while( i < data.length ) {
            lists.push(<li key={data[i].id}><a href={"/contents/"+data[i].id}>{data[i].title}</a></li>)
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
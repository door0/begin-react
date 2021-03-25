import { Component } from 'react'; 

class CreateContent extends Component {
    render() { 
        return (
            <article>
                <h2>Create</h2>
                <form action="/creaet_process" method="post"
                 onSubmit={function(e) {
                    e.preventDefault(); //페이지가 이동 못하게 막은 것, react는 새로고침없이 하기위한것이므로
                    this.props.onSubmit ( 
                        e.target.title.value,
                        e.target.desc.value
                    );
                    //this.props.onSubmit();
                 }.bind(this)}>
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p><textarea name="desc" placeholder="description"></textarea></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;
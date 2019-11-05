import React, {Component} from 'react';
import axios from 'axios';
// class bases component
class User extends Component{
    //handling state in class based component
    state={
        "fruit":"apple",
        userinfo:[],
        // "age":23
    }
constructor(){
    super()
    console.log('constructor')
}
// myevent=(event)=>
// {
//     event.persist();
//     console.log("data",event);
//     this.setState({'age':event.target.value})
// }

getPostHandler =()=>
{
    // fetch('/posts')
    axios.get('/posts')
     .then((post)=>{
         console.log('[POST]',post);
         this.setState({
             userinfo:post.data
         })
         
     })

    }

    PostHandler =()=>{
        axios.post('http://localhost:9090/agenda/addConference',{status:"active"})
     .then((post)=>{
         console.log('[POST]',post);
         this.setState({
            
         })
         
     })


    }
    onDeleteHandler = () => {
        axios.delete("https://jsonplaceholder.typicode.com/users/${this.state.id}")
        .then((posts)=>{
        console.log('[Posts]', posts);
        })
    }

     
//Life cycle hooks for creation
static getDerivedStateFromProps(state,props){
    console.log('[  getDerivedStateFromProps...]',state,props);
   return null;
}

//using side effects(API Calls) in componentDidMount

componentDidMount(){
  // fetch('/posts')
       axios.get('/posts')
            .then ((post)=>{
                console.log('get data',post)
                 console.log('[componentDidMount..]');
            })
        }

//Life cycle hooks for update
 
shouldComponentUpdate(nextstate,nextprops){
    console.log('shouldComponentUpdate......',nextstate,nextprops);
    return true;
}

getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate....')
    return{x:'rashmi',y:'hebbar'}
} 
componentDidUpdate(state,props,changes){
    console.log('componentDidUpdate...',state,props,changes)
}



    render(){
        console.log('render');
        
        let list=null;
        list=this.state.userinfo.map((res,i)=>
        {
            return(
                <div key={i}>
                    <p>{res.title}</p>
                </div>
            )
        })
        return(
            <div>
                <h2>using class based</h2>

                //handling state in class based component
                <h1>fruit:{this.state.fruit}</h1>
                
                using props.childern
                {this.props.children}
                //binding data from parent to child
                <h4>Parent to child:{this.props.name}</h4>
                 child to parent 
                {/* <button type="button" onClick={this.props.call}>show me</button> */}
                
                <button type="button" onClick={() => this.props.call("hi rashmi")}>show me</button>
                // <button type="button" onClick={this.componentDidMount}>Get Posts</button>
                <button type="button" onClick={this.PostHandler}>Posts</button>
                <button type="button" onClick={this.onDeleteHandler}>Delete</button>
                {list}
                {/* <input type="text" value={this.state.age} onchange={this.myevent}>abc</input> */}
            </div>
        )
    }
}
export default User;
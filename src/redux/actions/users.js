export default {
testAction : () =>
(dispatch,getState)=>
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>dispatch({type:'SAMPLE_ACTION_DISPATCHED',payload:data})
)
}
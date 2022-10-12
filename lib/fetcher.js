import UseSwr from 'swr';
const fetcher = (...args) => fetch(...args).then(res => res.json());
function getPost(id){
    const {data,error}  =  UseSwr(`/api/posts/${id}`,fetcher);
    
}
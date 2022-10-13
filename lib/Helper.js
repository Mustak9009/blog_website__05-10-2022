const baseUrl = 'http://localhost:3000';
export default async function getPost(id){
    const res = await fetch(`${baseUrl}/api/posts`);
    const posts = await res.json();
    if(id){
        return posts.find(value=> value.id == id);
    }
    return posts;
}
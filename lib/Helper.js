const baseUrl = process.env.local;
export default async function getPost(id){
    const res = await fetch(`${baseUrl}/api/posts`);
    const posts = await res.json();
    console.log(posts)
    if(id){
        return posts.find(value=> value.id == id);
    }
    return posts;
}
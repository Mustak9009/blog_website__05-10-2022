import Data from '../data';
export default function PostId(req,res) {
    const {postId} = req.query;
    console.log(typeof postId)
    const {Posts} = Data;
    if(postId){
        const post = Posts.find((value)=> value.id == postId); //=== is not working because -> value.id is => number/int && postId is => string/text       format 
        return res.status(200).json(post);
    }
    return res.status(400).json({error:"Something going wrong!!"})
}

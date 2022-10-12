import Data from '../data';
//api/posts/post
export default  function Index(req,res){
    const {Posts} = Data;
    if(Posts) return res.status(200).json(Posts);
    return res.status(400).json({error:"Something going wrong!!"})
}
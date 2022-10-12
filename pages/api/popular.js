import Data from './data';
//api/popular
export default  function Trending(req,res){
    const {Popular} = Data;
    if(Popular) return res.status(200).json(Popular);
    return res.status(400).json({error:"Something going wrong!!"})
}
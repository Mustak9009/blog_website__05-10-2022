import Data from './data';
//api/trending 
export default  function Trending(req,res){
    const {Trending} = Data;
    if(Trending) return res.status(200).json(Trending);
    return res.status(400).json({error:"Something going wrong!!"})
}
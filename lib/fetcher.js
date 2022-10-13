import useSwr from 'swr';
const baseURL = 'http://localhost:3000'; 
const fetcher = (...args) => fetch(...args).then(res => res.json());
export default function Fetcher(endpoint){
    const {data,error}  =  useSwr(`${baseURL}${endpoint}`,fetcher);
    return {
        data,
        isLoading: !error && !data,
        isError:error
    }
}
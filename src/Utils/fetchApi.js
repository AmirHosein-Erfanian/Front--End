const fetchApi=async(url,option={})=>{
    try{
        const res=await fetch(import.meta.env.VITE_BASE_API+url,option)
        const data=await res.json()
        return data
    }catch(err){
        console.log(err)
    }
}
export default fetchApi ;
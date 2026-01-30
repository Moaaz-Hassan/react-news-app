import axios from "axios"

const Key = import.meta.env.VITE_GNEWS_API_KEY;

export async function getDataByCategory(cat ){
    const url = `https://gnews.io/api/v4/top-headlines?category=${cat}&lang=en&apikey=${Key}`
    const {data:articles} = await axios.get(url) ;
    console.log(articles)
    return articles.articles ;
    

}

export async function searchForSpecificCategory (value){
    const url = `https://gnews.io/api/v4/search?q=${value}&lang=en&apikey=${Key}`
    const {data:articles} = await axios.get(url) ;
    return articles.articles ;

}

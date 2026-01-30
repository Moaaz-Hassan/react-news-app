import axios from "axios"

const Key = "7d939f9094965626858d2d9c9a874580"

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

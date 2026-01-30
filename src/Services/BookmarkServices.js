export function removeFromBookmarks(id) {
  const allNews = JSON.parse(localStorage.getItem("bookmarkedNews")) || [];
  const updatedNews = allNews.filter(news => news.id !== id);
  localStorage.setItem("bookmarkedNews", JSON.stringify(updatedNews));
  return updatedNews;
}


export function  addToBookmarks(news){
    const allNews = JSON.parse(localStorage.getItem("bookmarkedNews")) || []
    

    allNews.push(news) ;

    localStorage.setItem("bookmarkedNews" , JSON.stringify(allNews) )

    return allNews ;
    
}

export function isBookmarked(id) {
  const allNews = JSON.parse(localStorage.getItem("bookmarkedNews")) || [];

  return allNews.some(news => news.id === id);
}


export function toggleElement(news) {
  if (isBookmarked(news.id)) {
    return removeFromBookmarks(news.id);
  } else {
    return addToBookmarks(news);
  }
}



export function GetAllBookmarked(id) {
  const allNews = JSON.parse(localStorage.getItem("bookmarkedNews")) || [];

  return allNews
}









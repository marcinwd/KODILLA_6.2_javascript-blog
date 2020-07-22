'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
   const links = document.querySelectorAll('.titles a');
   console.log('links:', links);
});*/
{
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);
  
    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    console.log('clickedElement: ', clickedElement);
    clickedElement.classList.add('active');
  
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .post.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector: ', articleSelector);
  
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle: ', targetArticle);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };
    
    

  const otpArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagSelector = '.post-tags .list';

  function generateTitleLinks(){
    /*remove content of titleList*/
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    console.log('removed: ', titleList);
    /*for each article*/
    const articles = document.querySelectorAll(otpArticleSelector);
    console.log('article: ', articles);
    for(let article of articles){
    
      /*get the article id*/
      const articleId = article.getAttribute('id');
      console.log('articleId: ', articleId);
      
      /*get find the title element & get the title from the title element*/
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      console.log('articleTitle: ', articleTitle);

      /*create HTML of the link*/
      const linkHTML = '<li><a href="#'+ articleId +'"><span>'+ articleTitle +'</span></a></li>';
      console.log('linkHTML: ', linkHTML);

      /*insert link into titleList*/
      titleList.insertAdjacentHTML('beforeend', linkHTML);

    } 
    const links = document.querySelectorAll('.titles a');
    console.log(links)
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }  
    
  };
  generateTitleLinks();
  

  function generateTags(){
    /*[DONE] find all articles */
    const articles = document.querySelectorAll(otpArticleSelector);
    console.log('articles: ', articles);
  
    /*[DONE] START LOOP: for every article: */
    for(let article of articles){
      /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagSelector);
    console.log('tagWrapper: ', tagWrapper);
  
      /*[DONE] make html variable with empty string */
      let html = '';
  
      /*[DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      console.log('articleTags: ', articleTags);
  
      /*[DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');
      console.log('articleTagsArray: ', articleTagsArray);
  
      /*[DONE] START LOOP: for each tag */
      for(let tag of articleTagsArray){
        console.log('separate tag: ', tag);

        /* generate HTML of the link */
        const tagLinkHTML = '<li><a href="#tag- '+ tag +'">'+ tag +'</a></li>';
        console.log(tagLinkHTML);
  
        /* add generated code to html variable */
        html = html + tagLinkHTML;
        //console.log(html);
      /* END LOOP: for each tag */
      }
      /* insert HTML of all the links into the tags wrapper */
      tagWrapper.innerHTML = html;
  
    /* END LOOP: for every article: */
    }  
  }
  generateTags();
}
  
  




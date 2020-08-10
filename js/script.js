'use strict';
/*document.getElementById('test-button').addEventListener('click', function(){
   const links = document.querySelectorAll('.titles a');
   console.log('links:', links);
});*/
{
  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    //console.log('Link was clicked!');
    //console.log(event);
  
    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    //console.log('clickedElement: ', clickedElement);
    clickedElement.classList.add('active');
  
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .post.active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    //console.log('articleSelector: ', articleSelector);
  
    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    //console.log('targetArticle: ', targetArticle);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };
    
    
  const otpArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

  function generateTitleLinks(customSelector = ''){ //ADDlater customSelector
    /*remove content of titleList*/
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    //console.log('removed: ', titleList);
    /*for each article*/
    const articles = document.querySelectorAll(otpArticleSelector + customSelector);
    //console.log('article: ', articles);
    //console.log(customSelector);
    for(let article of articles){
    
      /*get the article id*/
      const articleId = article.getAttribute('id');
      //console.log('articleId: ', articleId);
      
      /*get find the title element & get the title from the title element*/
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      //console.log('articleTitle: ', articleTitle);

      /*create HTML of the link*/
      const linkHTML = '<li><a href="#'+ articleId +'"><span>'+ articleTitle +'</span></a></li>';
      //console.log('linkHTML: ', linkHTML);

      /*insert link into titleList*/
      titleList.insertAdjacentHTML('beforeend', linkHTML);

    } 
    const links = document.querySelectorAll('.titles a');
    //console.log(links)
    for(let link of links){
      link.addEventListener('click', titleClickHandler);
    }  
    
  };
  generateTitleLinks();
  

  function generateTags(){
    /*[DONE] find all articles */
    const articles = document.querySelectorAll(otpArticleSelector);
    //console.log('articles: ', articles);
  
    /*[DONE] START LOOP: for every article: */
    for(let article of articles){
      /* find tags wrapper */
    const tagWrapper = article.querySelector(optArticleTagSelector);
    //console.log('tagWrapper: ', tagWrapper);
  
      /*[DONE] make html variable with empty string */
      let html = '';
  
      /*[DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      //console.log('articleTags: ', articleTags);
  
      /*[DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');
      //console.log('articleTagsArray: ', articleTagsArray);
  
      /*[DONE] START LOOP: for each tag */
      for(let tag of articleTagsArray){
        //console.log('separate tag: ', tag);

        /*[DONE] generate HTML of the link */
        const tagLinkHTML = '<li><a href="#tag-'+ tag +'">'+ tag +'</a></li>';
        //console.log(tagLinkHTML);
  
        /* [DONE] add generated code to html variable */
        html = html + tagLinkHTML;
        //console.log(html);
      /* END LOOP: for each tag */
      }
      /* [DONE] insert HTML of all the links into the tags wrapper */
      tagWrapper.innerHTML = html;
  
    /* END LOOP: for every article: */
    }  
  };
  generateTags();


  function tagClickHandler(event){
    /* prevent default action for this event */
    event.preventDefault();
    //console.log(event);
    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    //console.log(clickedElement);
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    //console.log(href);

    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    //console.log('tag: ', tag);
    /* find all tag links with class active */
    const tagLinksActive = document.querySelectorAll('a.active[href^="#tag-"]'); //powinno być 'a.active[href^="#tag-"]'- zobaczmy co sie bedzie dzialpo
    //console.log(tagLinksActive);
    /* START LOOP: for each active tag link */
    for(let tagLinkActive of tagLinksActive){
      /* remove class active */
      tagLinkActive.classList.remove('active');
    /* END LOOP: for each active tag link */
    }
    /* find all tag links with "href" attribute equal to the "href" constant */
    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');
    //console.log(tagLinks);
    /* START LOOP: for each found tag link */
    for(let tagLink of tagLinks){
      /* add class active */
      tagLink.classList.add('active');
      //console.log(tagLink);
      /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  
  function addClickListenersToTags(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]'); //dodać po dodaniu class=active a.active[...] oraz o 'a[href="' + href + '"]'
    //console.log(tagLinks);
    /* START LOOP: for each link */
    for(let tagLink of tagLinks){
      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);
      /* END LOOP: for each link */
    }
  }
  addClickListenersToTags();

  function generateAuthors(){
    /*[DONE] find all articles */
    const articles = document.querySelectorAll(otpArticleSelector);
    console.log('articles: ', articles);
  
    /*[DONE] START LOOP: for every article: */
    for(let article of articles){
      /* find author wrapper */
    const authorWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('authorWrapper: ', authorWrapper);
  
      /*[DONE] make html variable with empty string */
      let html = '';
  
      /*[DONE] get author from data-author attribute */
      const articleAuthor = article.getAttribute('data-author');
      console.log('articleAuthor: ', articleAuthor);

      /*[DONE] generate HTML of the link */
      const authorLinkHTML = '<li><a href="#author-'+ articleAuthor +'">'+ articleAuthor +'</a></li>';
      console.log('authorLinkHTML: ', authorLinkHTML);
      /* [DONE] insert HTML of all the links into the tags wrapper */
      html = html + authorLinkHTML;
      console.log('html: ', html);
      
    }  
  };
  generateAuthors();


}
  
  




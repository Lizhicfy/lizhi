var posts=["2024/10/30/DADD/","2024/11/09/xunfei/","2024/11/20/office/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
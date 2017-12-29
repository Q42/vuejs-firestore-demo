import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyDXQa17Kx8Ua4fakIXDKktAiB1ZA_D__qg",
  authDomain: "smashing-magazine-demo.firebaseapp.com",
  databaseURL: "https://smashing-magazine-demo.firebaseio.com",
  projectId: "smashing-magazine-demo",
  storageBucket: "smashing-magazine-demo.appspot.com",
  messagingSenderId: "489454375328"
};
firebase.initializeApp(config);

const store = {
  articles: null
};

firebase.firestore()
  .collection('articles')
  .limit(5)
  .onSnapshot((articlesRef) => {
    console.log(`Received ${articlesRef.size} articles`);
    const articles = [];
    articlesRef.forEach((doc) => {
      const article = doc.data();
      article.id = doc.id;
      articles.push(article);
    });
    store.articles = articles;
  });

export default store;
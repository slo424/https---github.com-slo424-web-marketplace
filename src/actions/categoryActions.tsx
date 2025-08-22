import { FETCH_CATEGORIES } from './/types'

export const fetchCategories = () => (dispatch: (arg0: { type: any; posts: any; }) => any) => {
    console.log("fetching");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: FETCH_CATEGORIES,
          posts: data.slice(0, 4)
  
          // const posts = response.data.slice(0, 4);
          //     const updatedPost = posts.map(post => {
          //       return {
          //         ...post,
          //         author: "Test"
          //       };
          //     });
        })
      );
  };
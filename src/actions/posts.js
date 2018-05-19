import database from '../firebase/firebase';

// ADD_EXPENSE
export const addPost = post => ({
  type: 'ADD_POST',
  post
});

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      body = '',
      status = 'draft',
      createdAt = 0
    } = postData;
    const post = { title, body, status, createdAt };

    return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
      dispatch(addPost({
        id: ref.key,
        ...post
      }));
    });
  };
};
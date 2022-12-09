import db from "../../firebase/config";

export async function fetchPosts(comments, setComments, setPosts) {
  try {
    await db
      .firestore()
      .collection("posts")
      .onSnapshot(({ docs }) => {
        docs.map((doc) => {
          db.firestore()
            .collection("posts")
            .doc(doc.id)
            .collection("comments")
            .onSnapshot(({ docs }) => {
              const arr = [];
              docs.map((doc) => arr.push(doc.data()));
              setComments((prevState) => {
                return [
                  ...prevState,
                  { id: doc.id, commentNumber: docs.length, comments: arr },
                ];
              });
            });
          comments.map((item) => {
            setPosts((prevState) => {
              return [
                ...prevState,
                {
                  id: doc.id,
                  ...doc.data(),
                  comment: item.id === doc.id && item.commentNumber,
                },
              ]
                .filter(
                  (post, indx, arr) =>
                    post.comment !== false && arr.indexOf(post) === indx
                )
                .sort((firstPost, lastPost) => lastPost.date - firstPost.date);
            });
          });
        });
      });
  } catch (error) {
    console.log(
      `%c[Error - fetchPosts(): ${error.message}]`,
      "color: #F44336;"
    );

    throw error;
  }
}

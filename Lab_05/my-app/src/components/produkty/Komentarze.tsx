import Komentarz from "./Komentarz";
import { useEffect, useState } from "react";

interface user {
  id: number;
  username: string;
  fullName: string;
}

interface KomentarzInterface {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: user;
}

const apiURL = "https://dummyjson.com/comments";

export default function Komentarze() {
  const [comments, setComments] = useState<KomentarzInterface[]>([]);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setComments(data.comments);
      })
      .catch((error) => {
        console.error("Błąd w pobieraniu danych:", error);
      });
  }, []);
  return (
    <>
      <div>
        {comments.map((comment) => (
          <Komentarz
            id={comment.id}
            body={comment.body}
            postId={comment.postId}
            likes={comment.likes}
            user={comment.user}
          ></Komentarz>
        ))}
      </div>
    </>
  );
}

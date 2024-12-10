import { useState, useEffect } from "react";

interface user {
  id: number;
  username: string;
  fullName: string;
}

type KomentarzProps = {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: user;
};

export default function Komentarz({
  id,
  body,
  postId,
  likes,
  user,
}: KomentarzProps) {
  const [like, setLike] = useState(likes);

  return (
    <>
      <div
        style={{
          borderRadius: "10px",
          border: "3px solid black",
          maxWidth: "300px",
          padding: "10px",
          marginTop: "25px",
        }}
      >
        <b>{user.username}</b>
        <div></div>
        {body}
      </div>
      <div style={{ marginLeft: "5px", marginBottom: "25px" }}>
        <div> Likes: {like} </div>
        <button onClick={() => setLike((a) => a + 1)}> Like </button>
        <button onClick={() => setLike((a) => (a - 1 > 0 ? a - 1 : 0))}>
          {" "}
          Dislike{" "}
        </button>
      </div>
    </>
  );
}

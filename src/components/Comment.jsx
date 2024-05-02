import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";

const Comment = props => {
  const [comments, setComments] = useState([]);

  let fetchComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZGNiNjdmMzA0NjAwMWFlNTlmNTIiLCJpYXQiOjE3MTQ0ODYxNDMsImV4cCI6MTcxNTY5NTc0M30.I2-VVESBGwLyEcxDckKFcxmq-WV7uzW3qhP5nhUTG_c",
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then(comments => {
        setComments(comments);
        console.log(comments);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (props.asin) {
      fetchComment();
    }
  }, [props.asin]);

  return (
    <>
      {comments.length === 0 ? (
        <h3>Non ci sono recensioni per questo film!</h3>
      ) : (
        <div className="text-center">
          <h3>Recensioni:</h3>
          {comments.map(comment => (
            <div key={"comment_" + comment._id}>
              <p>{comment.comment}</p>
              <Badge bg="warning" text="dark">
                Voto: {comment.rate}
              </Badge>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comment;

import "./card.css";

const Card = ({ elem, editPost, delCard, title, body, id, serial }) => {
  return (
    <>
      <div className="card">
        <div className="top">
          <span className="id">{serial}</span>
          <h3>Title:{title}</h3>
          <p>News:{body}</p>
        </div>
        <div className="bottom">
          <button className="edit" onClick={() => editPost(elem)}>
            Edit
          </button>
          <button className="dlt" onClick={() => delCard(id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;

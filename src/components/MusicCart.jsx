import { Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToFavouriteAction } from "../redux/actions";
import { removeFromFavouriteAction } from "../redux/actions";

const MusicCart = (props) => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();
  const isFav = favourites.includes(props.musicInfo.id);

  return (
    <>
      <Col>
        <Card className="music-card mb-3 p-3">
          <Card.Img variant="top" src={props.musicInfo.album.cover} />
          <Card.Body className="d-felx justify-content-between">
            <Card.Title>{props.musicInfo.title}</Card.Title>
            <Card.Text>By {props.musicInfo.artist.name}</Card.Text>
          </Card.Body>
        </Card>

        {isFav ? (
          <i
            class="bi bi-heart-fill"
            onClick={() =>
              dispatch(removeFromFavouriteAction(props.musicInfo.id))
            }
          ></i>
        ) : (
          <i
            className="bi bi-heart"
            onClick={() => dispatch(addToFavouriteAction(props.musicInfo.id))}
          ></i>
        )}
      </Col>
    </>
  );
};

export default MusicCart;

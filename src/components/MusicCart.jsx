import { useEffect, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToFavouriteAction } from "../redux/actions";
import { removeFromFavouriteAction } from "../redux/actions";
import { addToSelected } from "../redux/actions";

const MusicCart = (props) => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();
  const isFav = favourites.includes(props.musicInfo.id);

  //const selectedAlbum = useSelector((state) => state.all.music[selected]);

  const updateSelected = () => {
    props.musicArr !== undefined &&
      addToSelected(props.musicArr[props.musicArr.indexOf(props.musicInfo)]);
  };

  return (
    <>
      <Col>
        <Card className="music-card mb-3 p-3" onClick={updateSelected}>
          <Card.Img variant="top" src={props.musicInfo.album.cover} />
          <Card.Body className="d-felx justify-content-between">
            <Card.Title>{props.musicInfo.title}</Card.Title>
            <Card.Text>By {props.musicInfo.artist.name}</Card.Text>
          </Card.Body>
        </Card>

        {isFav ? (
          <i
            className="bi bi-heart-fill"
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

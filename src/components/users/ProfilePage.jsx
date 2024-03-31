import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { useParams } from "react-router-dom";
const url = "https://robohash.org/";

export default function ProfilePage() {
  const { id } = useParams();
  const usersSelector = useSelector((state) => state.users.users);
  const userSelector = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userSelector) {
      dispatch(selectUser(userSelector)); //+id
    }
    // return () => {
    //   dispatch(selectUser(null));
    // };
  }, [id]);

  console.log(usersSelector);
  return (
    <div className="app">
      <div className="wrapper">
        <div className="heading">
          <h4>My profile</h4>
        </div>
        <div className="profile-container">
          <div className="img">
            <img src={`${url}/${userSelector.username}`} alt="not" />
          </div>
          <div>
            <div>Username: {userSelector.username}</div>
            <div>Email: {userSelector.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

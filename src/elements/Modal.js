import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import styled from "styled-components";
import { Autorenew } from '@material-ui/icons';

import { history } from "../redux/configureStore";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  // const top = 50 + rand();
  // const left = 50 + rand();
  const top = 50;
  const left = 50; 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    left: "50%",
    top: "50%",
    
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 300,
    height: 450,
    backgroundColor: theme.palette.background.paper,
    border: 0,
    borderRadius: 10,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },
}));

export default function SimpleModal() {
  
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const authorization =  () => {
    Promise.resolve()
      .then(() => {
        return (window.location.href = 'http://13.125.79.33/api/social/kakao'); 
      })
      .then(() => {
        return history.replace('/auth');
      });
    };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Wrapper>
      <h2 id="simple-modal-title" style={{fontSize: "30px"}}>로그인</h2>
      <p id="simple-modal-description" style={{fontSize: "16px", color: "#555555", fontWeight: "bold"}}>
        로그인 하면 가고싶은 식당을<br/>저장할 수 있어요
      </p>
      <div>
      <KakaoLogin onClick={authorization}/>
      </div>
      </Wrapper>
    </div>
  );

  return (
    <div>
      <AvatarLogin onClick={handleOpen}
      src="https://mangoplate.s3.ap-northeast-2.amazonaws.com/login_avatarimage.png"/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
const AvatarLogin = styled.img`
    width: 36px;
    height: 36px;
    cursor: pointer;
    /* margin: 5px 5px; */
    `;
const KakaoLogin = styled.button`
    margin-top: 15px;
    width: 256px;
    height: 51px;
    border-radius: 50px;
    border: 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://mangoplate.s3.ap-northeast-2.amazonaws.com/kakaotalklogin_btn-removebg-preview.png");
    cursor: pointer;
    `;
const Wrapper = styled.div`
    text-align: center;
    margin-top: 90px;
    overflow: hidden;
    
`;


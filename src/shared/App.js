import React from "react";
import styled from "styled-components";

// route
import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

// pages
import PageDetail from "../pages/PageDetail";
import Main from "../pages/Main";
import TopLists from "../pages/TopLists";
import ReviewWrite from "../pages/ReviewWrite";

import axios from "axios";
function App() {

  React.useEffect(()=>{
    axios.get('http://13.125.79.33/api/social/user').then().catch();
  }, []);

  return (
    <ReactContainer>
      <BrowserRouter>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={Main} />
          <Route path="/auth" exact component={Main} />
          <Route path="/restaurants" exact component={PageDetail} />
          <Route path="/reviews/:shop_name" exact component={ReviewWrite} />
          <Route path="/top_lists" exact component={TopLists} />
        </ConnectedRouter>
      </BrowserRouter>
    </ReactContainer>
  );
}

const ReactContainer = styled.div`
  background-color: #fafafa;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export default App;

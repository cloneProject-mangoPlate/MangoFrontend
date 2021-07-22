import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import Users from "./modules/users";
import User from "./modules/user";
import Toplists from "./modules/toplists";
// modules
import Shop_module from "./modules/Shop_module";
import Review_module from "./modules/Review_module";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  users: Users,
  user: User,
  toplists: Toplists,
  shop: Shop_module,
  review: Review_module,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();

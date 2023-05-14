import React from "react";
import ShopOverview from "./../../Components/shop-Overview-Component/shop-overview.component";

import { Route } from "react-router-dom";
import CategoryPage from "./../category/categoryPage.component";

const shopItemsPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={ShopOverview} />
      <Route path={`${match.path}/:CategoryId`} component={CategoryPage} />
    </div>
  );
};

export default shopItemsPage;

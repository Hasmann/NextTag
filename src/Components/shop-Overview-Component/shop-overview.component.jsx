import React from "react";
import ShopComponent from "../shop/shopComponent.components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getSetCollectionsArray } from "./../../redux/shopCollections/shopCollections.selectors";
// import { getCollectionsData } from "./../../redux/shopCollections/shopCollections.selectors";
const ShopOverview = ({ Collections }) => {
  return (
    <div>
      {Collections.map(({ id, ...otherCollectionProps }) => {
        return (
          <ShopComponent key={id} {...otherCollectionProps}></ShopComponent>
        );
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  Collections: getSetCollectionsArray,
});

export default connect(mapStateToProps)(ShopOverview);

import React from "react";
import "./categoryPage.styles.scss";
import { connect } from "react-redux";
import { getSpecifiedCollection } from "./../../redux/shopCollections/shopCollections.selectors";
import CollectionItem from "./../../Components/collection/collectionItem.components";
const CategoryPage = ({ match, collection }) => {
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownParams) => ({
  collection: getSpecifiedCollection(ownParams.match.params.CategoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);

import React from "react";
import "./shopComponent.style.scss";
import CollectionItem from "./../collection/collectionItem.components";

const ShopComponent = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>

      <div className="preview">
        {items
          .filter((it) => {
            return it.id % 2 === 0;
          })
          .map((item) => {
            return <CollectionItem key={item.id} item={item}></CollectionItem>;
          })}
      </div>
    </div>
  );
};

export default ShopComponent;

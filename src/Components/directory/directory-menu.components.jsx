import React from "react";
import MenuItem from "./../menu-item/menuitem.components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getDirectory } from "./../../redux/Directory-HomeP/directory.selectors";
import "./directory-menu.styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          linkUrl={linkUrl}
          size={size}
        />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: getDirectory,
});

export default connect(mapStateToProps)(Directory);

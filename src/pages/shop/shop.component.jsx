import React from "react";
import SHOPDATA from "./shop-data.js";
import CollectionPreview from "../../components/preview-collection/collection_preview";
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOPDATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shopPage">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;

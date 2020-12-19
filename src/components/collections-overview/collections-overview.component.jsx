import React from 'react';
import './collections-overview.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectColletions } from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectColletions
})

export default connect(mapStateToProps)(CollectionsOverview);

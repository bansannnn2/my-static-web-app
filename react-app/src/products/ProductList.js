import React from 'react';
import { withRouter } from 'react-router';

import { CardContent, ButtonFooter } from '../components';

function ProductList({ products }) {
  return (
    <div>
      {products.length === 0 && <div>Loading data ...</div>}
      <ul className="list">
        {products.map((product) => (
          <li key={product.id} role="presentation">
            <div className="card">
              <CardContent
                name={product.name}
                description={product.description}
              />
              <div className="card-footer">
                <ButtonFooter
                  label={'Edit'}
                  // className={'edit'}
                  iconClasses={'fas fa-edit'}
                />
                <ButtonFooter
                  label={'Delete'}
                  // className={'delete'}
                  iconClasses={'fas fa-trash'}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withRouter(ProductList);

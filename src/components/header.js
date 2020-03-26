import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

/* Additional Header Styles */
import './header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
        }
      }
    }
  `);

  const logo = require('../images/logo.svg');

  return (
    <header>
      <div className={'ui unstackable grid'}>
        <div className={'ui twelve wide column logo-column'}>
          <div
            className={'header-logo'}
            style={{
              backgroundImage: 'url('+ logo +')'
            }}
          />
          <h1 className={'logo-font'}>
            <span>{data.site.siteMetadata.title}</span>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

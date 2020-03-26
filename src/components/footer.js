import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './footer.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author,
          title,
          email
        }
      }
    }
  `);

  return (
    <footer className='ui vertical inverted segment'>
      <div className='ui center aligned container'>
        <i className='ui icon copyright' />
          {new Date().getFullYear()}{' '}{data.site.siteMetadata.title}{' ' }|{' '}
          <a href={`mailto:${data.site.siteMetadata.email}`}>
            <i className='ui icon envelope' />Write us an email
          </a>{' '}|{' '}
          Built with <i className={'ui icon heart'} />by <a href='#' target={'_blank'} rel={'noopener noreferrer'}>{data.site.siteMetadata.author}</a>
      </div>
    </footer>
  );
};

export default Footer;

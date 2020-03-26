import React from 'react';
import { Link } from 'gatsby'
/* SEO Component with React Helmet */
import Head from '../components/head'
import Layout from '../components/layout'
import { MapAddComponent } from '../components/mapview.add'

const Add = () => {
  return (
    <Layout>
      <Head title={`Add`} />
      <div className='index'>
        <section className='ui vertical very fitted segment' style={{marginTop: '1rem'}}>
          <div className='ui container'>
            <h1 className='ui header'>
              <div className='content'>
              <span className='page-title'>
                Dodaj nowe miejsce
              </span>
                <div className='sub header'>
                  Pomóż lokalnym przedsiębiorca
                </div>
              </div>
            </h1>
          </div>
        </section>

        <section className='ui vertical segment'>
          <div className='ui text container formcontainer'>
            <h2>Jak to działa?</h2>
            Zaznacz na mapie lokalizacje miejsca, dodaj opis i pozostałe informacje, tj. sposób dostawy, godziny otwaria i dane kontakowe.
            <strong>Twoja lokalizacja pojawi się na mapie dopiero po jej zweryfikowaniu</strong>.
          </div>
        </section>
        <section>
          <MapAddComponent />
        </section>

      </div>
    </Layout>
  );
};

export default Add;

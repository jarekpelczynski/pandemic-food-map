import React, { useState } from 'react';
import './mapview.add.scss';
import AnimatedMap from './map-add/animatedmap/component.js';
import categories from '../components/categories';
import deliveries from '../components/deliveries';
import { useStaticQuery, graphql, Link } from 'gatsby';
import firebase from 'gatsby-plugin-firebase';

const scrollToElement = require('scroll-to-element');

/*
See gatsby-config.js in main dir for bounds
 */

export function MapAddComponent() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          mapData {
            center
          }
        }
      }
    }
  `);

  const [mapActive, setMapActive] = useState(false);
  const [map, setMap] = useState(null);
  const [positionSelected, setPositionSelected] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [content, setContent] = useState({
    position: [],
    category: '',
    title: '',
    description: '',
    contact: '',
    address: '',
    phone: '',
    email: '',
    name: '',
    timestamp: Date.now(),
    approved: false,
  });

  const onChange = e => {
    // content[e.target.name] = e.target.value
    const c = { ...content };
    c[e.target.name] = e.target.value;
    setContent(c);
  };

  React.useEffect(() => {
    if (mapActive) {
      map.on('click', e => {
        const pos = [e.lngLat.lng, e.lngLat.lat];

        setContent({ ...content, position: pos });
        map.getSource('position').setData({
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: { type: 'Point', coordinates: pos },
            },
          ],
        });
      });

      // // Fit effect
      // map.fitBounds(
      //   data.site.siteMetadata.mapData.bounds,
      //   { duration: 700 }
      // )
    }
  }, [mapActive]);

  React.useEffect(() => {
    scrollToElement('#formcontent');
  }, [positionSelected]);

  React.useEffect(() => {
    if (formSent === true) {
      const newPostKey = firebase
        .database()
        .ref()
        .child('data')
        .push().key;

      firebase
        .database()
        .ref('/data/' + newPostKey)
        .update(content)
        .then(() => {
          console.log('Writing done');
        })
        .catch(e => {
          console.log('error', e);
        });
    }
  }, [formSent]);

  const validateForm = () => {
    let error = false;
    error = content.title.length === 0 ? true : error;
    error = content.description.length === 0 ? true : error;
    error = content.address.length === 0 ? true : error;
    error = content.category.length === 0 ? true : error;

    if (error) {
      setShowError(true);
    } else {
      setFormSent(true);
    }
  };

  return (
    <div id={'map-add-component'}>
      <div
        id="mapcontainer"
        style={{ display: positionSelected ? 'none' : 'inherit' }}
      >
        <AnimatedMap getMapObject={m => setMap(m)} enabled={mapActive} />
        {!mapActive && (
          <div id="overlay" className="box">
            <h3>Dodaj nowe miejsce</h3>
            <p>
              Zaznacz na mapie lokalizację miejsca, które chcesz, zeby pojawiło
              się na tej mapie.
            </p>
            <button
              className="ui primary button"
              onClick={() => setMapActive(true)}
            >
              Zaznacz na mapie
            </button>
          </div>
        )}

        {content.position.length > 0 && (
          <div id="selectThisPoint" className="box">
            <h3>Nowa pozycja ustalona!</h3>
            <p>Chcesz ją dodać?</p>
            <div className="ui buttons">
              <button
                className="ui button"
                onClick={() => {
                  setContent({ ...content, position: [] });
                }}
              >
                Nie, popraw...
              </button>
              <button
                className="ui positive button"
                onClick={() => setPositionSelected(true)}
              >
                Tak!
              </button>
            </div>
          </div>
        )}
      </div>

      {positionSelected && !formSent && (
        <div id="formcontent" className="ui vertical segment">
          <div className="ui text container formcontainer">
            <button
              className="ui left labeled icon button compact"
              onClick={() => {
                setPositionSelected(false);
                setContent({ ...content, position: [] });
              }}
            >
              <i className="left arrow icon" />
              Popraw lokalizację na mapie
            </button>
            <div className="ui form">
              <h4 className="ui horizontal divider header">Dane o miejscu</h4>
              <p>Uzupełnij ponizszy formularz pomocnymi informacjami.</p>

              <div className="field required">
                <label>Kategoria</label>
                <select
                  value={content.category}
                  className="ui dropdown"
                  onChange={e =>
                    setContent({ ...content, category: e.target.value })
                  }
                >
                  <option value="" />
                  {categories.map(c => (
                    <option value={c.ident} key={c.ident}>
                      {c.text}
                    </option>
                  ))}
                </select>
              </div>

              {content.category === 'food' && (
                <div className="field">
                  <label>Opcję dowozu</label>
                  <p>
                    Wybierz jakie formy dowozu są dostępne.<br />
                    Zaznacz <strong>Własny dowóz (ograniczony)</strong> jeśli miejsce dostarcza tylko w małym, ograniczonym obszarze.
                  </p>
                  {deliveries.map(d => (
                    <label key={d.ident} className="checkobx-label">
                      <input value={d.ident} type="checkbox" />
                      {' '}
                      {d.text}
                    </label>
                  ))}
                </div>
              )}

              <div className="field required">
                <label>Jak się nazywa to miejsce</label>
                <input
                  type="text"
                  name="title"
                  value={content.title}
                  onChange={onChange}
                  placeholder="Wpisz oficjalna nazwę miejsca"
                />
              </div>

              <div className="field required">
                <label>Co oferuje</label>
                <textarea
                  rows={4}
                  name="description"
                  onChange={onChange}
                  placeholder="Wpisz co mozna zamówić, np lunch, śniadania, kawa, desery"
                  defaultValue={content.description}
                />
              </div>

              <div className="field required">
                <label>Jak się skontaktować</label>
                <textarea
                  rows={4}
                  name="contact"
                  placeholder="Najszybszy kontakt z miejscem. Przykład: Whatsapp: 012 234 23 23, Messenger: Fancy restauracja, Email: zamow@restauracja.pl"
                  defaultValue={content.contact}
                  onChange={onChange}
                />
              </div>

              <div className="field required">
                <label>Fizyczny adres miejsca</label>
                <textarea
                  rows={4}
                  name="address"
                  placeholder="Dokładny adres, aby klienci mogli zlokalizować miejsce"
                  defaultValue={content.address}
                  onChange={onChange}
                />
              </div>

              {showError && (
                <div className="ui negative message">
                  <div className="header">Brakuje danych</div>
                  <p>Uzupełnij wymagane pola</p>
                </div>
              )}

              <div className="ui buttons">
                <button className="ui positive button" onClick={validateForm}>
                  Wyślij
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {formSent && (
        <div className="ui vertical segment">
          <div className="ui text container">
            <div className="ui success message">
              <div className="header">Dzięki!</div>
              <p>
                Twoje dane zostały zapisane i wkrótce zostaną dodane.
                <Link to="/">Wróc do strony głównej</Link>
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="ui vertical segment">
        <div className="ui text container formcontainer">
          <h2>O stronie</h2>
          Strona powstała z myśla zebrania w jednym miejscu lokalnego biznesu,
          aby przez nadane przez rząd ograniczenia spowodu pandemi, mogłby one
          przetwać a takze, aby ułatwić mieszkańcom znalezienie miejsca, z
          którego będą mogli zamówić jedzenie. Strona powstała w oparciu o
          projekt udostępniony przez{' '}
          <a
            href="https://medium.com/@marcfehr/how-to-build-a-fast-and-reliable-community-mapping-tool-with-gatsbyjs-and-firebase-74a0fa6b5b83"
            target="_blank"
          >
            Marc Fehr
          </a>{' '}
          na{' '}
          <a
            href="https://gitlab.com/marc.fehr/community-isolation-map"
            target="_blank"
          >
            GitLab
          </a>{' '}
          jako projekt Open Source, który podobnie jak ten, ma pomóc lokalnej
          spłeczności w Muizenberg, w Południowej Afryce.
          <h2>Jakie miejca można dodawać?</h2>
          Wszystkie miejsca spełniajace lokalnego przedsiębiorstwa, czyli
          restauracje, bary, kawiarnie, cukiernie, piekarnie, które oferuja w
          czasie ograniczeń opcję na wynos lub dostawę (własna lub przez
          platformy Glovo, Pyszne.pl, Uber Eats).
          <h2>Co jeśli chcę usunąć dane z mapy</h2>
          Jeśli nie chcesz, żeby miejsce nie było wyświetlane na mapie{' '}
          <strong>napisz do mnie</strong>.<h2>Czy strona będzie ulepszana?</h2>
          Strona będzie cały czas rozwijana i ulepszana. Kazdy feedback jest
          mile widziany, jeśli masz pomysł jak usprawnić działanie strony to
          napisz.
          <h2>Dlaczego tylko Kraków?</h2>
          Na ten moment jest to miejsce w którym mieszkam i sam potrzebuję
          takiej mapy z miejscami gdzie mogę coś zamówić do jedzenia. Aplikacja
          jest udostępniona na zasadach Open Srouce i kazdy moze postawić swoja
          wersja dla swojego miasta – jeśli masz tylko wiedzę i odrobinę ochoty.
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const Contact = () => {
  return (
    <Layout>
      <Head title={`Contact`} />
      <section
        className="ui vertical very fitted segment"
        style={{ marginTop: '1rem' }}
      >
        <div className="ui container">
          <div className="ui vertical segment">
            <div className="ui text container">
              <h2>Kontakt</h2>
              Masz pytanie? <a href="mailto:krakowcommunityfoodmap@pm.me"><strong>Napisz!</strong></a>
              <h2>O stronie</h2>
              Strona powstała z myśla zebrania w jednym miejscu lokalnego
              biznesu, aby przez nadane przez rząd ograniczenia spowodu pandemi,
              mogłby one przetwać a takze, aby ułatwić mieszkańcom znalezienie
              miejsca, z którego będą mogli zamówić jedzenie. Strona powstała w
              oparciu o projekt udostępniony przez{' '}
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
              jako projekt Open Source, który podobnie jak ten, ma pomóc
              lokalnej spłeczności w Muizenberg, w Południowej Afryce.
              <h2>Jakie miejca można dodawać?</h2>
              Wszystkie miejsca spełniajace lokalnego przedsiębiorstwa, czyli
              restauracje, bary, kawiarnie, cukiernie, piekarnie, które oferuja
              w czasie ograniczeń opcję na wynos lub dostawę (własna lub przez
              platformy Glovo, Pyszne.pl, Uber Eats).
              <h2>Co jeśli chcę usunąć dane z mapy</h2>
              Jeśli nie chcesz, żeby miejsce nie było wyświetlane na mapie{' '}
              <a href="mailto:krakowcommunityfoodmap@pm.me"><strong>napisz do mnie</strong></a>.
              <h2>Czy strona będzie ulepszana?</h2>
              Strona będzie cały czas rozwijana i ulepszana. Kazdy feedback jest
              mile widziany, jeśli masz pomysł jak usprawnić działanie strony to
              napisz.
              <h2>Dlaczego tylko Kraków?</h2>
              Kraków miejscem, w którym mieszkam i sam potrzebuję takiej mapy z
              miejscami, gdzie mogę zamówić coś do jedzenia. Aplikacja jest
              udostępniona na zasadach Open Srouce i kazdy moze postawić swoja
              wersja dla swojego miasta – jeśli masz tylko wiedzę i odrobinę
              ochoty.
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

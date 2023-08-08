import mernLogo from 'images/mern.png';

import css from './Home.module.scss';

const Home = () => {
  return (
    <section className={css.home}>
      <div>
        <a href="https://github.com/Belka-S/mern_starter" target="_blank" rel="noreferrer">
          <img src={mernLogo} className={css.logo} alt="MERN logo" />
        </a>
        <p>
          Edit <code>server/src/ & client/src/</code> to develop MERN app.
        </p>
        <p className={css.docs}>Click on the Vite, React or MERN logos to learn more</p>
      </div>
    </section>
  );
};

export default Home;

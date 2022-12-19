import React, { FC, useContext } from 'react';

// Store
import { observer } from 'mobx-react-lite';
import { charactersStore, comicsStore, seriesStore } from 'store/EntityStore';

// react router
import { Link } from 'react-router-dom';

// Context
import { ThemeMode } from 'context/ThemeContext';

// Types
import { CardType } from 'types/cardType';
import { Dependecies, ICard } from 'types/card';

// Styles
import classes from './DetailCard.module.scss';

interface IDetailCardProps {
  data?: ICard;
}

export const DetailCard: FC<IDetailCardProps> = observer(({ data }) => {
  const theme = useContext(ThemeMode);
  const { setEntityId: setCharacterId } = charactersStore;
  const { setEntityId: setComicId } = comicsStore;
  const { setEntityId: setSerieId } = seriesStore;

  const linkToDetailEntity = (el: Dependecies) => {
    return '/'.concat(`${el.type}`).concat('/').concat(`${el.id}`);
  };

  return data ? (
    <div className={classes.flex_wrapper}>
      <div className={classes.card_description}>
        <img
          src={data.image}
          alt={data.name}
          className={`${classes.image} ${
            theme?.mode === 'dark' ? classes.image_dark : classes.image_light
          }`}
        />
        <p>{data.description}</p>
      </div>

      <div className={classes.flex_column}>
        {data?.type === CardType.CHARACTERS ? (
          <section>
            <h3>Comics</h3>
            <ul>
              {data.comics?.map((el) => (
                <li key={el.id}>
                  <Link
                    className={classes.link}
                    to={linkToDetailEntity(el)}
                    onClick={() => setComicId(el.id)}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section>
            <h3>Characters</h3>
            <ul>
              {data?.characters?.map((el) => (
                <li key={el.id}>
                  <Link
                    className={classes.link}
                    to={linkToDetailEntity(el)}
                    onClick={() => setCharacterId(el.id)}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {data.type === CardType.SERIES ? (
          <section>
            <h3>Comics</h3>
            <ul>
              {data.comics?.map((el) => (
                <li key={el.id}>
                  <Link
                    className={classes.link}
                    to={linkToDetailEntity(el)}
                    onClick={() => setComicId(el.id)}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section>
            <h3>Series</h3>
            <ul>
              {data.series?.map((el) => (
                <li key={el.id}>
                  <Link
                    className={classes.link}
                    to={linkToDetailEntity(el)}
                    onClick={() => setSerieId(el.id)}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
});

import React, { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ICard } from 'types/card';
import { CardType } from 'types/cardType';

import classes from './DetailCard.module.scss';

export const DetailCard: FC = () => {
  const data = useLoaderData() as ICard;

  const linkToDetailEntity = (el: ICard) => {
    return '/'.concat(el.type).concat('/').concat(String(el.id));
  };

  return (
    <div className={classes.flex_wrapper}>
      <div className={classes.card_description}>
        <img src={data.image} alt={data.name} className={classes.image} />
        <p>{data.description}</p>
      </div>

      <div className={classes.flex_column}>
        {data.type === CardType.CHARACHTERS ? (
          <section>
            <h3>Comics</h3>
            {data.comics?.map((el) => (
              <Link className={classes.link} to={linkToDetailEntity(el)}>
                {el.name}
              </Link>
            ))}
          </section>
        ) : (
          <section>
            <h3>Characters</h3>
            {data.characters?.map((el) => (
              <Link className={classes.link} to={linkToDetailEntity(el)}>
                {el.name}
              </Link>
            ))}
          </section>
        )}

        {data.type === CardType.SERIES ? (
          <section>
            <h3>Comics</h3>
            {data.comics?.map((el) => (
              <Link className={classes.link} to={linkToDetailEntity(el)}>
                {el.name}
              </Link>
            ))}
          </section>
        ) : (
          <section>
            <h3>Series</h3>
            {data.series?.map((el) => (
              <Link className={classes.link} to={linkToDetailEntity(el)}>
                {el.name}
              </Link>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};

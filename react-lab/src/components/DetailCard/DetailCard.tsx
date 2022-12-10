import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Dependecies, ICard } from 'types/card';
import { CardType } from 'types/cardType';
import { observer } from 'mobx-react-lite';

import classes from './DetailCard.module.scss';

interface IDetailCardProps {
  data?: ICard;
}

export const DetailCard: FC<IDetailCardProps> = observer(({ data }) => {
  const linkToDetailEntity = (el: Dependecies) => {
    return '/'.concat(`${el.type}`).concat('/').concat(`${el.id}`);
  };

  return data ? (
    <div className={classes.flex_wrapper}>
      <div className={classes.card_description}>
        <img src={data.image} alt={data.name} className={classes.image} />
        <p>{data.description}</p>
      </div>

      <div className={classes.flex_column}>
        {data?.type === CardType.CHARACTERS ? (
          <section>
            <h3>Comics</h3>
            <ul>
              {data.comics?.map((el) => (
                <li key={el.name}>
                  <Link className={classes.link} to={linkToDetailEntity(el)}>
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
                <li key={el.name}>
                  <Link className={classes.link} to={linkToDetailEntity(el)}>
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
                <li key={el.name}>
                  <Link className={classes.link} to={linkToDetailEntity(el)}>
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
                <li key={el.name}>
                  <Link className={classes.link} to={linkToDetailEntity(el)}>
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

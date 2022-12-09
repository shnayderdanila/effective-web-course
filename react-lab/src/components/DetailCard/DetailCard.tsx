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
    return '/'.concat('/').concat(String(el.name));
  };

  console.log(data);

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
            {data.comics?.map((el) => (
              <Link className={classes.link} to={linkToDetailEntity(el)}>
                {el.name}
              </Link>
            ))}
          </section>
        ) : (
          <section>
            <h3>Characters</h3>
            {data?.characters?.map((el) => (
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
  ) : (
    <></>
  );
});

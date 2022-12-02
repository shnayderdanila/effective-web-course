import React, { FC } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ICard } from "types/card";
import { CardType } from "types/cardType";

import classes from './DetailCard.module.scss';

export const DetailCard:FC = () => {
    
    const data = useLoaderData() as ICard;

    return (
        <div>

            <div>
                <img src={data.image} alt="" />
                <p>{data.description}</p>
            </div>

            <section>
                <h3>{data.type}</h3>
                {
                    data.type === CardType.CHARACHTERS 
                    ? 
                    data.comics?.map((el) => <Link to={'/'+el.type+'/'+el.id}/> )  
                    :
                    data.series?.map((el) => <Link to={'/'+el.type+'/'+el.id}/> )
                }
            </section>

        </div>
    );
} 
import React from "react";
import type { UserCardProps as Props } from "../../types/user";
import "./UserCard.scss";

export const UserCard: React.FC<Props> = ({
  name,
  gender,
  avatarUrl,
  city,
  country,
  email,
}) => {
  return (
    <div className="page">
      <div className="card">
        <img
          className="card__avatar"
          src={avatarUrl}
          alt={`${name}'s avatar`}
        />
        <span className="card__name">
          <h2>{name}</h2>
        </span>
        <div className="card__info">
          <div className="card__gender">
            <span>Gender:</span>
            <span>{gender}</span>
          </div>
          <div className="card__location">
            <span>Location:</span>
            <span>{city}, {country}</span>
          </div>
          <div className="card__email">
            <span>Email:</span>
            <span>{email}</span>
          </div>
          </div>
        </div>
      </div>
  );
};

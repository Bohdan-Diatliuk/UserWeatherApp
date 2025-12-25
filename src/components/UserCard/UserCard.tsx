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
        <div className="card__avatar">
          <img src={avatarUrl} alt={`${name}'s avatar`} />
        </div>
        <span className="card__name">
          <h2>{name}ф</h2>
        </span>
        <div className="card__info">
          <p>Gender: {gender}</p>
          <p>
            Location: {city}, {country}
          </p>
          <p>Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

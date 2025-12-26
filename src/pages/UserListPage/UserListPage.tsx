import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, clearUsers } from "../../store/usersSlice";
import type { RootState, AppDispatch } from "../../store";
import { UserList } from "../../components/UserList/UserList";
import "./UserListPage.scss";

export const UserListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(clearUsers());
    dispatch(loadUsers());
  };

  if (loading) {
    return (
      <div className="user-list-page">
        <div className="loading">
          <div className="loading__spinner"></div>
          <p className="loading__text">Loading users...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="user-list-page">
        <div className="error">
          <h2 className="error__title">Oops! Something went wrong</h2>
          <p className="error__message">{error}</p>
          <button 
            className="error__button"
            onClick={() => dispatch(loadUsers())}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-list-page">
      <header className="user-list-page__header">
        <h1 className="user-list-page__title">Users List</h1>
        <p className="user-list-page__subtitle">
          Browse through {users.length} users and their weather information
        </p>
        <button 
          className="refresh-button"
          onClick={handleRefresh}
        >
          Load New Users
        </button>
      </header>

      <div className="user-list-page__grid">
        {users.map(user => (
          <UserList key={user.id} user={user} />
        ))}
      </div>

      {users.length === 0 && (
        <div className="empty-state">
          <h2 className="empty-state__title">No users found</h2>
          <p className="empty-state__message">
            There are no users to display at the moment.
          </p>
        </div>
      )}
    </div>
  );
};
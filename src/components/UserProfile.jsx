import React from 'react';
import './UserProfile.css';

function UserProfile() {
  // Mock user data (to be replaced with database fetch later)
  const user = {
    username: 'JohnDoe',
    email: 'john@example.com',
    bio: 'Avid buyer and seller on Ibutika Marketplace!',
    joined: 'January 2025',
  };

  return (
    <div className="user-profile">
      <h2>{user.username}'s Profile</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
      <p><strong>Joined:</strong> {user.joined}</p>
    </div>
  );
}

export default UserProfile;
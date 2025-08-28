import React from 'react';
import PostCard from '../PostCard';
import profilePosts from '../../data/profilePosts.json';

const ProfilePosts = () => {
  return (
    <div className="space-y-4">
      {profilePosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ProfilePosts;
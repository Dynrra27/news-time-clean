import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import SidebarLeft from './sidebar/SidebarLeft';
import FeedContent from './feed/FeedContent';
import SidebarRight from './sidebar/SidebarRight';
import ProfileContent from './profile/ProfileContent';
import JobSearchPage from './empleos/JobSearchPage';
import JobDetailsPage from './empleos/JobDetailsPage';
import CommentModal from './CommentModal';
import postsData from '../data/posts.json';

const AppLayout = () => {
    const [posts, setPosts] = useState(postsData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postToComment, setPostToComment] = useState(null);

    const openCommentModal = (post) => {
        setPostToComment(post);
        setIsModalOpen(true);
    };

    const closeCommentModal = () => {
        setIsModalOpen(false);
        setPostToComment(null);
    };

    const handleNewComment = (postId, commentText) => {
        setPosts(prevPosts =>
            prevPosts.map(post => {
                if (post.id === postId) {
                    const newComment = {
                        id: Date.now(),
                        userName: "Usuario Actual", 
                        userAvatar: "/src/assets/person/user.jpg",
                        text: commentText,
                        timeAgo: "Hace un momento"
                    };
                    return {
                        ...post,
                        comments: [...(post.comments || []), newComment],
                        commentsCount: post.commentsCount + 1
                    };
                }
                return post;
            })
        );
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="flex max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8">
                <SidebarLeft />
                <main className="flex-1 w-2/4 px-0 md:px-4">
                    <Routes>
                        <Route path="/" element={<FeedContent posts={posts} openCommentModal={openCommentModal} />} />
                        <Route path="/profile/*" element={<ProfileContent />} />
                        <Route path="/jobs" element={<JobSearchPage />} />
                        <Route path="/jobs/:id" element={<JobDetailsPage />} />
                    </Routes>
                </main>
                <SidebarRight />
            </div>
            {isModalOpen && postToComment && (
                <CommentModal
                    isOpen={isModalOpen}
                    onClose={closeCommentModal}
                    post={postToComment}
                    onComment={handleNewComment}
                />
            )}
        </div>
    );
};

export default AppLayout;
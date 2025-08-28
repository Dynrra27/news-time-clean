import React from 'react';
import ShareBox from '../ShareBox';
import PostCard from '../PostCard';
import stories from '../../data/stories.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FeedContent = ({ posts, openCommentModal }) => {
    return (
        <div className="flex-1 w-full px-0 md:px-4">
            <div className="stories-container bg-white shadow-md rounded-lg p-4 mb-4 h-48">
                <h3 className="text-xl font-bold mb-4">Historias</h3>
            </div>
            <ShareBox />
            <div className="post-list">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} openCommentModal={openCommentModal} />
                ))}
            </div>
        </div>
    );
};

export default FeedContent;
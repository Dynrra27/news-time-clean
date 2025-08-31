import React, { useState } from 'react';
import ShareBox from '../ShareBox';
import PostCard from '../PostCard';
import initialStories from '../../data/stories.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FeedContent = ({ posts, openCommentModal, openCreatePostModal, openCreateStoryModal }) => {
    const [stories, setStories] = useState(initialStories);

    const handleStoryClick = (id) => {
        setStories(prevStories => {
            const updatedStories = prevStories.map(story =>
                story.id === id ? { ...story, isViewed: true } : story
            );
            const viewedStories = updatedStories.filter(story => story.isViewed);
            const unviewedStories = updatedStories.filter(story => !story.isViewed);
            return [...unviewedStories, ...viewedStories];
        });
    };

    return (
        <div className="flex-1 w-full px-0 md:px-4">
            <div className="stories-container bg-white shadow-md rounded-lg p-4 mb-4">
                <h3 className="text-xl font-bold mb-4">Historias</h3>
                <div className="flex space-x-4 overflow-x-auto pb-2">
                    <div 
                        className="flex-shrink-0 text-center cursor-pointer"
                        onClick={() => openCreateStoryModal()}
                    >
                        <div className="w-24 h-32 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-300">
                            <i className="fas fa-plus text-2xl text-gray-500"></i>
                        </div>
                        <p className="text-xs mt-1 text-gray-600">Añadir historia</p>
                    </div>
                    {stories.map(story => (
                        <div key={story.id} 
                             className={`relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 ${story.isViewed ? 'border-gray-400' : 'border-blue-600'}`}
                             onClick={() => handleStoryClick(story.id)}
                        >
                            <img src={story.img} alt={`Historia de ${story.username}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black opacity-30"></div>
                            <span className="absolute bottom-2 left-2 text-white text-xs font-semibold">{story.username}</span>
                        </div>
                    ))}
                </div>
            </div>

            <ShareBox openModal={openCreatePostModal} />

            <div className="post-list">
                {posts.map(post => (
                    <PostCard key={post.id} post={post} openModal={openCommentModal} />
                ))}
            </div>
        </div>
    );
};

export default FeedContent;
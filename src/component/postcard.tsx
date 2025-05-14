import React from 'react';
import { ChatCentered, DotsThree } from "phosphor-react";

interface PostCardProps {
  avatarUrl: string;
  username: string;
  timeAgo: string;
  content: string;
  commentCount: number;
  emoji: string;
}

const PostCard: React.FC<PostCardProps> = ({
  avatarUrl,
  username,
  timeAgo,
  content,
  commentCount,
  emoji
}) => {
  return (
    <div className="postcard">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="avatar">
            <img src={avatarUrl} alt="avatar" />
          </div>
          <div>
            <p className="text-regular font-medium text-text-light">{username}</p>
            <p className="text-base font-medium text-text-lighter">{timeAgo}</p>
          </div>
        </div>
        <div className="btn-icon">
          <DotsThree size={32} color="#C5C7CA" />
        </div>
      </div>

      <div className="flex rounded-lg bg-[#191920] py-4 px-7 gap-4 mt-5">
        <div className="w-12 h-12 max-h-12 max-w-12 min-w-12 min-h-12 rounded-full justify-center items-center flex bg-card-bg text-large">
          <span>{emoji}</span>
        </div>
        <p className="text-regular text-text-lighter">{content}</p>
      </div>

      <div className="flex gap-2 mt-4 items-center">
        <ChatCentered size={26} color="#7F8084" />
        <p className="text-base font-medium text-text-lighter">{commentCount} comments</p>
      </div>
    </div>
  );
};

export default PostCard;

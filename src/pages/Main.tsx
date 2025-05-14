import CreatePostCard from "../component/createPostCard";
import PostCard from "../component/postcard";

interface PostData {
    avatarUrl: string;
    username: string;
    timeAgo: string;
    content: string;
    commentCount: number;
    emoji: string;
}

const posts: PostData[] = [
    {
        avatarUrl: "https://avatar.iran.liara.run/public/boy?username=28brana@gmail.com",
        username: "Theresa Webb",
        timeAgo: "5min ago",
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        commentCount: 24,
        emoji:'👍',
    },
    {
        avatarUrl: "https://avatar.iran.liara.run/public/boy?username=example2@gmail.com",
        username: "John Doe",
        timeAgo: "10min ago",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        commentCount: 10,
        emoji:'👋',
    },
    {
        avatarUrl: "https://avatar.iran.liara.run/public/boy?username=example3@gmail.com",
        username: "Jane Smith",
        timeAgo: "15min ago",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        commentCount: 8,
        emoji:'😔',
    }
];

const Main: React.FC = () => {
    return (
        <div className="container mx-auto lg:max-w-3xl py-16">
            <div>
                <p className="text-text-light text-largest">Hello Jane</p>
                <p className="text-regular mt-3 text-text-lighter">How are you doing today? Would you like to share something with the community 🤗</p>
            </div>
            <div className="mt-10 flex flex-col gap-4">
                <CreatePostCard />
                {posts.map((post, index) => (
                    <PostCard
                        key={index}
                        avatarUrl={post.avatarUrl}
                        username={post.username}
                        timeAgo={post.timeAgo}
                        content={post.content}
                        commentCount={post.commentCount}
                        emoji={post.emoji}
                    />
                ))}
            </div>
        </div>
    )
}
export default Main;
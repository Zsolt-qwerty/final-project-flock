"use client";
import { useState, useEffect } from "react";
import EventCarousel from "../components/Events/EventsCarousel";
import styles from "./SingleHub.module.css";

interface Post {
    post_id: string;
    written_text: string;
    comments: string[]; // Add comments array to each post
}

export default function SingleHub() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostContent, setNewPostContent] = useState("");
    const [newComment, setNewComment] = useState(""); // For managing new comment input

    // Fetch posts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts?interest_id=1');
                const fetchedPosts = await response.json();
                setPosts(
                    Array.isArray(fetchedPosts)
                        ? fetchedPosts.map(post => ({
                            ...post,
                            comments: Array.isArray(post.comments) ? post.comments : [],
                        }))
                        : []
                );
            } catch (error) {
                console.error("Failed to fetch posts:", error);
                setPosts([]);
            }
        };
        fetchPosts();
    }, []);

    // Add new post
    const handleAddPost = () => {
        if (newPostTitle.trim() && newPostContent.trim()) {
            const newPost: Post = {
                post_id: (posts.length + 1).toString(),
                written_text: newPostContent,
                comments: [],
            };
            setPosts([newPost, ...posts]);
            setNewPostTitle("");
            setNewPostContent("");
        }
    };

    // Add new comment to a post
    const handleAddComment = (postId: string, comment: string) => {
        setPosts(
            posts.map((post) =>
                post.post_id === postId
                    ? { ...post, comments: [...post.comments, comment] }
                    : post
            )
        );
        setNewComment(""); // Reset the new comment input field
    };

    return (
        <div>
            <h1 className={styles.Header}>Forum Board</h1>
            <div className={styles.ForumContainer}>
                <div className={styles.ForumBoard}>
                    {posts.map((post) => (
                        <div key={post.post_id} className={styles.Post}>
                            {/* <h2>{post.title}</h2> */}
                            <p>{post.written_text}</p>

                            {/* Comments Section */}
                            <div className={styles.CommentsSection}>
                                <h3>Comments:</h3>
                                {post.comments.length > 0 ? (
                                    post.comments.map((comment, index) => (
                                        <p key={`${post.post_id}-${index}`} className={styles.CommentName}>
                                            - {comment}
                                        </p>
                                    ))
                                ) : (
                                    <p>No comments yet.</p>
                                )}

                                {/* Comment input for each post */}
                                <input
                                    type="text"
                                    value={newComment}
                                    placeholder="Write a comment..."
                                    onChange={(e) => setNewComment(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && newComment.trim()) {
                                            handleAddComment(post.post_id, newComment.trim());
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Create Post Section */}
                <div className={styles.PostCreator}>
                    <h2>Create a Post</h2>
                    <input
                        type="text"
                        placeholder="Post title"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Write your post..."
                        rows={4}
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                    />
                    <button onClick={handleAddPost}>Post</button>
                </div>
            </div>
            <EventCarousel />
        </div>
    );
}
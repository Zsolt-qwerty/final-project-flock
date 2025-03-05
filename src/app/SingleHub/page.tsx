"use client";
import { useState, useEffect } from "react";
import EventCarousel from "../components/Events/EventsCarousel";
import styles from "./SingleHub.module.css";

interface Post {
    id: number;
    title: string;
    content: string;
    comments: string[];
};

export default function SingleHub() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPostTitle, setNewPostTitle] = useState("");
    const [newPostContent, setNewPostContent] = useState("");

    useEffect(() => {
        // Fetch posts from the API
        const fetchPosts = async () => {
            const response = await fetch('/api/posts?interest_id=1');
            console.log(response);
            if (response.ok) {
                const fetchedPosts: Post[] = await response.json();
                setPosts(fetchedPosts);
            } else {
                console.error('Error fetching posts:', response.statusText);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1 className={styles.Header}>Forum Board</h1>
            <div className={styles.ForumContainer}>
                <div className={styles.ForumBoard}>
                    {/* Display Posts */}
                    {posts.map((post) => (
                        <div key={post.id} className={styles.Post}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            {/* Comments Section */}
                            <div className={styles.CommentsSection}>
                                <h3>Comments:</h3>
                                {post.comments.map((comment, index) => (
                                    <p key={index} className={styles.CommentName}>
                                        - {comment}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <EventCarousel />
            </div>
        </div>
    );
}
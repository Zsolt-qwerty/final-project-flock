//This file defines a React component called SingleHub. Its role is to serve as the page component for the /SingleHub route. This file defines a React component called SingleHub.
// Its role is to serve as the page component for the /SingleHub route.

// Post Creation – Users can create new discussion threads.
// Commenting – Users can reply to posts.
// Data Storage – Store posts and comments(When you have added the database element)

"use client";
import { useState } from "react";
// import "./forum.css"; // Import CSS file
import EventCarousel from "../components/Events/EventsCarousel";
import styles from "./SingleHub.module.css";

interface Post {
  id: number;
  title: string;
  content: string;
  comments: string[];
}

export default function SingleHub() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  // Add new post
  const handleAddPost = () => {
    if (newPostTitle.trim() && newPostContent.trim()) {
      const newPost: Post = {
        id: posts.length + 1,
        title: newPostTitle,
        content: newPostContent,
        comments: [],
      };
      setPosts([newPost, ...posts]);
      setNewPostTitle("");
      setNewPostContent("");
    }
  };

  // Add new comment
  const handleAddComment = (postId: number, comment: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div>
      <h1 className={styles.Header}>Forum Board</h1>
       <div className={styles.ForumContainer}>
        <div className={styles.ForumBoard}>
        {/* Display Posts */}
        {posts.map((post) => (
          <div key={post.id} className="post">
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
              <input
                type="text"
                placeholder="Write a comment..."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && e.currentTarget.value.trim()) {
                    handleAddComment(post.id, e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
              />
            </div>
          </div>
        ))}
        {/* Create Post */}
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
        <div className={styles.EventCarousel}></div>
      </div>
      <EventCarousel />
    </div>
    </div>
  );
}

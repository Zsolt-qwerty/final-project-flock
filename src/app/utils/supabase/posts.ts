import { createClient } from './server';

interface Post {
    post_id: string;
    written_text: string;
};

// See all comments filtered by interest
export async function getPostsByInterest(interest_id: string): Promise<Post[]> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("user_post").select('*').eq("interest_id", parseInt(interest_id));
    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
    return data || [];
};

// //Add a new post to a Hub / interest
// export async function addNewPostToHub({ profile_id, interest_id, comment }) {
//     const supabase = await createClient();
//     //profile_id will be the currently logged in user state
//     //interest id will be the current interest state
//     //comment will be a string passed as a prop from the 'add comment' component
// };


// //Add a new comment to an event
// export async function addNewPostToEvent(params: type) {
//     const supabase = await createClient();
// };


// //Add a reply to a comment
// export async function replyToComment(params: type) {
//     const supabase = await createClient();
// };


// //Delete your own comment
// export async function releteComment(params: type) {
//     const supabase = await createClient();
// };
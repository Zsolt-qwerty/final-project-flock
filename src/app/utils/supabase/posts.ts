import { createClient } from './server';

interface Post {
    post_id: string;
    written_text: string;
};

// See all comments filtered by interest
export async function getPostsByInterest(interest_id: string): Promise<Post[]> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("user_posts").select('*').eq("interest_id", parseInt(interest_id));
    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
    return data || [];
};

interface NewPost {
    user_id: string;
    interest_id: number;
    post_title: string
    post_text: string;
};


// //Add a new post to a Hub / interest
export async function addNewPostToHub({ user_id, interest_id, post_text, post_title }: NewPost): Promise<Post | null> {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase
            .from('user_posts')
            .insert({
                user_id: user_id,
                interest_id: interest_id,
                post_text: post_text,
                post_title: post_title
            })
            .select()
            .single();

        if (error) {
            console.error("Error adding new post", error);
            return null;
        }
        return data;
    }
    catch (error) {
        console.error("Unexpected error adding new post", error);
        return null
    }
    //profile_id will be the currently logged in user state
    //interest id will be the current interest state
    //comment will be a string passed as a prop from the 'add comment' component
};




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
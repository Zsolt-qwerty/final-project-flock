import { getPostsByInterest, addNewPostToHub } from '../../utils/supabase/posts';
import { NextResponse } from 'next/server';

// export async function GET(request: Request) {
//     return NextResponse.json({ message: "API is working" });
// }
//Wasn't working because no API between the Client and Server side
//API route to fetch posts by interests
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const interest_id = searchParams.get("interest_id");

    if (!interest_id) {
        return NextResponse.json({ error: "Invalid interest_id" }, { status: 400 });
    }

    try {
        const posts = await getPostsByInterest(interest_id);
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}

interface PostRequest {
    user_id: string;
    interest_id: number;
    post_title: string;
    post_text: string;
}

export async function POST(request: Request) {
    try {
        // Get and validate request body
        const body: PostRequest = await request.json();

        // Basic validation
        if (!body.user_id || !body.interest_id || !body.post_text || !body.post_title) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        if (body.post_text.length < 1 || body.post_text.length > 1000) {
            return NextResponse.json(
                { error: 'Post text must be between 1 and 1000 characters' },
                { status: 400 }
            );
        }

        const newPost = await addNewPostToHub({
            user_id: body.user_id,
            interest_id: Number(body.interest_id),
            post_title: body.post_title,
            post_text: body.post_text
        });

        if (!newPost) {
            return NextResponse.json(
                { error: 'Failed to create post' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                message: 'Post created successfully',
                post: newPost
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Post creation error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
};
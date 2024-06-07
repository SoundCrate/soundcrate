import { connectMongoDB } from '@/lib/mongodb';
import User from '@/lib/models/user';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const username = params.username;

    await connectMongoDB();
    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json(
        { error: "Requested user does not exist" },
        { status: 404 }
      );
    } else {
      
      // const following = await User.find({ _id: { $in: followingIds } });
      const followingIds = user.following;
      const following = await User.aggregate([
        {
          $match: {
            _id: { $in: followingIds }
          }
        },
        {
          $lookup: {
            from: 'reviews',
            localField: '_id',
            foreignField: 'user',
            as: 'userReviews'
          }
        },
        {
          $addFields: {
            reviewCount: { $size: { "$ifNull": [ "$userReviews", [] ] } }
          }
        },
        {
          $project: {
            _id: 1,
            username: 1,
            imageUrl: 1,
            reviewCount: 1
          }
        }
      ]).exec();


      return NextResponse.json(
        { following: following },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error fetching followers:', error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
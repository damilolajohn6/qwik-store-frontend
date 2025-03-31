import User from "@/lib/models/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { userId } = auth();
    console.log("Auth data:", { userId });

    if (!userId) {
      console.log("No userId, returning 401");
      return new NextResponse(JSON.stringify({ message: "Unauthorized" }), {
        status: 401,
      });
    }

    console.log("Connecting to DB for user:", userId);
    await connectToDB();

    // Look for existing user
    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      try {
        user = new User({ clerkId: userId });
        await user.save();
        console.log("New user created:", userId);
      } catch (err) {
        // Handle duplicate key error (E11000)
        if (err instanceof Error && (err as any).code === 11000) {
          console.log("Duplicate key detected, fetching existing user:", userId);
          user = await User.findOne({ clerkId: userId }); // Retry finding the user
        } else {
          throw err; // Re-throw other errors
        }
      }
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.error("[users_GET]", err);
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error", error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500 }
    );
  }
};
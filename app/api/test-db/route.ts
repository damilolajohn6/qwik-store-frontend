import { connectToDB } from "@/lib/mongoDB";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        await connectToDB();
        return NextResponse.json({ message: "Database connection test successful" }, { status: 200 });
    } catch (err) {
        console.error("Test DB error:", err);
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        return new NextResponse(
            JSON.stringify({ message: "Database connection failed", error: errorMessage }),
            { status: 500 }
        );
    }
};
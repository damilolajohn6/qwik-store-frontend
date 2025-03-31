import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://qwik-fashion-admin.netlify.app/api";

export const GET = async (req: NextRequest) => {
    const { pathname } = new URL(req.url);
    const endpoint = pathname.replace("/api/proxy", ""); // Extract endpoint (e.g., /collections, /products)

    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            console.error(`Proxy fetch failed: ${response.status} ${response.statusText}`);
            return new NextResponse(
                JSON.stringify({ error: `${response.status} ${response.statusText}` }),
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Proxy error:", error);
        return new NextResponse(
            JSON.stringify({ error: "Failed to fetch data" }),
            { status: 500 }
        );
    }
};
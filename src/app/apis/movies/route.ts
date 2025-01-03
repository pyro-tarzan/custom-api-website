import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch("https://the-one-api.dev/v2/movie",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_BEARER}`
        }
    });

    const { docs } = await res.json();
    if (docs) {
        return NextResponse.json({docs});
    }
}
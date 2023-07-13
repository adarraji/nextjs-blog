import { NextResponse } from "next/server"

export const GET = async (request) => {
    //fetch

    return new NextResponse("It works!", { status: 200 })

}
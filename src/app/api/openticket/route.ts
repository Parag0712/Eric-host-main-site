import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const {
            deptid,
            subject,
            message,
            name,
            email,
            contactid
        } = await request.json();

        const response = await axios.get(`${process.env.API_BASE_URL}`, {
            params: {
                action: 'OpenTicket',
                responsetype: 'json',
                deptid,
                subject,
                message,
                name,
                email,
                contactid
            }
        });

        // Extract necessary data from the response
        const responseData = response.data;

        // Return the response data
        return NextResponse.json(responseData);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}
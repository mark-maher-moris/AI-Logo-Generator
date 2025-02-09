import { AIIdeasGenerator } from "@/config/AiModel";
import { NextResponse } from "next/server";

export  async function POST(req){
    const {prompt}= await req.json();
    try{
        const  result  = await AIIdeasGenerator.sendMessage(prompt);
        return NextResponse.json(JSON.parse(result.response.text()),{status:200})
    }catch(e){
        return NextResponse.json({error:"Something went wrong"},{status:500})
    }
}
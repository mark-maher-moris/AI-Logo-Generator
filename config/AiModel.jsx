const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  

    export const AIIdeasGenerator = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type App Logo Generate a text prompt to create Logo for Logo title/Brand name : AI Studio App with decription: app for AI tools that help creators and refering to prompt: Create a vibrant and playful 3D logo for an app. The design should feature bold, colorful text with a glossy finish. Include an icon relevant to the apps theme above the text and a background that complements the concept, such as a bright outdoor scene with natural elements like green grass, a blue sky, and fluffy white clouds. Use a rounded square frame with a yellow border and subtle shadows for a polished and inviting look. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I understand. Since I can't directly generate images yet, here are some logo ideas and a consolidated prompt to get you started.\n\nFirst, regarding the image generation capability, this is enabled only for early testers.\n\nHere are a few logo idea suggestions, formatted as requested, along with a text prompt optimized for image generation:\n\n**Logo Idea Suggestions (JSON Format):**\n\n```json\n{\n  \"logo_ideas\": [\n    {\"id\": 1, \"description\": \"AI Brain Playground\"},\n    {\"id\": 2, \"description\": \"Creative AI Spark\"},\n    {\"id\": 3, \"description\": \"AI Palette Burst\"},\n    {\"id\": 4, \"description\": \"Studio AI Genius\"},\n    {\"id\": 5, \"description\": \"AI Creative Cubes\"}\n  ]\n}\n```\n\n**Consolidated Text Prompt for Image Generation:**\n\n\"Create a vibrant and playful 3D logo for an 'AI Studio App'. The design should feature bold, colorful, slightly rounded text with a glossy, futuristic finish, conveying creativity and intelligence. Include an icon *above* the text that represents AI tools for creators, such as a stylized neural network, a paint palette with circuit patterns, or abstract shapes representing algorithms. The background should complement the concept with gradient background with bright, colors like blue, purple and pink. Optionally, subtle geometric shapes or lines could add a futuristic feel. The overall feel should be welcoming and modern, designed to attract creative users. Use a rounded square frame with a subtle border and shadows for a polished look.\"\n"},
          ],
        },
      ],
    });
  

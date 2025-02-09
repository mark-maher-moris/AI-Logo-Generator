import React, { useEffect, useState } from "react";
import HeadingDescription from "./HeadingDescription";
import axios from "axios";
import Prompt from "@/app/_data/Prompt";

export default function LogoIdea({onHandleInputChange , formData }) {
  const [logoIdeas, setLogoIdeas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption , setSelectedOption] = useState(null);

  useEffect(() => {
    generateLogoDesignIdea();
  }, [formData]); // Ensure the effect runs when formData changes

  const generateLogoDesignIdea = async () => {
    setLoading(true);
    const PROMPT = Prompt.DESIGN_IDEA_PROMPT
      .replace('{logoTitle}', formData?.title)
      .replace('{logoDesc}', formData?.description)
      .replace('{logoPrompt}', formData?.design.prompt)
      .replace('{logoType}', formData.design.title);

    try {
      const result = await axios.post('/api/ai-design-ideas', {
        prompt: PROMPT
      });
      setLogoIdeas(result.data.ideas);
      
    } catch (error) {
      console.error("Error fetching logo ideas:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HeadingDescription title={"Pick the best logo idea"} description={""} />
      {loading && <p>Loading...</p>}
      {logoIdeas && logoIdeas.map((idea, index) => (
        <div key={index}>
          <p className="text-lg font-semibold" onClick={()=>{
            onHandleInputChange(idea);
            setSelectedOption(idea)}}>{idea}</p>
        </div>
      ))}
    </div>
  );
}
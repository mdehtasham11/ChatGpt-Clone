import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
  baseURL: "https://api.x.ai/v1",
});

export async function getChat(prompt) {
  try {
    const completion = await openai.chat.completions.create({
      model: "grok-beta",
      messages: [
        {
          role: "system",
          content:
            "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",
        },
        { role: "user", content: prompt },
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching response:", error);
    return "There was an error processing your request.";
  }
}


export function formatIntoParagraphs(text) {
    
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
    
    const paragraphs = [];
    for (let i = 0; i < sentences.length; i += 3) {
        const paragraph = sentences.slice(i, i + 3).join(" ").trim();
        if (paragraph) paragraphs.push(`<p>${paragraph}</p>`);
    }
  
    return paragraphs.join("");
}

export function formatCodeIntoBlocks(text, language = 'plaintext') {
    
    const escapedText = text.replace(/&/g, '&amp;')
                            .replace(/</g, '&lt;')
                            .replace(/>/g, '&gt;')
                            .replace(/"/g, '&quot;')
                            .replace(/'/g, '&#039;');

    return `<pre><code class="${language}">${escapedText}</code></pre>`;
}

export function formatContent(text) {
  
    if (text.includes("```") || text.startsWith("function") || text.includes("console.log")) {
        return formatCodeIntoBlocks(text);
    } else {
        return formatIntoParagraphs(text);
    }
}
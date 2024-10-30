
# Alpha-AI

Alpha-AI is a **free-to-use library** that allows you to generate responses to any kind of question without the need for an API key.

## Features

- **No API Key Required**: Easily get answers to your queries without the hassle of API keys.
- **Simple Integration**: Designed to be user-friendly with straightforward usage instructions.


## Installation

You can install the library using npm or yarn:

```bash
npm install alpha-ai
```

or

```bash
yarn add alpha-ai
```

## Setting Up Your Project

### Step 1: Create a package.json File

First, navigate to your project directory and run the following command to initialize your project and create a `package.json` file:

```bash
npm init -y
```

This command will create a basic `package.json` file. You need to modify it to set the module type.

### Step 2: Update package.json

Open the generated `package.json` file and add `"type": "module"` to enable ES module syntax. Your `package.json` should look like this:

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "A free-to-use library for generating responses without an API key.",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "alpha-ai": "^1.0.0" // Adjust version as needed
  },
  "keywords": ["AI", "generative", "library"],
  "author": "Chandan Polai",
  "license": "MIT"
}
```

### Step 3: Use the Library in Your Code

You can now use the Alpha-AI library with the ES module syntax. Here's a common JavaScript example:

```javascript
import generateContent from "alpha-ai";

const prompt = "What are the benefits of using generative AI?";
generateContent(prompt)
  .then(result => {
    console.log("Generated Content:", result.response.text());
  })
  .catch(err => {
    console.error("Error:", err);
  });
```

## React Example

To use Alpha-AI in a React application, you can create a component like this:

```javascript
import React, { useState } from 'react';
import generateContent from 'alpha-ai'; // Adjust the path accordingly

const ContentGeneratorPage = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateContent(prompt);

    if (result) {
      setOutput(result.response.text());
    } else {
      setOutput('Error generating content.');
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">AI Content Generator</h1>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        className="border p-2 mb-2 w-full"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Content'}
      </button>
      {output && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Output:</h2>
          <p className="border p-2">{output}</p>
        </div>
      )}
    </div>
  );
};

export default ContentGeneratorPage;
```

## GitHub Repository

You can find the source code and further information in the [GitHub repository](https://github.com/ChandanPolai/alpha-ai-.git).


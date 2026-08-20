import { useState } from "react";
import {
  Sparkles,
  WandSparkles,
  Lightbulb,
  Copy,
  Check,
  X,
} from "lucide-react";
import "./AIContentAssist.css";

function AIContentAssist({ caption = "", onUseCaption, onClose }) {
  const [mode, setMode] = useState("caption");
  const [prompt, setPrompt] = useState(caption);
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    /*
      Connect your existing AI API here.

      Example:

      const response = await fetch("/api/ai/caption", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          mode,
        }),
      });

      const data = await response.json();
      setResult(data.result);
    */

    if (!prompt.trim()) return;

    // Do not create fake AI output.
    setResult("");
  };

  const handleCopy = async () => {
    if (!result) return;

    await navigator.clipboard.writeText(result);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const handleUse = () => {
    if (!result || !onUseCaption) return;

    onUseCaption(result);
  };

  return (
    <div className="ai-assist-overlay">
      <div className="ai-assist-panel">
        {/* Header */}

        <div className="ai-assist-header">
          <div className="ai-assist-heading">
            <div className="ai-assist-logo">
              <Sparkles size={18} />
            </div>

            <div>
              <h3>AI Content Assist</h3>

              <p>Create captions and discover content ideas.</p>
            </div>
          </div>

          {onClose && (
            <button
              type="button"
              className="ai-assist-close"
              onClick={onClose}
              aria-label="Close AI assistant"
            >
              <X size={17} />
            </button>
          )}
        </div>

        {/* Modes */}

        <div className="ai-assist-tabs">
          <button
            type="button"
            className={mode === "caption" ? "ai-tab active" : "ai-tab"}
            onClick={() => setMode("caption")}
          >
            <WandSparkles size={15} />
            AI Caption
          </button>

          <button
            type="button"
            className={mode === "ideas" ? "ai-tab active" : "ai-tab"}
            onClick={() => setMode("ideas")}
          >
            <Lightbulb size={15} />
            Content Ideas
          </button>
        </div>

        {/* Input */}

        <div className="ai-assist-body">
          <label>
            {mode === "caption"
              ? "Describe your post"
              : "What do you want ideas about?"}
          </label>

          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            placeholder={
              mode === "caption"
                ? "Example: A product launch post for Instagram..."
                : "Example: Give me content ideas for a fashion brand..."
            }
            rows={5}
          />

          <div className="ai-assist-input-footer">
            <span>{prompt.length} characters</span>

            <button
              type="button"
              className="ai-generate-button"
              onClick={handleGenerate}
              disabled={!prompt.trim()}
            >
              <Sparkles size={15} />
              {mode === "caption" ? "Generate Caption" : "Generate Ideas"}
            </button>
          </div>
        </div>

        {/* Result */}

        {result && (
          <div className="ai-result">
            <div className="ai-result-header">
              <span>
                {mode === "caption" ? "Generated Caption" : "Content Ideas"}
              </span>

              <button type="button" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check size={13} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    Copy
                  </>
                )}
              </button>
            </div>

            <div className="ai-result-content">{result}</div>

            {mode === "caption" && (
              <button
                type="button"
                className="ai-use-button"
                onClick={handleUse}
              >
                Use this caption
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIContentAssist;

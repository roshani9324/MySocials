import React, { useState } from "react";
import {
  ArrowLeft,
  Save,
  Send,
  Sparkles,
  FileText,
  CalendarClock,
  CheckCircle2,
} from "lucide-react";

import PlatformSelector from "./components/PlatformSelector";
import PostEditor from "./components/PostEditor";
import PostPreview from "./components/PostPreview";
import SchedulePicker from "./components/SchedulePicker";

import AIContentAssist from "../../components/AIContentAssist/AIContentAssist";

import "./CreatePost.css";

const CreatePost = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  // AI Assistant
  const [showAIAssist, setShowAIAssist] = useState(false);

  // Main post content
  const [postContent, setPostContent] = useState("");

  const [scheduleData, setScheduleData] = useState({
    date: "",
    time: "",
  });

  const [activeAction, setActiveAction] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  /* =========================================================
     SAVE DRAFT
  ========================================================== */

  const handleSaveDraft = () => {
    setActiveAction("draft");

    setTimeout(() => {
      setActiveAction(null);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    }, 500);
  };

  /* =========================================================
     PUBLISH
  ========================================================== */

  const handlePublish = () => {
    setActiveAction("publish");

    setTimeout(() => {
      setActiveAction(null);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    }, 500);
  };

  /* =========================================================
     SCHEDULE
  ========================================================== */

  const handleSchedule = () => {
    setActiveAction("schedule");

    setTimeout(() => {
      setActiveAction(null);
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2500);
    }, 500);
  };

  /* =========================================================
     OPEN AI ASSISTANT
  ========================================================== */

  const handleOpenAIAssist = () => {
    setShowAIAssist(true);
  };

  /* =========================================================
     CLOSE AI ASSISTANT
  ========================================================== */

  const handleCloseAIAssist = () => {
    setShowAIAssist(false);
  };

  /* =========================================================
     USE AI GENERATED CAPTION
  ========================================================== */

  const handleUseAICaption = (generatedCaption) => {
    if (!generatedCaption) return;

    setPostContent(generatedCaption);

    setShowAIAssist(false);
  };

  return (
    <div className="create-post-page">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="create-post-glow create-post-glow-one" />
      <div className="create-post-glow create-post-glow-two" />

      <div className="create-post-container">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header className="create-post-header">
          <div className="create-post-heading">
            <button
              type="button"
              className="create-back-button"
              onClick={() => window.history.back()}
              aria-label="Go back"
            >
              <ArrowLeft size={17} />
            </button>

            <div>
              <div className="create-heading-label">
                <span className="create-heading-dot" />
                CONTENT STUDIO
              </div>

              <h1>Create Post</h1>

              <p>
                Create, customize and publish content across your connected
                social platforms.
              </p>
            </div>
          </div>

          <div className="create-header-actions">
            <button
              type="button"
              className="create-draft-button"
              onClick={handleSaveDraft}
              disabled={activeAction !== null}
            >
              <Save size={15} />

              {activeAction === "draft" ? "Saving..." : "Save Draft"}
            </button>

            <button
              type="button"
              className="create-publish-button"
              onClick={handlePublish}
              disabled={activeAction !== null}
            >
              <Send size={15} />

              {activeAction === "publish" ? "Publishing..." : "Publish"}
            </button>
          </div>
        </header>

        {/* =====================================================
            SUCCESS MESSAGE
        ====================================================== */}

        {showSuccess && (
          <div className="create-success-message">
            <div className="create-success-icon">
              <CheckCircle2 size={15} />
            </div>

            <div>
              <strong>Action completed successfully</strong>

              <span>Your changes have been saved.</span>
            </div>
          </div>
        )}

        {/* =====================================================
            MAIN WORKSPACE
        ====================================================== */}

        <main className="create-post-workspace">
          {/* ===================================================
              LEFT COLUMN
          ==================================================== */}

          <section className="create-editor-column">
            {/* =================================================
                PLATFORM SELECTOR
            ================================================== */}

            <div className="create-card">
              <div className="create-card-header">
                <div className="create-card-title-wrapper">
                  <div className="create-card-icon">
                    <Sparkles size={16} />
                  </div>

                  <div>
                    <span className="create-card-eyebrow">DISTRIBUTION</span>

                    <h2>Select Platforms</h2>

                    <p>Choose where you want to publish this post.</p>
                  </div>
                </div>

                {selectedPlatforms.length > 0 && (
                  <span className="create-selection-count">
                    {selectedPlatforms.length} selected
                  </span>
                )}
              </div>

              <div className="create-card-body">
                <PlatformSelector
                  selectedPlatforms={selectedPlatforms}
                  setSelectedPlatforms={setSelectedPlatforms}
                />
              </div>
            </div>

            {/* =================================================
                POST EDITOR
            ================================================== */}

            <div className="create-card create-editor-card">
              <div className="create-card-header">
                <div className="create-card-title-wrapper">
                  <div className="create-card-icon">
                    <FileText size={16} />
                  </div>

                  <div>
                    <span className="create-card-eyebrow">COMPOSE</span>

                    <h2>Create your post</h2>

                    <p>Write your content and add media to your post.</p>
                  </div>
                </div>

                <span className="create-editor-status">
                  {postContent.length}/2,200
                </span>
              </div>

              {/* =================================================
                  AI ASSIST BUTTON
              ================================================== */}

              <div className="create-ai-toolbar">
                <div className="create-ai-toolbar-info">
                  <Sparkles size={14} />

                  <div>
                    <strong>Need help with your content?</strong>

                    <span>Use AI to create captions or get content ideas.</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="create-ai-assist-button"
                  onClick={handleOpenAIAssist}
                >
                  <Sparkles size={14} />
                  AI Assist
                </button>
              </div>

              <div className="create-card-body create-editor-body">
                <PostEditor
                  postContent={postContent}
                  setPostContent={setPostContent}
                  onAIAssist={() => setShowAIAssist(true)}
                />
              </div>
            </div>

            {/* =================================================
                SCHEDULE
            ================================================== */}

            <div className="create-card">
              <div className="create-card-header">
                <div className="create-card-title-wrapper">
                  <div className="create-card-icon">
                    <CalendarClock size={16} />
                  </div>

                  <div>
                    <span className="create-card-eyebrow">PUBLISHING</span>

                    <h2>Schedule Post</h2>

                    <p>Choose when you want your post to go live.</p>
                  </div>
                </div>
              </div>

              <div className="create-card-body">
                <SchedulePicker
                  scheduleData={scheduleData}
                  setScheduleData={setScheduleData}
                />
              </div>

              <div className="create-schedule-footer">
                <div className="create-schedule-info">
                  <CalendarClock size={14} />

                  <span>Schedule your post for a specific date and time.</span>
                </div>

                <button
                  type="button"
                  className="create-schedule-button"
                  onClick={handleSchedule}
                  disabled={activeAction !== null}
                >
                  <CalendarClock size={15} />

                  {activeAction === "schedule"
                    ? "Scheduling..."
                    : "Schedule Post"}
                </button>
              </div>
            </div>
          </section>

          {/* ===================================================
              RIGHT COLUMN
          ==================================================== */}

          <aside className="create-preview-column">
            <div className="create-preview-sticky">
              {/* =================================================
                  LIVE PREVIEW
              ================================================== */}

              <div className="create-preview-card">
                <div className="create-preview-header">
                  <div>
                    <span className="create-card-eyebrow">LIVE PREVIEW</span>

                    <h2>Post Preview</h2>

                    <p>See how your content will look before publishing.</p>
                  </div>

                  <span className="create-live-indicator">
                    <span />
                    Live
                  </span>
                </div>

                <div className="create-preview-content">
                  <PostPreview
                    selectedPlatforms={selectedPlatforms}
                    postContent={postContent}
                  />
                </div>
              </div>

              {/* =================================================
                  PUBLISHING SUMMARY
              ================================================== */}

              <div className="create-summary-card">
                <div className="create-summary-header">
                  <span>POST SUMMARY</span>
                </div>

                <div className="create-summary-row">
                  <span>Platforms</span>

                  <strong>
                    {selectedPlatforms.length > 0
                      ? selectedPlatforms.length
                      : "None"}
                  </strong>
                </div>

                <div className="create-summary-row">
                  <span>Content</span>

                  <strong>
                    {postContent.trim().length > 0 ? "Added" : "Empty"}
                  </strong>
                </div>

                <div className="create-summary-row">
                  <span>Schedule</span>

                  <strong>
                    {scheduleData.date && scheduleData.time
                      ? "Scheduled"
                      : "Now"}
                  </strong>
                </div>

                <div className="create-summary-divider" />

                <div className="create-summary-status">
                  <span className="create-status-dot" />

                  <div>
                    <strong>Ready to publish</strong>

                    <p>Review your content and publish when you're ready.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>

      {/* =======================================================
          AI CONTENT ASSIST MODAL
      ======================================================== */}

      {showAIAssist && (
        <AIContentAssist
          caption={postContent}
          onClose={handleCloseAIAssist}
          onUseCaption={handleUseAICaption}
        />
      )}
    </div>
  );
};

export default CreatePost;

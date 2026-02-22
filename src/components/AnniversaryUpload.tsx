'use client';

import { useState, useRef, DragEvent, ChangeEvent, FormEvent } from 'react';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const MAX_FILES = 10;

export default function AnniversaryUpload() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadMessage, setUploadMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Testimonial form state
  const [testimonialName, setTestimonialName] = useState('');
  const [testimonialYear, setTestimonialYear] = useState('');
  const [testimonialRole, setTestimonialRole] = useState('');
  const [testimonialMessage, setTestimonialMessage] = useState('');
  const [testimonialConsent, setTestimonialConsent] = useState(false);
  const [testimonialStatus, setTestimonialStatus] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFiles = (fileList: FileList) => {
    setUploadMessage(null);
    const files = Array.from(fileList);
    const errors: string[] = [];
    const newFiles: File[] = [];
    const newPreviews: string[] = [];

    files.forEach(file => {
      if (selectedFiles.length + newFiles.length >= MAX_FILES) {
        errors.push(`Maximum ${MAX_FILES} files allowed.`);
        return;
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        errors.push(`"${file.name}" is not a supported image format.`);
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`"${file.name}" exceeds the 5MB size limit.`);
        return;
      }
      if (selectedFiles.some(f => f.name === file.name && f.size === file.size)) {
        errors.push(`"${file.name}" is already selected.`);
        return;
      }
      newFiles.push(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        newPreviews.push(e.target?.result as string);
        if (newPreviews.length === newFiles.length) {
          setPreviews(prev => [...prev, ...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    });

    setSelectedFiles(prev => [...prev, ...newFiles]);
    if (errors.length > 0) {
      setUploadMessage({ text: errors.join(' '), type: 'error' });
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => prev.filter((_, i) => i !== index));
    setUploadMessage(null);
  };

  const clearFiles = () => {
    setSelectedFiles([]);
    setPreviews([]);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setUploadMessage(null);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      setUploadMessage({ text: 'Please select at least one photo.', type: 'error' });
      return;
    }
    setIsUploading(true);
    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsUploading(false);
    setUploadMessage({ text: "Photos submitted successfully! We'll review and add them to our gallery.", type: 'success' });
    clearFiles();
  };

  const handleDragOver = (e: DragEvent) => { e.preventDefault(); e.stopPropagation(); setIsDragOver(true); };
  const handleDragLeave = (e: DragEvent) => { e.preventDefault(); e.stopPropagation(); setIsDragOver(false); };
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleTestimonialSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setTestimonialStatus({ text: 'Thank you for sharing your story! We appreciate you being part of our 14-year journey.', type: 'success' });
    setTestimonialName('');
    setTestimonialYear('');
    setTestimonialRole('');
    setTestimonialMessage('');
    setTestimonialConsent(false);
  };

  return (
    <>
      {/* Photo Upload Section */}
      <section className="container upload-section" id="share">
        <h2>Share Your Memory</h2>
        <p>Have photos from a past Colorado Law Classic? Upload them here to be featured in our anniversary celebration.</p>

        <div
          className={`upload-zone${isDragOver ? ' drag-over' : ''}`}
          role="button"
          tabIndex={0}
          aria-label="Upload photos by dragging and dropping or clicking to browse"
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInputRef.current?.click(); } }}
          onDragEnter={handleDragOver}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="upload-zone-content">
            <div className="upload-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="17 8 12 3 7 8"/>
                <line x1="12" y1="3" x2="12" y2="15"/>
              </svg>
            </div>
            <p className="upload-text">Drag &amp; drop photos here</p>
            <p className="upload-subtext">or click to browse</p>
            <p className="upload-formats">Accepts: JPG, PNG, GIF, WebP (max 5MB each)</p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/gif,image/webp"
            multiple
            hidden
            onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.files && handleFiles(e.target.files)}
          />
        </div>

        {previews.length > 0 && (
          <div className="upload-preview" aria-live="polite">
            {previews.map((src, i) => (
              <div key={i} className="preview-item">
                <img src={src} alt={selectedFiles[i]?.name || 'Preview'} />
                <span className="preview-name">{selectedFiles[i]?.name.length > 20 ? selectedFiles[i].name.slice(0, 17) + '...' : selectedFiles[i]?.name}</span>
                <button className="preview-remove" aria-label={`Remove ${selectedFiles[i]?.name}`} onClick={() => removeFile(i)}>&times;</button>
              </div>
            ))}
          </div>
        )}

        {selectedFiles.length > 0 && (
          <div className="upload-actions">
            <button type="button" className="btn" onClick={handleUpload} disabled={isUploading}>
              {isUploading ? 'Uploading...' : 'Upload Photos'}
            </button>
            <button type="button" className="btn btn-outline" onClick={clearFiles}>Clear All</button>
          </div>
        )}

        {uploadMessage && (
          <div className={`upload-message ${uploadMessage.type}`} aria-live="polite">
            {uploadMessage.text}
          </div>
        )}
      </section>

      {/* Testimonial Section */}
      <section className="container testimonial-section" id="testimonial">
        <h2>Share Your Story</h2>
        <p>Tell us what the Colorado Law Classic means to you.</p>

        <form className="testimonial-form" onSubmit={handleTestimonialSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="testimonial-name">Your Name <span className="required">*</span></label>
              <input type="text" id="testimonial-name" value={testimonialName} onChange={e => setTestimonialName(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="testimonial-year">Year(s) Attended</label>
              <input type="text" id="testimonial-year" value={testimonialYear} onChange={e => setTestimonialYear(e.target.value)} placeholder="e.g., 2018, 2022" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="testimonial-role">Your Connection to CLC</label>
            <select id="testimonial-role" value={testimonialRole} onChange={e => setTestimonialRole(e.target.value)}>
              <option value="">Select one...</option>
              <option value="player">Player</option>
              <option value="sponsor">Sponsor</option>
              <option value="supporter">Supporter</option>
              <option value="volunteer">Volunteer</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="testimonial-msg">Your Story <span className="required">*</span></label>
            <textarea id="testimonial-msg" rows={5} value={testimonialMessage} onChange={e => setTestimonialMessage(e.target.value)} required placeholder="Share your favorite memory or what the tournament means to you..." />
          </div>
          <div className="form-group form-checkbox">
            <input type="checkbox" id="testimonial-consent" checked={testimonialConsent} onChange={e => setTestimonialConsent(e.target.checked)} required />
            <label htmlFor="testimonial-consent">I consent to having my story shared on the Colorado Law Classic website <span className="required">*</span></label>
          </div>
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Your Story'}
          </button>
          {testimonialStatus && (
            <div className={`form-message ${testimonialStatus.type}`} aria-live="polite">
              {testimonialStatus.text}
            </div>
          )}
        </form>
      </section>
    </>
  );
}

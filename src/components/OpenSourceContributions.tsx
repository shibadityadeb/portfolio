import React, { useState } from 'react';

interface Contribution {
  title: string;
  description: string;
  url: string;
  repo: string;
}

interface Props {
  showGithubLink?: boolean;
}

const OpenSourceContributions: React.FC<Props> = ({ showGithubLink = false }) => {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const contributions: Contribution[] = [
    {
      title: "Adds interactive copy buttons to all code blocks displayed in the /docs routes and child pages.",
      description: "The feature enhances user experience by allowing readers to quickly copy code snippets with a single click.",
      url: "https://github.com/theatre-js/website/pull/23",
      repo: "theatre-js/website"
    },
    {
      title: "Copy to Clipboard button for <pre> tags in /concepts",
      description: "This PR adds a \"Copy to Clipboard\" button feature to all code blocks (<pre> tags) throughout the /concepts section and all its child routes on the webpack.js.org documentation site.",
      url: "https://github.com/webpack/webpack.js.org/pull/7701",
      repo: "webpack/webpack.js.org"
    }
  ];

  const copyToClipboard = async (url: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      
      setCopiedUrl(url);
      setTimeout(() => setCopiedUrl(null), 1200);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="open-source-section">
      <div className="open-source-container">
        <h3 className="open-source-title">Open Source Contributions</h3>
        
        <div className="contributions-table">
          <table>
            <thead>
              <tr>
                <th>PR Title</th>
                <th>Description</th>
                <th>Repository</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contributions.map((contribution, index) => (
                <tr key={index}>
                  <td className="pr-title">{contribution.title}</td>
                  <td className="pr-description">{contribution.description}</td>
                  <td className="pr-repo">
                    <a 
                      href={contribution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${contribution.repo} pull request`}
                    >
                      {contribution.repo}
                    </a>
                  </td>
                  <td className="pr-actions">
                    <a 
                      href={contribution.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                      aria-label="Open GitHub PR"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <button 
                      onClick={() => copyToClipboard(contribution.url)}
                      className="copy-btn"
                      aria-label="Copy URL"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                      </svg>
                      {copiedUrl === contribution.url && (
                        <span className="copy-tooltip">Copied!</span>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {showGithubLink && (
          <p className="github-profile-link">
            For more detailed info visit{' '}
            <a 
              href="https://github.com/shibadityadeb" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              my GitHub profile
            </a>
          </p>
        )}
      </div>
    </section>
  );
};

export default OpenSourceContributions;
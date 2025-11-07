
## Design
This CMDF static website using tailwinds css is based off  the design and functionality of https://therootsofmusic.org/. 

## Information Architecture
The information architecture for the CMDF website is located in documents/info_arch.md.

### Top-level links
- About
- Programs
- Support
- Community

### Top-level Branded buttons
- Donate
- Scholarships
- Dance

## Content
Content is generated from markdown documents in the documents folder.

## Visual Development
### Design Principles
Comprehensive design checklist in /documents/design-principles.md
Brand style guide in /documents/style-guide.md
When making visual (front-end, UI/UX) changes, always refer to these files for guidance

### Quick Visual Check
IMMEDIATELY after implementing any front-end change:

- Identify what changed - Review the modified components/pages
- Navigate to affected pages - Use mcp__playwright__browser_navigate to visit each changed view
- Verify design compliance - Compare against /documents/design-principles.md and /documents/style-guide.md
- Validate feature implementation - Ensure the change fulfills the user's specific request
- Check acceptance criteria - Review any provided markdown documents or requirements
- Capture evidence - Take full page screenshot at desktop viewport (1440px) of each changed view
- Check for errors - Run mcp__playwright__browser_console_messages
This verification ensures changes meet design standards and user requirements.

## Comprehensive Design Review
Invoke the @agent-design-review subagent for thorough design validation when:

- Completing significant UI/UX features
- Before finalizing PRs with visual changes
- Needing comprehensive accessibility and responsiveness testing
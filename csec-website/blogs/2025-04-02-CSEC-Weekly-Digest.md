
<style>
/* GLOBAL RESETS */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: #f7f7f7;
  color: #333;
}

/* HEADER STYLES */
header {
  background: #212121; 
  color: #fff;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header .title-section {
  display: flex;
  flex-direction: column;
}
header .title-section h1 {
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
}
header .title-section p {
  margin: 0.25rem 0 0;
  font-size: 1rem;
}
header img.logo {
  height: 60px;
  margin-left: 1rem;
}

/* ARTICLE CONTAINER (full-width article style) */
.article-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  /* No background, border, or shadow */
}

/* Headings inside the article */
.article-container h2 {
  color: #1c4587;
  margin-top: 1.5rem;
}
.article-container h3 {
  margin-top: 1.5rem;
}

/* TABLE CONTAINER FOR RESPONSIVE SCROLL */
.table-container {
  width: 100%;
  overflow-x: auto;
  margin: 1.5rem 0;
}
table {
  border-collapse: collapse;
  width: 100%;
  min-width: 800px;
  font-size: 0.9rem;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px 10px;
  vertical-align: top;
}
th {
  background-color: #f0f0f0;
}

/* KITTY + SPEECH BUBBLE */
.kitty-container {
  width: 220px;
  position: relative;
  margin: 2rem auto;
  text-align: center;
}
.kitty-container img {
  max-width: 100%;
  display: block;
}
.speech-bubble {
  position: absolute;
  top: 0;
  left: 100%;
  transform: translateX(10px);
  width: 160px;
  padding: 10px;
  background: #fff;
  border: 2px solid #1c4587;
  border-radius: 6px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
}
.speech-bubble::after {
  content: "";
  position: absolute;
  top: 40%;
  left: -10px;
  border-top: 10px solid transparent;
  border-right: 10px solid #fff;
  border-bottom: 10px solid transparent;
}

/* FOOTER */
footer {
  text-align: center;
  color: #666;
  font-size: 0.8rem;
  padding: 2rem;
}
</style>

<header>
  <div class="title-section">
    <h1>CSEC Cybersecurity Weekly Digest</h1>
    <p>Week of March 30 – April 5, 2025</p>
  </div>
  <img src="cseclogo.png" alt="CSEC Logo" class="logo" />
</header>

<div class="article-container">

**Date:** April 1, 2025  

## Weekly Bug Bounties & Platform Updates

OpenAI raised its bug bounty maximum from $20,000 to $100,000, effective late March, with bonuses for insecure direct object references (IDOR) ranging from $400 to $13,000 until April 30, 2025, as reported by [The Register](https://www.theregister.com/2025/03/30/infosec_news_in_brief/). This reflects a growing reliance on ethical hacking to safeguard AI systems, detailed on OpenAI’s security page.

Microsoft’s March 2025 Patch Tuesday, released March 11 and covered by [BleepingComputer](https://www.bleepingcomputer.com/news/microsoft/microsoft-march-2025-patch-tuesday-fixes-7-zero-days-57-flaws/), fixed 57 vulnerabilities, including seven zero-days and six critical remote code execution (RCE) flaws in Windows and Office products. With 23 elevation of privilege and 23 RCE vulnerabilities, including CVE-2025-24985 and CVE-2025-24993, these updates underscore proactive defense against active exploits.

## Notable Hacks & Breaches
This week spotlighted significant breaches impacting state and corporate entities.

- **Rhode Island Cyberattack:** A ransomware attack in December 2024 on the RIBridges system exposed personal and bank data of hundreds of thousands of residents, linked to the Brain Cipher group, as per [Tech.co](https://tech.co/news/data-breaches-updated-list). The system went offline December 13, 2024, disrupting operations, with Deloitte covering $5 million in response costs by February 2025 [HIPAA Journal](https://www.hipaajournal.com/rhode-island-ri-bridges-system-hack/).

- **X Data Leak:** Reported around April 1, 2025, a leak affected 201 million users, combining metadata from 2.8 billion profiles with 2023 breach emails, posted on BreachForums March 28 by ThinkingOne [Forbes](https://www.forbes.com/sites/daveywinder/2025/04/01/hacker-claims-to-have-leaked-200-million-x-user-data-records-for-free/). Exposed data—user IDs, screen names, locations—poses phishing risks, with allegations of an insider job during layoffs post-xAI acquisition. X has not confirmed, and no passwords were compromised [Computing](https://www.computing.co.uk/news/2025/security/x-leaks-data-on-2-8-billion-profiles/).

## Valuation Impact Analysis
Financial impacts are assessed using total expenditure for Rhode Island and annualized revenue for X, comparing pre- and post-hack figures to determine monetary effects.

<div class="table-container">
<table>
  <tr>
    <th>Entity</th>
    <th>Metric</th>
    <th>Pre-Hack</th>
    <th>Post-Hack (April 1, 2025)</th>
    <th>Financial Context</th>
  </tr>
  <tr>
    <td>Rhode Island (State)</td>
    <td>Total Expenditure</td>
    <td>$13.7 billion (2025)</td>
    <td>$13.7 billion (2025)</td>
    <td>$5M cost (0.036%) covered; strain on $3.1B benefits, no direct loss.</td>
  </tr>
  <tr>
    <td>X (under xAI)</td>
    <td>Annualized Revenue</td>
    <td>$100 million (2024)</td>
    <td>$100 million (2024)</td>
    <td>No immediate loss; future revenue/val ($33B) risk from trust erosion unclear.</td>
  </tr>
</table>
</div>

## Critical Vulnerabilities (CVEs)
March 2025 vulnerabilities from [Strobes](https://strobes.co/blog/top-cves-vulnerabilities-of-march-2025/) remain relevant, with a Next.js issue highlighted this week:

<div class="table-container">
<table>
  <tr>
    <th>Rank</th>
    <th>CVE ID</th>
    <th>Description</th>
    <th>Severity</th>
    <th>CVSS Score</th>
    <th>Affected Products</th>
    <th>Vulnerability Type</th>
    <th>Exploitability Details</th>
    <th>Mitigation Steps</th>
    <th>Why Top Ranked</th>
  </tr>
  <tr>
    <td>1</td>
    <td>CVE-2025-24985</td>
    <td>Remote Code Execution in Windows Fast FAT File System Driver</td>
    <td>Important</td>
    <td>7.8</td>
    <td>Microsoft Windows (all supported versions)</td>
    <td>RCE</td>
    <td>Local, Low complexity, User interaction required, Actively exploited zero-day</td>
    <td>Apply March 2025 Patch, Restrict VHD mounting, EDR</td>
    <td>Zero-day, Widespread impact, Ease of exploitation</td>
  </tr>
  <tr>
    <td>2</td>
    <td>CVE-2025-24993</td>
    <td>Remote Code Execution in Windows NTFS</td>
    <td>Important</td>
    <td>7.8</td>
    <td>Microsoft Windows (all supported versions)</td>
    <td>RCE (heap-based overflow)</td>
    <td>Remote, Moderate complexity, User interaction required, Actively exploited zero-day</td>
    <td>Apply March 2025 Patch, Network segmentation</td>
    <td>Zero-day, Significant damage potential</td>
  </tr>
  <tr>
    <td>4</td>
    <td>CVE-2025-29927</td>
    <td>Next.js Middleware Authentication Bypass</td>
    <td>Critical</td>
    <td>9.1</td>
    <td>Next.js (12.3.5 to 15.2.3)</td>
    <td>Auth Bypass</td>
    <td>Remote, Low complexity, No privileges required, Actively exploited, PoC available</td>
    <td>Upgrade to 15.2.3/14.2.25, Filter x-middleware-subrequest header, WAF</td>
    <td>Critical severity, Web app exposure, Active exploits (discussed March 26–April 1)</td>
  </tr>
  <tr>
    <td>5</td>
    <td>CVE-2025-30066</td>
    <td>Embedded Malicious Code in tj-actions/changed-files GitHub Action</td>
    <td>High</td>
    <td>8.0–9.0*</td>
    <td>GitHub repos using tj-actions/changed-files</td>
    <td>Supply Chain</td>
    <td>Remote, Low complexity, No user interaction, Actively exploited, CISA KEV</td>
    <td>Update/remove action, Rotate credentials</td>
    <td>CISA KEV, Supply chain risk</td>
  </tr>
</table>
</div>

## Learning Resource of the Week
**TryHackMe** offers hands-on cybersecurity training, ideal for mastering vulnerabilities like those above. Rooms like “OWASP Top 10” and “Web Fundamentals” cover SQL injection, RCE, and auth bypasses, complementing bug bounty skills [TryHackMe](https://tryhackme.com/).

</div>

<div class="kitty-container">
  <img src="michi.png" alt="Cyber Kitty" />
  <div class="speech-bubble">
    <p>Stay safe out there, hackers!</p>
  </div>
</div>

<footer>
  &copy; 2025 CSEC | Cybersecurity Newsletter
</footer>

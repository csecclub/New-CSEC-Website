
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
  /*background: #fff;*/
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  border-radius: 6px;
}

/* Headings inside the article */
.article-container h2 {
  color: #1c4587;
  margin-top: 1.5rem;
}
.article-container h3 {
  margin-top: 1.0rem;
}

/* Lightweight typographic niceties */
.article-container p { line-height: 1.6; margin: 0.6rem 0; }
.article-container ul { margin: 0.6rem 0 0.6rem 1.2rem; }

/* TABLE CONTAINER FOR RESPONSIVE SCROLL */
.table-container {
  width: 100%;
  overflow-x: auto;
  margin: 1.5rem 0;
}
table {
  border-collapse: collapse;
  width: 100%;
  min-width: 600px;
  font-size: 0.95rem;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px 10px;
  vertical-align: top;
}
th {
  background-color: #f0f0f0;
  text-align: left;
}

/* FIGURE CAPTION */
.figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  text-align: center;
}
.figure img { max-width: 100%; height: auto; border-radius: 4px; }
.figure figcaption { font-size: 0.9rem; color: #666; margin-top: 0.4rem; }

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
  margin-top: 1rem;
}
</style>
</head>
<body>

<header>
  <div class="title-section">
    <h1>Comparative Analysis of Machine Learning Models for DDoS Attack Detection</h1>
    <p>Team Bytewise — The University of Texas at Arlington</p>
  </div>
  <!-- Replace with your club logo file name if desired -->
  <img src="cseclogo.png" alt="CSEC Logo" class="logo" />
</header>

<main class="article-container">


<p><strong>Authors:</strong> Jeremiah Pitts, Betim Hodza, Ilhan Gelle, Abinash Bastola</p>
<p><strong>Abstract:</strong> The global connectivity of the Internet demands robust network security to protect systems, making Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) crucial. Traditional IDS/IPS often struggle with real-time threat detection due to reliance on predefined rules and high false positives. Machine learning (ML) offers a promising solution by enabling real-time detection and classification of malicious traffic. This project evaluates ML models using the UNSW-NB15 dataset, applying preprocessing (feature selection, normalization, handling class imbalance) and comparing classifiers (Decision Tree, Random Forest, Extra Trees, XGBoost) using weighted F1 scores and accuracy to assess performance in detecting DDoS and other attacks.</p>

<h2>1. Introduction</h2>
<p>Denial of Service attacks can be fatal. Intrusion Detection Systems are crucial for defending networks but face challenges such as handling large volumes of packet data and detecting distributed attacks. Traditional IDS often result in false positives and struggle with zero-day attacks. Machine Learning offers a promising solution by enabling real-time network traffic analysis and improving detection accuracy without relying on predefined signatures. This study uses the UNSW-NB15 dataset to evaluate ML approaches for intrusion detection and DDoS detection.</p>

<h2>2. Problem Statement</h2>
<p>Using machine learning techniques to map network traffic to differentiate between malicious packets and attacks. The goal is not only to detect DDoS attacks, but also to classify the type of packet — enabling better prevention and response strategies.</p>

<h2>3. Dataset analysis</h2>
<p>The UNSW-NB15 dataset (Australian Centre for Cyber Security) mixes modern normal activities and synthetic contemporary attacks. The dataset includes nine attack categories (Fuzzers, Analysis, Backdoors, DDoS, Exploits, Generic, Reconnaissance, Shellcode, Worms). The training set has 82,332 records and the testing set has 175,341 records.</p>

<div class="figure">
  <figure>
    <img src="/ddosTection-images/confusion_matrix.png" alt="Confusion Matrix (Best Model: Extra Trees)"/>
    <figcaption>Figure 1: Sample Confusion Matrix from the Best-Performing Model (Extra Trees).</figcaption>
    
  </figure>
</div>

<h2>4. Data Preprocessing</h2> 
<ul>
  <li><strong>Column reduction:</strong> Remove unnecessary columns (e.g., id, label).</li>
  <li><strong>Numeric feature handling:</strong> Clamp outliers (above 95th percentile) and log-transform continuous features with many unique values.</li>
  <li><strong>Categorical features:</strong> KNN imputation for missing values, then one-hot encoding.</li>
  <li><strong>Balancing:</strong> SMOTE used to balance the training dataset.</li>
  <li><strong>Feature scaling:</strong> RobustScaler applied to avoid bias toward majority class.</li>
</ul>

<h2>5. Data Model Analysis & Implementation</h2>
<p>Four machine learning models were evaluated: Decision Tree, Random Forest, Extra Trees, and XGBoost. Models were compared using weighted F1 scores and accuracy. Extra Trees performed best by weighted F1; Random Forest achieved strong accuracy performance.</p>

<h3>5.1 Random Forest</h3>
<p>Random Forest combines outputs of multiple decision trees to improve generalization and reduce overfitting.</p>

<h3>5.2 Extra Trees</h3>
<p>Extra Trees builds many decision trees using random split points, improving robustness and training speed (especially with GPU acceleration).</p>

<h3>5.3 Choosing the Best Model</h3>
<p>Weighted F1 scores observed:</p>
<ul>
  <li>Decision Tree: 0.6744</li>
  <li>Random Forest: 0.7196</li>
  <li>Extra Trees: 0.7207 (best by weighted F1)</li>
  <li>XGBoost: 0.7156</li>
</ul>

<h2>6. Experimental Results</h2>

<div class="table-container">
<table>
  <caption><strong>Table 1: Dataset and Preprocessing Summary</strong></caption>
  <thead>
    <tr><th>Description</th><th>Value</th></tr>
  </thead>
  <tbody>
    <tr><td>Original Training Set Shape</td><td>(82,332, 45)</td></tr>
    <tr><td>Original Testing Set Shape</td><td>(175,341, 45)</td></tr>
    <tr><td>Processed Training Set Shape</td><td>(82,332, 54)</td></tr>
    <tr><td>Processed Testing Set Shape</td><td>(175,341, 54)</td></tr>
    <tr><td>Training Features Shape</td><td>(82,332, 53)</td></tr>
    <tr><td>Testing Features Shape</td><td>(175,341, 53)</td></tr>
    <tr><td>Resampled Training Features Shape</td><td>(370,000, 53)</td></tr>
    <tr><td>Resampled Training Target Distribution</td><td>37,000 per class (10 classes)</td></tr>
  </tbody>
</table>
</div>

<div class="table-container">
<table>
  <caption><strong>Table 2: Classifier Performance Comparison</strong></caption>
  <thead>
    <tr><th>Classifier</th><th>Accuracy</th><th>Weighted F1 Score</th></tr>
  </thead>
  <tbody>
    <tr><td>Decision Tree</td><td>0.6955</td><td>0.6744</td></tr>
    <tr><td>Random Forest</td><td>0.7404</td><td>0.7196</td></tr>
    <tr><td>Extra Trees</td><td>0.7299</td><td>0.7207</td></tr>
    <tr><td>XGBoost</td><td>0.7461</td><td>0.7156</td></tr>
  </tbody>
</table>
</div>

<div class="table-container">
<table>
  <caption><strong>Table 3: Best Parameters for Random Forest</strong></caption>
  <thead>
    <tr><th>Parameter</th><th>Value</th></tr>
  </thead>
  <tbody>
    <tr><td>class_weight</td><td>balanced</td></tr>
    <tr><td>max_depth</td><td>None</td></tr>
    <tr><td>min_samples_split</td><td>5</td></tr>
    <tr><td>n_estimators</td><td>200</td></tr>
  </tbody>
</table>
</div>


<div class="figure">
  <figure>
    <img src="/ddosTection-images/model_performance.png" alt="Model Performance Comparison" />
    <figcaption>Figure 2: Comparison of Model Performance Based on Accuracy and F1 Scores.</figcaption>
    
  </figure>
</div>

<h2>7. Methodology</h2>
<p>The methodology encompasses model training and live traffic monitoring.</p>

<h3>7.1 Model Training Pipeline</h3>
<ol>
  <li><strong>Data Preprocessing:</strong> Remove unnecessary columns, handle missing values, clamp and log-transform numerical features, one-hot encode categoricals.</li>
  <li><strong>Feature Scaling & Balancing:</strong> RobustScaler and SMOTE.</li>
  <li><strong>Hyperparameter Tuning:</strong> Grid search with stratified 5-fold cross-validation (Random Forest tuning displayed in a tuning matrix).</li>

 <div class="figure">
  <figure>
    <img src="/ddosTection-images/hyperparameter_tuning.png" alt="Random Forest Hyperparameter Tuning Results" />
    <figcaption>Figure 3: Hyperparameter Tuning Matrix for the Random Forest Classifier.</figcaption>
    
  </figure>
</div>
  <li><strong>Model Evaluation:</strong> Train and evaluate Decision Tree, Random Forest, Extra Trees, and XGBoost.</li>
</ol>

<h3>7.2 Live DDoS Monitoring and Prevention</h3>
<p>The live monitoring component deploys the best-trained model for real-time traffic analysis:</p>
<ul>
  <li><strong>Packet capture:</strong> PyShark captures live traffic on a specified interface.</li>
  <li><strong>Feature extraction & scaling:</strong> Key features are extracted and scaled using the same RobustScaler as training.</li>
  <li><strong>Detection:</strong> The model predicts on processed packets and flags suspicious IPs exceeding thresholds.</li>
  <li><strong>Prevention (optional):</strong> Flagged IPs can be automatically blocked (e.g., netsh on Windows or iptables on Linux).</li>
</ul>

<h2>8. Conclusion</h2>
<p>This study highlights the potential of machine learning in improving network security and packet identification. The Random Forest and Extra Trees models produced high performance (≈72% accuracy / weighted F1s ~0.72), demonstrating ML-driven approaches' benefits compared to signature-based IDS. As threats evolve, adaptive ML models are essential for real-time threat detection and safeguarding critical infrastructure.</p>

<h2>References</h2>
<ol>
  <li>A. Al-Qarni, “Cybersecurity in Healthcare: A Review of Recent Attacks,” International Journal of Advanced Computer Science and Applications, 2023. <a href="https://thesai.org/Downloads/Volume14No5/Paper_13-Cybersecurity_in_Healthcare_A_Review_of_Recent_Attacks.pdf">PDF</a>.</li>
  <li>S. Fathima, S. Devi, and M. Faizaanuddin, “Machine Learning for Network Security: A Comprehensive Survey,” ScienceDirect, 2023. <a href="https://www.sciencedirect.com/science/article/pii/S2665917423002477">Link</a>.</li>
  <li>IBM, “Random Forest,” IBM Think Topics, Oct. 2021. <a href="https://www.ibm.com/think/topics/randomforest">Link</a>.</li>
  <li>Khenwar and Nawal, “Challenges and Limitations of IDS: A Comprehensive Assessment and Future Perspectives,” ResearchGate, 2024. <a href="https://www.researchgate.net/publication/385000418_Challenges_and_Limitations_of_IDS_A_Comprehensive_Assessment_and_Future_Perspectives">Link</a>.</li>
  <li>UNSW-NB15 Dataset, Kaggle (accessed Feb. 2024). <a href="https://www.kaggle.com/datasets/mrwellsdavid/unsw-nb15/data">Kaggle</a>.</li>
  <li>NVIDIA, “What Is XGBoost?” NVIDIA Data Science Glossary, 2024. <a href="https://www.nvidia.com/en-us/glossary/xgboost/">Link</a>.</li>
  <li>D. Elreedy and A. F. Atiya, “Comprehensive Review of SMOTE-Based Techniques for Imbalanced Learning,” ACM Computing Surveys, 2023.</li>
</ol>

<h2>Acknowledgments</h2>
<p>Team Bytewise, students at The University of Texas at Arlington, conducted this research. We used SAS Viya for Learners 4 for data processing and analysis. Special thanks to Professor Nadra Guizani (nadra.guizani@uta.edu).</p>

<h2>Contact Information</h2>
<ul>
  <li>Jeremiah Pitts — jnp2934@mavs.uta.edu (ORCID)</li>
  <li>Ilhan Gelle — ilhan.gelle@mavs.uta.edu</li>
  <li>Betim Hozda — bxh8702@mavs.uta.edu</li>
  <li>Abinash Bastola — axb9775@mavs.uta.edu</li>
</ul>

<div class="kitty-container">
  <img src="michi.png" alt="Cyber Kitty" />
  <div class="speech-bubble">
    <p>Stay safe out there, hackers!</p>
  </div>
</div>

</main>

<footer>
  &copy; 2025 CSEC | Research Archive
</footer>

</body>
</html>

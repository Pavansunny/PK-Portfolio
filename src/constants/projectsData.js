export const projects = [
  {
    title: "Corporate Future Predictor",
    description: "Advanced analytics platform that predicts company performance using multi-source data analysis and machine learning models.",
    technologies: [
      "Python",
      "TensorFlow",
      "XGBoost",
      "SEC API",
      "Natural Language Processing",
      "Tableau",
      "React"
    ],
    details: [
      "Created a comprehensive data pipeline integrating financial reports, news, and patent databases",
      "Implemented topic modeling using BERTopic to identify emerging market trends",
      "Developed multi-input prediction models using LSTM and Transformer architectures",
      "Built interactive dashboards for tracking company insights and predictions",
      "Achieved 80% accuracy in predicting quarterly revenue trends"
    ],
    images: [
      {
        src: "https://placehold.co/600x400?text=Prediction+Dashboard",
        caption: "Company performance prediction dashboard"
      },
      {
        src: "https://placehold.co/600x400?text=Trend+Analysis",
        caption: "Market trend analysis and visualization"
      }
    ]
  },
  {
    title: "AI News Reporter Chatbot",
    description: "An intelligent chatbot that scrapes, summarizes, and delivers news in a conversational manner using advanced NLP and GPT models.",
    technologies: [
      "Python",
      "OpenAI GPT",
      "Rasa",
      "News API",
      "NLP",
      "Flask",
      "React"
    ],
    details: [
      "Developed a news aggregation system using News API and RSS feeds for real-time updates",
      "Implemented OpenAI's GPT for intelligent text summarization and natural conversations",
      "Integrated named entity recognition (NER) to highlight key topics and people",
      "Built sentiment analysis to provide emotional context for news stories",
      "Created a responsive web interface for seamless chat interactions"
    ],
    images: [
      {
        src: "https://placehold.co/600x400?text=News+Chatbot+Interface",
        caption: "Interactive chatbot interface with news summaries"
      },
      {
        src: "https://placehold.co/600x400?text=News+Analysis",
        caption: "News analysis and sentiment visualization"
      }
    ]
  },
  {
    title: "Stock Market Predictor",
    description: "Real-time stock prediction widget leveraging sentiment analysis from X (formerly Twitter) and advanced machine learning models to forecast market trends.",
    technologies: [
      "Python",
      "TensorFlow",
      "Natural Language Processing",
      "React",
      "Twitter API",
      "Financial APIs",
      "Plotly"
    ],
    details: [
      "Implemented sentiment analysis using BERT for real-time tweet processing and market sentiment evaluation",
      "Developed time-series forecasting models (LSTM, ARIMA) for stock price prediction with 85% accuracy",
      "Created an interactive dashboard using Plotly for visualizing stock trends and sentiment analysis",
      "Integrated multiple data sources including Twitter API and financial market data for comprehensive analysis",
      "Built a responsive widget that can be embedded in any website with real-time updates"
    ],
    images: [
      {
        src: "https://placehold.co/600x400?text=Dashboard",
        caption: "Interactive dashboard showing real-time stock predictions and sentiment analysis"
      },
      {
        src: "https://placehold.co/600x400?text=Sentiment+Analysis",
        caption: "Sentiment analysis visualization for market trends"
      },
      {
        src: "https://placehold.co/600x400?text=Prediction+Model",
        caption: "Stock price prediction model performance"
      }
    ]
  },
  {
    title: "Lane Changing Intention Prediction",
    description: "Developed an adaptive framework for predicting lane changing behavior in autonomous vehicles using CNN and computer vision techniques. The research focused on improving vehicle safety and maneuvering through advanced lane detection algorithms.",
    technologies: [
      "OpenCV",
      "CNN",
      "Python",
      "Computer Vision",
      "Edge Detection",
      "Hough Transform"
    ],
    details: [
      "Implemented real-time edge detection using Canny algorithm with 5x5 Gaussian filter",
      "Developed lane tracking system using monocular camera and grayscale processing",
      "Created predictive models for lane departure warning",
      "Achieved response time of <100ms for real-time detection",
      "Published research in Advances in Smart Grid and Renewable Energy (ETAEERE 2020)"
    ],
    researchHighlights: [
      "Multi-stage algorithm optimized for real-time edge detection",
      "Innovative approach to lane curvature detection",
      "Integration with autonomous vehicle systems",
      "Focus on driver safety and obstacle avoidance"
    ],
    images: [
      {
        src: "/assets/images/LCP1.jpg",
        caption: "Radius of Curvature: 1575m, Offset: 0.31m"
      },
      {
        src: "/assets/images/LCP2.jpg",
        caption: "System Architecture and Implementation"
      }
    ],
    publication: {
      title: "A Unique Adaptive Framework for Predicting Lane Changing Intention Based on CNN",
      authors: ["K. Pavan", "M. Dhanaveera Teja", "A. Pravin", "T. Prem Jacob", "G. Nagarajan"],
      conference: "International Conference on Emerging Trends and Advances in Electrical Engineering and Renewable Energy (ETAEERE 2020)",
      doi: "10.1007/978-981-15-7511-2_58",
      publisher: "Springer",
      year: 2021
    }
  },
  {
    title: "LOAP (Location-based Office Activity Platform)",
    description: "Developed an innovative communication tool that facilitates 'chance scheduling' and improves workplace collaboration across different age groups. The tool focuses on creating spontaneous interactions while considering technological adaptability for various age groups.",
    technologies: [
      "Flutter",
      "Dart",
      "Figma",
      "Cross-platform Development"
    ],
    details: [
      "Implemented chat functionality for both private and group communications",
      "Developed an intelligent scheduling system that identifies free time slots",
      "Created an age-inclusive interface considering both younger (20-25) and older (35+) users",
      "Conducted longitudinal user studies to evaluate tool effectiveness",
      "Built using Flutter SDK for cross-platform compatibility"
    ],
    keyFeatures: [
      "Smart Calendar Integration",
      "Group Chat Rooms",
      "Private Messaging",
      "Age-Inclusive Design",
      "Meeting Scheduler"
    ],
    images: [
      {
        src: "/assets/images/LOAP1.jpg",
        caption: "Communication Tool Layout and Interface Design"
      }
    ],
    researchPaper: true,
    implementation: "Built using Flutter and Dart, with Figma for prototyping. Focused on cross-platform compatibility for iOS and Android."
  },
  {
    title: "Olympic Data Analytics",
    description: "Built a data pipeline on Microsoft Azure to ingest, transform, and analyze Olympic Games data. Utilized Azure Data Factory(ADF) for data orchestration and Azure Databricks for data processing with Apache Spark.",
    technologies: ["Azure Data Factory", "Azure Databricks", "Apache Spark", "SQL", "Power BI"],
    details: [
      "Utilized SQL queries in Azure Synapse Analytics",
      "Analyzed medal distribution patterns",
      "Created data visualizations with Power BI"
    ]
  },
  {
    title: "Retail Data Pipeline Project",
    description: "Designed and implemented a robust data pipeline using Apache Airflow. Set up an Airflow local environment with Astro CLI.",
    technologies: ["Apache Airflow", "Astro CLI", "Soda", "dbt", "GCP", "BigQuery"],
    details: [
      "Ran data quality checks using Soda",
      "Integrated dbt for data transformation",
      "Uploaded CSV files to Google Cloud Storage"
    ]
  }
]; 
import { FaPython, FaLinux } from 'react-icons/fa'
import { SiCplusplus, SiPytorch, SiMongodb, SiMysql } from 'react-icons/si'

const portfolio = {
  personal: {
    name: 'DAI Wenjun',
    firstName: 'Wenjun',
    lastName: 'DAI',
    position: 'AI & Data Engineer',
    tagline: 'MSc in AI & Business Analytics | Proficient in Python, C/C++, PyTorch | Passionate about building AI-powered solutions that bridge cutting-edge technology and real business value.',
    avatar: null,
    email: 'dwenjun0418@gmail.com',
    phone: '+852 8495 4189',
    location: 'Hongkong, China',
    linkedin: 'https://linkedin.com/in/winslow-dai-a58b22348',
    github: 'https://github.com/IR1SSS',
    resumePdf: '/resume.pdf',
  },

  tags: [
    'Python', 'C/C++', 'PyTorch', 'Transformer', 'SQL', 'Tableau', 'MongoDB', 'Deep Learning',
  ],

  about: {
    introduction: `Holding a Master's degree in Artificial Intelligence and Business Analytics from Lingnan University, with a strong foundation in Information and Computational Science from Sichuan Normal University, I am proficient in Python, C/C++ and frameworks such as PyTorch. During an internship at BOCOM International's Debt Capital Markets division, I enhanced internal analytical efficiency by 30% through data processing and visualisation, and authored investment reports to support asset allocation decisions. Whilst interning in product R&D at Yanzhiyang Technology, I led the development and debugging of core features, reducing user issues by 15%. I have independently completed multiple AI projects, ranging from lightweight vision Transformers and reinforcement learning-based game AI to knowledge distillation question-answering systems and intelligent parking management, possessing end-to-end capabilities spanning model design, training and fine-tuning, through to edge deployment. Skilled at leveraging cutting-edge LLMs (DeepSeek, ChatGPT) and AI programming assistants to accelerate development, and utilising agent tools to optimise daily document processing.`,
    education: [
      {
        school: 'Lingnan University',
        degree: 'MSc in Artificial Intelligence and Business Analytics',
        period: 'Sep 2025 - Jul 2026',
        courses: 'Business Data Management, Data Visualization, Big Data Analytics, Machine Learning for Business, Practical Application of Deep Learning',
      },
      {
        school: 'Sichuan Normal University',
        degree: 'BSc in Information and Computational Science',
        period: 'Sep 2020 - Jun 2025',
        courses: 'Data Structures, Software Engineering, Database Management, Discrete Mathematics, Operating Systems, Computer Organization Principles, Computer Networks',
      },
    ],
    highlights: [
      { title: 'AI & Deep Learning', description: 'Building end-to-end AI systems from model design and training to edge deployment with PyTorch, Transformer architectures, and knowledge distillation' },
      { title: 'Data Analytics & Visualization', description: 'Processing and visualizing large-scale data with Python, Tableau, and SQL to drive business insights and decision-making' },
      { title: 'Embedded & Systems Development', description: 'Developing and debugging C/C++ applications in Linux environments with cross-compilation tool-chains' },
      { title: 'Cross-Functional Collaboration', description: 'Bridging technical and business teams through clear communication, requirement analysis, and project delivery' },
    ],
  },

  skills: {
    technical: [
      { name: 'Python', level: 90, icon: FaPython },
      { name: 'C / C++', level: 85, icon: SiCplusplus },
      { name: 'PyTorch', level: 85, icon: SiPytorch },
      { name: 'SQL / MySQL', level: 80, icon: SiMysql },
      { name: 'MongoDB', level: 75, icon: SiMongodb },
      { name: 'Transformer / ViT', level: 80 },
      { name: 'YOLO / Object Detection', level: 80 },
      { name: 'Reinforcement Learning', level: 75 },
    ],
    business: [
      { name: 'Data Visualization', level: 85 },
      { name: 'Financial Analysis', level: 80 },
      { name: 'Investment Research', level: 80 },
      { name: 'Requirements Analysis', level: 85 },
      { name: 'Technical Documentation', level: 80 },
      { name: 'Cross-Functional Communication', level: 85 },
    ],
    tools: [
      { name: 'Tableau', level: 85 },
      { name: 'Linux / GCC', level: 80, icon: FaLinux },
      { name: 'Microsoft Office', level: 90 },
      { name: 'Neo4j / GraphRAG', level: 75 },
      { name: 'ONNX / TensorRT', level: 75 },
      { name: 'LLMs (DeepSeek, ChatGPT)', level: 85 },
    ],
  },

  projects: [
    {
      title: 'Lightweight Visual Transformer for Real-Time Object Detection',
      period: 'Mar 2026',
      type: 'Group Project',
      problem: 'Designing a lightweight Vision Transformer (ViT) for real-time object detection that balances high accuracy with constrained resources, targeting <50 MB model size and >30 FPS inference on devices like RTX 4060, while maintaining mAP@0.5 >= 0.75 on COCO.',
      data: 'COCO dataset for object detection benchmark, with diverse real-world images across multiple object categories for training and evaluation of the lightweight detection model.',
      approach: 'Built a MobileViT-based detection system combining CNN efficiency with Transformer attention. Integrated knowledge distillation to transfer knowledge from larger teachers to the compact student model. Supports flexible multi-backend deployment (PyTorch, ONNX, TensorRT) and provides unified configuration management for rapid experimentation.',
      outcome: 'Delivered a production-ready, lightweight detector meeting all performance targets. The system enables real-time, accurate detection on edge devices, with streamlined workflows for training, distillation, evaluation, and export to multiple inference engines — significantly lowering the barrier for deploying ViT-based models in resource-constrained environments.',
      contribution: 'Sole developer — designed the MobileViT-based architecture, implemented knowledge distillation pipeline, built multi-backend deployment support, and created unified configuration management system.',
      links: [],
    },
    {
      title: 'Q-Learning for "Piano Tiles"',
      period: 'Feb 2026',
      type: 'Individual Project',
      problem: 'Training a Q-learning agent for the dynamically generated "Piano Tiles" game within a large discrete state space (10x4 grid) and a strict 10-second time limit, requiring effective balance between exploration and exploitation to maximize the score.',
      data: 'Game state space of 10x4 grid representing tile positions, with discrete actions for tile selection. Reward function: +1 for black tiles, -10 for white tiles, designed to guide the agent toward correct gameplay.',
      approach: 'Built a complete reinforcement learning system with a well-designed reward function, epsilon-greedy strategy with decay (epsilon from 1.0 to 0.01), and decoupled Pygame environment. Supports manual play, AI play, training, evaluation, and one-click packaging into a standalone executable.',
      outcome: 'Successfully trained an AI that consistently achieves high scores within the time limit. The system provides adjustable training parameters, real-time logs, training curves, and a user-friendly executable that lets anyone experience the trained agent without a Python environment.',
      contribution: 'Sole developer — designed the reward function and epsilon-greedy strategy, built the decoupled Pygame environment, implemented the Q-learning training pipeline, and packaged the system as a standalone executable.',
      links: [],
    },
    {
      title: 'Automotive Knowledge Distillation System',
      period: 'Jan 2026',
      type: 'Group Project',
      problem: 'Distilling specialized automotive diagnostic knowledge from large teacher models (e.g., DeepSeek) and embedding it into a lightweight local Llama model while ensuring high accuracy, explainability, and full offline operability without compromising data privacy.',
      data: 'Structured Q&A dataset generated via teacher models covering automotive diagnostic scenarios. Neo4j knowledge graph constructed from distilled knowledge to enable GraphRAG-enhanced inference.',
      approach: 'Designed a three-stage automated pipeline that generates structured Q&A via teacher models, builds a Neo4j knowledge graph from distilled knowledge, and integrates GraphRAG with a local student model — enhancing inference precision and traceability. Modular API adapters allow seamless swapping of teacher/student models.',
      outcome: 'Delivered a fully local, high-precision car diagnostic QA system with explainable reasoning, eliminating cloud dependency and safeguarding sensitive data. The extensible architecture supports multiple model providers and is ready for future automotive knowledge expansion.',
      contribution: 'Sole developer — designed the three-stage pipeline, implemented teacher model Q&A generation, built the Neo4j knowledge graph, integrated GraphRAG with the local Llama model, and created modular API adapters.',
      links: [],
    },
    {
      title: 'Intelligent Campus Non-Motor Vehicle Parking Management System',
      period: 'Jun 2024',
      type: 'Capstone Project',
      problem: 'Campus non-motor vehicle parking was a key infrastructure challenge requiring automated identification and management through applied computer vision, replacing manual monitoring with an intelligent system.',
      data: 'Real-world surveillance footage from campus cameras, capturing complex scenes with bicycles, e-scooters, and other non-motor vehicles in varying conditions for model training and evaluation.',
      approach: 'Architected an AI-powered parking management system using YOLO (via Ultralytics) and PyTorch for object detection, fine-tuning state-of-the-art models to accurately detect, classify, and label non-motor vehicles. Integrated the trained model with a front-end interface for real-time video processing.',
      outcome: 'Delivered a fully functional prototype capable of processing video input and generating structured parking data, successfully automating the identification and management of non-motor vehicle parking on campus.',
      contribution: 'Led the end-to-end design and development — architected the system, implemented and fine-tuned the YOLO detection model, and engineered the full software pipeline integrating deep learning with the front-end interface.',
      links: [],
    },
  ],

  resume: {
    summary: 'AI and Data professional with a MSc in Artificial Intelligence and Business Analytics, proficient in Python, C/C++, and PyTorch. Experienced in building end-to-end AI systems — from lightweight Vision Transformers and reinforcement learning agents to knowledge distillation QA systems — with proven ability to translate data insights into business value through financial data processing and visualization.',
    experience: [
      {
        title: 'Debt Capital Markets Intern',
        company: 'BOCOM International Co Ltd, Hongkong',
        period: 'Jan 2026 - Mar 2026',
        description: [
          'Processed and standardized large-scale corporate financial data using Excel and Python, designing interactive dashboards that accelerated internal analysis efficiency by 30%',
          'Authored in-depth equity and fixed-income reports with valuation analyses, directly utilized by the investment team to support asset allocation decisions',
          'Consolidated macroeconomic forecasts and regional credit trends from Fitch Ratings 2026 Credit Outlook Conference into concise analytical summaries',
        ],
      },
      {
        title: 'Product R&D Intern',
        company: 'Yanzhiyang Technology Co Ltd, Chengdu',
        period: 'Nov 2024 - Feb 2025',
        description: [
          'Spearheaded the development of key functionalities for recorder products, implementing a visual upgrade progress bar and adapting hardware detection tools, reducing user-reported setup issues by 15%',
          'Utilized GCC cross-compilation tool-chain within Linux environment to develop, debug, and deploy C code, identifying and resolving a persistent screen flickering bug',
          'Participated in the full product development lifecycle, effectively collaborating with departments to clarify requirements and drive project completion',
        ],
      },
    ],
    education: [
      {
        school: 'Lingnan University',
        degree: 'MSc in AI & Business Analytics',
        period: 'Sep 2025 - Jul 2026',
      },
      {
        school: 'Sichuan Normal University',
        degree: 'BSc in Information & Computational Science',
        period: 'Sep 2020 - Jun 2025',
      },
    ],
    certifications: [
      'Languages: Mandarin (Native), English (Fluent), Cantonese (Elementary)',
    ],
  },
}

export default portfolio

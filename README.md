# AI-Agent

# 🛒 E-commerce AI Agent with LangGraph.js & MongoDB

   

**An intelligent e-commerce shopping assistant that demonstrates advanced AI agent architecture, full-stack development, and enterprise-grade database integration.**

***

## 🎯 Project Overview

This project showcases the development of a sophisticated **AI Agent** using modern agentic AI principles - not just a simple chatbot, but an intelligent system that autonomously thinks, acts, and adapts like a professional sales associate.

### **Key Achievements:**
- ✅ Built autonomous AI agent with multi-step reasoning capabilities
- ✅ Implemented vector-based semantic search with MongoDB Atlas
- ✅ Developed full-stack application with React frontend and Node.js backend
- ✅ Created intelligent fallback mechanisms and conversation state management
- ✅ Integrated multiple AI APIs (OpenAI, Google Gemini) with error handling

***

## 🚀 Technical Skills Demonstrated

### **Backend Development**
- **Node.js & Express.js** - RESTful API development
- **LangGraph.js** - Workflow orchestration and agent state management
- **MongoDB Atlas** - Vector search implementation and database design
- **OpenAI/Google AI APIs** - Large language model integration

### **Frontend Development**
- **React.js** - Component-based UI development
- **Modern JavaScript** - ES6+ features and async programming
- **Responsive Design** - Mobile-first approach

### **AI/ML Technologies**
- **Vector Embeddings** - Semantic search implementation
- **Agentic AI Architecture** - Autonomous decision-making systems
- **Conversational AI** - Context-aware dialogue management
- **Tool Integration** - Custom function calling and orchestration

### **Database & DevOps**
- **MongoDB Atlas** - NoSQL database management
- **Database Seeding** - Automated data generation and population
- **Environment Configuration** - Secure API key management
- **RESTful Architecture** - Clean API design patterns

***

## 🏗️ System Architecture

```
User Query → LangGraph Agent → Decision Engine → Vector Search/Direct Response → MongoDB Atlas → Response Generation
```

**Core Components:**
- **Intelligent Router**: Analyzes queries and selects appropriate tools
- **Vector Search Engine**: Semantic product discovery using embeddings
- **Conversation Memory**: Maintains context across multi-turn interactions
- **Fallback Mechanisms**: Robust error handling and alternative search strategies

***

## 💼 Business Impact & Features

### **Intelligent Decision Making**
- Autonomous tool selection based on user intent
- Context-aware responses with conversation memory
- Multi-step reasoning for complex queries

### **Advanced Search Capabilities**
- Vector semantic search for natural language queries
- Real-time inventory lookup and product recommendations
- Intelligent fallback from semantic to text-based search

### **Production-Ready Features**
- Thread-based conversation persistence
- Comprehensive error handling
- Scalable API design
- Mobile-responsive frontend

***

## 🛠️ API Endpoints

| Method | Endpoint | Functionality |
|--------|----------|---------------|
| `GET` | `/` | Health check and system status |
| `POST` | `/chat` | Initialize new conversation thread |
| `POST` | `/chat/:threadId` | Continue existing conversation |

***

## 🚦 Quick Start

### **Installation & Setup**
```bash
# Clone and install dependencies
git clone https://github.com/AI-agent/ecommerce-chat-helper
cd ecommerce-chat-helper/server && npm install
cd ../client && npm install

# Configure environment variables
GOOGLE_API_KEY=your_api_key
MONGODB_ATLAS_URI=your_connection_string

# Seed database and start services
npm run seed
npm run dev  # Backend on :8000
npm start    # Frontend on :3000
```

### **Testing the Agent**
```bash
# Start conversation
curl -X POST -H "Content-Type: application/json" \
  -d '{"message": "Do you have any dining tables?"}' \
  http://localhost:8000/chat

# Continue conversation
curl -X POST -H "Content-Type: application/json" \
  -d '{"message": "What about the price range?"}' \
  http://localhost:8000/chat/[threadId]
```

***

## 🎯 What Makes This "Agentic"?

Unlike traditional chatbots, this system demonstrates:

| Traditional Approach | **Agentic Architecture** |
|---------------------|-------------------------|
| Pre-programmed responses | **Dynamic decision making** |
| Static information | **Real-time database queries** |
| Single-turn interactions | **Multi-step autonomous actions** |
| No tool usage | **Custom tool integration** |
| Fixed failure modes | **Intelligent fallback strategies** |

***

## 🔧 Technical Implementation Highlights

- **Vector Search**: Implemented semantic search using OpenAI embeddings and MongoDB Atlas vector indices
- **Agent Architecture**: Built autonomous decision-making system using LangGraph.js state machines
- **Full-Stack Integration**: Seamless communication between React frontend and Express.js backend
- **Error Resilience**: Comprehensive error handling with intelligent fallback mechanisms
- **Scalable Design**: Modular architecture supporting easy feature additions and modifications

***

## 📈 Skills & Technologies

**Languages:** JavaScript, TypeScript, HTML, CSS  
**Frameworks:** React.js, Node.js, Express.js  
**Databases:** MongoDB Atlas, Vector Search  
**AI/ML:** OpenAI API, Google Gemini, LangGraph.js, Vector Embeddings  
**Tools:** Git, npm, REST APIs, Environment Management

***

**Built to demonstrate advanced AI agent development, full-stack engineering skills, and modern web application architecture.**

#!/bin/bash

echo "🚀 Building React app..."
cd client
npm run build
cd ..

echo "🔧 Starting server..."
cd server
node index.js 
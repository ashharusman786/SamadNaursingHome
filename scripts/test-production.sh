#!/bin/bash

echo "🧪 Testing Production Build for Samad Nursing Home"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Step 1: Building Backend...${NC}"
cd server
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Backend build successful${NC}"
else
    echo -e "${RED}❌ Backend build failed${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 2: Building Frontend...${NC}"
cd ../client
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Frontend build successful${NC}"
else
    echo -e "${RED}❌ Frontend build failed${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 3: Type Checking...${NC}"
cd ../server
npm run type-check
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Backend type check passed${NC}"
else
    echo -e "${RED}❌ Backend type check failed${NC}"
    exit 1
fi

cd ../client
npx tsc --noEmit
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Frontend type check passed${NC}"
else
    echo -e "${RED}❌ Frontend type check failed${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 All tests passed! Ready for deployment.${NC}"
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Copy env.snh to .env.snh and configure variables"
echo "2. Push to GitHub"
echo "3. Deploy backend to Render"
echo "4. Deploy frontend to Vercel"
echo "5. Set environment variables in deployment platforms"
echo "6. Test the live deployment" 
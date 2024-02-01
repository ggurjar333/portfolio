# Use an official Node runtime as a parent image
FROM node:16.20.2 as build
LABEL authors="Gaurav Gurjar"
# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
#COPY package*.json ./

# Copy the current directory contents into the container at /app
COPY . .

# Install project dependencies
RUN npm install

# Build the app
RUN npm run build

# Stage 2 - the production environment
FROM nginx:alpine
# Copy build files from builder stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default React development server port
EXPOSE 3000:3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
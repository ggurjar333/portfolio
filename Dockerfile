# Use an official Node runtime as a parent image
FROM node:lts
LABEL authors="Gaurav Gurjar"
# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
#COPY package*.json ./

# Copy the current directory contents into the container at /app
COPY . .

# Install project dependencies
RUN npm install

# Expose the default React development server port
EXPOSE 3000:3000

# Command to start the React development server
CMD ["npm", "start"]

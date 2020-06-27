# Use an official node runtime as a parent image
FROM node:12

WORKDIR /code/frontend/

# Install dependencies
COPY package.json yarn.lock /code/frontend/

RUN npm install

# Add rest of the client code
COPY . /code/frontend/

EXPOSE 3000

CMD npm start

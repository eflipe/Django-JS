# Use an official node runtime as a parent image
FROM node:12

WORKDIR /code/

# Install dependencies
COPY package.json yarn.lock /code/

RUN npm install

# Add rest of the client code
COPY . /code/

EXPOSE 3000

CMD npm start

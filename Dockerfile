#FROM node:14 AS building
FROM cypress/base:14 AS building
WORKDIR /app
COPY ./package.json /app
#RUN apt-get update
#RUN apt-get install -y --no-install-recommends libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
#ENV CYPRESS_TARGET=http://uat-demo.insytpromotions.com/
RUN npm install
COPY . /app
RUN /app/node_modules/cypress/bin/cypress verify

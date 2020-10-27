FROM node:14 AS building
RUN mkdir /app
WORKDIR /app
# copy cypress code from host to container
COPY . /app
RUN apt-get update
RUN apt-get install -y --no-install-recommends libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
ARG CYPRESS_TARGET=http://uat-demo.insytpromotions.com/
RUN npm install cypress
RUN npm install
RUN /app/node_modules/cypress/bin/cypress verify
#RUN /app/node_modules/cypress/bin/cypress run --spec /app/cypress/integration/visit.feature
#CMD ["node", "/app/cypress/plugins/cr2.j"]
#COPY --from=building /app/cypress/report.html .

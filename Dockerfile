FROM node:18-alpine

# Build arguments for user/group configurations
ARG USER=asgusr
ARG USER_ID=10001
ARG USER_GROUP=asggrp
ARG USER_GROUP_ID=10001
ARG USER_HOME=/home/app

# Create a user group and a user
RUN addgroup -S -g ${USER_GROUP_ID} ${USER_GROUP} \
    && adduser -S -D -h ${USER_HOME} -G ${USER_GROUP} -u ${USER_ID} ${USER}

# Create app directory
WORKDIR ${USER_HOME}



COPY --chown=${USER}:${USER_GROUP} .yarn .yarn
COPY --chown=${USER}:${USER_GROUP} .yarnrc.yml ./
COPY --chown=${USER}:${USER_GROUP} package.json ./
COPY --chown=${USER}:${USER_GROUP} yarn.lock ./

# Enable corepack and prepare yarn
RUN corepack enable && corepack prepare yarn@4.5.0 --activate

# Set a non-root user
USER ${USER_ID}

# Install dependencies and build
RUN yarn install --immutable
COPY --chown=${USER}:${USER_GROUP} . .

# Install dependencies
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]

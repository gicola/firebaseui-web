# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.205.1/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 16, 14, 12, 16-bullseye, 14-bullseye, 12-bullseye, 16-buster, 14-buster, 12-buster
ARG VARIANT="14-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# RUN sudo apt update && export DEBIAN_FRONTEND=noninteractive \
#     && sudo apt install -y apt-transport-https ca-certificates wget dirmngr gnupg software-properties-common
#     && wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | sudo apt-key add -
#     && sudo add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb/
#     && sudo apt update
#     && sudo apt install -y adoptopenjdk-8-hotspot
#     && sudo update-alternatives --set java /usr/lib/jvm/adoptopenjdk-8-hotspot-amd64/bin/java
#     && export JAVA_HOME='/usr/lib/jvm/adoptopenjdk-8-hotspot-amd64/'

# RUN sdk install java 8.0.275.hs-adpt

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
RUN su node -c "npm install -g firebase-tools nx gulp-cli"

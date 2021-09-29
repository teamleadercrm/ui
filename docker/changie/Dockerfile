FROM debian:stable-slim
RUN apt-get update
RUN apt-get -y install curl
RUN curl -SsL -o /tmp/changie.deb https://github.com/miniscruff/changie/releases/download/v1.0.0/changie_1.0.0_linux_arm64.deb
RUN dpkg -i /tmp/changie.deb
RUN rm -rf /tmp/*
FROM nginx:alpine

# Copy custom Nginx configuration
COPY deployment/nginx/studyai-hub.conf /etc/nginx/conf.d/default.conf

# Copy website assets
COPY website /var/www/studyaihub/website

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]

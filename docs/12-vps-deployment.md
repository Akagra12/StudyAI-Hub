# 12 - VPS Deployment & Server Stack Configuration

## Production Server Environment
- **Operating System:** Ubuntu 22.04 LTS / 24.04 LTS x86_64
- **Web Server:** Nginx 1.24+ (Reverse Proxy & Static Web Server)
- **Application Engine:** Node.js LTS Runtime & PHP 8.2 FastCGI Process Manager (FPM)
- **Database Server:** MariaDB 10.11+ / MySQL 8.0
- **Process Manager:** PM2 / Systemd Service
- **Firewall:** UFW (Uncomplicated Firewall) with OpenSSH and Nginx Full profiles

## Server Provisioning Steps

```bash
# 1. SSH into the production server
ssh root@YOUR_SERVER_IP

# 2. Clone the project repository
git clone https://github.com/studyaihub/studyai-hub.git /var/www/studyaihub

# 3. Execute the automated provisioning script
chmod +x /var/www/studyaihub/deployment/scripts/vps-setup.sh
sudo /var/www/studyaihub/deployment/scripts/vps-setup.sh

# 4. Start local application server with PM2
cd /var/www/studyaihub
pm2 start server.js --name "studyai-hub"
pm2 startup && pm2 save
```

## Nginx Virtual Host Activation
The Nginx configuration file (`deployment/nginx/studyai-hub.conf`) is linked to `/etc/nginx/sites-enabled/` and includes Gzip compression, static asset caching headers, HTTP/2 multiplexing, and clean URL rewrites.

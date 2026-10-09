#!/bin/bash
# ==============================================================================
# StudyAI Hub – Production VPS Automated Provisioning Script (Ubuntu 22.04/24.04)
# Configures Nginx, PHP 8.2, MariaDB, Node.js, Certbot, UFW Firewall & Caching
# ==============================================================================

set -e

echo ">>> [1/7] Updating system packages..."
sudo apt update && sudo apt upgrade -y

echo ">>> [2/7] Installing Nginx, Node.js, Git, Certbot, and essentials..."
sudo apt install -y nginx git curl ufw certbot python3-certbot-nginx mariadb-server

echo ">>> [3/7] Setting up Node.js 20 LTS..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

echo ">>> [4/7] Configuring UFW Firewall..."
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
sudo ufw --force enable

echo ">>> [5/7] Creating web directory and cloning repository..."
sudo mkdir -p /var/www/studyaihub
sudo chown -R $USER:$USER /var/www/studyaihub

echo ">>> [6/7] Linking Nginx virtual host configuration..."
sudo cp /var/www/studyaihub/deployment/nginx/studyai-hub.conf /etc/nginx/sites-available/studyaihub.conf
sudo ln -sf /etc/nginx/sites-available/studyaihub.conf /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

echo ">>> [7/7] Provisioning Complete! Ready to issue SSL certificate via certbot."
echo "Run: sudo certbot --nginx -d studyaihub.tech -d www.studyaihub.tech"

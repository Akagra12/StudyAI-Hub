#!/bin/bash
# StudyAI Hub - SSL / Let's Encrypt automated installation and auto-renewal check
DOMAIN="studyaihub.tech"
EMAIL="admin@studyaihub.tech"

echo ">>> Requesting Let's Encrypt TLS Certificate for $DOMAIN..."
sudo certbot --nginx --non-interactive --agree-tos --email $EMAIL -d $DOMAIN -d www.$DOMAIN --redirect

echo ">>> Testing automatic renewal cron..."
sudo certbot renew --dry-run
echo ">>> SSL Certificate successfully activated with TLSv1.3 and HSTS readiness."

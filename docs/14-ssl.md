# 14 - SSL/TLS Certificate Provisioning & HSTS Implementation

## Security Architecture
Search engines treat HTTPS as a core page experience and ranking signal. StudyAI Hub implements end-to-end cryptographic transport security.

## Origin Certificate (Let's Encrypt)
On the origin Ubuntu VPS, automated SSL certificate issuance is managed via Certbot:
```bash
sudo certbot --nginx -d studyaihub.tech -d www.studyaihub.tech --non-interactive --agree-tos --email admin@studyaihub.tech --redirect
```

## Auto-Renewal Configuration
Certbot installs a systemd timer (`certbot.timer`) that runs twice daily to automatically check and renew certificates expiring within 30 days.

## HTTP Strict Transport Security (HSTS)
To prevent man-in-the-middle (MITM) downgrade attacks, Nginx broadcasts the HSTS response header:
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```
This forces all user agents and search engine crawlers to communicate exclusively over encrypted TLS connections.

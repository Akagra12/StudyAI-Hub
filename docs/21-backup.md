# 21 - Backup, Disaster Recovery & UpdraftPlus Configuration

## Backup Architecture
To guarantee 99.99% availability and zero data loss, StudyAI Hub implements an automated 3-tier disaster recovery architecture.

## Automated Backup Tiers

### 1. Daily Database & Configuration Snapshot
- Automated cron job runs nightly via `deployment/scripts/backup-updraft.sh`.
- Dumps MariaDB/MySQL database tables into compressed `.sql.gz` archives.
- Archives all website files, custom themes, and Nginx configurations into `.tar.gz`.

### 2. WordPress UpdraftPlus Integration
- For WordPress deployments, the UpdraftPlus plugin is pre-configured to create weekly remote backups storing:
  - Database (`wp_posts`, `wp_postmeta`, `wp_terms`)
  - Plugins & Custom Theme (`wp-content/themes/studyai-hub/`)
  - Uploads & Media Assets

### 3. Offsite Storage Retention
- Retains 7 daily rolling local snapshots in `/var/backups/studyaihub/`.
- Synchronized offsite to Amazon S3 / Cloudflare R2 bucket with automated 30-day lifecycle expiration.

## Restoration Verification Procedure
To restore a snapshot in a disaster recovery scenario:
```bash
# 1. Restore files
tar -xzf /var/backups/studyaihub/studyaihub_files_YYYYMMDD.tar.gz -C /var/www/studyaihub

# 2. Restore database
gunzip < /var/backups/studyaihub/studyai_db_YYYYMMDD.sql.gz | mysql -u root -p studyai_db

# 3. Reload Web Server
sudo nginx -t && sudo systemctl reload nginx
```

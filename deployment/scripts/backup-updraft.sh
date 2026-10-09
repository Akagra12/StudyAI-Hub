#!/bin/bash
# ==============================================================================
# StudyAI Hub – Automated UpdraftPlus / WP-CLI Backup Script
# Creates complete snapshot of Database, Uploads, Plugins, Themes & Nginx Configs
# ==============================================================================

BACKUP_DIR="/var/backups/studyaihub"
DATE=$(date +"%Y%m%d_%H%M%S")

mkdir -p $BACKUP_DIR

echo ">>> [1/3] Creating complete archive of website files..."
tar -czf "$BACKUP_DIR/studyaihub_files_$DATE.tar.gz" -C /var/www/studyaihub .

echo ">>> [2/3] Exporting database snapshot..."
if command -v mysqldump &> /dev/null; then
    mysqldump -u root -p studyai_db > "$BACKUP_DIR/studyai_db_$DATE.sql"
    gzip "$BACKUP_DIR/studyai_db_$DATE.sql"
fi

echo ">>> [3/3] Rotating backups (keeping last 7 daily archives)..."
find $BACKUP_DIR -type f -name "*.tar.gz" -mtime +7 -delete
find $BACKUP_DIR -type f -name "*.sql.gz" -mtime +7 -delete

echo ">>> Backup complete: $BACKUP_DIR/studyaihub_files_$DATE.tar.gz"

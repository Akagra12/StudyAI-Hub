# 13 - Cloudflare DNS, CDN & Edge Caching Configuration

## DNS Configuration Matrix
The domain `studyaihub.tech` is routed through Cloudflare's global anycast edge network.

| Record Type | Name | Target / Content | Proxy Status | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **A** | `@` (studyaihub.tech) | `YOUR_VPS_IP` | **Proxied (Orange Cloud)** | Directs apex domain through CDN edge |
| **CNAME** | `www` | `studyaihub.tech` | **Proxied (Orange Cloud)** | Canonical alias for sub-domain |

## SSL/TLS Edge Settings
- **Encryption Mode:** Full (Strict) — ensures end-to-end encrypted connection between Client &rarr; Cloudflare &rarr; Origin VPS.
- **Always Use HTTPS:** Enabled (301 permanent redirect).
- **Minimum TLS Version:** TLS 1.2 (disallows vulnerable TLS 1.0/1.1 protocols).
- **Automatic HTTPS Rewrites:** Enabled.

## Speed & Caching Rules
- **Brotli Compression:** Enabled for all text, CSS, JS, and SVG assets.
- **Edge Cache TTL:** Static assets in `/css/*` and `/js/*` are cached at Cloudflare edge locations for 30 days (`max-age=2592000`).
- **Development Mode:** Toggleable via Cloudflare dashboard when pushing live theme updates.

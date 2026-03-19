# Project: InternalDashboard

## Overview
Internal analytics dashboard for the Sales team. Tracks pipeline metrics, revenue forecasts, and team KPIs.

## Architecture
- **Frontend**: React 18 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + Prisma ORM
- **Database**: PostgreSQL (hosted on Supabase)
- **Auth**: Auth0 with SAML SSO for corporate accounts
- **Deployment**: AWS ECS on Fargate, us-west-2

## Environment Variables
These are stored in `.env.local` (never commit):

```
DATABASE_URL=postgresql://demo_user:demo_password_123@localhost:5432/fake_dashboard_db
AUTH0_CLIENT_SECRET=fake_auth0_secret_abcdefghijklmnop
STRIPE_SECRET_KEY=sk_test_FAKE_stripe_key_for_demo_only
AWS_ACCESS_KEY_ID=FAKE_AWS_KEY_ID_FOR_DEMO
AWS_SECRET_ACCESS_KEY=FAKE_AWS_SECRET_KEY_FOR_DEMO_ONLY
SLACK_WEBHOOK_URL=https://hooks.example.com/services/FAKE/WEBHOOK/PLACEHOLDER
INTERNAL_API_KEY=fake_internal_api_key_0123456789abcdef
```

## Team
- Tech Lead: Sarah Chen (sarah.chen@example.com)
- Backend: James Wilson (james.w@example.com)
- Frontend: Maria Garcia (maria.g@example.com)
- DevOps: Alex Kumar (alex.k@example.com)

## Deployment
```bash
# Production deploy (requires VPN + 2FA)
npm run build && aws ecs update-service --cluster prod-dashboard --service web --force-new-deployment

# Staging
npm run deploy:staging
```

## Important Notes
- Never expose the Supabase connection string — it has direct write access to prod
- The Stripe key is LIVE — test key is in .env.test
- Auth0 tenant: `fake-tenant.auth0.example.com`
- Grafana dashboard: https://grafana.internal.example.com/d/dashboard-metrics
- PagerDuty escalation: #team-dashboard-oncall

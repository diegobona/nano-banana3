import { getEnv, requireEnvForService } from './utils';

const privateImageHistory = 'Private image history';
const promptReferenceWorkflow = 'Reference images and prompt workflows';
const sampleImageResolution = 'Image output resolution: up to 1K';
const starterImageResolution = 'Image output resolution: up to 2K';
const creatorImageResolution = 'Image output resolution: up to 4K';
const proImageResolution = 'Image output resolution: up to 4K';
const imageDownloads = 'Unlimited image downloads per day';

export const paymentConfig = {
  providers: {
    stripe: {
      get secretKey() {
        return requireEnvForService('STRIPE_SECRET_KEY', 'Stripe');
      },
      get publicKey() {
        return requireEnvForService('STRIPE_PUBLIC_KEY', 'Stripe');
      },
      get webhookSecret() {
        return requireEnvForService('STRIPE_WEBHOOK_SECRET', 'Stripe');
      },
    },
  },

  plans: {
    free: {
      provider: 'free',
      id: 'free',
      amount: 0,
      currency: 'USD',
      duration: { months: 1, type: 'recurring' },
      i18n: {
        en: {
          name: 'Free',
          description: 'No credit card needed.',
          duration: 'month',
          features: [
            '1 concurrent task',
            'Limited queue priority',
            sampleImageResolution,
            'No saved image history',
          ],
        },
        'zh-CN': {
          name: 'Free',
          description: 'No credit card needed.',
          duration: 'month',
          features: [
            '1 concurrent task',
            'Limited queue priority',
            sampleImageResolution,
            'No saved image history',
          ],
        },
      },
    },
    starterMonthly: {
      provider: 'stripe',
      id: 'starterMonthly',
      amount: 9,
      currency: 'USD',
      credits: 15000,
      duration: { months: 1, type: 'recurring' },
      stripePriceId: getEnv('STRIPE_PRICE_STARTER_MONTHLY') || getEnv('STRIPE_PRICE_STARTER') || 'price_starter_monthly_replace_me',
      i18n: {
        en: {
          name: 'Starter',
          description: 'A practical starter plan for light AI image generation.',
          duration: 'month',
          features: [
            '15,000 credits/month',
            '2 concurrent tasks',
            imageDownloads,
            'Standard queue priority',
            promptReferenceWorkflow,
            starterImageResolution,
            `${privateImageHistory}: 30 days`,
          ],
        },
        'zh-CN': {
          name: 'Starter',
          description: 'A practical starter plan for light AI image generation.',
          duration: 'month',
          features: [
            '15,000 credits/month',
            '2 concurrent tasks',
            imageDownloads,
            'Standard queue priority',
            promptReferenceWorkflow,
            starterImageResolution,
            `${privateImageHistory}: 30 days`,
          ],
        },
      },
    },
    creatorMonthly: {
      provider: 'stripe',
      id: 'creatorMonthly',
      amount: 19,
      currency: 'USD',
      credits: 40000,
      duration: { months: 1, type: 'recurring' },
      stripePriceId: getEnv('STRIPE_PRICE_CREATOR_MONTHLY') || getEnv('STRIPE_PRICE_CREATOR') || 'price_creator_monthly_replace_me',
      i18n: {
        en: {
          name: 'Creator',
          description: 'Best value for regular creators and production-ready images.',
          duration: 'month',
          features: [
            '40,000 credits/month',
            '4 concurrent tasks',
            imageDownloads,
            'Priority queue',
            promptReferenceWorkflow,
            creatorImageResolution,
            `${privateImageHistory}: long-term`,
          ],
        },
        'zh-CN': {
          name: 'Creator',
          description: 'Best value for regular creators and production-ready images.',
          duration: 'month',
          features: [
            '40,000 credits/month',
            '4 concurrent tasks',
            imageDownloads,
            'Priority queue',
            promptReferenceWorkflow,
            creatorImageResolution,
            `${privateImageHistory}: long-term`,
          ],
        },
      },
    },
    proMonthly: {
      provider: 'stripe',
      id: 'proMonthly',
      amount: 49,
      currency: 'USD',
      credits: 100000,
      showInPricing: false,
      duration: { months: 1, type: 'recurring' },
      stripePriceId: getEnv('STRIPE_PRICE_PRO_MONTHLY') || getEnv('STRIPE_PRICE_PRO') || 'price_pro_monthly_replace_me',
      i18n: {
        en: {
          name: 'Pro',
          description: 'For high-volume teams that need custom image generation capacity.',
          duration: 'month',
          features: [
            '100,000 monthly credits',
            '4 concurrent tasks',
            imageDownloads,
            'Maximum queue priority',
            promptReferenceWorkflow,
            proImageResolution,
            `${privateImageHistory}: permanent`,
          ],
        },
        'zh-CN': {
          name: 'Pro',
          description: 'For high-volume teams that need custom image generation capacity.',
          duration: 'month',
          features: [
            '100,000 monthly credits',
            '4 concurrent tasks',
            imageDownloads,
            'Maximum queue priority',
            promptReferenceWorkflow,
            proImageResolution,
            `${privateImageHistory}: permanent`,
          ],
        },
      },
    },
    starterYearly: {
      provider: 'stripe',
      id: 'starterYearly',
      amount: 84,
      currency: 'USD',
      credits: 15000,
      duration: { months: 12, type: 'recurring' },
      stripePriceId: getEnv('STRIPE_PRICE_STARTER_YEARLY') || 'price_starter_yearly_replace_me',
      i18n: {
        en: {
          name: 'Starter',
          description: 'A practical starter plan for light AI image generation.',
          duration: 'year',
          features: [
            '15,000 credits/month',
            'Credits refresh monthly',
            '2 concurrent tasks',
            imageDownloads,
            'Standard queue priority',
            promptReferenceWorkflow,
            starterImageResolution,
            `${privateImageHistory}: 30 days`,
          ],
        },
        'zh-CN': {
          name: 'Starter',
          description: 'A practical starter plan for light AI image generation.',
          duration: 'year',
          features: [
            '15,000 credits/month',
            'Credits refresh monthly',
            '2 concurrent tasks',
            imageDownloads,
            'Standard queue priority',
            promptReferenceWorkflow,
            starterImageResolution,
            `${privateImageHistory}: 30 days`,
          ],
        },
      },
    },
    creatorYearly: {
      provider: 'stripe',
      id: 'creatorYearly',
      amount: 180,
      currency: 'USD',
      credits: 40000,
      duration: { months: 12, type: 'recurring' },
      stripePriceId: getEnv('STRIPE_PRICE_CREATOR_YEARLY') || 'price_creator_yearly_replace_me',
      i18n: {
        en: {
          name: 'Creator',
          description: 'Best value for regular creators and production-ready images.',
          duration: 'year',
          features: [
            '40,000 credits/month',
            'Credits refresh monthly',
            '4 concurrent tasks',
            imageDownloads,
            'Priority queue',
            promptReferenceWorkflow,
            creatorImageResolution,
            `${privateImageHistory}: long-term`,
          ],
        },
        'zh-CN': {
          name: 'Creator',
          description: 'Best value for regular creators and production-ready images.',
          duration: 'year',
          features: [
            '40,000 credits/month',
            'Credits refresh monthly',
            '4 concurrent tasks',
            imageDownloads,
            'Priority queue',
            promptReferenceWorkflow,
            creatorImageResolution,
            `${privateImageHistory}: long-term`,
          ],
        },
      },
    },
    proYearly: {
      provider: 'stripe',
      id: 'proYearly',
      amount: 469,
      currency: 'USD',
      credits: 100000,
      showInPricing: false,
      duration: { months: 12, type: 'recurring' },
      stripePriceId: getEnv('STRIPE_PRICE_PRO_YEARLY') || 'price_pro_yearly_replace_me',
      i18n: {
        en: {
          name: 'Pro',
          description: 'For high-volume teams that need custom image generation capacity.',
          duration: 'year',
          features: [
            '100,000 credits/month',
            'Credits refresh monthly',
            '4 concurrent tasks',
            imageDownloads,
            'Maximum queue priority',
            promptReferenceWorkflow,
            proImageResolution,
            `${privateImageHistory}: permanent`,
          ],
        },
        'zh-CN': {
          name: 'Pro',
          description: 'For high-volume teams that need custom image generation capacity.',
          duration: 'year',
          features: [
            '100,000 credits/month',
            'Credits refresh monthly',
            '4 concurrent tasks',
            imageDownloads,
            'Maximum queue priority',
            promptReferenceWorkflow,
            proImageResolution,
            `${privateImageHistory}: permanent`,
          ],
        },
      },
    },
  },
} as const;

import type { Locale } from './types'

export const en: Locale = {
  common: {
    login: "Login",
    and: "and",
    loading: "Loading...",
    unexpectedError: "An unexpected error occurred",
    viewPlans: "View Plans"
  },
  actions: {
    previous: "Previous",
    next: "Next",
    createAccount: "Create account"
  },
  home: {
    metadata: {
      title: "Nano Banana - AI Image Generator",
      description: "Create and edit images with Nano Banana AI. Upload a reference image, choose simple output settings, and generate polished image results.",
      keywords: "nano banana, ai image generator, ai image editing, text to image, image to image, ai art generator"
    }
  },
  header: {
    navigation: {
      home: "Home",
      pricing: "Pricing",
      blog: "Blog"
    },
    auth: {
      signIn: "Sign In",
      signOut: "Sign Out",
      dashboard: "Dashboard",
      myAssets: "My Assets",
      myCredits: "My Credits"
    },
    language: {
      english: "English",
      chinese: "中文"
    }
  },
  pixal3d: {
    generator: {
      heroTitle: "Create Images with Nano Banana AI",
      subtitle: "Generate polished images from prompts and references",
      imageHint: "Optional reference image for Nano Banana image generation.",
      imagePreviewAlt: "Uploaded reference image",
      uploadButton: "Upload reference image",
      dragDropPaste: "Drag & drop",
      orLabel: "OR",
      selectFileButton: "Select file",
      samplePrompt: "Try a reference:",
      useSample: "Use sample",
      removeImage: "Remove uploaded image",
      exampleResultTitle: "Example result",
      exampleModelLabel: "Generated image",
      featuresNav: "Features",
      defaultPrompt: "Create a polished, high-detail image with clean composition, natural lighting, crisp edges, and a premium editorial finish.",
      trialDescription: "Nano Banana image generation is moving into this workspace. Sign in to save results and use credits.",
      stylePreset: "Creative image mode",
      cleanTopology: "Prompt guided",
      pbrMaterials: "Reference aware",
      subscribeButton: "Subscribe",
      subscribeToGenerateButton: "Subscribe to Generate",
      upgradeButton: "Upgrade",
      upgradeToGenerateButton: "Upgrade to Generate",
      freeTrialButton: "Start Free Trial",
      freeTrialLoading: "Finding server...",
      freeTrialSelected: "Free trial server is ready.",
      freeTrialExpired: "Free trial session ended.",
      hfTrialTitle: "Nano Banana Preview",
      hfTrialQueueLabel: "Current queue",
      hfTrialTimeLeft: "Time left",
      hfTrialStartHint: "If the \"Start Generation\" button is disabled, please wait a few seconds while the server finishes loading.",
      hfTrialClose: "Close",
      hfTrialFindingTitle: "Finding an available server",
      hfTrialFindingDescription: "We are preparing a Nano Banana preview session. This usually takes a few seconds.",
      hfTrialLoadingTitle: "Loading your free trial workspace",
      hfTrialLoadingDescription: "The server is ready. The workspace is opening now, so keep this tab open for a moment.",
      generateButton: "Generate Image",
      generatingButton: "Generating image...",
      resultTitle: "Image is ready",
      previewTitle: "Generated Image",
      previewLoading: "Loading image...",
      previewErrorTitle: "Image preview failed",
      previewErrorDescription: "The image preview could not load. You can still open or download the result.",
      previewModelButton: "Open image",
      closePreviewButton: "Close preview",
      openModelButton: "Open image",
      downloadModelButton: "Download image",
      settings: {
        resolution: "Image Resolution",
        textureSize: "Aspect Ratio",
        outputCount: "Images",
        advanceSettings: "Image Settings",
        showAdvanceSettings: "Expand settings",
        hideAdvanceSettings: "Collapse settings",
        advancedSettingsSummary: "Simple controls",
        on: "On",
        off: "Off",
        fields: {
          decimationTarget: "Decimation Target",
          maxNumTokens: "Max Num Tokens",
          meshScale: "Mesh Scale",
          sparseStructureGuidanceStrength: "SS Guidance Strength",
          sparseStructureGuidanceRescale: "SS Guidance Rescale",
          sparseStructureSteps: "SS Sampling Steps",
          sparseStructureRescaleT: "SS Rescale T",
          shapeGuidanceStrength: "Shape Guidance Strength",
          shapeGuidanceRescale: "Shape Guidance Rescale",
          shapeSteps: "Shape Sampling Steps",
          shapeRescaleT: "Shape Rescale T",
          textureGuidanceStrength: "Texture Guidance Strength",
          textureSteps: "Texture Sampling Steps",
          textureRescaleT: "Texture Rescale T",
          remesh: "Remesh"
        }
      },
      status: {
        idle: "Upload a reference image or start from a prompt.",
        ready: "Reference image ready. Generate your image.",
        creating: "Creating image task...",
        processing: "Generating the image...",
        stillChecking: "Still checking in My Assets...",
        succeeded: "Image is ready."
      },
      progress: {
        title: "Generation progress",
        completedTitle: "Image is ready",
        checkingTitle: "Still checking the result",
        failedTitle: "Generation stopped",
        steps: {
          submitting: "Submitting request",
          waitingForRunner: "Connecting to Nano Banana",
          preparingImage: "Preparing reference image",
          enhancingPrompt: "Enhancing prompt",
          generatingImage: "Generating image",
          refiningImage: "Refining details",
          savingImage: "Saving image result",
          finalizingPreview: "Finalizing preview"
        }
      },
      errors: {
        unsupportedImage: "Please upload a JPG, PNG, WebP, or BMP image.",
        imageTooLarge: "Image must be 10 MB or smaller.",
        uploadFailed: "Could not read the image. Please try another file.",
        imageRequired: "Upload a reference image first.",
        signInRequired: "Sign in or upgrade to generate and save images.",
        generationFailed: "Image generation failed.",
        statusFailed: "Could not check the image task status.",
        timeout: "Image generation timed out. Please try again.",
        statusStillChecking: "Your image is still being checked.",
        statusStillCheckingDescription: "The task was submitted, but this page could not confirm the final result yet. Check My Assets in a few minutes.",
        timeoutStillChecking: "The task is taking longer than expected. It may still finish in My Assets.",
        freeTrialBusy: "Free trial server is busy, try again later",
        freeTrialLimitReached: "Free trials used. Sign in and subscribe to generate.",
        trialUsed: "Free trial already used",
        trialUsedDescription: "Create an account to continue generating Nano Banana images.",
        generateDisabledSignIn: "Sign in and subscribe for faster and more stable image generation.",
        generateDisabledSubscribeRequired: "Subscribe to generate images",
        generateDisabledFreeTrialAbove: "Faster and more stable generation, never offline. Free trial is available above.",
        generateDisabledInsufficientCredits: "Not enough credits.",
        generateDisabledImageRequired: "Upload an image first",
        generateDisabledReadingImage: "Reading image...",
        insufficientCredits: "Not enough credits for image generation.",
        insufficientCreditsDescription: "This image setting requires {required} credits. Your current balance is {balance} credits."
      }
    },
    advantages: {
      eyebrow: "Nano Banana Advantages",
      title: "Why choose Nano Banana",
      items: {
        faithful: {
          title: "Reference-aware image generation",
          description: "Use an uploaded image as visual direction while creating a fresh, polished result."
        },
        pixelAligned: {
          title: "Prompt-guided control",
          description: "Turn concise prompts into clear compositions without exposing a wall of technical controls."
        },
        geometry: {
          title: "High-detail image output",
          description: "Generate crisp details, clean edges, and balanced scenes suitable for product and creative workflows."
        },
        pbr: {
          title: "Simple creative settings",
          description: "Choose aspect ratio, resolution, and output count without managing model-specific internals."
        },
        fast: {
          title: "Fast iteration",
          description: "Explore image directions quickly, save results, and continue from your asset history."
        }
      }
    },
    inspiration: {
      eyebrow: "Image Inspiration Gallery",
      title: "Explore visual directions for your next Nano Banana generation",
      generateSimilar: "Click to generate a similar image"
    },
    faq: {
      title: "FAQ",
      items: {
        generator: {
          question: "Is Nano Banana an AI image generator?",
          answer: "Yes. This workspace is being converted into a Nano Banana AI image generator for prompt and reference-image workflows."
        },
        oneImage: {
          question: "Can I use a reference image?",
          answer: "Yes. Upload a reference image to guide the generated image, or start from a prompt only in the upcoming backend step."
        },
        bestImages: {
          question: "What references work best?",
          answer: "Clear images with a strong subject, readable lighting, and minimal clutter usually produce better image generations."
        },
        formats: {
          question: "Can I download the generated image?",
          answer: "Yes. Generated images appear inline and can be opened or downloaded from the result view and asset history."
        }
      }
    }
  },
  auth: {
    metadata: {
      signin: {
        title: "Pixal3D - Sign In",
        description: "Sign in to Pixal3D to generate and manage AI 3D models.",
        keywords: "Pixal3D login, sign in, AI 3D model account"
      },
      signup: {
        title: "Pixal3D - Sign Up",
        description: "Create a Pixal3D account to save AI 3D model history and use credits.",
        keywords: "Pixal3D sign up, create account, AI 3D model account"
      }
    },
    signin: {
      welcomeBack: "Welcome back",
      description: "Sign in with Google or email",
      socialLogin: "Sign in with Google",
      orContinueWith: "Or continue with email",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      rememberMe: "Remember me",
      submit: "Sign in",
      submitting: "Signing in...",
      success: "Signed in",
      noAccount: "Don't have an account?",
      signupLink: "Sign up",
      termsNotice: "By clicking continue, you agree to our",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      errors: {
        required: "Email and password are required.",
        invalidCredentials: "Invalid email or password."
      },
      socialProviders: {
        google: "Google"
      }
    },
    signup: {
      title: "Create your account",
      description: "Use email and password to create a Pixal3D account.",
      name: "Name",
      namePlaceholder: "Enter your name",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      passwordPlaceholder: "At least 8 characters",
      submit: "Create account",
      submitting: "Creating account...",
      success: "Account created",
      haveAccount: "Already have an account?",
      signinLink: "Sign in",
      errors: {
        required: "Name, email, and password are required.",
        passwordTooShort: "Password must be at least 8 characters."
      }
    }
  },
  pricing: {
    metadata: {
      title: "Pixal3D Pricing - Credits for AI 3D Models",
      description: "Choose Pixal3D credits for image-to-3D generation, GLB downloads, queue priority, and private asset ownership.",
      keywords: "pixal3d pricing, ai 3d model credits, image to 3d subscription"
    },
    freeTrialNotice: "Two Free Trial sessions (Each session lasts 15 minutes, no credits required)",
    yearlyDiscountBadge: "Save about 20%",
    billedYearly: "Billed yearly: ${amount}",
    contactPlan: {
      name: "Max Unlimited",
      description: "For teams with custom volume, workflow support, and priority onboarding.",
      price: "Contact Us",
      priceNote: "Custom monthly or yearly terms",
      button: "Contact Us",
      chatUnavailable: "Open the chat widget to contact us.",
      features: [
        "Custom monthly credits",
        "Custom concurrent tasks",
        "Unlimited downloads per day",
        "Maximum queue priority",
        "Private asset ownership",
        "Workflow and onboarding support"
      ]
    }
  },
  payment: {
    metadata: {
      success: {
        title: "Payment Successful - Pixal3D",
        description: "Your Pixal3D payment was processed successfully.",
        keywords: "payment successful, Pixal3D subscription"
      },
      cancel: {
        title: "Payment Canceled - Pixal3D",
        description: "Your Pixal3D payment was canceled.",
        keywords: "payment canceled, Pixal3D checkout"
      }
    },
    result: {
      success: {
        title: "Payment Successful",
        description: "Your payment has been processed successfully.",
        actions: {
          viewDashboard: "View Dashboard",
          backToHome: "Back to Home"
        }
      },
      cancel: {
        title: "Payment Canceled",
        description: "Your payment was canceled. You can return to pricing and try again.",
        actions: {
          tryAgain: "Try Again",
          contactSupport: "Contact Support",
          backToHome: "Back to Home"
        }
      }
    }
  },
  blog: {
    metadata: {
      title: "Pixal3D Blog",
      description: "Read Pixal3D updates and guides for AI 3D model generation.",
      keywords: "Pixal3D blog, AI 3D model guide, image to 3D"
    },
    title: "Blog",
    subtitle: "Pixal3D updates and guides",
    publishedOn: "Published on",
    by: "by",
    noPosts: "No posts yet. Check back soon!",
    backToBlog: "Back to Blog"
  },
  dashboard: {
    metadata: {
      title: "Pixal3D Dashboard",
      description: "View your Pixal3D subscription, credits, and account details.",
      keywords: "Pixal3D dashboard, subscription, credits"
    },
    eyebrow: "Account",
    title: "Dashboard",
    description: "View your plan, subscription period, credits, and recent payments.",
    actions: {
      managePlan: "Manage Plan"
    },
    subscription: {
      label: "Current plan",
      active: "Active",
      free: "Free",
      canceled: "Canceled",
      expired: "Expired",
      cancelAtPeriodEnd: "Cancels at period end",
      billingCycle: "Billing cycle",
      periodStart: "Started",
      validUntil: "Valid until",
      lifetime: "Lifetime",
      included: "Included limits"
    },
    credits: {
      label: "Credits",
      description: "Available credits for Pixal3D model generation."
    },
    account: {
      label: "Account",
      unnamed: "Unnamed user",
      memberSince: "Member since"
    },
    orders: {
      label: "Payments",
      title: "Recent orders",
      empty: "No payments yet."
    }
  },
  myAssets: {
    eyebrow: "Your Library",
    title: "My Assets",
    description: "Review your recent Pixal3D generation tasks and reopen completed GLB models.",
    actions: {
      create: "Create",
      refresh: "Refresh",
      preview3DModel: "Preview 3D Model",
      openModel: "Open GLB",
      sourceImage: "Source Image",
      previous: "Previous",
      next: "Next"
    },
    empty: {
      title: "No generation history yet",
      description: "Create your first 3D model and it will appear here."
    },
    card: {
      targetResolution: "Target Resolution",
      textureSize: "Texture Size",
      createdAt: "Created",
      credits: "Credits",
      creditsUsed: "Credits Used",
      pricingHint: "Per-generation credit usage will decrease as provider pricing drops.",
      checkingStatus: "Checking status...",
      status: {
        processing: "Processing",
        succeeded: "Completed",
        failed: "Failed"
      }
    }
  },
  docs: {
    nav: {
      docs: "Docs",
      blog: "Blog"
    },
    home: {
      title: "Pixal3D Docs",
      description: "Guides and references for running the Pixal3D Next.js app.",
      cta: {
        docs: "Read Docs",
        blog: "Read Blog"
      }
    },
    blog: {
      title: "Blog",
      description: "Pixal3D updates and implementation notes.",
      allPosts: "All Posts",
      previousPage: "Previous",
      nextPage: "Next",
      noPosts: "No posts yet.",
      back: "Back to Blog"
    }
  }
} as const;

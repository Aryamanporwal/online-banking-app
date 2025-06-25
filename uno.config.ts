import { defineConfig,  presetAttributify, presetIcons } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

export default defineConfig({
  shortcuts: [
    // Typography
    ['input-class', 'text-[16px] placeholder:text-[16px] rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500'],
    ['text14_padding10', 'text-[14px] px-4 py-2.5 font-semibold'],
    ['flex-center', 'flex items-center justify-center'],
    ['header-2', 'text-[18px] font-semibold text-gray-900'],

    ['text-10', 'text-[10px] leading-[14px]'],
    ['text-12', 'text-[12px] leading-[16px]'],
    ['text-14', 'text-[14px] leading-[20px]'],
    ['text-16', 'text-[16px] leading-[24px]'],
    ['text-18', 'text-[18px] leading-[22px]'],
    ['text-20', 'text-[20px] leading-[24px]'],
    ['text-24', 'text-[24px] leading-[30px]'],
    ['text-26', 'text-[26px] leading-[32px]'],
    ['text-30', 'text-[30px] leading-[38px]'],
    ['text-36', 'text-[36px] leading-[44px]'],

    // Layout
    ['home', 'no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll'],
    ['home-content', 'no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll'],
    ['sheet-content-button', 'focus:ring-0 focus-visible:ring-transparent focus:ring-offset-0 focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none'],
    ['view-all-btn', 'text-[14px] rounded-lg border border-gray-300 px-4 py-2.5 font-semibold text-gray-700'],

    // Reusable Blocks
    ['glassmorphism', 'bg-white/25 backdrop-blur-sm'],
    ['profile-img', 'flex-center absolute -top-8 w-24 h-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-profile'],
    ['bank-card', 'relative flex h-[190px] w-full max-w-[320px] justify-between rounded-[20px] border border-white bg-bank-gradient shadow-creditCard backdrop-blur-[6px]'],
    ['bank-card_content', 'relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] bg-gray-700 bg-bank-gradient px-5 pb-4 pt-5'],
    ['bank-card_icon', 'flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-bank-gradient bg-cover bg-center bg-no-repeat py-5 pr-5'],
    ['category-badge', 'flex-center truncate w-fit gap-1 rounded-2xl border-[1.5px] py-[2px] pl-1.5 pr-2'],

    // Forms
    ['form-btn', 'text-[16px] rounded-lg border border-bankGradient bg-bank-gradient text-white font-semibold shadow-form'],
    ['form-message', 'text-[12px] text-red-500'],
    ['form-label', 'text-[14px] w-full max-w-[280px] font-medium text-gray-700'],
    ['form-link', 'text-[14px] cursor-pointer font-medium text-bankGradient'],

    // PlaidLink
    ['plaidlink-primary', 'text-[16px] rounded-lg border border-bankGradient bg-bank-gradient font-semibold text-white shadow-form'],
    ['plaidlink-ghost', 'flex cursor-pointer items-center justify-center gap-3 rounded-lg px-3 py-7 hover:bg-white lg:justify-start'],
    ['plaidlink-default', 'flex !justify-start cursor-pointer gap-3 rounded-lg !bg-transparent flex-row'],

    // Auth
    ['auth-form', 'flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8'],
    ['auth-asset', 'flex h-screen w-full sticky top-0 items-center justify-end bg-sky-1 max-lg:hidden'],

    // Layout
    ['root-layout', 'flex h-16 items-center justify-between p-5 shadow-creditCard sm:p-8 md:hidden'],
    ['sidebar', 'sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'],
    ['sidebar-logo', '2xl:text-[26px] font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden'],
    ['sidebar-link', 'flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start'],
    ['sidebar-label', 'text-[16px] font-semibold text-black-2 max-xl:hidden'],
  ],
  theme: {
    colors: {
      bankGradient: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
    },
    boxShadow: {
      form: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      creditCard: '0 4px 24px rgba(0,0,0,0.12)',
      chart: '0 2px 10px rgba(0,0,0,0.06)',
      profile: '0 4px 12px rgba(0,0,0,0.10)',
    },
    backgroundImage: {
      'bank-gradient': 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
      'gradient-mesh': 'url(/gradient-mesh.png)',
    },
  },
  presets: [
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
})

export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '克喵Kemeow',
    avatar: '',
    username: '克喵Kemeow',
    title: '克喵Kemeow Blog的主人',
    desc: '致力于分享资源和生活',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Kemeow815' },
    ],
    nameAliases: ['克喵', 'Kemeow815', '克喵Kemeow', 'Ke Miao', '克喵爱吃卤面'],
    emailAliases: ['kemiao@kmblog.icu'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')

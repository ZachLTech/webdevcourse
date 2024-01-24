export default defineAppConfig({
  docus: {
    title: 'WebDev Speedrun',
    description: 'Don\'t know Web Dev\'t? Learn here with a speedy course',
    image: 'https://zachl.space/myLogo.png',
    socials: {
      github: 'ZachLTech/webdevcourse',
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      title: 'Web Dev\'t',
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      credits: {
        icon: '',
        text: 'Made by Zach L',
        href: 'https://zachl.space',
      },
    }
  }
})

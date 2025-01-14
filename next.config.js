module.exports = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1cc9J15MXnocfat5bajBalvtuaihqwRun/view',
        permanent: false, // Use true for permanent redirect (301) and false for temporary redirect (307)
      },
      // {
      //   source: 'resume.paraspipre.com',
      //   destination: 'https://drive.google.com/file/d/1cc9J15MXnocfat5bajBalvtuaihqwRun/view',
      //   permanent: false, // Use true for permanent redirect (301) and false for temporary redirect (307)
      // },
    ]
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'imgur.com',
    ],
  },
};

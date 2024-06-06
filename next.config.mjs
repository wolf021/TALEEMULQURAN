// next.config.js

const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add your webpack configuration here
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      });
  
      // Do any other webpack configuration as needed
  
      return config;
    },
  };
  
  export default nextConfig;
  
  
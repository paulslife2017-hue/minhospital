module.exports = {
  apps: [
    {
      name: 'webapp',
      script: 'npx',
      args: 'tsx --no-cache api/server.mjs',
      cwd: '/home/user/webapp',
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        TSX_NO_CACHE: '1'
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}

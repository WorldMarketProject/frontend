module.exports = {
    apps: [
      {
        name: "FreeMarket",
        script: "node_modules/next/dist/bin/next",
        args: "start --port 3001",
        instances: 1,
        exec_mode: "cluster",
        watch: true, // 파일 변경 모니터링, 파일 변동시 재시작
      },
    ],
  };
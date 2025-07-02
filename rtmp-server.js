const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8080,
    allow_origin: '*'
  }
};

const nms = new NodeMediaServer(config);
nms.run();

console.log('RTMP Server running on rtmp://localhost:1935');
console.log('HTTP Server running on http://localhost:8080');

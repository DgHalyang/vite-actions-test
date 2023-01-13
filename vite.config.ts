import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};

/** 设置别名 */
const alias: Record<string, string> = {
  "@": pathResolve("src"),
  "@build": pathResolve("build"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias,
  },
  // 服务端渲染
  server: {
    // 是否开启 https
    https: false,
    // 端口号
    port: 3000,
    // 监听所有地址
    host: "0.0.0.0",
    // 服务启动时是否自动打开浏览器
    open: true,
    // 允许跨域
    cors: true,
    // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
    proxy: {},
  },
  // 打包配置
  build: {
    // 设置最终构建的浏览器兼容目标
    target: "es2015",
    // 构建后是否生成 source map 文件
    sourcemap: false,
    //  chunk 大小警告的限制（以 kbs 为单位）
    chunkSizeWarningLimit: 2000,
    // 启用/禁用 gzip 压缩大小报告
    reportCompressedSize: false,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            "src/style/variables.less"
          )}";`,
        },
        math: "strict",
        javascriptEnabled: true,
      },
    },
  },
});

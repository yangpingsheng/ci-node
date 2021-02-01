import express from 'express'
import { addStrNum } from './math'

const logger = require('morgan')

const app = express()

// 配置 WEB 日志
// 开发环境
app.use(logger('dev'))

// Web 路由
app.get('/add', (req, res, next) => {
  const list = req.query.list as string[]

  try {
    if (Array.isArray(list)) {
      const result = addStrNum(list)
      res.send(String(result))
    } else {
      throw new Error('参数 list 必须是一个数组')
    }
  } catch (err) {
    err.status = 400
    throw err
  }
})

// 处理未匹配的路由
app.use((req, res, next) => {
  const err: any = new Error('Not Found')
  err.status = 404
  next(err)
})

// 出错处理
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(err.status || 500)
    res.json({
      error: err.message || JSON.stringify(err),
    })
  }
)

export default app

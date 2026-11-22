import { readFileSync } from 'node:fs'

const DESCRIPTION = '辅助人文社科，重点是法学与管理学的论文精读、批判性阅读和文献综述。用户提出读论文、看 paper、解释这篇文章、总结 arXiv、拆解论证、比较文献、梳理研究现状、找研究空白，或阅读相关专著章节、判决与规范文本时使用。匹配阅读场景，重建论证，建立精确原文索引，解释专业术语，并用论证图、模型图与矩阵辅助理解。'

export const name = 'skill-law-mgmt-paper-reader'
export const inject = ['skills']

export function apply(ctx) {
  const content = readFileSync(new URL('./skill.md', import.meta.url), 'utf8')
  ctx.skills.register({
    name: 'law-mgmt-paper-reader',
    description: DESCRIPTION,
    source: 'bundled',
    content,
  })
}

// EXPORTS: IPath, MOCK_PATHS
export interface IPathService {
  name: string
  desc: string
}

export interface IPath {
  id: string
  /** 编号，用于卡片与明细列展示，如 "01" */
  no: string
  title: string
  tagline: string
  audiences: string[]
  services: IPathService[]
  /** 阶段弹性注脚（仅 biz / org） */
  footnote?: string
  /** 二级官网外链，原样配置，当前窗口打开 */
  url: string
  /** 三列差异化色阶，同属橙黑体系 */
  accent: 'orange' | 'black' | 'cream'
}

export const MOCK_PATHS: IPath[] = [
  {
    id: '1',
    no: '01',
    title: '个人创业者与小团队',
    tagline: '先做一个可以实际试用、也方便后续接手的第一版。',
    audiences: ['个人创业者', '独立顾问', '自由职业者', '小型工作室负责人', '1～5 人团队'],
    services: [
      { name: 'AI 项目诊断', desc: '还不确定先解决什么问题' },
      { name: 'AI 项目共创', desc: '双方共同做出第一版' },
      { name: 'AI 定制实现', desc: '由工作室主导设计、实现与交接' },
      { name: 'AI 实战训练营', desc: '学习方法并亲手完成一个小成果' },
    ],
    url: 'https://fengzhilanai.github.io/solo/',
    accent: 'orange',
  },
  {
    id: '2',
    no: '02',
    title: '中小企业与部门团队',
    tagline: '先验证一个真实的部门场景，再决定是否推广。',
    audiences: ['企业经营者', '部门负责人', '数字化或信息化负责人', 'HR/培训负责人', '部门试点发起人'],
    services: [
      { name: '部门 AI 机会盘点', desc: '形成场景优先级和首个试点建议' },
      { name: '单部门 AI 可控试点', desc: '在有限范围内验证一个真实业务问题' },
      { name: 'AI 运行优化', desc: '根据使用记录持续改善质量、异常、规则、知识和成本' },
    ],
    footnote: '每个阶段都可以独立结束，也可以根据真实试用结果继续、调整或推广。',
    url: 'https://fengzhilanai.github.io/biz/',
    accent: 'black',
  },
  {
    id: '3',
    no: '03',
    title: '政企、园区、协会与高校组织方',
    tagline: '把 AI 项目变成可采购、可实施、可验收的成果。',
    audiences: ['政府与国企项目发起或采购人员', '园区', '协会', '商会', '高校', '企业服务机构和其他组织方'],
    services: [
      { name: 'AI 专题共识会', desc: '围绕明确议题建立共同认知并形成问题清单' },
      { name: '场景梳理与试点方案', desc: '形成场景优先级、责任角色和可立项范围' },
      { name: '岗位 AI 任务实训', desc: '围绕岗位任务形成练习、规范和应用计划' },
      { name: '单场景可控试点', desc: '完成有限范围的试运行、验收、交接和下一步建议' },
    ],
    footnote: '活动、方案、实训和技术试点可以独立采购，不机械包装成一个大项目。',
    url: 'https://fengzhilanai.github.io/org/',
    accent: 'cream',
  },
]
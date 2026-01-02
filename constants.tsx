
import { LogType } from './types';

export const PROVIDER_CREDIT = "乖乖狗幼儿园整理";

export const SENIOR_KNOWLEDGE_BASE = [
  { title: "老年期的定义", content: "8岁是普遍认可的起点。8-12岁为‘初老期’，12岁后被认为进入‘高龄期’或超老期（Super Senior）。", source: "行业专家共识" },
  { title: "衰老速度的体型差异", content: "大型犬衰老比小型犬快。大型犬细胞结构更复杂，代谢更快。伯恩山等大型犬6岁即入老年。", source: "利物浦大学研究" },
  { title: "体型与年龄划分", content: "22.7kg以上犬只6-8岁为老年，9岁高龄；22.7kg以下犬只7-10岁为老年，11岁高龄。", source: "利物浦大学工具包" },
  { title: "人犬年龄换算公式", content: "基于拉布拉多DNA甲基化研究：16 * ln(狗龄) + 31 = 人类年龄。这是目前较科学的对应方式。", source: "Cell Systems (2020)" },
  { title: "认知退化的关键节点", content: "6岁起开始缓慢认知退化，8岁后退化曲线明显下降，行为上开始有显著体现。", source: "匈牙利罗兰大学研究" },
  { title: "生活方式的决定作用", content: "实际年龄是固定的，但‘老’的状态可控。健康饮食和运动能延缓衰老，缺乏锻炼则加速衰老。", source: "专家观点" },
  { title: "利物浦五大健康问题(1)", content: "35%的老年犬面临体重相关问题，包括超重、体重不足或原因不明的体重减轻。", source: "SAVSNET 大数据分析" },
  { title: "利物浦五大健康问题(2)", content: "33%的老年犬有肌肉骨骼问题，如僵硬、行动不便，这是活动量减少的主因。", source: "卡里·韦斯特加斯教授" },
  { title: "利物浦五大健康问题(3)", content: "31%的老年犬受牙科疾病困扰，从牙垢积聚到严重的牙周病，直接影响食欲。", source: "利物浦大学研究" },
  { title: "利物浦五大健康问题(4)", content: "28%的老年犬存在皮肤问题，包括新增肿块、感染或非季节性脱毛。", source: "利物浦大学研究" },
  { title: "利物浦五大健康问题(5)", content: "22%的老年犬有消化系统问题，涵盖频繁呕吐或慢性腹泻等症状。", source: "利物浦大学研究" },
  { title: "疼痛的静默表达", content: "狗狗很少因疼痛吠叫。表现通常是不愿上下车、起身缓慢或舔舐关节部位。", source: "Dr. Marsha Reich (AVMA)" },
  { title: "睡眠紊乱与CDS", content: "白睡晚醒、夜间踱步、焦躁不安是犬认知功能障碍（CDS）即老年痴呆的主要症状。", source: "Journal of Veterinary Behavior" },
  { title: "老年的‘挑食’真相", content: "食欲下降可能源于牙痛或新陈代谢下降。有时是对特定食物过敏导致的自我规避。", source: "饮食行为研究" },
  { title: "排泄行为的改变", content: "15岁以上高龄犬乱大小便发生率极高。首选排查尿失禁、关节痛或认知障碍等生理原因。", source: "老年犬泌尿系统研究" },
  { title: "‘妈宝型’分离焦虑", content: "随着感官退化，对环境掌控力下降，原本独立的狗年老后可能产生强烈的分离焦虑。", source: "Clever Dog Lab (维也纳大学)" },
  // Fix: Fixed typo where 'content' key was replaced with numeric '6'
  { title: "好奇心与解决能力", content: "6岁以上狗的好奇心减弱，解决问题能力下降，对探索新环境的意愿降低。", source: "维也纳大学认知测试" },
  { title: "社交退缩行为", content: "对同类或陌生人兴趣下降与精力下降、感官衰退及慢性疼痛密切相关。", source: "老年犬社交行为研究" },
  { title: "‘越老越叛逆’的误区", content: "听力下降常被误认为不听话。老年犬对负面情绪反应迟钝，反射弧变长。", source: "匈牙利罗兰大学" },
  { title: "攻击性变强的信号", content: "攻击行为复杂化：感官退化导致易受惊吓，或因慢性疼痛导致防御性增强。", source: "行为学研究" },
  { title: "运动建议：少而精", content: "老年犬不再热衷高强度运动，应转向低冲击、增加嗅闻活动的散步方式。", source: "Dog Aging Project" },
  { title: "保险购买的‘金标准’", content: "多数保险10岁后禁购。7岁后应定期进行生化和尿检，预防胜于治疗。", source: "保险精算数据" },
];

export const LOG_TYPE_CONFIG = {
  [LogType.VET]: { label: '兽医检查', color: 'bg-blue-100 text-blue-700', icon: '🏥' },
  [LogType.WEIGHT]: { label: '体重记录', color: 'bg-green-100 text-green-700', icon: '⚖️' },
  [LogType.BEHAVIOR]: { label: '异常行为', color: 'bg-orange-100 text-orange-700', icon: '🐕' },
  [LogType.MEDICATION]: { label: '用药提醒', color: 'bg-purple-100 text-purple-700', icon: '💊' },
  [LogType.NOTE]: { label: '日常笔记', color: 'bg-stone-100 text-stone-700', icon: '📝' },
};

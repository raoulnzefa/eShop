// 该文件配置了页面的layout，比如是否显示footbar等。
// 正常显示，比如topbar，footbar均显示，则可以不配置。
// pageId === routeName
// {
//    pageId: {}
// }
//
const layoutDef = {title: '', showTop: true, showFoot: true, rightCmp: ''}

const layoutConfig = {
  home: {title: '首页'},
  shop: {title: '商城', showTop: true, rightCmp: 'barLink'},
  member: {title: '会员中心', showTop: true, showFoot: true}
}

const pageInfo = (pageId) => {
  return {...layoutDef, ...layoutConfig[pageId] || {}}
}

export default pageInfo
export { layoutConfig }

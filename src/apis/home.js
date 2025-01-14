import httpInstance from '@/utils/http'

//获取banner

export function getBannerAPI(){
  return httpInstance({
    url:'/home/banner'
  })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @returns {*}
 */
export const findNewAPI = () =>{
  return httpInstance({
    url:'/home/new'
  })
}


/**
 * @description: 获取人气推荐
 * @param {*}
 * @returns {*}
 */
export const findHotAPI = () =>{
  return httpInstance({
    url:'/home/hot'
  })
}


/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}

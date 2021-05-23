import { ISkill } from "@/utils/interface"
import { request } from "umi"
export let getLabel = ()=>{
    return request('/sxpt/station/selectStationLabel')
}

//获取选中的岗位列表
export let getSkillList = (params:ISkill)=>{
    return request('/sxpt/station/selectStationVersionList',{params})
}

export let getDetail = (params:ISkill)=>{
    return request('/sxpt/station/selectStationVersionList',{params})
}

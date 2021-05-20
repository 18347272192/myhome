import React, { useEffect,useState } from 'react';
import {getLabel, getSkillList} from '@/services/index';
import {IShillIt, ISkill, ISLabel} from '@/utils/interface';
import {Table} from 'antd';
const status = ['全部','草稿','已发布','待审核','已驳回'];
const columns = [
    {
        title:'岗位名称',
        dataIndex:'name',
        key:'name'
    },
    {
        title:'专业',
        dataIndex:'majorName',
        key:'majorName'
    },
    {
        title:'版本号',
        dataIndex:'start',
        key:'start'
    },
    {
        title:'版本号',
        dataIndex:'start',
        key:'start'
    },
    {
        title:'版本号',
        dataIndex:'start',
        key:'start'
    },
]
const PostSkill:React.FC = props=>{
    let [skillLabe,setSkillLabel] = useState<ISLabel []>([]);
    let [queryParams,setQueryParams] = useState<ISkill>({isAsc:'desc',pageNum:1,pageSize:10,isMyInfo:false} as ISkill)
    let [curSkill,setCurSkill] = useState(' ');
    const [cat, cont] = useState<IShillIt[]>([])
    let [curState,setCurStatus] = useState(0);
    //发起请求获取专业标签
    useEffect(()=>{
    getLabel().then(ok=>{
        console.log('ok...',ok);
        if(ok.code==200){
            setSkillLabel(ok.data)
        }

    })
    getSkillList(queryParams).then(ok=>{
        console.log('rgistList...',ok);
        if(ok.code==200){
            cont(ok.rows) 
        }
    })
    },[])

    //发起请求获取项目列表
    useEffect(()=>{
        // let queryParams:ISkill = {} as ISkill;
        // if(curState){
        // queryParams = {...queryParams,majorId:curSkill,status:curState}
        // }else{
        // queryParams = {...queryParams,majorId:curSkill,status:'' as unknown as number}
        // }
       
    },[curSkill,curState])
    return <div>
    <section>
        <section>
            <span>专业:</span>
            <ul>
                <span>全部</span>
                {skillLabe.map((item,index)=>{
                    return <span className={item.id===curSkill?'active':''} onClick={e=>setCurSkill(item.id)} key={item.id}>{item.name}</span>
                })}
            </ul>
        </section>
        <section>
            <span>状态</span>
            <ul>
                <span>全部</span>
                {
                    status.map((item,index)=>{
                        return <span className={index===curState?'active':''} onClick={(e=>setCurStatus(index))} key={item}>{item}</span>
                    })
                }
            </ul>
        </section>
    </section>
    <Table rowKey='stationId' dataSource={cat} columns={columns}></Table>
    </div>
}
export default PostSkill
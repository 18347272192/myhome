import React, { useEffect,useState } from 'react';
import {getLabel, getSkillList} from '@/services/index';
import {IShillIt, ISkill, ISLabel} from '@/utils/interface';
import {Table,Input,Button} from 'antd';
import {Link} from 'umi';
import './index2.less';
import styles from './postSkill.less';
import {
    DeleteOutlined,
    ArrowLeftOutlined ,
  } from '@ant-design/icons';
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
        dataIndex:'stationVersion',
        key:'stationVersion'
    },
    {
        title:'技能数量',
        dataIndex:'skillNum',
        key:'skillNum'
    },
    {
       title:'作者',
       dataIndex:'userName',
    },
    {
        title:'发起时间',
       dataIndex:'createTime',
    },
    {
        title:'状态',
        dataIndex:'status',
        key:'status'
    },
    {
        title:'状态',
        render:(row:IShillIt)=><span className={styles[`status${row.status}`]}>{status[Number(row.status)]}</span>
    },
    {
        title:'操作',
        render:(row:IShillIt)=>{
            if(row.status==='3'){
                return <div className={styles.active}>
                    <ArrowLeftOutlined/>
                </div>
            }else if(row.status==='1'){
                return <div className={styles.active}>
                     <DeleteOutlined/>
                </div>
            }
        }
    }
]
const PostSkill:React.FC = props=>{
    let [skillLabe,setSkillLabel] = useState<ISLabel []>([]);
    let [queryParams,setQueryParams] = useState<ISkill>({isAsc:'desc',pageNum:1,pageSize:10,isMyInfo:false} as ISkill)
    let [curSkill,setCurSkill] = useState('');
    const [dataSource, cont] = useState<IShillIt[]>([])
    let [curState,setCurStatus] = useState(0);
    let [isMyinfo,setMyinfo] = useState(false);
    let [searchTitle,setSearchTitle] = useState('');
    //发起请求获取专业标签
    useEffect(()=>{
    getLabel().then(ok=>{
        console.log('ok...',ok);
        if(ok.code==200){
            setSkillLabel(ok.data)
        }

    })

    },[])

    

    //发起请求获取项目列表
    useEffect(()=>{
        let queryParams:ISkill = {} as ISkill;
        if(curState){
        queryParams = {...queryParams,searchTitle, majorId:curSkill,status:curState}
        }else{
        queryParams = {...queryParams,searchTitle,majorId:curSkill,status:'' as unknown as number}
        }
        getSkillList(queryParams).then(ok=>{
            console.log('rgistList...',ok);
            if(ok.code==200){
                cont(ok.rows) 
            }
        })
       
    },[curSkill,curState,isMyinfo,searchTitle])

    
    return <div>
    <section>
        <section>
            <h3>专业:</h3>
            <ul className='uu'>
                <span>全部</span>
                {skillLabe.map((item,index)=>{
                    return <span className={item.id===curSkill?'active':'' } onClick={e=>setCurSkill(item.id)} key={item.id}>{item.name}</span>
                })}
            </ul>
        </section>
        <section>
            <h3>状态</h3>
            <ul>
                {
                    status.map((item,index)=>{
                        return <span className={index===curState?'active':''} onClick={(e=>setCurStatus(index))} key={item}>{item}</span>
                    })
                }
            </ul>
        </section>
    </section>
    <section>
        <input type="checkbox" checked={isMyinfo} onChange={e=>setMyinfo(e.target.checked)}/>只看我的
        <Input placeholder='搜索岗位' className={styles.inp} onClick={()=>{setSearchTitle(searchTitle)}} value={searchTitle} onChange={e=>setSearchTitle(e.target.value)} onKeyDown={e=>{
            if(e.keyCode===13){
                setSearchTitle(searchTitle)
            }
        }}/>
        <Link to='/teachers/addPostSkill?see=false'>
        <Button type='primary'><b>添加岗位</b></Button>
        </Link>
        
    </section>
    <Table rowKey='stationId' dataSource={dataSource} columns={columns}></Table>
    </div>
}
export default PostSkill